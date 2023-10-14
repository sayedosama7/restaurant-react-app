import React, { Component } from 'react'

export class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="container about" id="about">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="col-md-12 d-flex">
                                <div className="col-md-8 wow bounceInLeft">
                                    <img className="img-fluid" src="./images/about-1.jpg" alt="" />
                                </div>
                                <div className="col-md-4 d-flex flex-column-reverse wow bounceInRight">
                                    <img className="img-fluid" src="./images/about-2.jpg" alt="" />
                                </div>
                            </div>

                            <div className="col-md-12 d-flex mt-4">
                                <div className="col-md-4 wow bounceInLeft">
                                    <img className="img-fluid" src="./images/about-3.jpg" alt="" />
                                </div>
                                <div className="col-md-8 wow bounceInRight">
                                    <img className="img-fluid" src="./images/about-4.jpg" alt="" />
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 about-caption wow bounceInUp">
                            <h5 className="text-warning">about us</h5>
                            <h2 className="text-dark font-weight-bold">Welcome to
                                <span>
                                    <i className="fa-solid fa-utensils text-warning"></i>
                                </span>
                                Restoran
                            </h2>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum
                                et lorem et sit, sed stet lorem sit.</p>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                                ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat ametب</p>
                            <div className="d-flex justify-content-around my-5 experience">
                                <div className="mb-4">
                                    <div className="d-flex">
                                        <p className="number text-warning mr-3 pt-2 h1 font-weight-bold">15</p>
                                        <h4 className="text-muted">years <br /> <span className="text-dark">experience</span></h4>
                                    </div>
                                </div>

                                <div>
                                    <div className="d-flex">
                                        <p className="number text-warning mr-3 pt-2 h1 font-weight-bold">15</p>
                                        <h4 className="text-muted">years <br /> <span className="text-dark">experience</span></h4>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-warning btn-lg font-weight-bold">BOOK A TABLE</button>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs
