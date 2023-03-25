import Home from '$pages/Home';

export type PrivateRoutePath = keyof typeof privateRoutes;

export const publicDefault = '/';
export const privateDefault = '/';

export const publicRoutes: {
    [key: string]: {component: React.FunctionComponent; guard: string[]};
} = {
    '/': {component: Home, guard: []},
};

export const privateRoutes: {
    [key: string]: {component: React.FunctionComponent; guard: string[]};
} = {};
