import React from "react";
import classes from "./footer.module.css"; // Modular CSS import
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome import
// import evalogo from "../../assets/img/EvangadiLogo.png"
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logoSection}>
        {/* Insert logo */}
        <a href="https://www.evangadi.com/">
          <img
            src="https://www.evangadi.com/themes/humans/assets/hammerlook/img/misc/evangadi-logo-white.png"
          />
        </a>
        <div className={classes.socialIcons}>
          <a
            href="https://www.facebook.com/evangaditech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/evangaditech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@EvangadiTech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      <div className={classes.usefulLinks}>
        <h4>Useful Link</h4>
        <ul>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="https://www.evangadi.com/legal/terms/" target="_blank">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="https://www.evangadi.com/legal/privacy/" target="_blank">
              Privacy policy
            </a>
          </li>
        </ul>
      </div>

      <div className={classes.contactInfo}>
        <h4>Contact Info</h4>
        <p>Evangadi Networks</p>
        <p>
          <a href="mailto:support@evangadi.com">support@evangadi.com</a>
        </p>
        <p>
          <a href="tel:+12023862702">+1-202-386-2702</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
