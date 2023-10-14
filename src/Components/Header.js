/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid header">
                    <div className="row">

                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg  bg-transparent">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to="/">
                                        <i className="fa-solid fa-utensils text-warning"></i>
                                        <h1 className="text-warning"> Restoran</h1>
                                    </Link>
                                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                                        data-mdb-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div className="navbar-nav ml-auto">
                                            <Link className="nav-link active text-warning font-weight-bolder" aria-current="page"
                                                to="/">Home</Link>
                                            <Link className="nav-link text-light font-weight-bold" to="/about">ABOUT</Link>
                                            <Link className="nav-link text-light font-weight-bold" to="/services">SERVICE</Link>
                                            <Link className="nav-link text-light font-weight-bold" to="/menu">MENU</Link>
                                            <v className="nav-link text-light font-weight-bold" to="#contact">CONTACT</v>
                                            <Link className="nav-link text-light font-weight-bold" to="/chefs">OUR CHEFS</Link>
                                            <Link className="nav-link text-light font-weight-bold" to="/testimonials">TESTIMONIALS</Link>
                                            <a href="tel:+20121034516"><i className="fa-solid fa-phone-flip fa-beat text-warning pt-2 ml-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        <div className="col-md-12 col-lg-6 header-caption">
                            <h2 className="animate__animated animate__fadeInLeft">Enjoy Our <br />
                                Delicious Meal</h2>
                            <p className="my-4 animate__animated animate__fadeInLeft w-70">Tempor erat elitr rebum at clita. Diam dolor
                                diam
                                ipsum sit. Aliqu diam amet diam et eos.
                                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <button className="btn btn-warning btn-lg font-weight-bold animate__animated animate__fadeInUpBig">BOOK A
                                TABLE</button>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <img className="img-fluid" src="./images/hero.png" alt="" />
                        </div>
                        <div className="col">
                            <a href="/"><i className="fa-solid fa-circle-up fa-bounce"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
