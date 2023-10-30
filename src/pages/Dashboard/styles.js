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
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
  button {
    
    transition: 0.5s;
    height: 60px;
    background: #fff;
    color: #323232;
    width: 150px;
    position: absolute;
    top: 2px;
    left: 34px;
    height: 70px;
    border: 2px solid #323232;
    box-shadow: 10px 10px #323232;

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
  background-color: #212121;
  border-radius: 15px;
  padding: 60px 0;
  box-sizing: border-box;
  margin: 40px 0;
  transition: 0.5s;
  margin-top: 230px;
  
  @media screen and (min-width: 700px) {
    width: 100%;
    padding: 0;
    margin: 140px 0;
    background-color: #212121;
    margin-top: 230px;
  }
  @media screen and (min-width: 1400px) {
    width: 100%;
    background-color: #212121;
    
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
  
  input {
    padding: 23.5px 14px;
  }
  span {
    transition: 0.5s;
    color: #9320c2;
    cursor: pointer;
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
      background: #a9b4d0;
      color: #040000;
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
      background: #a9b4d0;
      color: #040000;
      margin-top: 14px;
    }
  }
`;
