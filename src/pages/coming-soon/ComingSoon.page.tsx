import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpeg";
import xuv700 from "../../assets/xuv-700.jpg";
import { IoLogoInstagram } from "react-icons/io5";
import { IconContext } from "react-icons";

import "./ComingSoonPage.scss";
function ComingSoonPage() {
  // Create Countdown
  const [duration, setDuration] = useState(25 * 24 * 60 * 60 * 1000);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);
  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    const totalSeconds = Math.floor(time / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    setSeconds(totalSeconds % 60);
    setMinutes(totalMinutes % 60);
    setHours(totalHours % 24);
    setDays(totalDays);
  }, [time]);

  return (
    <>
      <main className="comingSoon">
        <div className="comingSoon__left">
          <header className="comingSoon__header">
            <img src={logo} alt="Vaayu Auto" className="comingSoon__logo" />
          </header>
          <div className="comingSoon__middle">
            <div className="comingSoon__heading">
              <div>Under</div>
              <div>Construction</div>
            </div>
            <p className="comingSoon__para">
              Our Website is currently undergoing scheduled maintainence. We{" "}
              <br />
              Should be back shortly. Thank you for your patience.
            </p>

            <div className="comingSoon__form">
              <input type="email" className="comingSoon__input" name="" id="" />
              <button type="button" className="comingSoon__button">
                Notify me
              </button>
            </div>
            <div className="comingSoon__para1">
              Sign up now to get early notification of our launch date!
            </div>
          </div>
          <footer className="comingSoon__footer">
            <div className="comingSoon__stay">Stay in touch:</div>
            <ul className="comingSoon__list">
              <li className="comingSoon__item">
                <a
                  href="http://"
                  target="_blank"
                  className="comingSoon__link"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider
                    value={{ className: "comingSoon__icon" }}
                  >
                    <IoLogoInstagram />
                  </IconContext.Provider>
                </a>
              </li>
            </ul>
          </footer>
        </div>
        <div className="comingSoon__right">
          <img src={xuv700} alt="xuv 700" className="comingSoon__img" />
          <div className="comingSoon__countdown">
            <div className="comingSoon__counter">
              <div>{days}</div>
              <div>Days</div>
            </div>
            <div className="comingSoon__counter">
              <div>{hours}</div>
              <div>Hours</div>
            </div>
            <div className="comingSoon__counter">
              <div>{minutes}</div>
              <div>Minutes</div>
            </div>
            <div className="comingSoon__counter">
              <div>{seconds}</div>
              <div>Seconds</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ComingSoonPage;
