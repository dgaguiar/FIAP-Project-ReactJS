import * as React from "react";
import Grid from "@mui/material/Grid";
import { Title, Main } from "../Home/HomeStyle";
import { Button } from "@mui/material";

interface RGProps {
    logout: () => void
}

const RegistrationView = ({ logout }: RGProps) => { 
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
            Página de Cadastro \n  Realiza o cadastro do usuário /storeProducts/signup
        </Title>
        <Button 
            variant="text"
            onClick = { () => {
                logout()
            }}>
            Voltar
        </Button>
      </Grid>
    </Main>
  );
};

export default RegistrationView;