import * as React from "react";
import Grid from "@mui/material/Grid";
import { Title, Main } from "../Home/HomeStyle";
import { Button } from "@mui/material";

interface HomeProps {
    logOut: () => void
    goToProducts: () => void
    goToFavorite: () => void
    goToDetail: () => void
    goToRegistration: () => void
}

const HomeView  = ({ logOut, goToProducts, goToDetail, goToFavorite, goToRegistration}: HomeProps) => { 
  return (
    <Main>
        <Grid 
        container
        direction="row"
        justifyContent="start"
        alignItems="start"
        >
        <Button 
            variant="text"
            onClick = { () => {
                logOut()
            }}>
            Logout
        </Button>
        <Title gutterBottom variant="h1" color="primary.dark">
            Home
        </Title>
        
        </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Title gutterBottom variant="h1" color="primary.dark">
            Conteúdo
        </Title>
        <Button 
            variant="outlined"
            onClick = { () => {
                goToDetail()
            }}>
            Detalhes
        </Button>
        <hr></hr>
        <Button 
            variant="outlined"
            onClick = { () => {
                goToProducts()
            }}>
            Produtos
        </Button>
        <hr></hr>
        <Button 
            variant="outlined"
            onClick = { () => {
                goToFavorite()
            }}>
            Favoritos
        </Button>
        <hr></hr>
        <Button 
            variant="outlined"
            onClick = { () => {
                goToRegistration()
            }}>
            Cadastro
        </Button>
      </Grid>
    </Main>
  );
};

export default HomeView;