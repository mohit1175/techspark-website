import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const Nav = styled.nav`
  padding: 1rem 2rem;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    height: 40px;
    width: auto;
  }
  
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #000;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <img src="/techspark-logo.png" alt="TechSpark Logo" />
          <span>TechSpark</span>
        </Link>
      </Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/events">Events</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;