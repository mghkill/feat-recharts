import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-around;
  background: black;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export const BoxField = styled.div`
  width: 230px;
  margin-top: 16px;
  input {
    padding: 23.5px 14px;
  }
  @media screen and (min-width: 400px) {
    width: 280px;
  }
  @media (min-width: 700px) {
    width: 500px;
  }
`;

export const ContainedSvg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 290px;
  align-items: center;
  transition: 0.5s;
  img {
    transition: 0.5s;
    display: none;
  }
  h1 {
    display: block;
    cursor: pointer;
    transition: 0.5s;
    font-size: 62px;
    color: #dfc2eb;
    span {
      transition: 0.5s;
      display: block;
      font-size: 62px;
      margin-left: 100px;
      font-weight: normal;
    }
  }
  @media screen and (min-width: 700px) {
    width: 230px;
    h1 {
      font-size: 72px;
      span {
        font-size: 72px;
      }
    }
  }
  @media screen and (min-width: 1000px) {
    width: 540px;
    height: 80vh;
    h1 {
      span {
        margin-left: 130px;
      }
    }
    img {
      display: block;
      width: 500px;
    }
  }
  @media screen and (min-width: 1400px) {
    width: 760px;
    img {
      width: 750px;
    }
  }
`;

export const ContainedForm = styled.div`
  width: 300px;
  height: 85%;
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 94%) 0%,
    #ffffffeb 100%
  );
  border-radius: 15px;
  padding: 60px 0;
  box-sizing: border-box;
  margin: 40px 0;
  transition: 0.5s;
  @media screen and (min-width: 700px) {
    width: 395px;
    padding: 70px 0;
    margin: 140px 0;
  }
  @media screen and (min-width: 1400px) {
    width: 495px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 80%;
  transition: 0.5s;
  div {
    transition: 0.5s;
    width: 280px;
    background: white;
    border-radius: 12px;
    height: 70px;
    label {
      margin-top: 8px;
    }
  }
  input {
    padding: 23.5px 14px;
  }
  span {
    transition: 0.5s;
    color: #9320c2;
    cursor: pointer;
  }
  button {
    width: 250px;
    transition: 0.5s;
    height: 70px;
    background: black;
    color: white;
    margin-top: 14px;
  }
  button:hover {
    background-color: ${(props) => (props.secondary ? "grey" : "grey")};
    color: ${(props) => (props.secondary ? "black" : "white")};
  }
  @media screen and (min-width: 700px) {
    width: 395px;
    div {
      width: 350px;
    }
    button {
      width: 320px;
      height: 70px;
      background: black;
      color: white;
      margin-top: 14px;
    }
  }
  @media screen and (min-width: 1400px) {
    width: 495px;
    div {
      width: 450px;
    }
    button {
      width: 420px;
      height: 70px;
      background: black;
      color: white;
      margin-top: 14px;
    }
  }
`;
