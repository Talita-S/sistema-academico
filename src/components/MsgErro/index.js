import React from "react";

import { Stack, Alert } from "@mui/material";

function index() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        Ops, algo deu errado. Tente novamente mais tarde.
      </Alert>
    </Stack>
  );
}

export default index;
