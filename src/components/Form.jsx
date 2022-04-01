import React from "react";
import "./FormStyle.css";
const Form = () => {
  return (
    <div>
      <div className="form">
        <form>
          <label>Your Name</label>
          <input type="text"/>
          <label >Email</label>
          <input type="text" placeholder=' example-mail@smth.com email validation is coming soon'/>
          <label>Subject</label>
          <input type="text"/>
          <label>Details</label>
          <textarea rows='6' placeholder='Type a short message here' />
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
