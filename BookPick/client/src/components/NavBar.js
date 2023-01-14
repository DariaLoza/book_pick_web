import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {BOOK_ROUTES, LOGIN_ROUTES, REGISTRATION_ROUTES, SHOP_ROUTES} from "../utilis/consts";

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <NavLink style={{color:"white"}}to={SHOP_ROUTES}>BookPick</NavLink>
            {user.isAuth ?
                <Nav className="m-lg-auto" style={{color:'white'}}>
                    <Nav.Link to={BOOK_ROUTES}>Books</Nav.Link>
                    <Nav.Link to={LOGIN_ROUTES}>Admin Page</Nav.Link>
                </Nav>
                :
                <Nav className="m-lg-auto" style={{color:'white'}}>
                    <Nav.Link to={BOOK_ROUTES}>Books</Nav.Link>
                    <Nav.Link to={REGISTRATION_ROUTES}>Admin Page</Nav.Link>
                </Nav>
            }
        </Navbar>
    );
};

export default NavBar;