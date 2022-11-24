import React from "react";
import ButtonMailTo from "../ButtonMailTo/ButtonMailTo";
import "./Contact.scss";
function Contact() {
  return (
    <div className="contact">
      <h2>Contact form</h2>
      <p>For now please contact me directly via email below, thank You.</p>
      <div className="hire">
        <ButtonMailTo
          label="m.wos.biznes@gmail.com"
          mailto="mailto:m.wos.biznes+site@gmail.com?subject=Contact&nbsp;from&nbsp;Website"
        />
      </div>
    </div>
  );
}

export default Contact;
