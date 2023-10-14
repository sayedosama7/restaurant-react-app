import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid services" id="services">
                    <div className="row">

                        <div className="col-md-6 col-lg-3 mb-4 wow fadeInUp">
                            <div className="card">
                                <i className="fa-solid fa-user-tie text-warning mr-auto pl-4 pt-4"></i>
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bolder text-dark">master chefs</h5>
                                    <p className="card-text">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="card">
                                <i className="fa-solid fa-utensils text-warning mr-auto pl-4 pt-4"></i>
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bolder text-dark">quality food</h5>
                                    <p className="card-text">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4 wow fadeInUp" data-wow-delay=".4s">
                            <div className="card">
                                <i className="fa-solid fa-cart-plus text-warning mr-auto pl-4 pt-4"></i>
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bolder text-dark">online orders</h5>
                                    <p className="card-text">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".6s">
                            <div className="card">
                                <i className="fa-solid fa-headphones text-warning mr-auto pl-4 pt-4"></i>
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bolder text-dark">24/7 service</h5>
                                    <p className="card-text">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
