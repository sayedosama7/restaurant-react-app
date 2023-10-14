/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export class Chefs extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid chefs" id="chefs">
                    <div className="row">
                        <div className="col-md-12 text-center menu-title">
                            <h4 className="text-warning caveat">Team Members</h4>
                            <p className="h1 cursive font-weight-bold text-dark">Our Master Chefs</p>
                        </div>

                        <div className="col-md-6 col-lg-3 mt-5 wow fadeInUp">
                            <div className="card p-3 text-center">
                                <img className="img-fluid rounded-circle" src="./images/team-1.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title text-dark">full name</h5>
                                    <p className="card-text">destination</p>
                                    <div className="chefs-icons">
                                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                                        <a href=""><i className="fa-brands fa-facebook-messenger"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mt-5 wow fadeInUp" data-wow-delay=".2s">
                            <div className="card p-3 text-center">
                                <img className="img-fluid rounded-circle" src="./images/team-2.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title text-dark">full name</h5>
                                    <p className="card-text">destination</p>
                                    <div className="chefs-icons">
                                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                                        <a href=""><i className="fa-brands fa-facebook-messenger"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mt-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="card p-3 text-center">
                                <img className="img-fluid rounded-circle" src="./images/team-3.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title text-dark">full name</h5>
                                    <p className="card-text">destination</p>
                                    <div className="chefs-icons">
                                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                                        <a href=""><i className="fa-brands fa-facebook-messenger"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mt-5 wow fadeInUp" data-wow-delay=".6s">
                            <div className="card p-3 text-center">
                                <img className="img-fluid rounded-circle" src="./images/team-4.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title text-dark">full name</h5>
                                    <p className="card-text">destination</p>
                                    <div className="chefs-icons">
                                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                                        <a href=""><i className="fa-brands fa-facebook-messenger"></i></a>
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

export default Chefs
