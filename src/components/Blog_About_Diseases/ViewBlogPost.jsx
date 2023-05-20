import React, { Component } from 'react';
import axios from 'axios';

export default class ViewBlogPost extends Component {

    constructor(props){
        super(props);

        this.state={
            diseases:[]
        };

    }

    componentDidMount(){
        this.retrieveDiseases();
    }
    
    retrieveDiseases(){
        axios.get("http://localhost:8100/api/diseases").then(res =>{
            if(res.data.success){
                this.setState({
                    diseases:res.data.existingDiseases
                });

                console.log(this.state.diseases);
            }
        });
    }


    onDelete = (id) =>{

        axios.delete(`http://localhost:8100/api/diseases/delete/${id}`).then((res) =>{
            alert("Delete Successfully");
            this.retrieveDiseases();
        });
    }


    filterData(diseases, searchKey){
        const result = diseases.filter((diseases) =>
        diseases.name.toLowerCase().includes(searchKey) ||
        diseases.reasons.toLowerCase().includes(searchKey)
        )

        this.setState({ diseases: result })
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8100/api/diseases").then(res =>{
            if(res.data.success){
                this.filterData(res.data.existingDiseases, searchKey);
            }
        });

    }


    render() {
        return (
            <div>
                {/* <!-- SIDEBAR --> */}
                <section id="sidebar">
                    <a href="#" class="brand">
                        <i class="fa-brands fa-slack fa-flip"></i>
                        <span class="text">CINNAMON</span>
                    </a>
                    <ul class="side-menu top">
                        <li>
                            <a href="/AdminHome">
                                <i class="fa-solid fa-gauge"></i>
                                <span class="text">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Bank_Loan_Details">
                                <i class="fa-solid fa-dollar-sign"></i>
                                <span class="text">Bank Loan</span>
                            </a>
                        </li>
                        <li>
                            <a href="/All_Branches_Details">
                                <i class="fa-solid fa-briefcase"></i>
                                <span class="text">Banks</span>
                            </a>
                        </li>
                        <li>
                            <a href="/VSO_List">
                                <i class="fa-solid fa-people-roof"></i>
                                <span class="text">VSO</span>
                            </a>
                        </li>
                        <li class="active">
                            <a href="/Veiw_Blogs">
                                <i class="fa-solid fa-diamond fa-beat"></i>
                                <span class="text">Blogs</span>
                            </a>
                        </li>
                        <li>
                            <a href="Report_Generate_Home">
                                <i class="fa-solid fa-users"></i>
                                <span class="text">Reports</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="side-menu">
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-gear"></i>
                                <span class="text">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="logout">
                                <i class="fa-solid fa-right-to-bracket fa-rotate-180"></i>
                                <span class="text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </section>
                {/* <!-- SIDEBAR --> */}



                {/* <!-- CONTENT --> */}
                <section id="content">
                    {/* <!-- NAVBAR --> */}
                    <nav>
                        <a href="/AddBlog" class="nav-link">New Post</a>
                        <a href="/view_Blogs" class="nav-link">Post Data</a>
                        <a href="/user_feedback" class="nav-link">User Feedback</a>
                        <form action="#">
                            <div class="form-input">
                                <input type="search" placeholder="Search..." onChange={this.handleSearchArea} />
                                <button type="submit" class="search-btn"><i class='bx bx-search'></i></button>
                            </div>
                        </form>
                        <a href="#" class="notification">
                            <i class='bx bxs-bell' ></i>
                            <span class="num">10</span>
                        </a>
                        <a href="#" class="profile">
                            <img src="assets/images/people.png" />
                        </a>
                    </nav>
                    {/* <!-- NAVBAR --> */}

                    {/* <!-- MAIN --> */}
                    <main>
                        <div class="head-title">
                            <div class="left">
                                <h1>Dashboard</h1>
                                <ul class="breadcrumb">
                                    <li>
                                        <a href="/AdminHome" >Dashboard</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a href="#">Diseases</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a class="active" href="#">All Diseases Blog Posts</a>
                                    </li>
                                </ul>
                            </div>
                            <a href="#" class="btn-download">
                                <i class='bx bxs-cloud-download' ></i>
                                <span class="text">Download PDF</span>
                            </a>
                        </div>

                        <div class="table-data">
                            <div class="order">
                                <div class="head">
                                    <h3>ALL POSTS DETAILS</h3>

                                </div>

                                <div className="row">
                                    {/* Card View */}
                                    {this.state.diseases.map((diseases,index) =>(
                                        <div></div>
                                    ))}

                                </div>
                            </div>

                        </div>
                    </main>
                    {/* <!-- MAIN --> */}
                </section>
                {/* <!-- CONTENT --> */}
            </div>
        )
    }
}
