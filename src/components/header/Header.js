import React from 'react'
import "./header.css"
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header" >
            <Link to="/">
                <h2>Photos</h2>
            </Link>
        </header>
    )
}

export default Header
