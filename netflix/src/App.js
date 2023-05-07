import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from './Login'
const FullHome = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<FullHome />} />
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
