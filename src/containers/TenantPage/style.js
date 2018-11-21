import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.h1`
    text-decoration: underline;
`

export const AddNewTenant = styled.div`
    // align-self: flex-end;
`

export const TextLink = styled(Link)`
    text-decoration: none;
    color: black;
`

