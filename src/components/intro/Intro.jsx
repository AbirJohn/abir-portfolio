import React from 'react'
import "./Intro.css"
import AJ from "../../img/AJ.png"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello My name is</h2>
                <h2 className="i-name">Abir Mahmud</h2>
                <div className="i-title ">
                    <div className="i-title-wrapper">
                      <div className="i-title-item">Font-End Developer</div>
                      <div className="i-title-item">Content Creator</div>
                      <div className="i-title-item">Ux/UI Designer</div>
                    </div>
                </div>
                <p className="desc">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services and
                online stores.
                </p>
            </div>
            
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={AJ} alt="" className="i-img " />
        </div>
    </div>
  )
}

export default Intro