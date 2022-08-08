import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AvatarBlank from '../../assets/profile/AvatarBlank.jpg'
import { UserContext } from '../../context/UserContext';

function NavUser() {
  let navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    })
    navigate("/")
  }

  const userMenu = (
    <Image src={state?.user?.img ? state.user.img : AvatarBlank } alt="user avatar" roundedCircle style={{ width: '40px'}}/>
)
return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="sticky-top shadow py-1">
        <Container>
          <Navbar.Brand>
            <Link to='/dashboard' className='text-decoration-none'>
              <div className='fs-5 fw-bold text-dark'>DumbCash</div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="bg-collapse pt-lg-0 pt-md-1">
              <NavDropdown title={userMenu} id="basic-nav-dropdown ">
                <NavDropdown.Item>
                  <Link to='/profile-user' className='text-decoration-none text-dark'>
                    Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavUser