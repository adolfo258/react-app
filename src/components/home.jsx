import React from "react";

const Home = props => {
  const logOut = () => {
    localStorage.removeItem("Authorized");
    props.history.push("/");
  };
  return (
    <>
      <h1>Home works!</h1>
      <button onClick={() => logOut()}>Cerrar sesion</button>
    </>
  );
};

export default Home;
