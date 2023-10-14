import React, { Component } from 'react'

export class Testimonial extends Component {
    render() {
        return (
            <div>
                <div className="container testimonial p-5" id="testimonials">
                    <div className="row wow bounceIn">

                        <div className="col-md-12 text-center menu-title">
                            <h4 className="text-warning caveat">testimonials</h4>
                            <p className="h1 cursive font-weight-bold text-dark">Our Clients Say!!!</p>
                        </div>

                        <div className="col-md-6 col-lg-4 ">
                            <div className="border p-4 mt-4 rounded bg-warning text-light">
                                <i className="fa fa-quote-left fa-2x text-light mb-3"></i>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, maiores molestias eos
                                    explicabo
                                    consectetur dignissimos.</p>
                                <div className="d-flex">
                                    <img className="img-fluid rounded-circle mr-3" src="./images/testimonial-1.jpg" alt="" />
                                    <div className="pt-4">
                                        <h5 className="text-dark">client name</h5>
                                        <p className="font-italic">profession</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 ">
                            <div className="border p-4 mt-4 rounded bg-warning text-light">
                                <i className="fa fa-quote-left fa-2x text-light mb-3"></i>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, maiores molestias eos
                                    explicabo
                                    consectetur dignissimos.</p>
                                <div className="d-flex">
                                    <img className="img-fluid rounded-circle mr-3" src="./images/testimonial-2.jpg" alt="" />
                                    <div className="pt-4">
                                        <h5 className="text-dark">client name</h5>
                                        <p className="font-italic">profession</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-4 ">
                            <div className="border p-4 mt-4 rounded bg-warning text-light">
                                <i className="fa fa-quote-left fa-2x text-light mb-3"></i>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, maiores molestias eos
                                    explicabo
                                    consectetur dignissimos.</p>
                                <div className="d-flex">
                                    <img className="img-fluid rounded-circle mr-3" src="./images/testimonial-3.jpg" alt="" />
                                    <div className="pt-4">
                                        <h5 className="text-dark">client name</h5>
                                        <p className="font-italic">profession</p>
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

export default Testimonial
