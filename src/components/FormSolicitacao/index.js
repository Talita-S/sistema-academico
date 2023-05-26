import React from "react";

import { useForm } from "react-hook-form";

import { FormControl, TextField, Button } from "@mui/material";

function FormSolicitacao({ msgErro }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormControl sx={{ paddingTop: 2 }}>
      <TextField
        label="Assunto"
        name="assunto"
        sx={{ marginBottom: 2 }}
        {...register("assunto", { required: true })}
      />
      <TextField
        label="Descrição"
        name="descricao"
        sx={{ marginBottom: 2 }}
        {...register("descricao", { required: true })}
      />
      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Enviar
      </Button>
    </FormControl>
  );
}

export default FormSolicitacao;
