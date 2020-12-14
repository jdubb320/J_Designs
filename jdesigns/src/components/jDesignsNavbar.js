import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './jDesignsNavbar.css'

function JDesignsNavbar(){
    return(
        <Navbar>
            <Navbar.Brand className="mr-auto">J DESIGNS</Navbar.Brand>
            <Nav>
                <Nav.Link><p className="raleway-font">ABOUT</p></Nav.Link>
                <Nav.Link><p className="raleway-font">PRICE</p></Nav.Link>
                <Nav.Link><p className="raleway-font">CONTACT</p></Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default JDesignsNavbar;