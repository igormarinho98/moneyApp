import IApp from "../../interfaces/IApp";
import ListApplication from "../../components/ListApplication";
import NavBar from "../../components/Navbar";

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