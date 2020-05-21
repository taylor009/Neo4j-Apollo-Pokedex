import React, {useState} from 'react';

import {Card} from "../card/card.component";

import {CardListContainer} from "./card-list.styles";
import {gql} from "apollo-boost";
import {useQuery} from "react-apollo";
import {SearchBox} from "../search-box/search-box.component";

const GET_POKEMON = gql`
    query getPokemonQuery(
        $first: Int
        $offset: Int
        $orderBy: [_PokemonOrdering]
        $filter: _PokemonFilter
    ) {
        Pokemon(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
            _id
            name
            imgUrl
        }
    }
`;

export const CardList = (props) => {
    const { loading, error, data } = useQuery(GET_POKEMON);

    if (error) {
        return <div>Error</div>;
    }

    if (loading) {
        return (
            <div className="App">
                <h2>Loading...</h2>
            </div>
        );
    }
    if (data) {
        if(data.Pokemon.length > 0) {
            return(
                <div>
                    <CardListContainer>
                        {data.Pokemon.map(pokemon => (
                            <Card key={pokemon._id} pokemon={pokemon} />
                        ))}

                    </CardListContainer>
                </div>

            )
        }
    }
};