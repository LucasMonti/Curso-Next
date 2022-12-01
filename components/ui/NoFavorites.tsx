
import {Container, Image, Text} from "@nextui-org/react";
import {Layout} from "../layouts";



export const NoFavorites = ({}) => {
    return (
        <Layout title="Pokémons - Favoritos">
            <Container css={{
                display: "flex",
                flexDirection: "column",
                height: "calc(100vh - 100px)",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center"
            }}>
                <Text>
                    <h1>No hay Favoritos</h1>
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                           width={250}
                           height={250}
                           css={{opacity: 0.1}}/>
                </Text>
            </Container>
        </Layout>
    )
}

export default NoFavorites;
