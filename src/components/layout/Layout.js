import React from 'react'
import NavBar from './NavBar'
import classes from './Layout.module.css'
function Layout(props) {
    return (
        <div className={classes.body}>
            <NavBar/>
            <main>{props.children}</main>
        </div>
    )
}

export default Layout