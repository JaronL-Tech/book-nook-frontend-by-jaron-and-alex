import axios from "axios";
import react from "react";
import { useState } from "react";

const FavoriteList = ({BookDetailsDto, bookId }) => {
  const ListofFavorites = BookDetailsDto.Favorite;
  const Favorite =ListofFavorites.map((Favorite)) => (<Favorite key={favorite.id} favorite={favorite}  />)
  return <div>{Favorite}</div>

};

export default FavoriteList;
