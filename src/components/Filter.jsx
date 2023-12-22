import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import './component.css'

export default function Filter( props ){
    const [backgroundFilter, setBackgroundFilter] = useState('All');

    const handleFilter = (status) => {
        props.setFilter (status);
        setBackgroundFilter(status)
    }
    return (
        <div className="item-filter flex mt-5 gap-8 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <Link className="btn-filter text-center max-w-2xl px-4 sm:px-6 lg:px-8" 
            to={'/'} 
            onClick={() => handleFilter('All')}
            style={{backgroundColor: backgroundFilter === 'All' ? '#F9D1CB' : 'transparent',}}>All</Link>

            <Link className="btn-filter text-center max-w-2xl px-4 sm:px-6 lg:px-8" 
            to={'/active'} 
            onClick={() => handleFilter('Active')}
            style={{backgroundColor: backgroundFilter === 'Active' ? '#F9D1CB' : 'transparent',}}>Active</Link>
            
            <Link className="btn-filter text-center max-w-2xl px-4 sm:px-6 lg:px-8" 
            to={'/completed'} 
            onClick={() => handleFilter('Completed')}
            style={{backgroundColor: backgroundFilter === 'Completed' ? '#F9D1CB' : 'transparent',}}>Completed</Link>
        </div>
    )
}

Filter.propTypes = {
    setFilter: PropTypes.func.isRequired
}