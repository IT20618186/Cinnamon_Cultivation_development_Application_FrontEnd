import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import AdminHome from "./components/AdminHome/AdminHome";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/AdminHome" exact element={<AdminHome/>}/>
    </Routes>
  );
}

export default App;
