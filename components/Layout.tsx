import React from "react";
import { Navbar } from "./layout/Navbar";
import { ErrorNotification } from "./ui/error_notif/ErrorNotification";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
