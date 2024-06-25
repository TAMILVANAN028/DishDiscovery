import React from 'react'
import { FaPizzaSlice,FaHamburger } from 'react-icons/fa' 
import { FaBowlFood } from 'react-icons/fa6'
import { GiNoodles,GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
function Category() {
  return (
    <div>
        <List>
            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </SLink>

            <SLink to={'/cuisine/American'}>
                <FaHamburger/>
                <h4>American</h4>
            </SLink>

            <SLink to={'/cuisine/Thai'}>
                <GiNoodles/>
                <h4>Thai</h4>
            </SLink>

            <SLink to={'/cuisine/Japanese'}>
                <GiChopsticks/>
                <h4>Japanese</h4>
            </SLink>
            <SLink to={'/cuisine/Indian'}>
                <FaBowlFood/>
                <h4>Indian</h4>
            </SLink>
        </List>
    </div>
  )
}


const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  flex-wrap: wrap;
  flex-direction: row;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0.5rem; 
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
    margin-top: 0.5rem; }
  svg {
    color: white;
    font-size: 1rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;
export default Category;