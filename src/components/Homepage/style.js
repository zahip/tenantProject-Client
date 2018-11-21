import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 40px;
`
export const SubTitle = styled.h2`
    text-align: center;
`

export const Button = styled.button`
    font-size: 20px;
    background-color: aqua;
    border: none;
    border-radius: 20px;
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
`
export const ButtonTextLink = styled(Link)`
    text-decoration: none;
    color: black;
`