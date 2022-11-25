import React from "react";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <section className="Header">
        <nav>
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </nav>
        <Outlet />
      </section>
    </>
  );
};

export default Header;
