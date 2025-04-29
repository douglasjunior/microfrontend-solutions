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

function renderRoute(route: RemoteRouteType, index: number, basename?: string) {
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

export const renderRoutes = (routes: RemoteRouteType[], basename?: string) => {
  return (
    routes.map((route, index) => renderRoute(route, index, basename))
  )
};
