import styled from 'styled-components';

export const Container = styled.div`
    padding: 25px 10px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
    form {
        max-width: 392px;
        transform: translateY(-25%);
        height: 400px;
        background-color: #fff;
        border-radius: 16px;
        padding: 24px;
        position: relative;

        display: flex;
        flex-direction: column;

        div:first-child {
            text-align: left;
            font-family: 'Public Sans';

            h2 {
                font-weight: 600;
                font-size: 24px;
                line-height: 21px;
                color: #6499FF;
            }

            p {
                font-weight: 400;
                font-size: 16px;
                line-height: 21px;
                color: #000000;
            }
        }
    
        div:nth-child(2) {
            display: flex;
            flex-direction: column;
            gap: 20px;

            label {
                display: flex;
                flex-direction: column;
                text-align: left;
                gap: 4px;

                input {
                    border-radius: 10px;
                    border: 1px solid #ccc;
                    padding: 5px 10px;
                    height: 20px;
                }
                

                div {
                    display: flex;
                    gap: 12px;
                    flex-direction: row;
                    margin: 10px auto 0;

                    button {
                        width: 80px;
                        height: 30px;
                        border-radius: 8px;
                        background: #fff;
                        color: #6499FF;
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 30px;
                        cursor: pointer;
                        font-family: 'Public Sans';
                        border: 1px solid #6499FF;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.3s;
                    }
                }
            }
        }

        > button {
            font-family: 'Public Sans';
            font-weight: 500;
            font-size: 16px;
            line-height: 21px;

            width: 140px;
            height: 41px;
            align-self: center;

            border: 1px solid #E9E9E9;
            border-radius: 8px;

            background: #6499FF;
            color: #fff;
            
            position: absolute;
            bottom: 45px;
            
            transition: all 0.3s;

            &:disabled {
                background: #E9E9E9;
                color: #00000050;
                cursor: not-allowed;
            }
        }
    }





    footer {
        position: absolute;
        bottom: 0;

        p {
            font-family: 'Public Sans';
            font-size: 14px;
        }
    }
`;
