import { useState } from "react"; // import state
import { Transition } from "@headlessui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdMenuBook } from "react-icons/md";

export default function HamburgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };
  return (
    <>
      {!showDiv ? (
        <MdMenuBook
          className="ml-2 inline-block"
          size={30}
          onClick={handleClick}
        />
      ) : (
        <></>
      )}
      <Transition
        show={showDiv}
        enter="transition duration-500 ease-in-out transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-10"
      >
        <div className="fixed top-0 left-0 w-4/5 h-screen bg-black text-white">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-3xl p-3 text-center">Quotes Nation</h1>
            </div>
            <div>
              <ul className="text-center">
                <li>Link-1</li>
                <li>Link-2</li>
                <li>Link-3</li>
              </ul>
            </div>
            <div className="p-4 mx-auto">
              <AiFillCloseCircle
                size={50}
                onClick={handleClick}
                className="text-red-600"
              />
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
