import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Chip } from "@mui/material";
import IApp from "../../interfaces/IApp";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import FeedIcon from '@mui/icons-material/Feed';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import styles from './AppDetailsModal.module.scss';
interface AppDetailsModalProps {
  open: boolean;
  onClose: () => void;
  application: IApp | null;
}

const AppDetailsModal: React.FC<AppDetailsModalProps> = ({ open, onClose, application }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {application && (
        <>
          <DialogTitle>Aplicação {application.currency}</DialogTitle>
          <DialogContent>
            <p>Application ID: {application._id}</p>
            
            <Chip label="Valor:" color="primary" variant="filled" />
                                <h4>
                                R$  {application.investmentAmount}

                                </h4>

                                <Chip label="Conta:" color="primary" variant="filled" />

                                <h4>
                                    {application.account_number}

                                </h4>

                                <Chip label="Vencimento:" color="primary" variant="filled" />
                                <h4>
                                    {application.expiration || "FALSE"}

                                </h4>

                                <Chip label="Data de Aplicação:" color="primary" variant="filled" />
                                <h4>
                                    {application.applicated_at}

                                </h4>
                                <Chip label="Data de Vencimento:" color="primary" variant="filled" />

                                <h4>
                                    {application.expiration_date}
                                </h4>

                                <Chip label="Status:" color="primary" variant="filled" />

                                {application.flag_redemption ? (
                                        // Se item.flag_redemption for verdadeiro, exibir um ícone e texto diferente
                                        <div className={styles.outroStatus}>
                                            <DoneAllIcon style={{ color: "green" }} /> RESGATADO
                                        </div>
                                    ) : (
                                        // Se item.flag_redemption não for verdadeiro, exibir INVESTIDO
                                        <div className={styles.investido}>
                                            <AttachMoneyIcon style={{ color: "red" }} /> APLICADO
                                        </div>
                                    )}


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

export default AppDetailsModal;
