import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:hover {
    color: red;
  }
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;
