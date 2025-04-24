import { Suspense } from "react";
import { Outlet, NavLink } from "react-router";

const Template = () => (
  <div>
    <menu>
      <li>
        <NavLink to='/'>Remote 1 Home</NavLink>
      </li>
      <li>
        <NavLink to="/counter">Remote 1 Counter</NavLink>
      </li>
    </menu>
    <Suspense>
      <Outlet />
    </Suspense>
  </div>
);

export default Template;
