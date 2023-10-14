/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="text-center text-lg-start text-white">
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <a href="" className="me-4 link-warning">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="" className="me-4 link-warning">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className="me-4 link-warning">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="" className="me-4 link-warning">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="" className="me-4 link-warning">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="" className="me-4 link-warning">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-warning">
                                        <i className="fas fa-gem me-3"></i>restoran
                                    </h6>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque quaerat
                                        magnam! Earum nesciunt nostrum consequuntur! Consequatur alias eum sint.
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
                                    <h6 className="text-uppercase fw-bold mb-4 text-warning">
                                        menu
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">breakfast</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">launch</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">dinner</a>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-warning">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">menu</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">resirvation</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Orders</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Help</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-warning">Contact</h6>
                                    <p><i className="fas fa-home me-3  text-warning"></i> New York, NY 10012, US</p>
                                    <p>
                                        <i className="fas fa-envelope me-3  text-warning"></i>
                                        info@example.com
                                    </p>
                                    <p><i className="fas fa-phone me-3  text-warning"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print me-3  text-warning"></i> + 01 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
                        © 2023 Copyright:
                        <a className="text-warning fw-bold" href="tel:+201210304516">sayed osama</a>
                    </div>
                </footer>
            </div>

        )
    }
}

export default Footer
