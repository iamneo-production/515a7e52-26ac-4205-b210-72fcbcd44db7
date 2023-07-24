import './App.css';
import Registration from './components/reg';
import Login from './components/login';
import Logout from './components/logout';
import Search from './components/search';
import About from './components/about';
import Contact from './components/contactus';
import Help from './components/help';
import { Route, Routes } from 'react-router';
import Download from './components/download';
import Get from './components/buses';
import FeedbackForm from './components/feedback';
import Seat from './components/Seat/Seat';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/reg" element={<Registration/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/contactus" element={<Contact/>} />
      <Route path="/help" element={<Help/>} />
      <Route path="/download" element={<Download/>} />
      <Route path="/seat" element={<Seat/>}/>
      <Route path="/bus" element={<Get/>}/>
      <Route exact path="/feedback" element={<FeedbackForm/>}/>
    </Routes>

  );
}

export default App;
