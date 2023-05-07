import "./App.css";
import react , {Fragment} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from './Login'
function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
        <Routes >
          <Route exact path="/" element={<><Header /><Home /></>} />
          <Route exact path="/checkout" element={<><Header /><Checkout /></>}/> 
          <Route path="/login" element={<Login />} />
          </Routes>
        </Fragment>
        
      </Router>
    </div>
  );
}

export default App;
