import React, { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Paper, Typography, Button, Modal, Box } from "@mui/material";

import FormSolicitacao from "../FormSolicitacao";
import ListarSolicitacoes from "../ListarSolicitacoes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f",
    },
  },
});

const paperStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(255,255,255,0.2)",
  textAlign: "center",
  width: "50vw",
  height: "95vh",
  padding: "0.5em",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  textAlign: "center",
  bgcolor: "background.paper",
  border: "1px solid rgba(222,222,222,0.5)",
  boxShadow: 24,
  p: 4,
};

function Solicitacao() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logo =
    "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1486,h_663/https://www.fatecclub.gregmaster.com.br/wp-content/uploads/2018/09/logo-fatec.png";

  return (
    <ThemeProvider theme={theme}>
      <Paper style={paperStyle} elevation={6}>
        <img src={logo} alt="Logo" width={200} />
        <Typography variant="h4" m={4} color="#4c6d6e">
          Secretaria Acadêmica
        </Typography>

        <Button
          variant="outlined"
          startIcon={<AddBoxOutlinedIcon />}
          onClick={handleOpen}
        >
          Nova solicitação
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Solicitação
            </Typography>
            <FormSolicitacao />
          </Box>
        </Modal>
        <Box sx={{ margin: 15 }}>
          <Typography variant="h6" textAlign="left" color="#4c6d7a">
            Minhas Solicitações
          </Typography>{" "}
          <hr />
          <ListarSolicitacoes />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default Solicitacao;
