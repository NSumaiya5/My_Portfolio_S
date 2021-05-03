import React from "react";
import Slide1 from "../../assets/img/carousal/c3.jpg";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
     
          <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
       
    </div>
  );
};

export default MyCarousal;
