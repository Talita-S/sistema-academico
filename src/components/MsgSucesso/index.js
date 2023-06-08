import React from "react";
import { Stack, Alert } from "@mui/material";

function index() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">Solicitação enviada com sucesso!</Alert>
    </Stack>
  );
}

export default index;
