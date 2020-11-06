import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const MealListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  .card {
    margin: 20px;
    border: 1px solid #000;
    width: 150px;
    height: fit-content;
    text-align: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 16px rgba(0, 0, 0, 0.3);
    }

    img {
      width: 100%;
      height: 120px;
    }

    .card__info {
      padding-bottom: 5px;
    }

    .card__name {
      font-size: 18px;
      font-weight: 700;
    }

    .card__rol {
      color: #ff0033;
    }
  }
`;

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
    <MealListContainer>
      {AllMeals.map((meals, idx) => {
        return (
          <div key={idx} className="card">
            <img src={`http://localhost:3001/${meals.avatar}`} alt="" />
            <div className="card__info">
              <p className="card__name">{meals.name}</p>
            </div>
          </div>
        );
      })}
    </MealListContainer>
  );
};

export default MealList;
