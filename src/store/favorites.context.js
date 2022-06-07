import { createContext, useState } from "react";
const FavoriteContext = createContext({
    favorites : [],
    totalFavorites : 0,
    //dalil taarife in paeini ha?
    addFavoritesInstrument : (favoriteInstrument) => {},
    removeFavoritesInstrument : (instrumentId) => {},
    itemIsFavorite : (instrumentId) => {}
});
 // inja bayad pasvande provider ro bezarim ta create context beshnase.?
export function FavoriteContextProvider(props) {
//maziate stefade az bracket ya {} khali to use state?
  const [userFavorites, setUserFavorites] = useState([]);
  const addFavoritesInstrumentHandler = (favoriteInstrument) => {
    setUserFavorites((prevUserFavorite) =>{
      return prevUserFavorite.concat(favoriteInstrument);
    })
  }
  const removeFavoritesInstrumentHandler = (instrumentId) => {
    setUserFavorites(prevUserFavorite => {
      //yeki inja etelaati ke filter mishe az koja miad
      // va hamintor paein ke some mishe
      return prevUserFavorite.filter(instrument => instrument.id === !instrumentId)
    })
  }
  const itemIsFavoriteHandler = (instrumentId) => {
    setUserFavorites(prevUserFavorite => {
      //yeki hm inja vaghti in code ro az comment dar miaram chizi Dg load nemishe
      // return prevUserFavorite.some(instrument => instrument.id === instrumentId)
    })
  }
  const context = {
    favorites : userFavorites,
    //inja hm .length ro nemishnase
    // totalFavorites : userFavorites.length,
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
