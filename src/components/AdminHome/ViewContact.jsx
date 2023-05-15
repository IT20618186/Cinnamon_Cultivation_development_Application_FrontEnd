import React, { Component } from 'react'

function ViewContact() {

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
                        <a href="#">
                            <i class="fa-solid fa-gauge fa-beat"></i>
                            <span class="text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-solid fa-briefcase"></i>
                            <span class="text">Banks</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-solid fa-dollar-sign"></i>
                            <span class="text">Loan Apply</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-solid fa-leaf"></i>
                            <span class="text">Estate Owners</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-solid fa-users"></i>
                            <span class="text">Entrepreneurs</span>
                        </a>
                    </li>
                    <li>
                            <a href="#">
                                <i class="fa-solid fa-diamond fa-beat"></i>
                                <span class="text">Blogs</span>
                            </a>
                        </li>
                    <li class="active">
                        <a href="#">
                            <i class="fa-solid fa-address-book"></i>
                            <span class="text">Contact Us</span>
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
                    <a href="/AdminHome" class="nav-link">Dashboard</a>
                    <a href="/Admin_Contact" class="nav-link">View Contact</a>
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
                                    <a href="/AdminHome" >Dashboard</a>
                                </li>
                                <li><i class='bx bx-chevron-right' ></i></li>
                                <li>
                                    <a class="active" href="/Admin_Contact">View Contact</a>
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
                                <h3>ALL CONTACT DETAILS</h3>
                                
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Date Order</th>
                                        <th>Status</th>
                                        <th>Status</th>
                                        <th>Status</th>
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
                                        <td>This test Field</td>
                                        <td>This test Field</td>
                                        <td>This test Field</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="assets/images/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status pending">Pending</span></td>
                                        <td>This test Field</td>
                                        <td>This test Field</td>
                                        <td>This test Field</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="assets/images/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status process">Process</span></td>
                                        <td>This test Field</td>
                                        <td>This test Field</td>
                                        <td>This test Field</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="assets/images/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status pending">Pending</span></td>
                                        <td>This test Field</td>
                                        <td>This test Field</td>
                                        <td>This test Field</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="assets/images/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status completed">Completed</span></td>
                                        <td>This test Field</td>
                                        <td>This test Field</td>
                                        <td>This test Field</td>
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
    )
}

export default ViewContact;