import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/Hi";

const ContactForm = () => {
  const onSubmit =(event)=>{
    event.preventDefault(event)
    console.log(event);
  };  

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button  text="VIA CHAT" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlForm="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlForm="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlForm="email">Text</label>
            <textarea name="Email" rows={8} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button text="SUMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={styles.contact_Image}>
        <img src="/images/contact.svg" alt="No image" />
      </div>
    </section>
  );
};

export default ContactForm;