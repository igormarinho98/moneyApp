import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import styles from "./ListAccounts.module.scss";
import IAccount from "../../interfaces/IAccount";
import { CardContent, Divider, Chip } from "@mui/material";
import AccountDetailsModal from "../AccountDetailsModal";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const url = 'https://moneyapp.onrender.com/account';

const ListAccount = () => {
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<IAccount | null>(null);
 


  const handleOpen = (account: IAccount) => {
    setSelectedAccount(account);
 
  };

  const handleClose = () => {
    setSelectedAccount(null);
  };

   

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setAccounts(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [accounts]);

  return (
    <div >
      <TableContainer component={Card}>
        <Table sx={{minWidth: 650 }} size="small" aria-label="tabela de contas">
          <TableHead>
            <TableRow >
              <TableCell sx={{backgroundColor: "#D3D3D3	",fontSize: 16, fontFamily: "sans-serif"}}>ID Usuário</TableCell>
              <TableCell sx={{backgroundColor: "#D3D3D3	",fontSize: 16}}>Agencia</TableCell>
              <TableCell sx={{backgroundColor: "#D3D3D3	",fontSize: 16}}>Conta</TableCell>
              <TableCell sx={{backgroundColor: "#D3D3D3		",fontSize: 16}}>Saldo</TableCell>
              <TableCell sx={{backgroundColor: "#D3D3D3		",fontSize: 16}}>Ver mais</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((dado) => (
              <TableRow key={dado._id as any}>
                <TableCell sx={{backgroundColor: "#F8F8FF	",fontSize: 16}}>{dado.user_id}</TableCell>
                <TableCell sx={{backgroundColor: "#F8F8FF	",fontSize: 16}}>{dado.agency}</TableCell>
                <TableCell sx={{backgroundColor: "#F8F8FF	",fontSize: 16}}>{dado.account_number}</TableCell>
                <TableCell sx={{backgroundColor: "#F8F8FF	",fontSize: 16}}>R${dado.balance} </TableCell>
                <TableCell sx={{backgroundColor: "#F8F8FF	",fontSize: 16}}>
                  <Button color="warning" variant="contained" onClick={() => handleOpen(dado)}>Detalhes</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider style={{ background: 'black' }} variant="middle" />
      <AccountDetailsModal open={selectedAccount !== null} onClose={handleClose} account={selectedAccount} />
    </div>
  );
}

export default ListAccount;
