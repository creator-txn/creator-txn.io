"use client";

// Importing React and necessary hooks from 'react' module
import React, { useState, useEffect } from "react";

// Functional component named 'ThemeToggle'
export default function ThemeToggle() {

  // State variable 'isLightMode' and its setter function 'setIsLightMode'
  const [isLightMode, setIsLightMode] = useState(false);

  // useEffect hook for handling theme toggling logic
  useEffect(() => {
    // Function to toggle the theme
    const toggleTheme = (newTheme: string) => {
      // Set the 'data-theme' attribute of the root HTML element
      document.documentElement.setAttribute("data-theme", newTheme);
      // Update the state based on the new theme
      setIsLightMode(newTheme === "dark");
      // Store the theme preference in local storage
      localStorage.setItem("theme", newTheme);
    };

    // Check local storage for the theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) { // If a preference is found, toggle the theme accordingly
      toggleTheme(savedTheme);
    } else {
      // If no preference is found in local storage, set the default theme to light
      toggleTheme("light");
    };

    // Get the checkbox element by name
    const checkbox = document.querySelector("input[name=theme]");

    // Function to add and remove transition class for smooth theme transitions
    const trans = () => {
      document.documentElement.classList.add("transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 1000);
    };

    // Event listener for checkbox change
    // @ts-ignore
    checkbox.addEventListener("change",  () => {
      // @ts-ignore
      if (checkbox.checked) { // If checkbox is checked, toggle to dark theme; 
        trans(); 
        toggleTheme("dark");
      } else { // otherwise, toggle to light theme
        trans();
        toggleTheme("light");
      }
    });

    // Cleanup function to remove the event listener
    return () => {
      // @ts-ignore
      checkbox.removeEventListener("change", () => {});
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render


  // JSX for the component, a toggle switch with a label
  return (
    <div className="toggle-switch__container">
      <input type="checkbox" id="switch" name="theme" />
      <label htmlFor="switch">Theme Toggle</label>
    </div>
  );
}