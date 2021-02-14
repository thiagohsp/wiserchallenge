import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import backgroundImage from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  @media (max-width: 456px) {
    //flex: 1;

    background-image: linear-gradient(
        to top,
        #130525 0%,
        rgba(105, 57, 153, 0) 100%
      ),
      url(${backgroundImage});
    background-size: cover;
    background-position: center;
    place-content: center;
    align-items: center;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    width: 256px;
    text-align: center;

    @media (max-width: 456px) {
      margin: 60px 0;
    }

    h1 {
      text-align: left;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 48px;

      @media (max-width: 456px) {
        margin-top: 108px;
        font-size: 36px;
        line-height: 48px;
        width: 100%;
        text-align: center;
      }
    }

    h3 {
      text-align: left;
      color: #989fdb;
      margin-top: 16px;
      margin-bottom: 43px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;

      @media (max-width: 456px) {
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 16px;
      }
    }

    a {
      display: block;
      margin-top: 32px;
      color: #989fdb;
      text-decoration: none;
      transition: color 0.5s;
      &:hover {
        color: ${shade(0.4, '#989FDB')};
      }

      @media (max-width: 456px) {
        color: #fff;
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 16px;
    color: #ff9000;
    text-decoration: none;
    transition: color 0.5s;
    svg {
      margin-right: 8px;
    }
    &:hover {
      color: ${shade(0.4, '#ff9000')};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  background-color: white;
  @media (max-width: 1024px) {
    max-width: 456px;
  }

  @media (max-width: 456px) {
    height: 357px;
    margin: 32px;
    border-radius: 20px;
    //max-width: 456px;
  }

  max-width: 700px;
`;

export const Background = styled.div`
  @media (max-width: 456px) {
    flex: 0;
  }
  flex: 1;
  background-image: linear-gradient(
      to top,
      #130525 0%,
      rgba(105, 57, 153, 0) 100%
    ),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;
