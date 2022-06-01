import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    div {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
            font-size: 30px;
        }
    }

    form {
       width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px; 
    }

    label {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
`;
