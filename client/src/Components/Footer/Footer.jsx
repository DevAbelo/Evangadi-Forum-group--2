import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
function Footer() {
  return (
    <section>
      <div className="logo footer">
        <ul>
          <a href="/">
            <img
              src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
              alt=""
            />
            {"ev-logo "}
          </a>
          <li><InstagramIcon/> </li>
          <li><YouTubeIcon/></li>
          <li><FacebookIcon/></li>
        </ul>
      </div>
      <div className="list menu">
        <h5>useful link</h5>
        <ul>
          <li>
            <a href="/legal/terms/"></a>Terms of service
          </li>
          <li>
            <a href="/legal/privacy/"></a>Privacy policy
          </li>
        </ul>
      </div>
      <div className='contact'>
        <h5>contact information</h5>
        <ul>
          <li> Support@evangadi.com</li>
          <li>+1-202-386-2702</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer