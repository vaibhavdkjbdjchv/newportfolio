import React from "react";
import images from "../images";

function Certificates() {
  return (
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
  );
}
export default Certificates;
