import React from 'react';

import { SearchBoxContainer } from "./search-box.styles";

export const SearchBox = ({ placeholder, handleChange }) => (
    <SearchBoxContainer>
        <input type="search" placeholder={placeholder} onChange={handleChange} />
    </SearchBoxContainer>
)