import React, { useState, useEffect } from "react";

import { Grid, Typography } from "@mui/material";
import DadosTabela from "../DadosTabela";

const columns = [
  {field: 'id', headerName: 'ID', width: 50},
  {field: 'assunto', headerName: 'Assunto', width: 150},
  {field: 'descricao', headerName: 'Descrição', width: 200},
  {field: 'dataAbertura', headerName: 'Data Abertura', width: 110},
  {field: 'dataResposta', headerName: 'Data Resposta', width: 110},
  {field: 'resposta', headerName: 'Resposta', width: 180}
]

function Index() {
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/solicitacao/list-by-aluno/1")
      .then(response => response.json())
      .then(json => setSolicitacoes(json))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Grid container>
      {solicitacoes.length === 0 && (
        <Typography variant="p" fontSize={18}>
          Você ainda não possui solicitações.{" "}
        </Typography>
      )}
      {solicitacoes.length != 0 && <DadosTabela rows={solicitacoes} columns={columns}/>}
      
    </Grid>
  );
}

export default Index;
