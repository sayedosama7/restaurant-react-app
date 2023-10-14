import React, { Component } from 'react'
import Header from './Header'
import Services from './Services'
import AboutUs from './AboutUs'
import Menu from './Menu'
import Contact from './Contact'
import Chefs from './Chefs'
import Testimonial from './Testimonial'
import Footer from './Footer'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Services />
        <AboutUs />
        <Menu />
        <Contact />
        <Chefs />
        <Testimonial />
        <Footer />
      </div>
    )
  }
}

export default HomePage
