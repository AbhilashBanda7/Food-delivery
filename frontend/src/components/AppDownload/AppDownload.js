import React from "react";
import "./AppDownload.css";
import { assets } from "../../frontend_assets/assets";
function AppDownload() {
  return (
    <div className="AppDownload" id="AppDownload">
      <p>
        For Better exprience <br />
        Tomato
      </p>
      <div className="download">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
