import axios from "axios";
import react from "react";
import { useState } from "react";
import Favorite from "../Favorite/Favorite";

const FavoriteList = ({favorites }) => {

  const Listoffavorites = favorites.map((favorite)) => (<Favorite key={favorite.id} favorite={favorite}  />)
  return (<div>{Listoffavorites}</div>)

};

export default FavoriteList;
