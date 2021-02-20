import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Contact = () => {
  
  return (
    <div className="contact">
      <h2 className="contact__name">Contact me</h2>
    <form>      
    <input name="name" type="text" class="feedback-input" placeholder="Name" />   
    <input name="email" type="text" class="feedback-input" placeholder="Email" />
    <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
    <input type="submit" value="SUBMIT"/>
  </form>
  </div>
  );
};

export default Contact;