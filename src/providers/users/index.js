import { createContext, useState, useContext, useEffect, /* useEffect */ } from "react";
import api from "../../services/api";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

const UserContext = createContext({});

const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

const UserProvider = ({ children }) => {
    const [seriesList, setSeriesList] = useState([]);
    const [openDrop, setOpenDrop] = useState(false);

    const [userToken, setUserToken] = useState(
      localStorage.getItem("@Challenge:token") || ""
    );

    const [decoded, setdecoded] = useState(
        localStorage.getItem("@Challenge:decoded") || 0
    );

    const signIn = async (data) => {
      const response = await api.post("/login", data);
      const { token } = response.data;
      const decodedToken = jwtDecode(token);
      localStorage.setItem("@Challenge:token", token);
      localStorage.setItem("@Challenge:decoded", JSON.stringify(decodedToken));
      setUserToken(token);
      setdecoded(decodedToken); 
    };

    const signOut = () => {
      setOpenDrop(true); 
      localStorage.removeItem("@Challenge:token");
      localStorage.removeItem("@Challenge:decoded");
      setUserToken(false);
      setOpenDrop(false); 
      toast.success("Você deslogou!");
    };

    useEffect(() => {
      if (userToken) {
        api
          .get("/data/timeserie/AirDewpoint?start=1693536210191&end=1698418537191&environment=c3qnj8pcb5eltsgqjgqg&function=MEAN&group=time(1h)&fill=none", {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then((response) => {
            setSeriesList(response.data);
            localStorage.setItem("@Challenge:list", JSON.stringify(response.data));
            toast.success("Login realizado com sucesso!");

          })
          .catch((err) => {
            console.log(err)
            toast.error("Algo deu errado, tente novamente!")
            signOut()
          });
      }
    }, [userToken]);

    

    return (
        <UserContext.Provider
          value={{
            userToken,
            seriesList,
            signIn,
            signOut,
            decoded,
            openDrop
          }}
        >
          {children}
        </UserContext.Provider>
    );

};

export { UserProvider, useUser };