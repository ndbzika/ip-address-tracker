import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: 10rem;

    position: absolute;
    top: 30%;
    z-index: 999;

    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Item = styled.div`
    width: 10rem;
    height: 80%;
    padding: 1rem 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;

    p {
        font-size: 0.6rem;
        color: hsl(0, 0%, 17%);
        font-weight: bold;
        letter-spacing: 0.2rem;
        margin: .5rem 0;
    }

    span {
        font-size: 1.3rem;
        font-weight: bold;
        width: 80%;
    }
`;

export const Divider = styled.div`
    width: 1px;
    height: 50%;
    background-color: hsl(0, 0%, 80%);
    margin-right: -1rem;
`;
