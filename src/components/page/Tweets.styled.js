import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  z-index: -5;
`;

export const ContainerTweets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
`;

export const ContainerDropdown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
`;

export const BackLink = styled(NavLink)`
  z-index: 99;
  text-decoration: none;
  color: black;
  display: inline-block;
  position: relative;
  padding: 15px 25px;
  border-radius: 10px;
  border-image: linear-gradient(to right, #c6ffdd, #5cd3a8);
  border-image-slice: 1;
  text-transform: uppercase;
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

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const LoadMore = styled.button`
  z-index: 99;
  text-decoration: none;
  color: black;
  background-color: inherit;
  display: inline-block;
  position: relative;
  padding: 15px 25px;
  border-radius: 10px;
  border: none;
  border-image: linear-gradient(to right, #c6ffdd, #5cd3a8);
  border-image-slice: 1;
  margin: 16px;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
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
