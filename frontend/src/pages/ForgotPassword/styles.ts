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
      margin-bottom: 1em;
    }

    a {
      display: block;
      margin-top: 24px;
      color: #f4ede8;
      text-decoration: none;
      transition: color 0.5s;
      &:hover {
        color: ${shade(0.4, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 16px;
    color: #ff377f;
    text-decoration: none;
    transition: color 0.5s;
    svg {
      margin-right: 8px;
    }
    &:hover {
      color: ${shade(0.4, '#FF377F')};
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
      to top,
      #130525 0%,
      rgba(105, 57, 153, 0) 100%
    ),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;
