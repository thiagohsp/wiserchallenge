import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  width: 100%;
  height: 56px;
  padding: 0 12px;
  border: 0;
  border-radius: 8px;
  margin-top: 24px;
  color: #fff;
  font-weight: 500;
  box-shadow: 0px 10px 25px #cf99db;
  &:hover {
    background: ${shade(0.2, '#383e71')};
  }
`;
