import {Card, Grid} from "@nextui-org/react";
import {router} from "next/client";

interface PokemonId {
    id : number,
    key: number
}

export const FavoriteCardPokemon = (pokemon:PokemonId) => {

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }

return (
    <Grid xs={6} sm={3} xl={2} key={pokemon.id}>
        <Card isHoverable isPressable onPress={onFavoriteClicked}>
            <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                width={"100"}
                height={140}/>
        </Card>
    </Grid>
)}
