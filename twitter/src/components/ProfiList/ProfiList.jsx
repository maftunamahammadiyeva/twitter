import React from "react";
import Bobur from "../../assets/bobur.png";
import Nuqta from "../../assets/nuqta.svg";
import Xat from "../../assets/xat.svg";
import Retweet from "../../assets/retweet.svg";
import Like from "../../assets/like.svg";
import Download from "../../assets/download.svg";
import Stastic from "../../assets/statistics.svg";

function ProfiList(props) {
  return (
    <div>
      <ul className="list">
        <li className="p-4 border">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-start">
              <img src={Bobur} alt="photo" width="60" height="60" />
              <div>
                <h4 className="ms-3 fw-bolder">
                  Bobur
                  <span className="span ms-1">@bobur_mavlonov · Apr 1</span>
                </h4>
                <p className="ms-3">
                  4-kursni tugatgunimcha kamida bitta biznesim bo'lishini,
                  uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni,
                  sog'lik va jismoniy holatni normallashtirishni reja qildim
                </p>
              </div>
            </div>
            <img src={Nuqta} alt="icon" width="17" height="4" />
          </div>

          <div className="d-flex justify-content-around">
            <div>
              <img src={Xat} alt="icon" width="24" height="24" />
              <span className="ms-2">10</span>
            </div>
            <div>
              <img src={Retweet} alt="icon" width="24" height="24" />
              <span className="ms-2">11</span>
            </div>
            <div>
              <img src={Like} alt="icon" width="24" height="24" />
              <span className="ms-2">8</span>
            </div>
            <div>
              <img src={Download} alt="icon" width="24" height="24" />
              <span className="ms-2"></span>
            </div>
            <div>
              <img src={Stastic} alt="icon" width="24" height="24" />
              <span className="ms-2"></span>
            </div>
          </div>
        </li>

        <li className="p-4 border">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-start">
              <img src={Bobur} alt="photo" width="60" height="60" />
              <div>
                <h4 className="ms-3 fw-bolder">
                  Bobur
                  <span className="span ms-1">@bobur_mavlonov · Apr 1</span>
                </h4>
                <p className="ms-3">
                  Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima
                  deyayotganimizga qarab ham o'tirmaymiz. Bitta biznes trener
                  nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi
                  slishkom aqlli odamlar nazdida. Gap faqat biznes trenerlar
                  haqida emas.
                </p>
              </div>
            </div>
            <img src={Nuqta} alt="icon" width="17" height="4" />
          </div>

          <div className="d-flex justify-content-around">
            <div>
              <img src={Xat} alt="icon" width="24" height="24" />
              <span className="ms-2">10</span>
            </div>
            <div>
              <img src={Retweet} alt="icon" width="24" height="24" />
              <span className="ms-2">11</span>
            </div>
            <div>
              <img src={Like} alt="icon" width="24" height="24" />
              <span className="ms-2">8</span>
            </div>
            <div>
              <img src={Download} alt="icon" width="24" height="24" />
              <span className="ms-2"></span>
            </div>
            <div>
              <img src={Stastic} alt="icon" width="24" height="24" />
              <span className="ms-2"></span>
            </div>
          </div>
        </li>
        <li className="p-4 border">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-start">
              <img src={Bobur} alt="photo" width="60" height="60" />
              <div>
                <h4 className="ms-3 fw-bolder">
                  Bobur
                  <span className="span ms-1">@bobur_mavlonov · Apr 1</span>
                </h4>
                <p className="ms-3 m-0">A bo'pti maskamasman</p>
              </div>
            </div>
            <img src={Nuqta} alt="icon" width="17" height="4" />
          </div>
          <img
            className="mt-2 mb-3"
            src={Bobur}
            alt="photo"
            width="678"
            height="453"
          />
          <div className="d-flex justify-content-around">
            <div>
              <img src={Xat} alt="icon" width="24" height="24" />
              <span className="ms-2">10</span>
            </div>
            <div>
              <img src={Retweet} alt="icon" width="24" height="24" />
              <span className="ms-2">1</span>
            </div>
            <div>
              <img src={Like} alt="icon" width="24" height="24" />
              <span className="ms-2">8</span>
            </div>
            <div>
              <img src={Download} alt="icon" width="24" height="24" />
              <span className="ms-2"></span>
            </div>
            <div>
              <img src={Stastic} alt="icon" width="24" height="24" />
              <span className="ms-2"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProfiList;
