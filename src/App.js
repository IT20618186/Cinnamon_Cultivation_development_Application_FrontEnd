import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AdminHome from "./components/AdminHome/AdminHome";
import AddContact from "./components/AdminHome/AddContact";
import ViewContact from "./components/AdminHome/ViewContact";
import AddBlogPost from "./components/Estate_Owners_Handling/AddBlogPost";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/AdminHome" exact element={<AdminHome/>}/>
      <Route path="/AddContact" exact element={<AddContact/>}/>
      <Route path="/Admin_Contact" exact element={<ViewContact/>}/>
      <Route path="/AddBlog" element={<AddBlogPost/>}></Route>
    </Routes>
  );
}

export default App;
