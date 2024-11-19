import React from "react";
import "./FooterCards.css";

const FooterCards = () => {
  return (
    <>
      <div className="cards">
        <div className="card-container">
          <img
            src="https://avatars.mds.yandex.net/get-lpc/10116223/5c9c75f7-a5bd-4958-a6f6-2e9120f6def6/orig"
            alt=""
            className="imagee"
          />
          <div className="flex">
            <ul>
              <li className="card-text">
                Оплата картой <br /> или наличными
              </li>
            </ul>
            <h3>Просто и быстро</h3>
          </div>
        </div>
        <div className="card-container">
          <img
            src="https://avatars.mds.yandex.net/get-lpc/10116223/565a407e-8a8f-4a3d-9565-c35a5130b7bb/orig"
            alt=""
            className="imagee"
          />
          <div className="flex">
            <ul>
              <li className="card-text">
                Цена известна <br /> заранее
              </li>
            </ul>
            <h3>Просто и быстро</h3>
          </div>
        </div>
        <div className="card-container">
          <img
            src="https://avatars.mds.yandex.net/get-lpc/10116223/b6feaa9d-1cca-47b9-bd86-be30ab0aa0ef/orig"
            alt=""
            className="imagee"
          />
          <div className="flex">
            <ul>
              <li className="card-text">
                Видно, где едет <br /> водитель
              </li>
            </ul>
            <h3>Просто и быстро</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCards;
