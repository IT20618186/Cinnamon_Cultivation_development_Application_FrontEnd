import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import AdminHome from "./components/AdminHome/AdminHome";
import AddContact from "./components/AdminHome/AddContact";
import ViewContact from "./components/AdminHome/ViewContact";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/AdminHome" exact element={<AdminHome/>}/>
      <Route path="/AddContact" exact element={<AddContact/>}/>
      <Route path="/Admin_Contact" exact element={<ViewContact/>}/>
    </Routes>
  );
}

export default App;
