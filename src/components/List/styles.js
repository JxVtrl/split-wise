import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    > div {
        width: 100%;
    }
`;

export const Header = styled.div`

`

export const List = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 15px;
`

export const Item = styled.li`
    border: 1px solid #ccc;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    text-transform: capitalize;

    > span {
        margin-left: 10px;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    width: 100%;
    height: 100%;
    overflow: auto;
    margin-right: 10px;

    i {
        cursor: pointer;

    }

`