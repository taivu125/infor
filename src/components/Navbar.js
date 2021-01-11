import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <p>С возвращением ! Пожалуйста, введите ниже имя человека, которого вы ищете </p>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  p {
    font-size:20px;
    margin-bottom: 0;
    font-weight: 500;
  }

`;

export default Navbar;
