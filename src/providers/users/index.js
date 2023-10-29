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
  const [ polygonList, setPolygonList] = useState([])

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

  const polygonRef = () => {
    
    if (userToken) {
      api
        .get("https://api.prediza.io/api/account/environment/bkbau6tvva44af0lbiog/polygon/", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          setPolygonList(response.data);
          

        })
        .catch((err) => {
          console.log(err)
          toast.error("Algo deu errado, tente novamente!")
          signOut()
        });
    }
  } 

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
        }
      );
      polygonRef();
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
        openDrop,
        polygonList
      }}
    >
      {children}
    </UserContext.Provider>
  );

};

export { UserProvider, useUser };