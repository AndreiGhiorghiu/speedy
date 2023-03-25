import type { ReactNode, MutableRefObject, Dispatch } from 'react';
import React, { createContext } from 'react';
import { useReducer, useEffect, useRef, useContext } from 'react';

interface SlotAction {
  type: 'ADD' | 'REMOVE';
  name: string;
  ref: FillRef;
}

interface SlotState {
  [key: string]: FillRef[];
}

interface Slot<T = any | any[]> {
  name: string;
  children?: ReactNode;
  render?: (data: T) => JSX.Element | JSX.Element[] | null;
  overwrite?: boolean;
  order?: number;
}

interface Fill {
  slot: string;
  children?: ReactNode;
  data?: any;
  overwrite?: boolean;
  order?: number;
}

interface FillContent {
  order: number;
  content: ReactNode;
  overwrite?: boolean;
  data?: any[];
}

type FillRef = MutableRefObject<FillContent | undefined>;

const noop = (() => void 0) as Dispatch<SlotAction>;
const byOrder = (a: FillContent, b: FillContent) =>
  a.order >= b.order ? 1 : -1;
const ContextState = createContext<SlotState>({} as SlotState);
const ContextDispatch = createContext<Dispatch<SlotAction>>(noop);

function reducer(previous: SlotState, { type, name, ref }: SlotAction) {
  const state = { ...previous };

  if (type === 'ADD') {
    state[name] = [...(state[name] || []), ref];
  } else if (type === 'REMOVE') {
    state[name] = state[name].filter((item) => item != ref);
  }

  return state;
}

function Slot({ children, render, name, overwrite, order = 1 }: Slot) {
  const state = useContext(ContextState);
  const refs = state[name];
  const fills = (refs || []).map((ref) => ref.current) as FillContent[];
  const contentOverwite = fills.reverse().find((ref) => ref.overwrite);

  if (render) {
    if (contentOverwite) return <>{render(contentOverwite)}</>;

    const sorted = fills.sort(byOrder);
    const content = sorted.map((item) => render(item.data));

    return <>{content}</>;
  } else {
    if (children != null && (!overwrite || !fills.length)) {
      fills.push({ order, content: children });
    }

    if (contentOverwite) return <>{contentOverwite.content}</>;

    const sorted = fills.sort(byOrder);
    const content = sorted.map((item) => item.content);

    return <>{content}</>;
  }
}

function Fill({ children, slot, data, overwrite, order = 1 }: Fill) {
  const dispatch = useContext(ContextDispatch);
  const ref = useRef<FillContent>();

  useEffect(() => {
    ref.current = { order, data, overwrite, content: children };
    dispatch({ ref, type: 'ADD', name: slot });
    return () => dispatch({ ref, type: 'REMOVE', name: slot });
  }, [slot, data, order, children]);

  return null;
}

const initialState: SlotState = {};

function Provider(props: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextDispatch.Provider value={dispatch}>
      <ContextState.Provider value={state}>
        {props.children}
      </ContextState.Provider>
    </ContextDispatch.Provider>
  );
}

Slot.Provider = Provider;
Slot.Fill = Fill;

export { Provider, Slot, Fill };
export default Slot;
