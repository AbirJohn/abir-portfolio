import React, { useRef } from 'react'
import "./Contact.css"
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import address from "../../img/address.png"


const Contact = () => {

    const formRef = useRef()

    const heldellerSubmit =(e)=>{
        e.preventDefault();
    }


  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your Project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img  src={phone} alt="" className="c-icon"/>
                        +8801734371271
                    </div>
                    <div className="c-info-item">
                        <img  src={email} alt="" className="c-icon"/>
                        abirjohn@gmail.com
                    </div>

                    <div className="c-info-item">
                        <img  src={address} alt="" className="c-icon"/>
                        Dhaka 1207 Dhanmondi
                    </div>

                </div>
            </div>
            <div className="c-right">
            <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={heldellerSubmit} >
                <input type="text" placeholder="name"  name="user_name"/>
                <input  type="text" placeholder="subject"  name="user_subject"/>
                <input  type="text" placeholder="email"  name="user_email"/>
                <textarea  rows="5" placeholder="Message" name="message" />
                <button>Submit</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contact