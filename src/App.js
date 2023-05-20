import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AdminHome from "./components/AdminHome/AdminHome";
import AddContact from "./components/AdminHome/AddContact";
import ViewContact from "./components/AdminHome/ViewContact";
import ViewBlogPost from "./components/Blog_About_Diseases/ViewBlogPost";
import AddBlogPost from "./components/Blog_About_Diseases/AddBlogPost";
import UpdateBlogPost from "./components/Blog_About_Diseases/UpdateBlogPost";
import AdminDashboard from "./components/AdminHome/AdminDashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddBank from "./components/AdminHome/Bank/AddBank";
import ViewBank from "./components/AdminHome/Bank/ViewBank";
import EditBank from "./components/AdminHome/Bank/editBank";
import ViewVSODetails from "./components/AdminHome/VSO/ViewVSODetails";
import AddVSODetails from "./components/AdminHome/VSO/AddVSODetails";
import FarmerHome from "./components/Estate_Owners_Handling/FarmerHome";
import RequestHarvestList from "./components/Estate_Owners_Handling/RequestHarvestList";
import ApplyLoan from "./components/Estate_Owners_Handling/ApplyLoan";
import BlogPostViewHome from "./components/Estate_Owners_Handling/BlogPostViewHome";
import ViewBlogPostInHome from "./components/Blog_About_Diseases/ViewBlogPostInHome";
import AddFarmer from "./components/Estate_Owners_Handling/AddFarmer";


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/Admin" element={<AdminDashboard/>}/>
      <Route path="/AdminHome" exact element={<AdminHome/>}/>

      <Route path="/AddContact" exact element={<AddContact/>}/>
      <Route path="/Admin_Contact" exact element={<ViewContact/>}/>

      <Route path="/Bank_Reg_Details" element={<AddBank/>}/>
      <Route path="/All_Branches_Details" element={<ViewBank/>} />
      <Route path="/Maintain_Bank_Details" element={<EditBank/>} />

      <Route path="/Add_New_VSO" element={<AddVSODetails/>} />
      <Route path="/VSO_List" element={<ViewVSODetails/>}/>

      <Route path="/Farmer_Home" element={<FarmerHome/>}/>
      <Route path="/Request_Harvest_List" element={<RequestHarvestList/>}/>
      <Route path="/Apply_Bank_Loan" element={<ApplyLoan/>}/>
      <Route path="/Cinnamon_blog" element={<BlogPostViewHome/>}/>
      <Route path="/Add_Estate_Owner" element={<AddFarmer/>}/>

      <Route path="/AddBlog" element={<AddBlogPost/>}/>
      <Route path="/view_Blogs" element={<ViewBlogPost/>}/>
      <Route path="/update_post" element={<UpdateBlogPost/>}/>
      <Route path="/all_Blogs" element={<ViewBlogPostInHome/>}/>
    </Routes>
  );
}

export default App;
