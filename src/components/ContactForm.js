import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_miv2lab",
        "template_x4a3sl7",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          form.current.reset(); //au submit on reset le formulaire
          formMess.innerHTML = "<p class='success'>Message envoyé ! </p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, merci de rééssayer. </p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 4500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
