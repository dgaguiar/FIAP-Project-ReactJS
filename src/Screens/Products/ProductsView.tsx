import * as React from "react";
import Grid from "@mui/material/Grid";
import { Title, Main } from "../Home/HomeStyle";
import { Button, CircularProgress, Container, Stack, Typography } from "@mui/material";
import { Product } from "../../Models/Product";
import styles from './Product.module.css';

interface ProductProps {
  logout: () => void
  product: Product;
  statusConnection: number;
}

const ProductsView = ({ logout, product, statusConnection }: ProductProps) => {
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
          onClick={() => {
            logout()
          }}>
          Voltar
        </Button>
        <Title gutterBottom variant="h3" color="primary.dark">
          Produto {product.products[0].name} 
        </Title>
        <Title gutterBottom variant="h3" color="primary.dark">
          Preço {product.products[0].price} 
        </Title>
        <Title gutterBottom variant="h3" color="primary.dark">
          Favorito? {product.products[0].favorite} 
        </Title>
      </Grid>
      {/* <Container maxWidth="xl">
        <Stack direction='column'
          spacing={6}
          justifyContent="center"
          alignItems="center"
          className={styles.StackClass}
        >
          {mountInfo}
        </Stack>
      </Container> */}
    </Main>
  );
};

export default ProductsView;