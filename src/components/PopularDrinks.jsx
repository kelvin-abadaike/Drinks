import React, { Component } from 'react'
import FilterNav from './FilterNav'
import PopularContent from './PopularContent'

class PopularDrinks extends Component {

    render() {
        return (
            <div className={''}>
                <FilterNav />
                <PopularContent />
            </div>
        )
    }
}

export default PopularDrinks
