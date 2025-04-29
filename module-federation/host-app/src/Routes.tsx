import { lazy } from "react";

import { routes as remoteAppRoutes, basename as remoteAppBaseName } from '@remote-app-1';

import Template from "./Template";
import { mapRoutesToBasename, renderRoutes } from "./utils";

const HomePage = lazy(() => import('./HomePage'));

export const routes = renderRoutes([
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
            children: mapRoutesToBasename(remoteAppRoutes, remoteAppBaseName),
          }
        ],
      },
    ],
  }
]);
