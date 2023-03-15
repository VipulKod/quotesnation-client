import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const SuccessNotification = ({ successMessage }) => {
  toast.success(successMessage);

  return (
    <>
      <ToastContainer
        autoClose={3000}
        position="top-center"
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
};
