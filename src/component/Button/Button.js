import React from 'react';
import styled from 'styled-components';

const Button =  styled.button`
    color: ${props => props.color };
    border-radius: 3px;
    padding: 10px;
    margin: 3px;

    :hover {
        background-color: ${props => props.color};
        color: #fff;
    }
`
export default Button;
