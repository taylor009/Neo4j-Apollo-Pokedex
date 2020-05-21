import React from 'react';

import { CardContainer } from "./card.styles";

export const Card = (props) => (
    <CardContainer>
        <img src={props.pokemon.imgUrl} alt={props.pokemon.name}/>
        <h2>{props.pokemon.name}</h2>
    </CardContainer>
);


