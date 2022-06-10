import React from 'react'
import "./About.css"
import AJ from "../../img/AJ.png"
import i from "../../img/i.png"

function About() {
  return (
    <div className="a">
    <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
        <img
          src={AJ}
          alt=""
          className="a-img"
        />
      </div>
    </div>
    <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">
        It is a long established fact that a reader will be distracted by the
        readable content.
      </p>
      <p className="a-desc">
      A highly motivated, confident individual with exceptional multitasking capabilities. Hardworking with
      excellent attendance and punctuality records who can work equally well alone or as part of a team. Can
      communicate effectively with people from diverse backgrounds and would be an asset to any employer
      who respects loyalty and responsibility.
      </p>
      <div className="a-award">
        <img src={i} alt="" className="a-award-img" />
        <div className="a-award-texts">
          <h4 className="a-award-title">Web Design Awards 2019</h4>
          <p className="a-award-desc">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
            and fugit.
          </p>
        </div>
      </div>
    </div>
  </div>
);
};
export default About