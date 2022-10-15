import * as React from "react";
import Grid from "@mui/material/Grid";
import { Title, Main } from "../Home/HomeStyle";
import { Button } from "@mui/material";

interface FlProps {
    logout: () => void
}

const FavoriteView = ({logout}: FlProps) => { 
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
            Página de Favoritos \n  Busca todos os produtos favoritos /storeProducts/getFavProduts
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

export default FavoriteView;