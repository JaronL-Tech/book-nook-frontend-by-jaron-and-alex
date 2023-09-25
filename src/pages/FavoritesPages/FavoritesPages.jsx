import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import FavoriteList from "../../components/FavoriteList";
import Favorites from "../../components/Favorite";
import axios from "axios";

const FavoritesPage = ({}) => {
  const [user, token] = useAuth();
  const [favorites, setFavorites] = useState([]);

  const FetchFavorites = async (Favorites) => {
    try {
      let response = await axios.get(
        " http://localhost:5000/api/favorites/myfavorites",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
      setFavorites = FetchFavorites();
    } catch (error) {
      console.warn("Error with Favorites request", error);
    }
  };
  useEffect(() => {
    FetchFavorites();
  }, []);

  return (
    <div>
      <FavoriteList favorites={favorites} />
    </div>
  );
};

export default FavoritesPage;
