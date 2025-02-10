import React, { useEffect, useState } from "react";
import "./Login.css";
import { assets } from "../../frontend_assets/assets";
function Login({setshowlogin}) {
  const [currstate, setcurstate] = useState("Sign-up");
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="login">
      <form className="login-cont">
        <div className="login-title">
          <h2>{currstate}</h2>
          <img src={assets.cross_icon} alt="" onClick={()=>setshowlogin(false)}/>
        </div>
        <div className="login-inputs">
          {currstate==='Sign-up'?<input type="text" placeholder="Name" required />:<></>}
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currstate==='Sign-up'?"Create account":"Login"}</button>
        <div className="login-checkbox">
          <input type="checkbox"  />
          <p>By continuing,i agree</p>
        </div>
        {currstate=='Login'?
        <p>Create account?<span onClick={()=>setcurstate("Sign-up")}>Click here</span></p>:<p>Alreay have an account? <span onClick={()=>setcurstate("Login")}>Click here</span></p>

        }
      </form>
    </div>
  );
}

export default Login;
