import {SmallPokemon} from "../../interfaces";
import {FC} from "react";
import {Card, Grid, Row, Text} from "@nextui-org/react";
import {useRouter} from "next/router";

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard:FC<Props> = (children) => {


    const router = useRouter();

    const onClick = () => {
        // router.push(`/pokemon/${children.pokemon.id}`
        router.push(`/name/${children.pokemon.name}`
        )
    }

return (

    <Grid xs={6} sm={3} md={2} xl={1}>
        <Card isPressable
              isHoverable
                onPress={onClick}>
            <Card.Body css={{p:1}}>
                <Card.Image
                    src={children.pokemon.img}
                    width="100%"
                    height={140}/>
            </Card.Body>
            <Card.Footer>
                <Row justify="space-between">
                    <Text transform="capitalize">
                        {children.pokemon.name}
                    </Text>
                </Row>
            </Card.Footer>
        </Card>
    </Grid>

)}
