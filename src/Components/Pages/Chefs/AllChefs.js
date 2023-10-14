import React, { Component } from 'react'
import NavBar from '../../NavBar'
import Chefs from '../../Chefs'

export class AllChefs extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Chefs />
            </div>
        )
    }
}

export default AllChefs
