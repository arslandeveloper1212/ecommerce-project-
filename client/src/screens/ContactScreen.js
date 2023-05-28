import React from "react";
import { Container } from "react-bootstrap";
import Meta from "../components/Meta";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ContactScreen = () => {
  return (
    <div>
      <Meta title={"Contact"} />
      <Container>
        <p className="head">Contact.</p>
        <br></br>
        <br></br>
        <div className="border-top">
          <br></br>
          <br></br>
          <br></br>
          <p className="head ">
            We are based in Surat, Gujarat. for any queries please contact
            below.
          </p>
          <p className="p-width">
            We are expert in delivering amazing services to our client and great
            deals on products they buy from us. In case of any feedback please
            mail us we would be happy to hear from you.
          </p>
          <br></br>
          <Link className="my-2">+91-9898884300 📞</Link>
          <br></br>
          <Link className="my-2">
            +91-9898884300{" "}
            <img
              src="https://img.icons8.com/office/16/000000/whatsapp--v1.png"
              alt="whatsapp"
            />
          </Link>
          <br></br>
          <Link className="my-2" href="mailto:arslanahmad7822@gmail.com">
            arslanahmad7822@gmail.com📧
          </Link>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    </div>
  );
};

export default ContactScreen;
