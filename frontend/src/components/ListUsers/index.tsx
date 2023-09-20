import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Divider, Paper } from "@mui/material";
import styles from "./ListUsers.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IUser from "../../interfaces/IUser";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const url = 'https://moneyapp.onrender.com/users';

const ListUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="tabela de usuários">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>ID do Usuário</TableCell>
              <TableCell>Nome de Usuário</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Senha</TableCell>
              <TableCell>Data de Criação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((dado) => (
              <TableRow key={dado._id as any}>
                <TableCell>
                  <AccountCircleIcon sx={{ fontSize: 35, color: "green" }} />
                  <h2>{dado.first_name} {dado.last_name}</h2>
                </TableCell>
                <TableCell>{dado._id}</TableCell>
                <TableCell>{dado.username}</TableCell>
                <TableCell>{dado.email}</TableCell>
                <TableCell>{dado.password}</TableCell>
                <TableCell>{dado.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider style={{ background: 'black' }} variant="middle" />
    </div>
  );
};

export default ListUsers;
