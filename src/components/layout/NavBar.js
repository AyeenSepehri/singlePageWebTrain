import React from 'react'
import {Link} from "react-router-dom"
import classes from "./NavBar.module.css"
function NavBar() {
  return (
    <header>
        <div className={classes.logo}>NavBar</div>
        <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/second">Second Page</Link></li>
            <li><Link to="/last">Last Page</Link></li>
        </ul>
    </header>
  )
}

export default NavBar