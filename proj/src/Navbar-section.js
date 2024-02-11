import { NavLink } from "react-router-dom";

export default function Tabs({ title, path }) {
  return (
    <NavLink to={path} className="Navbar-container" activeClassName="active">
      {title}
    </NavLink>
  );
}
