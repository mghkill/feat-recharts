import { createContext, useState, useContext, /* useEffect */ } from "react";
/* import api from "../../services/api";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast"; */

const UserContext = createContext({});

const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

const UserProvider = ({ children }) => {
 

    const [token, setToken] = useState(
        localStorage.getItem("@Teste:token") || false
    );

    const [userId, setUserId] = useState(
        localStorage.getItem("@Teste:userId") || 0
    );
     

    const signIn = async (data) => {
        setUserId("USERID TESTE")
        setToken("USERTOKEN TESTE")
    };

    const signOut = () => {
    
    };

    return (
        <UserContext.Provider
          value={{
            token,
            userId,
            signIn,
            signOut,
          }}
        >
          {children}
        </UserContext.Provider>
    );

};

export { UserProvider, useUser };