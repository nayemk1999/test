import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import ProfilePopper from '../../../ProfilePaper/ProfilePopper';


const NavBar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
  }, []);

  return (
    <Navbar expand="lg" className={(isSticky || isCollapsed) ? "slide in py-2 show shadow navbar navbar-expand-sm bg-light navbar-light fixed-top" : "slide out show navbar-expand-sm navbar-light py-2 fixed-top "}>
      <Container>
        <Navbar.Brand as={Link} to='/' > <Image style={{ height: '33px', width: '43px' }} src='https://www.graphicsprings.com/filestorage/stencils/0b9e79b37796b4f9200d26edfa127d19.png?width=500&height=500' /> <strong>TOPRAK</strong></Navbar.Brand>
        <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="basic-navbar-nav" style={{ background: '#10bad4' }} />
        <Navbar.Collapse id="navbar-nav" >
          <Nav className="m-auto">
            <Nav.Link as={Link} to='/home' className="mr-5 h5  nav-link"><strong>Home</strong></Nav.Link>
            <Nav.Link href="/buy" className="mr-5 h5 nav-link"><strong>Buy</strong></Nav.Link>
            <Nav.Link href="/rent" className="mr-5 h5 nav-link"><strong>Rent</strong></Nav.Link>
            <Nav.Link href="/sold" className="mr-5 h5 nav-link"><strong>Sold</strong></Nav.Link>
            <Nav.Link as={Link} to='/dashboard/profile' className="mr-5 h5 nav-link"><strong>Dashboard</strong></Nav.Link>

            {/* <Button as={Link} to='/login' variant="info" className='main-button'>Login</Button> */}
          </Nav>
          <div>
            <ProfilePopper />
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;