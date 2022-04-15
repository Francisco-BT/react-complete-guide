import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};

const retrieveStoreToken = () => {
  const storedToken = localStorage.getItem("token");
  const storeExpirationDate = localStorage.getItem("expiration");

  const remainigTime = calculateRemainingTime(storeExpirationDate);

  if (remainigTime <= 60000) {
    localStorage.clear();
    return {};
  }

  return {
    token: storedToken,
    duration: remainigTime,
  };
};

export const AuthContextProvider = (props) => {
  const { token: initialToken, duration } = retrieveStoreToken();

  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.clear();

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationTime);
    const remainigTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainigTime);
  };

  useEffect(() => {
    if (duration) {
      console.log("token data duration: ", duration);
      logoutTimer = setTimeout(logoutHandler, duration);
    }
  }, [duration, logoutHandler]);

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
