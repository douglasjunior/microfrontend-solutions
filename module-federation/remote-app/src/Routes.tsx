import { lazy, useMemo } from "react";
import { createBrowserRouter, RouteObject, RouterProvider, } from "react-router";
import Template from "./Template";

const HomePage = lazy(() => import('./HomePage'));
const CounterPage = lazy(() => import('./CounterPage')); 

const routes: RouteObject[] = [
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

export const BASE_NAME = '/remote-app-1';

const Routes = () => {
  const browserRouter = useMemo(() => createBrowserRouter(routes, { basename: BASE_NAME }), []);
  return (
    <RouterProvider router={browserRouter} />
  );
};

export default Routes;
