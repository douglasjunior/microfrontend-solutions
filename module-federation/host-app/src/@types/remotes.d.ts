/* Declare here all remote modules */

type RoutesType = import('../utils').RemoteRouteType[]

declare module "@remote-app-1" {
  export const routes: RoutesType;
  export const basename: string;
};
