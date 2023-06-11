import React, { useState, useEffect } from "react";

import axios from "axios";
import { Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function Index() {
  const [dadosTabela, setDadosTabela] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3306//solicitacao/list-by-aluno/1")
      .then((data) => data.json())
      .then((data) => setDadosTabela(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(dadosTabela);
  return (
    <Grid container>
      {dadosTabela.length === 0 && (
        <Typography variant="p" fontSize={18}>
          Você ainda não possui solicitações.{" "}
        </Typography>
      )}
    </Grid>
  );
}

export default Index;
