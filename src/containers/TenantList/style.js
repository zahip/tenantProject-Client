import styled from 'styled-components';

export const ListContainer = styled.div`

`

export const ListBox = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`