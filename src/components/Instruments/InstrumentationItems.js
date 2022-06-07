import React from 'react'
import {useContext} from "react"
import classes from "./InstrumentationItems.module.css"
import Card from '../ui/Card'
import FavoriteContext from "../../store/favorites.context"
function InstrumentationItems(props) {
  const favoriteCtx = useContext(FavoriteContext)
  //inja props.id, id az koja miad va be che dardi mikhore.?
  const ItemIsFavorite = favoriteCtx.itemIsFavorite(props.id)
  const toggleFavoritesStatusHandler = () => {
    if(ItemIsFavorite){
      //va hamin ja hm hamintor
      favoriteCtx.removeFavoritesInstrument(props.id)
    }else{
      favoriteCtx.addFavoritesInstrument({
        //inja hm nemidoonm chera ba return sync nashod
        id: props.id,
        image: props.image,
        name: props.name,
        type: props.type,
        info: props.info,
      })
    }
  }
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
              <button className={classes.favoritebtn} onClick={toggleFavoritesStatusHandler}>
                {ItemIsFavorite ? "Remove Favorite" : "To Favorite"}
              </button>
            </div>
        </section>
    </Card>
  )
}

export default InstrumentationItems