import styled from "styled-components";
import '@fontsource/rubik'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url("https://efim-frontendmentor-ip-tracker.pages.dev/images/pattern-bg-desktop.png");
    background-repeat: no-repeat;
    background-size: 100% 40%;

    font-family: 'Rubik', sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #ffffff;
        margin: 2rem 0;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        width: 28rem;
        height: 3.5rem;
        padding: 1.1rem;
        border-radius: 15px 0 0 15px;
        font-size: 18px;

        &::placeholder {
            font-size: 18px;
            text-align: left;
            color: hsl(0, 0%, 59%);
        }
    }

    button {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 0 1rem 1rem 0;
        background-color: #000000;
    }
`;
