// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('is_dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('is_dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  return (
    <div className="mode_switcher my_switcher">
      <button
        id="light--to-dark-button"
        className={`light align-items-center ${isDark ? 'dark' : ''}`}
        onClick={toggleTheme}
      >
        {/* Dark Mode Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`ionicon dark__mode ${isDark ? 'active' : ''}`}
          viewBox="0 0 512 512"
          width="20"
          height="20"
        >
          <path
            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>

        {/* Light Mode Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`ionicon light__mode ${!isDark ? 'active' : ''}`}
          viewBox="0 0 512 512"
          width="20"
          height="20"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
          />
          <circle
            cx="256"
            cy="256"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
        </svg>

        <span className="light__mode">Light</span>
        <span className="dark__mode">Dark</span>
      </button>
    </div>
  );
};

export default ThemeToggle;