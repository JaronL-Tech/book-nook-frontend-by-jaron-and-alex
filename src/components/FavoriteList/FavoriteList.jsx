import axios from "axios";
import react from "react";
import { useState } from "react";
import Favorite from "../Favorite/Favorite";

const FavoriteList = ({ favorites = [] }) => {
  const ListOfFavorites = favorites.map((favorite) => (
    <Favorite
      key={favorite.id}
      title={favorite.title}
      thumbnailUrl={favorite.thumbnailUrl}
    />
  ));
  return <div>{ListOfFavorites}</div>;
};

export default FavoriteList;
