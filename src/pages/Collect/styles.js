import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;

    form {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    
        div {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }

    label {
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 4px;

        > div {
            display: flex;
            flex-direction: column;
            
            text-align: left;
            gap: 4px;
        }

        > div:last-child {
            flex-direction: row;
            margin: 10px auto 0;

            button {
                width: 80px;
                height: 30px;
            }
        }
    }

    input {
        border-radius: 10px;
        border: 1px solid #ccc;
        padding: 5px 10px;
        height: 20px;
    }

    button {
        margin-bottom: 50px;
        height: 45px;
        border-radius: 10px;
        border: none;
    }


`;
