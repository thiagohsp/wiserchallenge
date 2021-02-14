import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 18px;
  border: 1px solid #989fdb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  color: #989fdb;
  box-sizing: border-box;
  @media (max-width: 456px) {
    padding: 12px;
  }

  ${props =>
    props.hasError &&
    css`
      border-color: #ff377f;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #383e71;
      border-color: #383e71;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #383e71;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    width: 80%;
    background: transparent;
    border: 0;
    color: #383e71;
    @media (max-width: 456px) {
      font-size: 12px;
    }

    &::placeholder {
      color: #989fdb;
    }
  }

  svg {
    height: 20px;
    margin-left: 8px;
  }
`;

export const Error = styled.div`
  text-align: left;
  font-size: 10px;
  margin: 12px;
  color: #ff377f;
`;

export const Label = styled.div`
  width: 100%;
  padding: 8px;
  text-align: left;
  text-transform: uppercase;
  color: #383e71;
  @media (max-width: 456px) {
    font-size: 10px;
  }
`;
