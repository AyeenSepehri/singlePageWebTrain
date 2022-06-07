import React, {useContext} from 'react'
import InstrumentationCard from '../components/Instruments/InstrumentationCard'
import FavoriteContext from "../store/favorites.context"
function LastPage() {
  const FavoriteCtx = useContext(FavoriteContext)
  let content ;
  if(FavoriteCtx.totalFavorites === 0){
    content = <p>you don't have favorite instrument yet,find your favorite instrument as soon as possible!</p> 
  }else{
    content =  <InstrumentationCard Items ={FavoriteCtx.favorites} />
  }
  return (
    <div>
    <h1>FavoritePage</h1>
    {content}
    </div>
    
    )
}

export default LastPage