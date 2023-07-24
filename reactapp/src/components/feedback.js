import React from "react";
import "./feedback.css";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const FeedbackForm = ({username,email}) => {
    const navigate = useNavigate();
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   alert("Thank you for yor feedback");
    navigate("/search");
  };

  return (
    <>
    <Link className="back" style={{textDecoration:"none"}} to="/search"><button>Back</button></Link>
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <input
        type="text"
        value={username}
        placeholder="Your name"
        className="feedback-input"
        // onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="Your email"
        className="feedback-input"
        // onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        rows={7} cols={84}
        type="text"
        value={message}
        placeholder="Your message"
        className="feedback-text"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit} className="feedback-submit">Submit</button>
    </div>
    </>
  );
}

const mapStateToProps = (state) => ({
    username: state.username,
    email: state.email,
  });
  
 
  
  export default connect(mapStateToProps)(FeedbackForm);
