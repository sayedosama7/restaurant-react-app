import React, { Component } from 'react'
import NavBar from '../../NavBar'
import Services from '../../Services'

export class AllServices extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Services />
            </div>
        )
    }
}

export default AllServices
