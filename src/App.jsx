import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <h1>Redux Toolkit</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
