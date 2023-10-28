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

export const StyledRecharts = styled.div`
  width: 49%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Contained = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
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
    width: 95%;
    padding: 70px 0;
    margin: 140px 0;
  }
  @media screen and (min-width: 1400px) {
    width: 95%;
  }
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  overflow-y: scroll;
  height: 80%;
  transition: 0.5s;
  div {
    transition: 0.5s;
    width: 94%;
    margin: 8px;
    background: white;
    border-radius: 12px;
    height: 100px;
    padding: 8px;
    list-style: none;
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
    width: 50%;
    div {
      width: 94%;
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
    width: 50%;
    div {
      width: 94%;
      
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