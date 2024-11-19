import React from "react";
import "./ScrollCards.css";
import { assets } from "../../assets/assets";

const ScrollCards = () => {
  return (
    <>
      <div className="grid">
        <div className="grid-container">
          <div className="grid-text">  
            <div className="grid-span">
              <img src={assets.fasten} alt="" className="grid-image" />
              <div className="top-text">
                <ul>
                  <li className="active">Fasten</li>
                </ul>
                <h3 className="active">
                  Для коротких <br /> поездок
                </h3>
              </div>
            </div>
          </div>
          <div className="grid-text">
            <div className="grid_span">
              <img src={assets.upper} alt="" className="grid-image" />
              <div className="top-text">
                <ul>
                  <li>Upper</li>
                </ul>
                <h3>
                  На работу <br /> и по делам
                </h3>
              </div>
            </div>
          </div>
          <div className="grid-text">
            <div className="grid_span">
              <img src={assets.extra} alt="" className="grid-image" />
              <div className="top-text">
                <ul>
                  <li>Extra</li>
                </ul>
                <h3>
                  Расслабиться <br /> в долгой поездке
                </h3>
              </div>
            </div>
          </div>
          <div className="grid-text">
            <div className="grid_span">
              <img src={assets.max} alt="" className="grid-image" />
              <div className="top-text">
                <ul>
                  <li>Max</li>
                </ul>
                <h3>
                  На важную <br /> встречу
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-text">
        <h1 className="scroll-text">
          Всегда <span>удобное</span> приложение
        </h1>
      </div>
    </>
  );
};

export default ScrollCards;
