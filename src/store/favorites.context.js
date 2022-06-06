import { createContext, useState } from "react";
const FavoriteContext = createContext({
    favorites : [],
    totalFavorites : 0,
    addFavoritesInstrument : (favoriteInstrument) => {},
    removeFavoritesInstrument : (instrumentId) => {},
    itemIsFavorite : (instrumentId) => {}
});

export function FavoriteContextProvider(props) {

  const [userFavorites, setUserFavorites] = useState();
  const addFavoritesInstrumentHandler = (favoriteInstrument) => {
    setUserFavorites((prevUserFavorite) =>{
      return prevUserFavorite.concat(favoriteInstrument);
    })
  }
  const removeFavoritesInstrumentHandler = (instrumentId) => {
    setUserFavorites(prevUserFavorite => {
      return prevUserFavorite.filter(Item => Item.id === !instrumentId)
    })
  }
  const itemIsFavoriteHandler = (instrumentId) => {
    setUserFavorites(prevUserFavorite => {
      return prevUserFavorite.some(Item => Item.id === instrumentId)
    })
  }
  const context = {
    favorites : userFavorites,
    totalFavorites : userFavorites.length,
    addFavoritesInstrument : addFavoritesInstrumentHandler,
    removeFavoritesInstrument : removeFavoritesInstrumentHandler,
    itemIsFavorite : itemIsFavoriteHandler,
  }
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  )
}
 export default FavoriteContext ;
