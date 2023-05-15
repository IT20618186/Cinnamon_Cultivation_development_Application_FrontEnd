import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AdminHome from "./components/AdminHome/AdminHome";
import AddContact from "./components/AdminHome/AddContact";
import ViewContact from "./components/AdminHome/ViewContact";
import ViewBlogPost from "./components/Blog_About_Diseases/ViewBlogPost";
import AddBlogPost from "./components/Blog_About_Diseases/AddBlogPost";
import UpdateBlogPost from "./components/Blog_About_Diseases/UpdateBlogPost";
import AdminDashboard from "./components/AdminHome/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Admin" element={<AdminDashboard/>}/>
      <Route path="/AdminHome" exact element={<AdminHome/>}/>
      <Route path="/AddContact" exact element={<AddContact/>}/>
      <Route path="/Admin_Contact" exact element={<ViewContact/>}/>
      <Route path="/AddBlog" element={<AddBlogPost/>}/>
      <Route path="/view_post" element={<ViewBlogPost/>}/>
      <Route path="/update_post" element={<UpdateBlogPost/>}/>
    </Routes>
  );
}

export default App;
