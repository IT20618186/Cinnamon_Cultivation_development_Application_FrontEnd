import React, { Component } from 'react'

export default class AddContact extends Component {


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
                        <a href="#" class="nav-link">Categories</a>
                        <a href="#" class="nav-link">Categories</a>
                        <a href="#" class="nav-link">Categories</a>
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
                                <h1>Dashboard</h1>
                                <ul class="breadcrumb">
                                    <li>
                                        <a href="#">Dashboard</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a class="active" href="#">Home</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center mt-3">
                            <div className="p-5 text-bg-light rounded">
                                <h1 className='text-center'>Add Function</h1>
                                <form className='mt-5'>
                                    <form class="row g-3">
                                        <div class="col-md-6">
                                            <label for="inputEmail4" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="inputEmail4" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputPassword4" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="col-12">
                                            <label for="inputAddress" class="form-label">Address</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                        </div>
                                        <div class="col-12">
                                            <label for="inputAddress2" class="form-label">Address 2</label>
                                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                        </div>
                                        <div class="col-12">
                                            <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                                            <input class="form-control" type="file" id="formFileMultiple" multiple />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputCity" class="form-label">City</label>
                                            <input type="text" class="form-control" id="inputCity" />
                                        </div>
                                        <div class="col-md-4">
                                            <label for="inputState" class="form-label">State</label>
                                            <select id="inputState" class="form-select">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div class="col-md-2">
                                            <label for="inputZip" class="form-label">Zip</label>
                                            <input type="text" class="form-control" id="inputZip" />
                                        </div>
                                        <div class="col-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                <label class="form-check-label" for="gridCheck">
                                                    Check me out
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-primary">Sign in</button>
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
        )
    }
}

