import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:hover {
    color: red;
  }
`;
