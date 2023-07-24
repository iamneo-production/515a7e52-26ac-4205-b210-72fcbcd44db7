import React from "react";
import "./log.css";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <>
      <Link className="back" style={{textDecoration:"none"}} to="/search"><button>Back</button></Link>
      <div style={{marginTop:"100px"}} className="login">
        <h4>Are you sure you want to logout?</h4>
        <button ><a style={{textDecoration:"none",color:"white"}}href="/">Logout</a></button>
      </div>
    </>
  );
};

export default Logout;