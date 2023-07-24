import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import { connect } from 'react-redux';
function NavBar({username}){
  
    function openNav() {
      document.getElementById("mySidepanel").style.width = "200px";
    }
    function closeNav() {
      document.getElementById("mySidepanel").style.width = "0";
    }
    return(
        <>
        <div id="mySidepanel" className="sidepanel">
            <li className="closebtn" onClick={closeNav}>&times;</li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/contactus">Contact</Link></li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/about">About</Link></li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/feedback">Feedback</Link></li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/help">Help</Link></li>

        </div>

        <ul className="navbar"> 
            <li className="open" onClick={openNav}>&#9776;</li>
            <li className="title">bookMyTrip</li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/logout">{username}</Link></li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/download">My Tickets</Link></li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/search">Home</Link></li>
        </ul>
      </>
    ); 
}
// export default NavBar;
const mapStateToProps = (state) => ({
  username: state.username,
  logged: state.username
  
});

export default connect(mapStateToProps)(NavBar);