import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = React.useState(false);
  const cars = useSelector(selectCars);
  return (
    <HeaderContainer>
      <a>
        <img src="images/logo.svg"></img>
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerMenuOpen(true)} />
      </RightMenu>
      <BurgerMenuNavigation show={burgerMenuOpen}>
        <CloseButtonWrapper>
          <CustomClose onClick={() => setBurgerMenuOpen(false)} />
        </CloseButtonWrapper>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">CyberTruck</a>
        </li>

        <li>
          <a href="#">Used Inventory</a>
        </li>

        <li>
          <a href="#">Roadster</a>
        </li>
      </BurgerMenuNavigation>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerMenuNavigation = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid black;

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
