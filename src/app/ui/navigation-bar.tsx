"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const NavigationBar = () => {

  const brand = "CREATOR TXN";

  /* Bootstrap JS w/ UseEffect() | Staging */
  useEffect(() => { import("bootstrap/dist/js/bootstrap" as string); }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid m-3">
        <Link className="navbar-brand d-block-inline" href="/">
          <div className="d-flex align-items-center">
            <span>&#x1F680;</span>
            <span className="fw-bold mx-1">{brand}</span>
            <span className="badge theme mx-2">Beta</span>
          </div>
        </Link>
        <button 
          className="navbar-toggler collapsed d-flex flex-column justify-content-around"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleNavigationBar"
          aria-controls="toggleNavigationBar"
          aria-expanded="false"
          aria-label="toggle navigation"
        > 
          <span className="navigation-toggler-icon__container top__bar d-lg-none"></span>
          <span className="navigation-toggler-icon__container mid__bar d-lg-none"></span>
          <span className="navigation-toggler-icon__container low__bar d-lg-none"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleNavigationBar">
          <ul className="navbar-nav text-uppercase">
            <li className="nav-item mt-3 mt-md-0">
              <Link 
                className="nav-link active" 
                aria-current="page" 
                href="/"
              > home
              </Link>
            </li>
            {/* Light/Dark Theme Toggler */}
            <ThemeToggle />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;