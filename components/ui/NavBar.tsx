import {Spacer, Text, useTheme} from "@nextui-org/react";
import Image from "next/image";
import NetxLink from "next/link";

export const NavBar = () => {
    const {theme} = useTheme();

return (
<div style={{
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    padding: "0 20px",
    backgroundColor: theme?.colors.gray200.value
}}>
    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="ícono de la app"
    width={70}
    height={70}/>



    <Text color="white"> <NetxLink href="/">P </NetxLink></Text>
    <Text color="white"><NetxLink href="/">ókemon</NetxLink></Text>



    <Spacer css={{flex: 1}}/>
   <Text color="white"><NetxLink href="/favorites">Favorites</NetxLink></Text>
</div>
)}
