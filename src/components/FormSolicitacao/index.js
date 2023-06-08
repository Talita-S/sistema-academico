import React from "react";

import { useForm } from "react-hook-form";
import axios from "axios";

import { FormControl, TextField, Button, FormHelperText } from "@mui/material";

function FormSolicitacao({ msgErro }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await axios.post("https://localhost:4000/solicitacao").then().catch();
  };

  return (
    <FormControl sx={{ paddingTop: 2 }}>
      <TextField
        label="Assunto"
        name="assunto"
        sx={{ marginBottom: 2 }}
        {...register("assunto", { required: true })}
      />
      {errors.assunto && (
        <FormHelperText sx={{ color: "#f53340" }}>
          Campo obrigatório
        </FormHelperText>
      )}
      <TextField
        label="Descrição"
        name="descricao"
        sx={{ marginBottom: 2 }}
        {...register("descricao", { required: true })}
      />
      {errors.descricao && (
        <FormHelperText sx={{ color: "#f53340" }}>
          Campo obrigatório
        </FormHelperText>
      )}
      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Enviar
      </Button>
    </FormControl>
  );
}

export default FormSolicitacao;
