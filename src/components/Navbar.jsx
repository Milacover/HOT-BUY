import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import './Navbar.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Filter } from '@mui/icons-material';


function NavbarHotBuy() {
  return (
    <>
    <header id="header">
    <Navbar className="navbar" style={{backgroundColor:"#D7C9F0"}} >
      <Container>
      <Navbar.Brand href="#NavbarHotBuy"><Link to="/"><img alt="" src="../../src/assets/img/logo.png" width="100" height="120" className="d-inline-block align-top"/></Link>
        </Navbar.Brand>
          <Nav className="me-auto">
          <Link className="add-link" to={`/NewProduct`}><button className="Submit" id="add" style={{backgroundColor:"#7C2E9B", color: "#E79036", fontWeight:"bold"}}><AddCircleOutlineIcon />AÑADIR PRODUCTO</button></Link>
            </Nav>
         <Filter />
      </Container>
    </Navbar>
    </header>
    </>
  );
}

export default NavbarHotBuy;