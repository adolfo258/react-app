import React, { useEffect, useState } from "react";
import axios from "axios";

const RestaurantList = props => {
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const token = localStorage.getItem("Authorization");

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    axios
      .get("http://localhost:3001/restaurant", { headers: { Authorization: token } })
      .then(res => setAllRestaurants(res.data))
      .catch(err => console.log(err));
  };

  return (
    <ul>
      {AllRestaurants.map((restaurant, idx) => {
        return <li key={idx}>{restaurant.name}</li>;
      })}
    </ul>
  );
};

export default RestaurantList;
