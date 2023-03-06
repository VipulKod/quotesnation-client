import React from "react";
import { Navbar } from "./layout/Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
