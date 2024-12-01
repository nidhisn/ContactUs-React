import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("nidhi");
  const [email, setEmail] = useState("nidhi24@gmail.com");
  const [text, setText] = useState("hello world");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };


  return (
    <section className={styles.container}>

        <div className={styles.contact_form}>

          <div className={styles.top_button}>
            <Button text="VIA SUPPORT CHAT"  icon={<MdMessage fontSize="24px" />} />

       
            <Button text="VIA CALL"  icon={<FaPhoneAlt  fontSize="24px" />} />

          </div>

          <Button 
          isOutline={true}
          text="VIA EMAIL FORM"  icon={<HiMail  fontSize="24px" />} />

          <form onSubmit={onSubmit}>
           <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
           </div>

           <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
           </div>

           <div className={styles.form_control}>
              <label htmlFor="text">TEXT</label>
              <textarea type="text" name="text" rows="8" />
           </div>

          <div style={
            {
              display: "flex",
              justifyContent: "end",
            }
          }>
          <Button text="Submit"  />
          </div>
          
          <div>{name + " " + email + " " + text}</div>
          </form>

       </div>

        <div className={styles.contact_image}>
          <img src="/images/customer_care.png" alt="contact image" />

        </div>
    </section>
  )
}

export default ContactForm