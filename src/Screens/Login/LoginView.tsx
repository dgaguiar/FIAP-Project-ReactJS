import * as React from "react";
import Grid from "@mui/material/Grid";
import { AllPersons } from "../../Models/Person";
import { Title, Main } from "./LoginStyle";
import { Button, TextField } from "@mui/material";

interface IProps {
  info: number;
  person: AllPersons | null;
}

const inputLoginProps = {
  step: 300,
};

const inputSenhaProps = {
  step: 300,
};

const LoginView = ({ info, person }: IProps) => { 
  return (
    <Main>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Title gutterBottom variant="h1" color="primary.dark">
            Trabalho Final 24MOB 
        </Title>
        <Title gutterBottom variant="h3" color="primary.dark">
          Login
        </Title>
        <TextField 
          placeholder="login"
          inputProps={inputLoginProps} 
        />
        <Title gutterBottom variant="h3" color="primary.dark">
          Senha
        </Title>
        <TextField 
          placeholder="senha" 
          id="senha"
          inputProps={inputSenhaProps} 
        />
        <hr></hr>
        <Button 
          variant="outlined" 
          onClick={() => {
              alert('clicou em logar');
          }}>
          Logar
        </Button>
      </Grid>
    </Main>
  );
};

export default LoginView;