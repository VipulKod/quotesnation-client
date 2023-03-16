import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";

const Avatar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const divRef = useRef(null);
  const router = useRouter();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="relative">
      <button
        className="bg-black hover:bg-gray-800 shadow-xl text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
        onClick={toggleMenu}
      >
        <span className="text-lg font-bold">A</span>
      </button>
      {menuOpen && (
        <div
          ref={divRef}
          className="absolute hover:cursor-pointer top-12 my-2 right-0 w-48 bg-white rounded-lg shadow-lg z-10"
        >
          <ul className="divide-y divide-gray-200">
            {/* <li className="flex items-center p-3 rounded-lg hover:text-white hover:bg-black">
              <CgProfile />
              <h5 className="px-1">Profile</h5>
            </li> */}
            <li
              onClick={logout}
              className="flex items-center p-3 rounded-lg hover:text-white hover:bg-black"
            >
              <GoSignOut />
              <h5 className="px-1">Sign Out</h5>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Avatar;
