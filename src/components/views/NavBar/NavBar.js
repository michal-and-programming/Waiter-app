import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss';

const NavBar = () => {
  return(
    <Navbar bg="primary" data-bs-theme="dark" className={styles.navbar}>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Waiter.app</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
};

export default NavBar;