import React from 'react'
import classes from "./InstrumentationItems.module.css"
import Card from '../ui/Card'
function InstrumentationItems(props) {
  return (
    <Card>
      <section className={classes.container}>
            <div className={classes.title}>
                <h2>ساز شناسی</h2>
            </div>
            <div className={classes.img}>
                <img src={props.image} alt="" key={props.id}/>
            </div>
            <h4 className={classes.instrument}>{props.name}</h4>
            <p className={classes.type}>{props.type}</p>
            <p className={classes.info}>{props.info}</p>
            <div className={classes.btnsection}>
              <button className={classes.favoritebtn}>Add to favorite</button>
            </div>
        </section>
    </Card>
  )
}

export default InstrumentationItems