import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/oddaj-rzeczy" element={<Form />} />
      <Route path="/logowanie" element={<LogIn />} />
      <Route path="/rejestracja" element={<Register />} />
      <Route path="/wylogowano" element={<LogOut />} />
    </Routes>
  );
}

export default App;
