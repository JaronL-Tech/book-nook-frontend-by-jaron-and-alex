import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import axios from "axios";

const FavoritesPage = ({}) => {
  const [user, token] = useAuth();
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    try {
      let response = await axios.get(
        " https://localhost:5001/api/favorites/myfavorites",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
      setFavorites(response.data);
    } catch (error) {
      console.warn("Error with Favorites request", error);
    }
  };
  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div>
      <FavoriteList favorites={favorites} />
    </div>
  );
};

export default FavoritesPage;
