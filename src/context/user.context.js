import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = props => {
  const [userLoged, setUserLoged] = useState(null);

  return (
    <UserContext.Provider value={{ userLoged, setUserLoged }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
