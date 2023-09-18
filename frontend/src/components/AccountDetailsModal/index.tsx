import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Chip } from "@mui/material";
import IAccount from "../../interfaces/IAccount";
import EventNoteIcon from '@mui/icons-material/EventNote';
interface AccountDetailsModalProps {
    open: boolean;
    onClose: () => void;
    account: IAccount | null;
}

const AccountDetailsModal: React.FC<AccountDetailsModalProps> = ({ open, onClose, account }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            {account && (
                <>
                    <DialogTitle> <EventNoteIcon/> Conta {account.account_number} </DialogTitle>
                    <DialogContent>
                        <p>ID Conta: {account._id}</p>
 
 
                        <Chip label="Agencia:" color="primary" variant="filled" />
                        <h4>
                            {account.agency || "FALSE"}

                        </h4>

                        <Chip label="Número da Conta:" color="primary" variant="filled" />
                        <h4>
                            {account.account_number}

                        </h4>
                        <Chip label="Saldo:" color="primary" variant="filled" />

                        <h4>
                        {account.balance} $
                        </h4>


                       



                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Fechar
                        </Button>
                    </DialogActions>
                </>
            )}
        </Dialog>
    );
};

export default AccountDetailsModal;
