import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SNavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SNavLink>
      <SNavLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SNavLink>
      <SNavLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SNavLink>
      <SNavLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SNavLink>
    </List>
  );
}

export default Category;

const SNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    padding-bottom: 3px;
    color: #ffffff;
    font-size: 1;
    margin: 0;
    padding: 5px 0px 15px 0px;
  }
  svg {
    color: white;
    font-size: 3rem;
    margin-top: 10px;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
      font-size: 30px;
    }
    h4 {
      color: white;
    }
  }
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  padding-bottom: 2rem;
`;
