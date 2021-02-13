import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import backgroundImage from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
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
    width: 340px;
    margin: 80px 0;
    text-align: center;

    h1 {
      text-align: left;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 48px;
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
  max-width: 700px;
`;

export const Background = styled.div`
  flex: 1;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url(${backgroundImage});
  background-size: cover;
`;
