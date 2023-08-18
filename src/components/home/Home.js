import React, { useEffect, useRef } from "react";

import "../../assets/css/home/home.css";
import title from "../../assets/video/videoLogo.mp4";
import dice from "../../assets/img/dice.png";

function Home() {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);

  const play = () => {
    if (localStorage.getItem("name") === null) {
      window.location.href = "/user/signin";
    } else {
      window.location.href = "/dice";
    }
  };
  return (
    <div className="content-format">
      <div style={{ textAlign: "center" }}>
        <div style={{ textAlign: "center" }} className="logo-part">
          <video
            controls
            style={{ width: "300px" }}
            id="video-bg"
            muted
            ref={vidRef}
            loop
          >
            <source src={title} type="video/mp4" />
          </video>
        </div>
        <h3 style={{ marginTop: "50px" }}>it's anyone's guess</h3>
        <p className="main-font" style={{ marginTop: "50px" }}>
          each day we'll give you 10 chances to solve our mystery answer.
        </p>
        <img src={dice} alt="" className="dice-img" />
        <br />
        <p onClick={play} className="main-font play-link" style={{cursor:"pointer"}}>
          let's play
        </p>
      </div>
    </div>
  );
}

export default Home;
