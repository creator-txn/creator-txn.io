"use client"; // Import as a client component (not server!)

/* REACT | React + useEffect() */
import React, { useEffect } from "react";
/* NEXT FEATURE | Link */
import Link from "next/link";
/* USER INTERFACE | Theme Toggle */
import ThemeToggle from "./theme-toggle";

// Define the NavigationBar functional component
const NavigationBar = () => {

  // Define the brand name for the navigation bar
  const brand = "CREATOR TXN";

  /* Bootstrap JS w/ UseEffect() | Staging */
  // Use the useEffect hook to asynchronously load Bootstrap JS when the component mounts
  useEffect(() => { import("bootstrap/dist/js/bootstrap" as string); }, []);

  // Render the navigation bar component
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid m-3">
        {/* Create a link to the home page with the brand name and beta badge */}
        <Link className="navbar-brand d-block-inline" href="/">
          <div className="d-flex align-items-center">
            <span>&#x1F680;</span>
            <span className="fw-bold mx-1">{brand}</span>
            <span className="badge theme mx-2">Beta</span>
          </div>
        </Link>
        {/* Create a button for toggling the navigation bar on smaller screens */}
        <button 
          className="navbar-toggler collapsed d-flex flex-column justify-content-around"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleNavigationBar"
          aria-controls="toggleNavigationBar"
          aria-expanded="false"
          aria-label="toggle navigation"
        > 
          {/* Create spans for the navigation bar toggler icon on smaller screens */}
          <span className="navigation-toggler-icon__container top__bar d-lg-none"></span>
          <span className="navigation-toggler-icon__container mid__bar d-lg-none"></span>
          <span className="navigation-toggler-icon__container low__bar d-lg-none"></span>
        </button>
        {/* Create the collapsible navigation bar */}
        <div className="collapse navbar-collapse" id="toggleNavigationBar">
          <ul className="navbar-nav text-uppercase">
            {/* Create navigation links for the home and blogs pages */}
            <li className="nav-item mt-3 mt-md-0">
              <Link 
                className="nav-link active" 
                aria-current="page" 
                href="/"
              > home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/blogs">blogs</Link>
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