import React, { Component } from 'react'

export default class index extends Component {


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
                        <a href="/" class="nav-link">Home Website</a>
                        <a href="/Admin_Contact" class="nav-link">Contact Us</a>
                        <form action="#">
                            <div class="form-input">
                                <input type="search" placeholder="Search..." />
                                <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
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
                                        <a href="/AdminHome">Dashboard</a>
                                    </li>
                                    {/* <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a class="active" href="/">Home</a>
                                    </li> */}
                                </ul>
                            </div>
                            <a href="#" class="btn-download">
                                <i class='bx bxs-cloud-download' ></i>
                                <span class="text">Download PDF</span>
                            </a>
                        </div>

                        <ul class="box-info">
                            <li>
                                <i class='bx bxs-calendar-check' ></i>
                                <span class="text">
                                    <h3>1020</h3>
                                    <p>New Order</p>
                                </span>
                            </li>
                            <li>
                                <i class='bx bxs-group' ></i>
                                <span class="text">
                                    <h3>2834</h3>
                                    <p>Visitors</p>
                                </span>
                            </li>
                            <li>
                                <i class='bx bxs-dollar-circle' ></i>
                                <span class="text">
                                    <h3>$2543</h3>
                                    <p>Total Sales</p>
                                </span>
                            </li>
                        </ul>


                        <div class="table-data">
                            <div class="order">
                                <div class="head">
                                    <h3>Recent Company Orders</h3>
                                    <i class='bx bx-search' ></i>
                                    <i class='bx bx-filter' ></i>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>Date Order</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="assets/images/people.png" />
                                                <p>John Doe</p>
                                            </td>
                                            <td>01-10-2021</td>
                                            <td><span class="status completed">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/images/people.png" />
                                                <p>John Doe</p>
                                            </td>
                                            <td>01-10-2021</td>
                                            <td><span class="status pending">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/images/people.png" />
                                                <p>John Doe</p>
                                            </td>
                                            <td>01-10-2021</td>
                                            <td><span class="status process">Process</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/images/people.png" />
                                                <p>John Doe</p>
                                            </td>
                                            <td>01-10-2021</td>
                                            <td><span class="status pending">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/images/people.png" />
                                                <p>John Doe</p>
                                            </td>
                                            <td>01-10-2021</td>
                                            <td><span class="status completed">Completed</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <div class="todo">
                                <div class="head">
                                    <h3>Todos</h3>
                                    <i class='bx bx-plus' ></i>
                                    <i class='bx bx-filter' ></i>
                                </div>
                                <ul class="todo-list">
                                    <li class="completed">
                                        <p>Todo List</p>
                                        <i class='bx bx-dots-vertical-rounded' ></i>
                                    </li>
                                    <li class="completed">
                                        <p>Todo List</p>
                                        <i class='bx bx-dots-vertical-rounded' ></i>
                                    </li>
                                    <li class="not-completed">
                                        <p>Todo List</p>
                                        <i class='bx bx-dots-vertical-rounded' ></i>
                                    </li>
                                    <li class="completed">
                                        <p>Todo List</p>
                                        <i class='bx bx-dots-vertical-rounded' ></i>
                                    </li>
                                    <li class="not-completed">
                                        <p>Todo List</p>
                                        <i class='bx bx-dots-vertical-rounded' ></i>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </main>
                    {/* <!-- MAIN --> */}
                </section>
                {/* <!-- CONTENT --> */}
            </div>
        )
    }
}

