import * as React from "react";
import Grid from "@mui/material/Grid";
import { Title, Main } from "../Home/HomeStyle";
import { Button } from "@mui/material";

interface ProductProps {
    logout: () => void
}

const ProductsView = ({logout}: ProductProps) => { 
  return (
    <Main>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Title gutterBottom variant="h3" color="primary.dark">
            Página de Produtos ... /storeProducts/
        </Title>
        <hr></hr>
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

export default ProductsView;