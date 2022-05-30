import React from 'react'
import InstrumentationItems from "./InstrumentationItems"
import classes from "./InstrumentationCard.module.css"
function InstrumentationCard(props) {
    return (
        <div className={classes.card}>
            {props.Items.map((Item) => 
            <InstrumentationItems 
                key={Item.id} 
                id={Item.id}
                image = {Item.image}
                name ={Item.name}
                type = {Item.type}
                info ={Item.info} 
            />)}
        </div>
    )
}

export default InstrumentationCard