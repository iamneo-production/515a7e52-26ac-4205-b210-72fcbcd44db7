import React from "react";
import "./log.css";
import NavBar from "./navbar";
function Download(){
    return(
        <>
        <NavBar/>
        <div className="login">
            <form>
                <input type="text" name="ticketId"  placeholder="Ticket" required/>
                <button>Download</button>
            </form>
        </div>
        </>
    );
}

export default Download;