import {Layout} from "../../components/layouts";
import {NextPage} from "next";
import {ParsedUrlQuery} from "querystring";
import {Pokemon} from "../../interfaces";
import {Card, Container, Grid, Image, Text} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {localFavorites} from "../../utils";
import {NoFavorites} from "../../components/ui";
import {FavoritePokemon} from "../../components/pokemon/FavoritePokemon";



export const FavoritesPage = () => {

    const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritesPokemons(localFavorites.pokemons())
    }, [])

    return (
        <Layout title="Pokémons - Favoritos">

            {favoritesPokemons.length === 0
                ? <NoFavorites/>
                :  <FavoritePokemon data={favoritesPokemons}/>
                }

        </Layout>
    )
}

export default FavoritesPage;
