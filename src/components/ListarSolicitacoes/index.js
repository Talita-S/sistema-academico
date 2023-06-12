import React, { useState, useEffect } from "react";

import { Grid, Typography, Modal, Box } from "@mui/material";
import DadosTabela from "../DadosTabela";

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'assunto', headerName: 'Assunto', width: 150 },
  { field: 'descricao', headerName: 'Descrição', width: 200 },
  { field: 'dataAbertura', headerName: 'Data Abertura', width: 110 },
  { field: 'dataResposta', headerName: 'Data Resposta', width: 110 },
  { field: 'resposta', headerName: 'Resposta', width: 180 }
]

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  textAlign: "left",
  bgcolor: "background.paper",
  border: "1px solid rgba(222,222,222,0.5)",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

function Index() {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [detalhes, setDetalhes] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("http://localhost:4000/solicitacao/list-by-aluno/1")
      .then(response => response.json())
      .then(json => setSolicitacoes(json))
      .catch((err) => console.log(err));
  }, []);

  function handleClick(row) {
    fetch(`http://localhost:4000/solicitacao/${row.id}`)
      .then(response => response.json())
      .then(json => setDetalhes(json))
      .catch((err) => console.log(err));
  }

  function formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const options = {
      dateStyle: "full",
      timeStyle: "short",
    };
    return dateTimeString != null ? dateTime.toLocaleString(undefined, options) : " ";
  }
  return (
    <Grid container>
      {solicitacoes.length === 0 && (
        <Typography variant="p" fontSize={18}>
          Você ainda não possui solicitações.{" "}
        </Typography>
      )}
      {solicitacoes.length !== 0 && (
        <DadosTabela rows={solicitacoes} columns={columns} handleClick={(handleClick, handleOpen)} />
      )}
      {detalhes.lenght !== 0 && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Detalhes da Solicitação
            </Typography>
            <Typography variant="p" fontSize={16}>Assunto: {detalhes.assunto}</Typography><br />
            <Typography variant="p" fontSize={16}>Descrição: {detalhes.descricao}</Typography>
            <Typography variant="p" fontSize={16}>Data Abertura: {formatDateTime(detalhes.dataAbertura)}</Typography>
            <Typography variant="p" fontSize={16}>Resposta: {detalhes.resposta}</Typography>
            <Typography variant="p" fontSize={16}>Data Resposta: {formatDateTime(detalhes.dataResposta)}</Typography>
          </Box>
        </Modal>
      )}
    </Grid>
  );
}

export default Index;
