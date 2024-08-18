import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                <NavLink to="/home" >
                        Home
                    </NavLink>
                    <NavLink to="/about" >
                        About Me
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/photos" activeStyle>
                        Photos
                    </NavLink>
                    <NavLink to="/resources" activeStyle>
                        Resources
                    </NavLink>
                    
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                
            </Nav>
        </>
    );
};

export default Navbar;