import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import FavoriteList from "../../components/FavoriteList";
import Favorites from "../../components/Favorite";

import axios from "axios";
const FavoritesPage = ({}) => {
  const [user, token] = useAuth();
  const [favorites, setFavorites] = useState([]);
  return <></>;
};

export default FavoritesPage;
