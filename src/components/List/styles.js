import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;

    > div {
        width: 100%;
    }
`;

export const List = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 15px;
`

export const Item = styled.li`
    border: 1px solid #ccc;
    list-style: none;
    display: grid;
    text-align: left;
    grid-template-columns: 1.4fr 1fr 1.4fr 0.5fr;
    align-items: center;
    width: 100%;
    height: 35px;
    text-transform: capitalize;

    > span:first-child {
        margin-left: 10px;
    }
`