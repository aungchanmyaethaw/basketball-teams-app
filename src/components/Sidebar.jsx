import React from "react";
import { useLocation, Link } from "react-router-dom";
import { slugify } from "../utils";
const Sidebar = ({ title, lists }) => {
  return (
    <aside style={{ marginTop: "2em", minWidth: "15em" }}>
      <h2 className="header">{title}</h2>
      <ul className="sidebar-list">
        {lists.map((list) => (
          <CustomLink to={slugify(list)} key={list}>
            {list}
          </CustomLink>
        ))}
      </ul>
    </aside>
  );
};

function CustomLink({ to, children }) {
  const location = useLocation();

  const tempArray = location.pathname.split("/");
  const lastQuery = tempArray[tempArray.length - 1];

  const isMatch = lastQuery === to;

  return (
    <Link
      to={to}
      className={isMatch ? "active" : null}
      style={{ textTransform: "capitalize" }}
    >
      {children}
    </Link>
  );
}

export default Sidebar;
