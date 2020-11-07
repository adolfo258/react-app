import React, { useState } from "react";
import styled from "styled-components";
import UserList from "./userList";
import RestaurantList from "./restaurantList";
import MealList from "./mealList";

const Nav = styled.nav`
  background: linear-gradient(to bottom, #292e49, #536976);

  width: 100%;
  height: 80px;
  background-color: #212121;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;

  .links__container {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
  }

  .links {
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: 0.5s;
    padding-bottom: 4px;
    font-size: 18px;

    &:hover {
      border-bottom: 2px solid #fff;
    }
  }

  .btn__logout {
    height: fit-content;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #fff;
    outline: none;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  .user__data__container {
    border: 1px solid #fff;
    padding: 5px;
    border-radius: 5px;
    width: 190px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      border-radius: 3px;
      width: 60px;
      height: 60px;
    }

    .user__data__name {
      font-size: 18px;
    }
  }
`;

const Home = props => {
  const [list, setList] = useState();

  const logOut = () => {
    localStorage.removeItem("Authorization");
    props.history.push("/");
  };

  return (
    <>
      <Nav>
        <ul className="links__container">
          <li className="links" onClick={() => setList("users")}>
            Usuarios
          </li>
          <li className="links" onClick={() => setList("restaurants")}>
            Restaurantes
          </li>
          <li className="links" onClick={() => setList("meals")}>
            Comidas
          </li>
        </ul>
        <button className="btn__logout" onClick={() => logOut()}>
          Cerrar Sesion
        </button>
      </Nav>
      {list === "users" && <UserList />}
      {list === "restaurants" && <RestaurantList />}
      {list === "meals" && <MealList />}
    </>
  );
};

export default Home;
