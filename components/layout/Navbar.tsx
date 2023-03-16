import React, { useEffect, useState } from "react";
import Link from "next/link";
import isAuthenticated from "@/utils/auth";
import CreateQuote from "../feature/quote/create/CreateQuote";
import Avatar from "../ui/avatar/Avatar";
import HamburgerMenu from "../ui/hamburger_menu/HamburgerMenu";
import { useMediaQuery } from "@react-hook/media-query";

export const Navbar = (context) => {
  const [checkAuth, setCheckAuth] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    console.log(isAuthenticated());
    if (isAuthenticated()) {
      setCheckAuth(true);
    } else {
      setCheckAuth(false);
    }
  }, [isAuthenticated()]);

  return (
    <>
      <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        <h1 className="nav w-3/12 font-bold text-xl p-3">
          <Link href="/">Quotesnation</Link>
        </h1>
        {!checkAuth ? (
          !isMobile ? (
            <nav className="nav font-semibold text-lg">
              <ul className="flex items-center">
                <li className="p-4 border-b-2 border-black border-opacity-0 hover:border-opacity-100 hover:text-indigo-500 duration-200 cursor-pointer active">
                  <Link href="/">Home</Link>
                </li>
                <li className="p-4 border-b-2 border-black border-opacity-0 hover:border-opacity-100 hover:text-indigo-500 duration-200 cursor-pointer">
                  <Link href="/about">About</Link>
                </li>
                <li className="p-4 border-b-2 border-black border-opacity-0 hover:border-opacity-100 hover:text-indigo-500 duration-200 cursor-pointer">
                  <Link href="/login">Login</Link>
                </li>
                <li className="p-4 border-b-2 border-black border-opacity-0 hover:border-opacity-100 hover:text-indigo-500 duration-200 cursor-pointer">
                  <Link href="/register">Register</Link>
                </li>
              </ul>
            </nav>
          ) : (
            <HamburgerMenu />
          )
        ) : (
          <nav className="nav font-semibold text-lg p-2">
            {!isMobile ? (
              <ul className="flex items-center">
                <li>
                  <CreateQuote />
                </li>
                <li className="mx-2">
                  <Avatar />
                </li>
              </ul>
            ) : (
              <HamburgerMenu />
            )}
          </nav>
        )}
      </header>
    </>
  );
};
