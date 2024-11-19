import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <img
            src="https://avatars.mds.yandex.net/get-lpc/1635340/2db250b4-9403-4255-9f23-89be00b03f2e/orig"
            alt=""
            className="footer-image"
          />
          <h1 className="footer-text">Скачивайте Fasten</h1>
        </div>
        <div className="footer-container">
        <img
            src="https://avatars.mds.yandex.net/get-lpc/10116223/6dca177f-7152-45f8-a8ce-ef7feed079ea/orig"
            alt=""
            className="bottom-image"
          />
          <ul className="footer_text">
            <li>
              <a href="">Язык: Русский <span className="footer-span">|</span> English <span className="footer-span">|</span> Oʻzbekcha</a>
            </li>
            <li>
              Fasten — информационный сервис. <br /> Транспортные услуги оказываются
              третьими лицами.
            </li>
            <li><a href="">  Служба поддержки <span className="footer-span">|</span> Тарифы <span className="footer-span">|</span> Партнёры <span className="footer-span">|</span> Пользовательское соглашение <span className="footer-span">|</span>
              Обработка персональных данных <span className="footer-span">|</span> Изменение максимальных тарифов</a>
            
            </li>
          </ul>
          <div className="footer-copyright">
            <a href="">©2024 ООО «YandexGo UB»</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
