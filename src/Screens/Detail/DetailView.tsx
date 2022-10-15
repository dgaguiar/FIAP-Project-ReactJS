import * as React from "react";
import Grid from "@mui/material/Grid";
import { Title, Main } from "../Home/HomeStyle";
import { Button } from "@mui/material";

interface DetailProps {
    logout: () => void
}

const DetailView = ({logout}: DetailProps) => { 
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
            Página de Cadastro \n  Adicionar ou remove um produto como favorito da pessoa /storeProducts/manageFavorite
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

export default DetailView;