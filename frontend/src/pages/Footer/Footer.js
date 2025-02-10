import React from "react";
import "./Footer.css";
import { assets } from "../../frontend_assets/assets";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="fotter-content">
        <div className="left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis, quod. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Soluta mollitia reprehenderit, labore aliquam
            voluptatibus amet, laudantium ipsam natus corporis et fuga.
            Accusantium quam quo dolorem ratione beatae dignissimos tenetur
            obcaecati!
          </p>
          <div className="icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="center">
          <h2>Company</h2>
          <ul>
            <Link to={'/'}>Home</Link>
            <li>About-us</li>
            <li>Delivary</li>
          </ul>
        </div>
        <div className="right">
          <h2>Contact</h2>
          <ul>
            <li>1234567890</li>
            <li>ahdsoai@.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copy-rigth">Copyright @2024</p>
    </div>
  );
}

export default Footer;
