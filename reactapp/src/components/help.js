import React from "react";
import "./help.css";
import NavBar from "./navbar";
function Help(){
    return(
        <>
        <NavBar/>
        <div className="help">
            <h3>Q. How do you do online bus reservation on AbhiBus?</h3>
            <h5>Ans: Booking a bus ticket online in India is easy with 
                ABHIBUS. Simply enter the Leaving from -- Going to destination 
                details along with the date you wish to travel in the bus 
                search option on the site. Within seconds you will be 
                given a list of buses availability for your route. 
                Select your bus that suits you best for you. Then just follow 
                the simple steps to the ticket booking payment process and your 
                seat will be reserved for your bus journey.
            </h5>

            <h3>Q. What should I do if I have lost my ticket?</h3>
            <h5>Ans: In case your online bus booking ticket is lost, 
                you can show the message which has been received to your mobile 
                number/WhatsApp or you can login to your email ID to take printout of 
                the e-ticket. For further assistance, please contact our customer support.
            </h5>

            <h3>Q. How to reschedule my bus ticket?</h3>
            <h5>No, you cannot reschedule online bus tickets, but you can cancel the already 
                booked ticket following the ticket cancelation process and you can book bus 
                tickets on your postponed date.
            </h5>
        </div>
        </>
    );
}

export default Help;