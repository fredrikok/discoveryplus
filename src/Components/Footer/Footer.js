import React from "react";

//icons
import Icon from "../Icons/Icons";
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";
import logo from "../../img/logodiscovery.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="topfooter">
        <ul>
          <Link to="./">Kundeservice</Link>
          <Link to="./">Bruksvilkår</Link>
          <Link to="./">Personvernerklæring</Link>
          <Link to="./">Valg for informasjonskapsler og annonser</Link>
          <Link to="./">Juridisk informasjon</Link>
          <Link to="./">Modern Slavery Statement</Link>
        </ul>
      </div>
      <div className="bottomfooter">
        <div className="iconcontainer">
          <Link to="/">
            <Icon icon={BsInstagram} className="icon" />
          </Link>
          <Link to="/">
            <Icon icon={AiFillFacebook} className="icon" />
          </Link>
          <Link to="/">
            <Icon icon={TfiYoutube} className="icon" />
          </Link>
        </div>
        <p>
          © 2023 Replica Replica. Discovery, replica eier ikke dette designet
          eller noen funksjoner. dette er kun for læring
        </p>
        <picture>
          <img className="logo" src={logo} alt="Discovery+" />
        </picture>
      </div>
    </footer>
  );
}

export default Footer;
