import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const MainContainer = () => {
  return (
    <>
     <section>
        <div className="main-text">
          <h1 className="_text">Невозможно молчать о таких <br /> низких ценах на такси</h1>
          <p className="_text_bottom">Поездки по Ташкенту от 3900 сум</p>
        </div>
        <div className="container">
          <div className="left">
            <div className="top">
              <div className="icon">
                <img
                  src="https://avatars.mds.yandex.net/get-lpc/12373972/059cb4d8-b8ff-4b2c-8ea7-ea42870630c0/orig"
                  alt=""
                  className="photo_1"
                />
              </div>
              <div className="bottom">
                <h1 className="text">Дешёвые поездки <br /> всегда рядом</h1>
                <p>Среднее время подачи — до 5 минут</p>
              </div>
            </div>
          </div>
          <div className="right">
            <video src={assets.video} autoPlay loop></video>
          </div>
        </div>
        <div className="bottom-text">
            <h1 className="bottom_text">На каждый случай — <span>свой тариф</span></h1>
        </div>
      </section>   
    </>
  );
};

export default MainContainer;
