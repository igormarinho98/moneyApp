import IApp from "../../interfaces/IApp";
import ListApplication from "../ListApplication";
import NavBar from "../Navbar";

  interface AppProps {
    app?: IApp
  }

const Application = () => {
    return (
        <>
        <NavBar></NavBar>
          <ListApplication/>
         </>
    )
}

export default Application;