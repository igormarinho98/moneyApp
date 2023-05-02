import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card, CardContent, Button } from "@mui/material";
import styles from "./ListUsers.module.scss";
  
import IUser from "../../interfaces/IUser";
 
const url = 'http://localhost:3000/users';

const ListUsers = () => {

    const [users, setUsers] = useState<IUser[]>([]);

        useEffect(() => {
            axios.get(url)
            .then(response => {
            setUsers(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        }, [users]);

        return (
<div>

 
<ul>
{users.map(dado => (
   <Card sx={{ minWidth: 275}} color="text-secondary">
    <h2>{dado.first_name} {dado.last_name}</h2>
   <CardContent>
 <li className={styles.main} key={dado._id as any}>
     <div >
       <p>User ID: {dado._id}</p>
       <p>Username: {dado.username}</p>
        
       <p>Email: {dado.email}</p>
       <p>Password: {dado.password}</p>
       <p>Created: {dado.created_at}</p>
       <li><Button color="warning" variant="contained">Editar</Button></li>
    <li><Button color="error" variant="contained">Excluir</Button></li>

       
      </div>
   </li>
</CardContent>
 </Card>
 ))} 
</ul>
</div>
        )

}

export default ListUsers;