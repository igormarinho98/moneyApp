 import IUser from "../../interfaces/IUser";
 import ListUsers from "../ListUsers";
 import NavBar from "../Navbar";

 
  interface UserProps {
    user?: IUser
  }


   const User =  ({ user } : UserProps ) => {

    return (
        <div>
          <NavBar/>
          <ListUsers/>
        </div>
    )

   }
 
 export default User;