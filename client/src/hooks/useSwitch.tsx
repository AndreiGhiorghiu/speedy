import { useState, useMemo } from 'react';

export default function useSwitch(initial: boolean = false) {
  const [state, setState] = useState(initial);

  const api = useMemo(
    () => ({
      on: () => setState(true),
      off: () => setState(false),
      toggle: () => setState((isOn) => !isOn),
      reset: () => setState(initial),
    }),
    [initial]
  );

  return [state, api] as [boolean, typeof api];
}
