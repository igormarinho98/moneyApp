import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Chip } from "@mui/material";
import IApp from "../../interfaces/IApp";

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
            
            <Chip label="Valor:" color="primary" variant="outlined" />
                                <h4>
                                    {application.value?.$numberDecimal}

                                </h4>
                                <Chip label="Vencimento:" color="primary" variant="outlined" />
                                <h4>
                                    {application.expiration || "FALSE"}

                                </h4>

                                <Chip label="Data de Aplicação:" color="primary" variant="outlined" />
                                <h4>
                                    {application.applicated_at}

                                </h4>
                                <Chip label="Data de Vencimento:" color="primary" variant="outlined" />

                                <h4>
                                    {application.expiration_date}
                                </h4>

                                <Chip label="Resgatado:" color="primary" variant="outlined" />

                                <h4>
                                    {application.flag_redemption || "FALSE"}

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

export default AppDetailsModal;
