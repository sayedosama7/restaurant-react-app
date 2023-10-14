import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid contact" id="contact">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 mt-5">
                            <img className="img-fluid" src="./images/video.jpg" alt="" />
                        </div>

                        <div className="col-md-12 col-lg-6 contact-form wow bounceInRight" data-wow-delay=".3s">
                            <div className="col-md-12 mb-3">
                                <h4 className="text-warning caveat">reservation</h4>
                                <p className="h1 cursive font-weight-bold text-light">book a table online</p>
                            </div>
                            <form>

                                <div className="row">

                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input type="text" id="form6Example1" className="form-control" />
                                            <label className="form-label text-dark" for="form6Example1">full name</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-outline">
                                            <input type="email" id="form6Example5" className="form-control" />
                                            <label className="form-label text-dark" for="form6Example5">Email</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <input type="text" className="text-dark form-control datetimepicker-input" id="datetime"
                                            placeholder="Date &amp; Time" data-target="#date3" data-toggle="datetimepicker" />
                                    </div>

                                    <div className="col-md-6">
                                        <select className="form-select" id="select1">
                                            <option value="1">People 1</option>
                                            <option value="2">People 2</option>
                                            <option value="3">People 3</option>
                                        </select>
                                        <label className="select-label text-muted" for="select1">No Of People</label>
                                    </div>
                                </div>

                                <div className="form-outline mb-4">
                                    <textarea className="form-control bg-light" id="form6Example7" rows="4"></textarea>
                                    <label className="form-label text-dark" for="form6Example7">special request</label>
                                </div>

                                <button type="submit" className="btn btn-warning btn-block m-auto w-50 btn-lg mb-4">Place order</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
