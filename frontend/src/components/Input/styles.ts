import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

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

  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
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

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #383e71;

    &::placeholder {
      color: #989fdb;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  margin-top: 4px;
  svg {
    margin: 0;
  }

  span {
    background: #ff377f;
    color: #fff;

    &::before {
      border-color: #ff377f transparent;
    }
  }
`;

export const Label = styled.div`
  width: 100%;
  padding: 12px;
  text-align: left;
  text-transform: uppercase;
  color: #383e71;
`;
