import React, { Component } from 'react';
import axios from 'axios';

export default class ViewBlogPostInHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diseases:[]
    };

  }

  componentDidMount() {
    this.retrieveDiseases();
  }

  retrieveDiseases(){
    axios.get("http://localhost:8100/api/diseases").then(res => {
      if (res.data.success) {
        this.setState({
          diseases: res.data.existingDiseases
        });

        console.log(this.state.diseases);
      }
    });
  }


  onDelete = (id) => {

    axios.delete(`http://localhost:8100/api/diseases/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveDiseases();
    });
  }


  filterData(diseases, searchKey) {
    const result = diseases.filter((diseases) =>
      diseases.name.toLowerCase().includes(searchKey) ||
      diseases.reasons.toLowerCase().includes(searchKey)
    )

    this.setState({ diseases: result })
  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8100/api/diseases").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingDiseases, searchKey);
      }
    });

  }

  render() {
    return (
      <div>
        {/* Sub Header  */}
        <div class="sub-header">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-sm-8">
                <div class="left-content">
                  <p>Sri Lankan <em>CINNAMON</em> Cultivation Development </p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-4">
                <div class="right-icons">
                  <ul>
                    <li><a href="https://www.srilankabusiness.com/spices/about/cinnamon-cultivation-sri-lanka.html"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.srilankabusiness.com/spices/about/cinnamon-cultivation-sri-lanka.html"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.srilankabusiness.com/spices/about/cinnamon-cultivation-sri-lanka.html"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.srilankabusiness.com/spices/about/cinnamon-cultivation-sri-lanka.html"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ***** Header Area Start ***** */}
        <header class="header-area header-sticky">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <nav class="main-nav">
                  {/* ***** Logo Start ***** */}
                  <a href="/" class="logo">
                    CINNAMON
                  </a>
                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul class="nav">
                    <li class="scroll-to-section"><a href="/Farmer_Home" class="active">Home</a></li>
                    <li class="scroll-to-section"><a href="/Request_Harvest_List">Request Harvest</a></li>
                    <li class="scroll-to-section"><a href="/Apply_Bank_Loan">Apply Loan</a></li>
                    <li class="scroll-to-section"><a href="/Cinnamon_blog">Blog</a></li>
                    <li class="scroll-to-section"><a href="/Farmer_Dashboard">Dashboard</a></li>
                  </ul>

                  {/* ***** Menu End ***** */}
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* ***** Header Area End ***** */}

        {/* ***** Main Banner Area Start ***** */}
        <section class="section main-banner" id="top" data-section="section1">
          <video id="bg-video" controls autoPlay muted loop>
            <source src="assets/images/cinnamon.mp4" type="video/mp4" />
          </video>

          <div class="video-overlay header-text">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="caption">
                    <h6>Hello Sri Lankans</h6>
                    <h2>Welcome to CINNAMON</h2>
                    <p>Thank you to all of you who have come together to promote the local cinnamon trade and cultivation. Basic facilities are provided for all the services availed by this.</p>
                    <div class="main-button-red">
                      <div class=""><a href="/login">Join Us Now!</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Main Banner Area End ***** */}
        <div className='container text-center'>
        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Blog</h3>

            </div>

            <div className="row">
              {this.state.diseases.map((diseases,index) =>(
              <div className="col-sm-6 mt-3">
                <div className="card">
                  <div className="card-body text-center">
                    <p className='text-center'>Bank Registration ID : {diseases.name}</p>
                    <h5 class="card-title">Bank : {diseases.image}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Main Branch Location : {diseases.reasons}</h6>
                    <br />
                    <h6>Tel :  | Email : {diseases.youtube_links}</h6>
                    <p class="card-text">{diseases.treatments}</p>
                    <a href="#" class="card-link">Update</a>
                    <a href="#" class="card-link" >Delete Details</a>
                  </div>
                </div>
              </div>
              ))}
              <div className="col-sm-6 mt-3">
                <div className="card">
                  <div className="card-body text-center">
                    <p className='text-center'>Bank Registration ID : </p>
                    <h5 class="card-title">Bank : </h5>
                    <h6 class="card-subtitle mb-2 text-muted">Main Branch Location : </h6>
                    <br />
                    <h6>Tel :  | Email : </h6>
                    <p class="card-text"></p>
                    <a href="#" class="card-link">Update</a>
                    <a href="#" class="card-link" >Delete Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

