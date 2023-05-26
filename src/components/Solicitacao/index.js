import React, { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Paper, Typography, Button, Modal, Box } from "@mui/material";

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
  bgcolor: "background.paper",
  border: "1px solid rgba(222,222,222,0.5)",
  boxShadow: 24,
  p: 4,
};

function Solicitacao() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Paper style={paperStyle} elevation={6}>
        <Typography variant="h4" m={4}>
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
          </Box>
        </Modal>
      </Paper>
    </ThemeProvider>
  );
}

export default Solicitacao;
