import React, { useEffect } from "react";
import Link from "next/link";
import isAuthenticated from "@/utils/auth";
import Dropdown from "../ui/dropdown/Dropdown";
import Modal from "../ui/modal/Modal";
import Quote from "../feature/quote/Quote";

export const Navbar = () => {
  useEffect(() => {
    console.log(isAuthenticated());
  });

  return (
    <>
      <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        <h1 className="nav w-3/12 font-semibold text-lg">
          <Link href="/">Quotesnation</Link>
        </h1>
        {!isAuthenticated ? (
          <nav className="nav font-semibold text-lg">
            <ul className="flex items-center">
              <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <Link href="/about">About</Link>
              </li>
              <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <Link href="/login">Login</Link>
              </li>
              <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <Link href="/register">Register</Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="nav font-semibold text-lg">
            <ul className="flex items-center">
              <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                <Link href="#">Create Quote</Link>
              </li>
              <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <Link href="#">Profile</Link>
              </li>
              <li>
                <Quote />
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
