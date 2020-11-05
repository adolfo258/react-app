import React, { useEffect, useState } from "react";
import axios from "axios";

const MealList = props => {
  const [AllMeals, setAllMeals] = useState([]);
  const token = localStorage.getItem("Authorization");

  useEffect(() => {
    getMeals();
  }, []);

  const getMeals = () => {
    axios
      .get("http://localhost:3001/meal", { headers: { Authorization: token } })
      .then(res => setAllMeals(res.data))
      .catch(err => console.log(err));
  };

  return (
    <ul>
      {AllMeals.map((meals, idx) => {
        return <li key={idx}>{meals.name}</li>;
      })}
    </ul>
  );
};

export default MealList;
