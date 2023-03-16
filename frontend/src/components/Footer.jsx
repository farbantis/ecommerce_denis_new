import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
// import {Navbar, Nav, Container} from "react-bootstrap";
// import {LinkContainer} from "react-router-bootstrap";


function Footer() {
    return (
        <div>
            <footer>
                <Container>
                    <Row>
                        <Col className='text-center py-3'>
                            Copyright by me
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer;