import React from "react";
import Warper from "./Warper";
import Popup from "reactjs-popup";
import CV from "../assets/CV.jpg";
import "../pages/Portfolio.css";



const CustomModal = () => (
  <Popup
    trigger={<button className="button"> Display my Resume </button>}
    modal
  
  >
    {(close) => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
       
        <div className="content">
          <img
            className="cv"
            src={CV}
            height="30%"
            width="30%"
            alt="CV"
            zoom="1,5"
          />
        </div>
      </div>
    )}
  </Popup>
);

export default Warper(CustomModal);
