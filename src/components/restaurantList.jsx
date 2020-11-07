import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const RestaurantListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  .card {
    margin: 20px;
    border: 1px solid #000;
    width: 150px;
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
      margin-bottom: 10px;
    }

    .card__rol {
      color: #ff0033;
    }

    .card__manager {
      color: #ff0033;
    }

    .card__meal {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 130px;
    }
  }
`;

const RestaurantList = props => {
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const token = localStorage.getItem("Authorization");

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    axios
      .get("http://localhost:3001/restaurant", {
        headers: { Authorization: token },
      })
      .then(res => setAllRestaurants(res.data))
      .catch(err => console.log(err));
  };

  return (
    <RestaurantListContainer>
      {AllRestaurants.map((restaurant, idx) => {
        return (
          <div key={idx} className="card">
            <img src={`http://localhost:3001/${restaurant.avatar}`} alt="" />
            <div className="card__info">
              <p className="card__name">{restaurant.name}</p>
              <div className="card__meal">
                <i className="fas fa-utensils"></i>
                {restaurant.meals.map(meal => {
                  return <p>{meal.name}</p>;
                })}
                <i className="fas fa-user-tie"></i>
                <p className="card__manager">
                  {restaurant.managerId.name} {restaurant.managerId.lastName}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </RestaurantListContainer>
  );
};

export default RestaurantList;
