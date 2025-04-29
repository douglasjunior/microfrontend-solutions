import { Suspense } from "react";
import { Outlet, NavLink } from "react-router";
import urlJoin from "url-join";
import { basename } from "./Routes";

const Template = () => (
  <div>
    <menu>
      <li>
        <NavLink to={urlJoin(basename, '/')}>Remote 1 Home</NavLink>
      </li>
      <li>
        <NavLink to={urlJoin(basename, "/counter")}>Remote 1 Counter</NavLink>
      </li>
    </menu>
    <Suspense>
      <Outlet />
    </Suspense>
  </div>
);

export default Template;
