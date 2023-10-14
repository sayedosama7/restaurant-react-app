/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>

                            <nav className="navbar navbar-expand-lg bg-dark w-100">
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
                                            <Link className="nav-link text-light font-weight-bold" to="/contact">CONTACT</Link>
                                            <Link className="nav-link text-light font-weight-bold" to="/chefs">OUR CHEFS</Link>
                                            <Link className="nav-link text-light font-weight-bold" to="/testimonials">TESTIMONIALS</Link>
                                            <i className="fa-solid fa-phone-flip fa-beat text-warning pt-2 ml-2"></i>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>

        )
    }
}

export default NavBar
