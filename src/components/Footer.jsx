import React from "react";

export const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <p>copyright {date.getFullYear()}</p>
    </footer>
  );
};
