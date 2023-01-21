import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#hr-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-menu-button-wide"></i>
              <span>HR</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="hr-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to="/employees/create">
                  <i className="bi bi-circle"></i>
                  <span>New Employee</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/employees">
                  <i className="bi bi-circle"></i>
                  <span>Employee List</span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  );
}
export default NavBar;
