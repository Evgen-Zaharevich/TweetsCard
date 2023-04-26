import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerApp = styled.div`
  margin: 20px;
  box-shadow: -3px -2px 40px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  background: linear-gradient(to right, #59c173, #a17fe0, #5d26c1);
`;

export const Header = styled.header`
  margin: 0 20px;
  border-bottom: 2px solid #ebd8ff;
`;

export const NavigationLink = styled(NavLink)`
  z-index: 99;
  text-decoration: none;
  color: black;
  display: inline-block;
  position: relative;
  padding: 15px 25px;
  border-radius: 10px;
  border-image-slice: 1;
  margin: 16px;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-weight: 600;
  overflow: hidden;
  letter-spacing: 2px;
  background-color: #ebd8ff;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    z-index: -1;
    color: white;
    background: linear-gradient(to right, #c6ffdd, #5cd3a8);
    transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &:hover {
    background: rgba(255, 255, 255, 0);
  }
  &:hover:before {
    bottom: 0%;
    top: auto;
    height: 100%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 5px;
  height: 50px;
  border-top: 2px solid #ebd8ff;
`;

export const Signature = styled.p`
  font-family: Tangerine, cursive;
  font-size: 30px;
  font-weight: 600;
`;
