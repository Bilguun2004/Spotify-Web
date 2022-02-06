import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    // <Login/>
    // <Home/>
  );
}

export default App;
