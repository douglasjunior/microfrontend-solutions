import { lazy } from "react";

import Template from "./Template";

const HomePage = lazy(() => import('./HomePage'));
const CounterPage = lazy(() => import('./CounterPage'));

export const basename = '/remote-app-1';

export const routes = [
  {
    element: <Template />,
    path: '/',
    children: [
      {
        path: '/',
        Component: HomePage,
        index: true,
      },
      {
        path: '/counter',
        Component: CounterPage,
      }
    ],
  }
];
