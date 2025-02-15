import React from "react";
import images from "../images";
import Navbar from "../../components/Navbar";

function Certificates() {
  return (
    <div>
      <Navbar />
      <div className="w-[100%] gap-10 h-[100%] flex justify-evenly items-center">
        <img
          className="w-[25%]"
          src={images.tatacertificate}
          alt="Tata NQT ion Certificate"
        />

        <img
          className="w-[25%]"
          src={images.BCAcertificate}
          alt="BCA Certificate"
        />
      </div>
    </div>
  );
}
export default Certificates;
