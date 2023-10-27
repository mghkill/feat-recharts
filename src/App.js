import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { Toaster } from "react-hot-toast";

function App() {


  return (
   <>
    <Toaster position="top-right" reverseOrder={false} />
    <GlobalStyle />
    <Routes />
   </>
  );
}

export default App;
