import React from 'react'
import './Contact.scss'


const Contact = () => {
  return (
    <div className="form" id="contact">
      <div className="container g-flex contact">
        <div className="header text-center">
          CONTACT
        </div>
        <div className="header-bar"></div>
        <div className="highlight text-center ">
          Have a question or want to work together?
        </div>
        <form className="pop-in">
          <input placeholder="Name" type="text" name="name" required=""/>
          <input placeholder="Enter email" type="email" name="email" required=""/>
          <textarea placeholder="Your Message" type="text" name="message"></textarea>
          <div id="success">
            <div>
              Your message was sent successfully. Thanks!
              <span id="close" className="mdi mdi-close"></span>
            </div>
          </div>
          <button className="button" type="submit" id="submit" value="SUBMIT"><a href="#"/>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}
export default Contact
