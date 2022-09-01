import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Menu = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 72px;
  margin-bottom: 16px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #254e58;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  color: #fff;
  transition: all 250ms linear;

  &.active {
    border-bottom: 2px solid #f4f74b;
  }

  &:hover {
    color: #f4f74b;
  }
`;
