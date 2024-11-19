import React from "react";
import "./Navbar.css";

    
const Navbar = () => {
  return (
    <>
      <header>
         <nav>
            <div className="logo"><img src="https://avatars.mds.yandex.net/get-lpc/10116223/6dca177f-7152-45f8-a8ce-ef7feed079ea/orig" alt="" className="image"/></div>
            <div className="navbar-links">
               <button className="btn">Скачать</button>
            </div>
         </nav>
         <div className="header-image">
          <img src="https://avatars.mds.yandex.net/get-lpc/12373972/c722b4df-afb7-4b87-be73-d3eb2b953b13/orig" alt="" className="nav-image"/>
        </div>
      </header>
    </>
  );
};

export default Navbar;
