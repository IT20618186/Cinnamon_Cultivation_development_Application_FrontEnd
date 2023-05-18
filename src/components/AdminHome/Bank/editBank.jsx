import React, { Component } from 'react'

class EditBank extends Component {

    render() {
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
                            <a href="/Bank_Reg_Details" class="nav-link">Bank Details Registration</a>
                            <a href="/All_Branches_Details" class="nav-link">View Bank Details</a>

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
                                    <h1>Admin Dashboard</h1>
                                    <ul class="breadcrumb">
                                        <li>
                                            <a href="#">Dashboard</a>
                                        </li>
                                        <li><i class='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">Bank</a>
                                        </li>
                                        <li><i class='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a class="active" href="#">Update Bank Details</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="d-flex justify-content-center mt-3">
                                <div className="p-5 text-bg-light rounded">
                                    <h1 className='text-center'>Updated Bank Details</h1>
                                    <form className='mt-5'>
                                        <form class="row g-3">
                                            <div class="col-md-6">
                                                <label for="inputText" class="form-label">Bank Updated ID</label>
                                                <input type="text" class="form-control" id="inputText" name='bankRegID' />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputText" class="form-label">bank's Name</label>
                                                <input type="text" class="form-control" id="inputText" name='bankName' />
                                            </div>
                                            <div class="col-12">
                                                <label for="inputText" class="form-label">Main Branch Venue</label>
                                                <input type="text" class="form-control" id="inputText" placeholder="City or Main town" name='mainBranchVenue' />
                                            </div>
                                            <div class="col-12">
                                                <label for="inputText" class="form-label">Number of Branches</label>
                                                <input type="number" class="form-control" id="inputNumber" name='numOfBranches' />
                                            </div>
                                            <div class="col-12">
                                                <label for="inputText" class="form-label">Bank Telephone Number</label>
                                                <input type="tel" class="form-control" id="inputNumber" name='bankMobile' />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputEmail" class="form-label">Bank Email</label>
                                                <input type="email" class="form-control" id="inpuEmail" name='bankEmail' />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputText" class="form-label">History of Bank</label>
                                                <textarea type="text" class="form-control" id="inputText" name='historyOfBank' rows="2" />
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-warning">Updated Banks</button>
                                            </div>
                                        </form>
                                    </form>
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


}

export default EditBank;