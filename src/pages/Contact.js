import React from "react";
import Mouse from "../components/Mouse";
import Navigations from "../components/Navigations";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import CopyToClipboard from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigations />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue Laplace</p>
              <p>64000 Biarritz</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0625252525" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => window.alert("Téléphone copié !")}
                >
                  06 25 25 25 25
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="fsagency@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => window.alert("Email copié !")}
                >
                  tmk-dev@hotmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>From Scratch 2022</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </div>
    </main>
  );
};

export default Contact;
