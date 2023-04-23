 import IUser from "../../interfaces/IUser";
 import ListUsers from "../ListUsers";
 import NavBar from "../Navbar";
import CreateUser from "../CreateUser";
 
  interface UserProps {
    user?: IUser
  }


   const User =  ({ user } : UserProps ) => {

    return (
        <div>
          <NavBar/>
          <CreateUser/>
          <ListUsers/>
        </div>
    )

   }
 
 export default User;