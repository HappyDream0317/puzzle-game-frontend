import "../../assets/css/include/footer.css";

import footerLogo from "../../assets/img/footer_logo.png";
import discordLogo from "../../assets/img/discord_logo.png";
import twitterLogo from "../../assets/img/twitter_logo.png";

function Footer() {

  const toMaux = () => {
    window.open('https://mauxjaux.com/', '_blank');
  }

  return (
    <div className="content-footer">
      <div class="inner-footer">
        <div className="meta">
          <img src={footerLogo} alt="" />
          <p className="copyright">
            {" "}
            a{" "}
            <span onClick={toMaux} style={{ color: "#bd8e00", fontWeight: "500",cursor:"pointer" }}>
              mauxjaux
            </span>{" "}
            the 
            <span style={{ color: "#bd8e00", fontWeight: "500" }}>
            &nbsp;a
            </span>{" "}
            r’tist creation © 2023 all rights reserved
          </p>
        </div>
        <div className="social-container">
          <img className="footer-img-discord" src={discordLogo} alt="" />
          <img className="footer-img-twitter" src={twitterLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
