import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;

        div {
            display: flex;
            flex-direction: row;
            gap: 20px;
        }
    }

    label {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    input {
        width: 100%;
        height: 30px;
        padding: 0;
        text-indent: 10px;
        margin: 0;
        border: 1px solid #ccc;
    }

    button {
        width: 100%;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
        color: #000;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;

        &:disabled {
            background-color: #ccc;
            color: #fff;
            cursor: not-allowed;
        }
    }
`;
