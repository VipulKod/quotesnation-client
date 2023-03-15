import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

function Modal(props) {
  const { isOpen, children, title } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    closeModal();
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {!isModalOpen ? (
        <></>
      ) : (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex justify-between font-semibold text-slate-500">
                <h4 className="text-2xl">{title}</h4>
                <CgClose
                  className="cursor-pointer"
                  size={20}
                  onClick={closeModal}
                />
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>
    </>
  );
}

export default Modal;
