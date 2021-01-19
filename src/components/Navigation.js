import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {
    Container,
    Grid,
    Header,
    Image,
    Divider
} from 'semantic-ui-react'

function Navigation() {
    return (
        <div style={{ background: '#1b1c1d' }} id="top">
            <Navbar collapseOnSelect expand="sm" variant="dark" style={{ background: '#1b1c1d'}}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="work">Work</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row centered>
                        <Grid.Column width={8}>
                            <Image centered src='../../assets/images/Faceme400.png' />
                        </Grid.Column>
                        <Grid.Column textAlign='center' width={6}>
                            <Header
                                as='h1'
                                inverted
                                content='BERTO'
                                style={{
                                    fontSize: '3em',
                                    fontWeight: 'normal',
                                    marginBottom: 0,
                                }}
                            />
                            <Header
                                as='h2'
                                inverted
                                content='Big Skull. Big Beard.'
                                style={{
                                    fontSize: '1.7em',
                                    fontWeight: 'normal',
                                }}
                            />
                            <Divider inverted></Divider>
                            <Header
                                as='h4'
                                inverted
                                sub
                                content='Plenty of space for Logic and Creativity to coexist... and sometimes small birds.'
                                style={{
                                    marginTop: 0,
                                    fontWeight: 'normal'
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
}

export default Navigation;