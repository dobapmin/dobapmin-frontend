import { useContext, createContext, useState, useEffect } from "react";

export const loginContext = createContext();
// eslint-disable-next-line react/prop-types

function localDobapmin() {
  const local_dobapmin = localStorage.getItem("dobapmin");
  return local_dobapmin !== "" ? JSON.parse(local_dobapmin) : null;
}
export function LoginProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(localDobapmin());

  return (
    <>
      <loginContext.Provider value={{ loggedIn, setLoggedIn }}>
        {children}
      </loginContext.Provider>
    </>
  );
}
