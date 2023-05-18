import React from 'react'

export default function ViewBlogPost() {
    return (
        <div>
            <div>
                {/* <!-- SIDEBAR --> */}
                <section id="sidebar">
                    <a href="#" class="brand">
                        <i class="fa-brands fa-slack fa-flip"></i>
                        <span class="text">CINNAMON</span>
                    </a>
                    <ul class="side-menu top">
                        <li class="active">
                            <a href="/AdminHome">
                            <i class="fa-solid fa-gauge fa-beat"></i>
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
                            <a href="/Bank_Reg_Details">
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
                        <li>
                            <a href="/Veiw_Blogs">
                                <i class="fa-solid fa-diamond"></i>
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
                        <a href="/view_post" class="nav-link">Post Data</a>
                        <a href="/user_feedback" class="nav-link">User Feedback</a>
                        <form action="#">
                            <div class="form-input">
                                <input type="search" placeholder="Search..." />
                                <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
                            </div>
                        </form>
                        {/* <input type="checkbox" id="switch-mode" hidden />
                        <label for="switch-mode" class="switch-mode"></label> */}
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
                                <h1>Blog Posts</h1>
                                <ul class="breadcrumb">
                                    <li>
                                        <a href="#">Dashboard</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a href="#">Blogs</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a class="active" href="#">View Post</a>
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
                                    <h3>ALL POST DETAILS</h3>

                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Youtube Link</th>
                                            <th>Reasons</th>
                                            <th>Treatments</th>
                                            <th>Related Image</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {/* <td>
                                            <img src="assets/images/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status completed">Completed</span></td>
                                        <td>This test Field</td>
                                        <td>This test Field</td>
                                        <td>This test Field</td> */}
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                                    <button type="button" class="btn btn-warning">Edit</button>
                                                    <button type="button" class="btn btn-danger">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </main>
                    {/* <!-- MAIN --> */}
                </section>
                {/* <!-- CONTENT --> */}
            </div>
        </div>
    )
}
