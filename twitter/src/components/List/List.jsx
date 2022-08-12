import React from "react";
import Profil from "../../assets/Profile.png";
import Image from "../../assets/image.svg";
import Gif from "../../assets/gif.svg";
import Note from "../../assets/note.svg";
import Smile from "../../assets/smile.svg";
import Stats from "../../assets/stats.svg";
import "./list.css";
import Desin from "../../assets/desin.png";
import Nuqta from "../../assets/nuqta.svg";
import Xat from "../../assets/xat.svg";
import Stastic from "../../assets/statistics.svg";
import Like from "../../assets/like.svg";
import Retweet from "../../assets/retweet.svg";
import Download from "../../assets/download.svg";
import Cloud from "../../assets/cloud.png";
import Create from "../../assets/create.png";
import Gerichte from "../../assets/gerichte.png";

function List() {
  return (
    <div>
      <ul className="list">
        <li className="p-4 border">
          <div className="d-flex align-items-center">
            <img src={Profil} alt="photo" width="60" height="60" />
            <h4 className="ms-3 fw-bolder">Whats happening</h4>
          </div>
          <div className="d-flex justify-content-between ms-5 mt-3">
            <div className="d-flex align-items-center">
              <img
                className="ms-2"
                src={Image}
                alt="icon"
                width="24"
                height="24"
              />
              <img
                className="ms-2"
                src={Gif}
                alt="icon"
                width="24"
                height="24"
              />
              <img
                className="ms-2"
                src={Stats}
                alt="icon"
                width="24"
                height="24"
              />
              <img
                className="ms-2"
                src={Smile}
                alt="icon"
                width="24"
                height="24"
              />
              <img
                className="ms-2"
                src={Note}
                alt="icon"
                width="24"
                height="24"
              />
            </div>
            <button className="btn btn-primary rounded-5">Tweet</button>
          </div>
        </li>

        <li className="p-4 border">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-start">
              <img src={Desin} alt="photo" width="60" height="60" />
              <div>
                <h4 className="ms-3 fw-bolder">
                  Designsta <span className="span ms-2">@inner · 25m</span>
                </h4>
                <p className="ms-3">
                  Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
                  zerikmadinglarmi?
                </p>
              </div>
            </div>
            <img src={Nuqta} alt="icon" width="17" height="4" />
          </div>

          <div className="d-flex justify-content-around">
            <div>
              <img src={Xat} alt="icon" width="24" height="24" />
              <span className="ms-2"></span>
            </div>
            <div>
              <img src={Retweet} alt="icon" width="24" height="24" />
              <span className="ms-2">5</span>
            </div>
            <div>
              <img src={Like} alt="icon" width="24" height="24" />
              <span className="ms-2">9</span>
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
              <img src={Cloud} alt="photo" width="60" height="60" />
              <div>
                <h4 className="ms-3 fw-bolder">
                  cloutexhibition{" "}
                  <span className="span ms-2">@RajLahoti · 22m</span>
                </h4>
                <p className="ms-3">
                  YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                  Mentorlik davomida talaba va yangi bitiruvchilarni
                  o’sayotganini ko’rib hursand bo’ladi odam.
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

        <li className="p-4 border">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-start">
              <img src={Create} alt="photo" width="60" height="60" />
              <div>
                <h4 className="ms-3 fw-bolder">
                  CreativePhoto
                  <span className="span ms-2">@cloutexhibition · 1h</span>
                </h4>
                <p className="ms-3 m-0">Обетда.....</p>
                <span className="ms-3">Кечиринглар</span>
              </div>
            </div>
            <img src={Nuqta} alt="icon" width="17" height="4" />
          </div>
          <img
            className="mt-2 mb-3"
            src={Gerichte}
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

export default List;
