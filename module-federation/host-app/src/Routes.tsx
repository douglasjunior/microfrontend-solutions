import { lazy, useMemo } from "react";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router";
import Template from "./Template";
import { Content as RemoteAppContent, basename as remoteAppBaseName } from '@remote-app';

const HomePage = lazy(() => import('./HomePage'));

const routes: RouteObject[] = [
  {
    element: <Template />,
    children: [
      {
        path: '/',
        children: [
          {
            path: '/',
            Component: HomePage,
            index: true,
          },
          {
            path: remoteAppBaseName,
            Component: RemoteAppContent,
          }
        ],
      },
    ],
  }
];

const Routes = () => {
  const browserRouter = useMemo(() => createBrowserRouter(routes), []);
  return (
    <RouterProvider router={browserRouter} />
  );
};

export default Routes;
