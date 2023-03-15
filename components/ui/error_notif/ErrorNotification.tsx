import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ErrorNotification = ({
  errorMessage,
  handleNotificationClose,
}) => {
  toast.error(errorMessage, {
    onClose: handleNotificationClose,
  });

  return (
    <>
      <ToastContainer
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
