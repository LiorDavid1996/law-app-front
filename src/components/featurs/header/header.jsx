import React from "react";
import "./header.css";
import LawSubjects from "../law-subjects/law-subjects";
import Navbar from "../navbar/navbar";
const Header = () => {
  return (
    <div className="header">
      <div>
        <Navbar />
      </div>
      {/* <div className="mt-2">
        <LawSubjects />
      </div> */}
    </div>
  );
};

export default Header;
