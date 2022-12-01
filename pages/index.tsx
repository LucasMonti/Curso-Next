import {GetStaticProps, NextPage} from "next";
import {Layout} from "../components/layouts";
import {pokeApi} from "../api";
import {PokemonListResponse, SmallPokemon} from "../interfaces";
import {Card, Grid, Row, Text} from "@nextui-org/react";
import {PokemonCard} from "../components/pokemon";

interface props {
    pokemons: SmallPokemon[];
}

const HomePage: NextPage<props> = ({pokemons}) => {

    return (
        <Layout title="Listado de Pokemons">
            <Grid.Container gap={2} justify="flex-start">
                {
                    pokemons.map(({id, name, img, url}) => (
                        <PokemonCard key={id} pokemon={{id, name, img, url}}></PokemonCard>
                    ))
                }
            </Grid.Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
    const dataResult: SmallPokemon[] = await data.results.map((pokemon, index) => ({
        ...pokemon,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
        id: index + 1
    }));
    return {
        props: {
            pokemons: dataResult
        },
    }
}

export default HomePage
