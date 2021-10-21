import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [loggedUser, setLoggesUser] = useState(null);
  useEffect(() => {
    if (isAuthenticated) {
      setLoggesUser(user);
    } else {
      setLoggesUser(null);
    }
  }, [isAuthenticated]);
  return (
    <UserContext.Provider
      value={{ loginWithRedirect, logout, user, loggedUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
