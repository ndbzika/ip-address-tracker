import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: 10rem;

    position: absolute;
    top: 30%;
    z-index: 9999;

    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 1150px) {
      top: 20%;
      width: 90%;
      height: 25rem;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
    }

    @media (max-width: 500px) {
      height: 20rem;
      padding: 0.5rem;
      top: 22%;
    }
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

    @media (max-width: 1150px) {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      padding: 0;

      span {
        font-size: 1.2rem;
        width: 80%;
        text-align: center;
        margin: 0 auto;
        line-height: 1.5rem;
        letter-spacing: 0.1rem;
        word-spacing: 0.2rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
        text-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);

      }

      p {
        font-size: 0.7rem;
        margin: 0;
        text-align: center;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        text-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);

      }
    }

    @media (max-width: 500px) {
      span {
        font-size: 1rem;
        width: 80%;
      }

      p {
        font-size: 0.6rem;
      }
    }
`;

export const Divider = styled.div`
    width: 1px;
    height: 50%;
    background-color: hsl(0, 0%, 80%);
    margin-right: -1rem;

    @media (max-width: 1150px) {
      display: none;
    }
`;
