import { useContext, createContext, useState } from "react";

export const loginContext = createContext();
// eslint-disable-next-line react/prop-types
export function LoginProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <loginContext.Provider value={{ loggedIn, setLoggedIn }}>
        {children}
      </loginContext.Provider>
    </>
  );
}
