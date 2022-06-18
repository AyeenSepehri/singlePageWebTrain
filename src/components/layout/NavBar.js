import React from 'react'
import {Link} from 'react-router-dom'
import classes from './NavBar.module.css'
function NavBar() {
    return (
        <header className={classes.nav}>
            <h1 className={classes.logo}>Single Page Web Train</h1>
            <ul className={classes.list}>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/second">Second Page</Link></li>
                <li><Link to="/last">Last Page</Link></li>
            </ul>
        </header>
    )
}

export default NavBar