import styled from "styled-components";

export const Ul = styled.ul`
    list-style: none;
    width: 100%;
    display: flex;
    position: absolute;
    flex-direction: row;
    left: 0;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 420px;
    overflow-x: scroll;
`;

export const Container = styled.main`
  display: flex;
  justify-content: space-around;
  background: #ffffff;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export const StyledRecharts = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;

  div{
  }
`;

export const Contained = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 85%;
  background: darkred;
  
  border-radius: 15px;
  padding: 60px 0;
  box-sizing: border-box;
  margin: 40px 0;
  transition: 0.5s;
  @media screen and (min-width: 700px) {
    width: 100%;
    padding: 0;
    margin: 140px 0;
    background: darkred;
    
  }
  @media screen and (min-width: 1400px) {
    width: 100%;
    background: darkred;
    
  }
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80%;
  transition: 0.5s;
  div {
    transition: 0.5s;
    width: 94%;
    margin: 0 auto;
    margin: 8px;
    background: white;
    border-radius: 12px;
    height: 100px;
    padding: 8px;
    list-style: none;
    margin: 0 auto;
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
    width: 100%;
    div {
      width: 94%;
      margin: 0 auto;
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
    width: 100%;
    div {
      width: 94%;
      margin: 0 auto;
      
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
export const StyledMaps = styled.div`
  width: 100%;
  height: 80%;
  border-top: solid 1px grey;
  border-bottom: solid 1px grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;
