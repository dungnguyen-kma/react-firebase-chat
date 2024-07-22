import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Nofication() {
  return (
    <div className="">
      <ToastContainer position="bottom-right" limit={3} autoClose={3000} />
    </div>
  );
}

export default Nofication;
