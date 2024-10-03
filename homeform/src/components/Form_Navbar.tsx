import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <>
            <Navbar fixed="top" style={{ backgroundColor: '#11B999' }} >
                <Container>
                    <Navbar.Brand href="https://tripwix.com/" target="_blank" className="me-auto">
                        <img id='logo_tripwix'
                            src="/logo_tripwix.png"
                            width="100"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default NavBar;