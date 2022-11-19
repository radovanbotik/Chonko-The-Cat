import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Route>
    </Routes>
  );
}

export default App;
