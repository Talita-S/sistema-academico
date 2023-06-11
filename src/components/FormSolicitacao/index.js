import React, { useState } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";

import {
  FormControl,
  Grid,
  TextField,
  Button,
  FormHelperText,
  CircularProgress,
} from "@mui/material";

import MsgSucesso from "../MsgSucesso";
import MsgErro from "../MsgErro";

function FormSolicitacao() {
  const [carregando, setCarregando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const dadosSolicitacao = {
      assunto: data.assunto,
      descricao: data.descricao,
      alunoId: 1,
    };
    console.log(dadosSolicitacao);
    await axios
      .post(
        "http://localhost:4000/solicitacao",
        dadosSolicitacao,
        setCarregando(true)
      )
      .then((res) => {
        setCarregando(false);
        setSucesso(true);
        console.log(res.message);
        setTimeout(() => {
          setSucesso(false);
        }, 3000);
      })
      .catch((err) => {
        setCarregando(false);
        setErro(true);
        console.log(err.message);
        setTimeout(() => {
          setErro(false);
        }, 3000);
      });
  };

  return (
    <FormControl sx={{ paddingTop: 2, textAlign: "center" }}>
      <Grid container textAlign="center">
        {carregando && <CircularProgress />}
        {sucesso && <MsgSucesso />}
        {erro && <MsgErro />}
      </Grid>

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
