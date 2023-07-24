import "./contact.css";
import { Mail, Phone } from "@mui/icons-material";
import React from "react";
import NavBar from "./navbar";

function Contact(){
    return(
        <>
        <NavBar/>
        <div className="contact">
            <h1>Contact Us</h1>
            <h2 ><Mail/> : support [AT] abhibus.com</h2>
            <h2><Phone/> : 040-61656789</h2>
            <h3>Address :  11th Floor, My Home Twitza, APIIC Hyderabad 
                Knowledge City, Hyderabad - 500081
                Telangana India.
            </h3>
        </div>
        </>
    );
}

export default Contact;