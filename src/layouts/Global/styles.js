import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    padding: 0 30px;

    header {
        height: 12vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > div {
            display: flex;
            align-items: center;
            gap: 15px;
        }
    }

    main {
        height: 88vh;
    }

    h1 {
        font-size: 22px;
        margin: 0;
        padding: 0;
    }

    i {
        font-size: 18px;
        padding: 2px;
        cursor: pointer;
    }
`;
