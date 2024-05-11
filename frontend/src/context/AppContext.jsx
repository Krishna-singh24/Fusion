'use client';
import { useRouter } from "next/navigation";

const { createContext, useState, useContext } = require("react");

const AppContext = createContext();

export const AppProvider = ({ children }) => {

   const [currentUser, setCurrentUser] = useState((localStorage.getItem('token')) || null);

   const [loggedIn, setLoggedIn] = useState(currentUser !== null);
   const router = useRouter();

   const logout = () => {
      localStorage.removeItem('token');
      setCurrentUser(null);
      setLoggedIn(false);
      router.push('/login');
   }

   return (
      <AppContext.Provider value={{ currentUser, loggedIn, setLoggedIn, logout }}>
         {children}
      </AppContext.Provider>
   )
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;