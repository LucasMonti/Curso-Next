import {Card, Grid} from "@nextui-org/react";
import {FavoriteCardPokemon} from "./FavoriteCardPokemon";

interface FavoritePokemons {
    data: number[];
}


export const FavoritePokemon = (pokemons:FavoritePokemons) => {



return (

    <Grid.Container gap={2}
                    direction="row"
                    justify="flex-start">
        {
            pokemons.data.map(id => (
               <FavoriteCardPokemon key={id} id={id}/>
            ))
        }
    </Grid.Container>

)}
