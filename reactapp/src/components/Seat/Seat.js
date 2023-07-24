import React from "react";
import "./seat.css";
const Seat = () => {

    return (
        <>
        <div className="theatre">

            <h3 className="select-text">Please select a seat</h3>
            <div className="sample">

            <div className="left">
              <li className="seat">
                <input 
                type="checkbox" 
                label="1"
                value={1} />
              </li>
              <li className="seat">
                <input type="checkbox"  id="1D" />
              </li>
            </div>

            <div className="right">
              <li className="seat">
                <input type="checkbox" id="1E" />
              </li>
              <li className="seat">
                <input type="checkbox" id="1F" />
              </li>
            </div>

            <div className="left">
              <li className="seat">
                <input type="checkbox" value={1} />
              </li>
              <li className="seat">
                <input type="checkbox"  id="1D" />
              </li>
            </div>

            <div className="right">
              <li className="seat">
                <input type="checkbox" id="1E" />
              </li>
              <li className="seat">
                <input type="checkbox" id="1F" />
              </li>
            </div>
            <div className="left">
              <li className="seat">
                <input type="checkbox" value={1} />
              </li>
              <li className="seat">
                <input type="checkbox"  id="1D" />
              </li>
            </div>

            <div className="right">
              <li className="seat">
                <input type="checkbox" id="1E" />
              </li>
              <li className="seat">
                <input type="checkbox" id="1F" />
              </li>
            </div><div className="left">
              <li className="seat">
                <input type="checkbox" value={1} />
              </li>
              <li className="seat">
                <input type="checkbox"  id="1D" />
              </li>
            </div>

            <div className="right">
              <li className="seat">
                <input type="checkbox" id="1E" />
              </li>
              <li className="seat">
                <input type="checkbox" id="1F" />
              </li>
            </div><div className="left">
              <li className="seat">
                <input type="checkbox" value={1} />
              </li>
              <li className="seat">
                <input type="checkbox"  id="1D" />
              </li>
            </div>

            <div className="right">
              <li className="seat">
                <input type="checkbox" id="1E" />
              </li>
              <li className="seat">
                <input type="checkbox" id="1F" />
              </li>
            </div>
            </div>

        </div>
    </>
      );
 
}
export default Seat; 