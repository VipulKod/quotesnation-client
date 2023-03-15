import { useState, useEffect, useRef } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(true);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
        console.log(isOpen);
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <button onClick={() => {
        setIsOpen(!isOpen);
      }}>Toggle Menu</button>
      <div ref={menuRef} className={`menu ${isOpen ? "block" : "hidden"}`}>
        <a href="#" className="menu-item">
          Item 1
        </a>
        <a href="#" className="menu-item">
          Item 2
        </a>
      </div>
    </>
  );
}
