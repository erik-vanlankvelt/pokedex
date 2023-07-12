import React from "react";
import { RouteComponentProps } from "@reach/router";

interface PokedexProps extends RouteComponentProps {

};

const Pokedex = ({
    // props
}: PokedexProps)  => {
    return (
        <h1>Pokedex</h1>
    );
};

export default Pokedex;