import { Route, RouteObject } from "react-router";
import urlJoin from "url-join";

export type RemoteRouteType = Pick<RouteObject,
  'caseSensitive' |
  'path' |
  'id' |
  'loader' |
  'action' |
  'hasErrorBoundary' |
  'shouldRevalidate' |
  'handle' |
  'element' |
  'hydrateFallbackElement' |
  'errorElement' |
  'Component' |
  'HydrateFallback' |
  'ErrorBoundary' |
  'index'
> & {
  children?: RemoteRouteType[]
};

function renderRoute(route: RemoteRouteType, index: number, basename?: string): JSX.Element {
  const { index: routeIndex, children, path, ...others } = route;
  const routePath = path && basename ? urlJoin(basename, path) : path;
  if (routeIndex) {
    return (
      <Route
        key={index}
        index
        path={routePath}
        {...others}
      />
    )
  }
  return (
    <Route
      key={index}
      index={undefined}
      path={routePath}
      children={children?.map((r, i) => renderRoute(r, i, basename))}
      {...others}
    />
  )
}

export const renderRoutes = (routes: RemoteRouteType[], basename?: string): JSX.Element[] => {
  return (
    routes.map((route, index) => renderRoute(route, index, basename))
  )
};

export const mapRoutesToBasename = (routes: RemoteRouteType[], basename: string): RemoteRouteType[] => {
  return routes.map((route) => {
    if (route.path) {
      return {
        ...route,
        path: urlJoin(basename, route.path),
        children: route.children && mapRoutesToBasename(route.children, basename)
      }
    }
    return {
      ...route,
      children: route.children && mapRoutesToBasename(route.children, basename)
    };
  })
}
