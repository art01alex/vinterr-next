import React from "react";
import styled from "styled-components";

const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: #fff;
  .preloader_block{
    text-align: center;
    display: block;
    margin: auto;
    width: 40%;
    position: absolute;
    top: 40%;
    left: 30%;
  }
  .header-logo{
    display: block;
    width: 100%;
  }
  .title_loading{
    text-align: center;
    margin-top: 15px;
    display: inline-block;
    color: #383838;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    line-height: 18px;
  }
  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Balls = styled.div`
  display: flex;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: #383838;
    margin: 0 6px 0 0;
    animation: oscillate 0.7s ease-in forwards infinite;
  }


  .one {
    animation-delay: 0.5s;
  }
  .two {
    animation-delay: 1s;
  }
  .three {
    animation-delay: 2s;
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const LoadingScreen = () => {
  return (
    <Screen>
      <div className="preloader_block">
        <img className="header-logo" src="/logo.svg" alt="Vinterr-plus" />
        <h2 className="title_loading" >Вязаный трикотаж от российского производителя</h2>
      </div>
      <Balls>
        <div className="ball one"></div>
        <div className="ball two"></div>
        <div className="ball three"></div>
      </Balls>
    </Screen>
  );
};

export default LoadingScreen;