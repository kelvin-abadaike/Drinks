import React from "react";
import Navbar from "./Navbar";
import BannerContent1 from "./BannerContent1";
import BannerContent2 from "./BannerContent2";

const Header = (props) => {
  return (
    <div className="md:h-screen w-full bg-cover object-cover relative" style={{ backgroundImage: "url('/assets/img/Head.png')" }}>
      <div
        className={"z-10 w-full top-0 "}
        style={{ backgroundColor: "#eeeeee00" }}
      >
        <div className={"container mx-auto "}>
          <Navbar />
          <BannerContent1 />
          <BannerContent2 />
        </div>
      </div>
    </div>
  );
};

export default Header;
