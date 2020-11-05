import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = props => {
  const [Allusers, setAllUsers] = useState([]);
  const token = localStorage.getItem("Authorization");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost:3001/user", { headers: { Authorization: token } })
      .then(res => setAllUsers(res.data))
      .catch(err => console.log(err));
  };

  return (
    <ul>
      {Allusers.map((user, idx) => {
        return <li key={idx}>{user.name}</li>;
      })}
    </ul>
  );
};

export default UserList;
