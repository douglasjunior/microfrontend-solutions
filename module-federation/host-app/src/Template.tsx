import { Suspense } from "react";
import { Outlet, NavLink } from "react-router";

const Template = () => (
  <div>
    <menu>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/remote-app-1">Remote 1</NavLink>
      </li>
    </menu>
    <Suspense>
      <Outlet />
    </Suspense>
  </div>
);

export default Template;
