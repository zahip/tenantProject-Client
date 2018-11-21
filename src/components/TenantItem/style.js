import styled from 'styled-components';

export const Card = styled.div`
    border: 2px solid aqua;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media (min-width: 1024px) {
        margin-left: 10px;
    }
`

export const Button = styled.div`
    align-self: flex-end;
`

export const Img = styled.img`
    width:30px;
    height:30px;
`