import React from "react";

const Buttons = (props) => {
   return (
      <div className="buttons-container">
         <button className="center-circle">
            <h2>Select</h2>
         </button>

         <button className="menu-button">
            <i className="fa-solid fa-bars"></i>
         </button>

         <button className="left-button">
           <i className="fa-solid fa-backward"></i>
         </button>

         <button className="right-button">
           <i className="fa-solid fa-forward"></i>
         </button>
         
         <button className="play-pause">
            <i className="fa-solid fa-play"></i> /
            <i className="fa-solid fa-pause"></i>
         </button>
      
      
      </div>
   )
}

export default Buttons;