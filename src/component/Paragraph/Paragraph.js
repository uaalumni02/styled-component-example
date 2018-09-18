import React from 'react';
import styled from 'styled-components';



const Paragraph = styled.p`
    font-size: 16px;
    letter-spacing: 0.2em;
    text-align: justified;
    font-family: cursive;
`;

const RedParagraph = styled(Paragraph)`
    color: red;
`;

const GreenParagraph = styled(Paragraph)`
    color: green;
`

export {
    RedParagraph,
    GreenParagraph,
}