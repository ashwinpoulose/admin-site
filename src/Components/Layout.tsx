import React, { ReactNode } from "react";
import Navbar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
