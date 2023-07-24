import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./navbar";
import "./buses.css";
import {Link} from "react-router-dom";
import { connect } from "react-redux";


const Get = ({source,destination}) =>{
  const [dataList, setDataList] = useState([]);
 
  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/bus/search/${source}/${destination} `, {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`
          },
        });
        setDataList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  return (
    <>
        <Navbar/>
        
        <div className="box">
            {dataList.map((item,index) =>
            (
                <div className="card">
                    <div className="card-header">
                        <div>{item.busName}</div>
                    </div>
                    <br></br>
                    <div className="card-body">
                        <div>Bus Number : {item.busId}</div>
                        <div>Arrival Time : {item.arrival}</div>
                        <div>Reach Time: {item.reach}</div>
                    </div>
                    <div className="card-footer">
                        <div>Fare : {item.fare}</div>
                        <div>Bus Type : {item.busType}</div>
                        <div>Seat Type : {item.seatType}</div>
                    </div>
                    <div className="card-footer1">
                        {/* <button>Book Now</button> */}
                        <button ><Link to="/seat" style={{textDecoration:"none",color:"white"}}>BOOK NOW</Link></button>
                    </div>
                </div>

            ))}       
        </div>   
    </>
  );
}
const mapStateToProps = (state) => ({
  source: state.source,
  destination: state.destination
});

export default connect(mapStateToProps)(Get);
