import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, Grid, Header, Image, Divider } from "semantic-ui-react";
import { useLocation } from "react-router-dom";

function Navigation() {
	console.log(useLocation().pathname);
	return (
		<div style={{ background: "#1b1c1d" }} id='top'>
			<Navbar
				collapseOnSelect
				expand='sm'
				variant='dark'
				style={{ background: "#1b1c1d" }}
			>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='about'>
							{useLocation().pathname === "/about" ? (
								<span
									style={{
										color: "white",
										backgroundColor: "#ff9000",
										padding: "0 4px 0 4px",
									}}
								>
									ABOUT
								</span>
							) : (
								<span
									style={{
										padding: "0 4px 0 4px",
									}}
								>
									About
								</span>
							)}
						</Nav.Link>
						<Nav.Link href='work'>
                        {useLocation().pathname === "/work" ? (
								<span
									style={{
										color: "white",
										backgroundColor: "#35979b",
										padding: "0 4px 0 4px",
									}}
								>
									WORK
								</span>
							) : (
								<span
									style={{
										padding: "0 4px 0 4px",
									}}
								>
									Work
								</span>
							)}
                        </Nav.Link>
						<Nav.Link href='contact'>
                        {useLocation().pathname === "/contact" ? (
								<span
									style={{
										color: "white",
										backgroundColor: "#d84bbf",
										padding: "0 4px 0 4px",
									}}
								>
									CONTACT
								</span>
							) : (
								<span
									style={{
										padding: "0 4px 0 4px",
									}}
								>
									Contact
								</span>
							)}
                        </Nav.Link>
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
									fontSize: "3em",
									fontWeight: "normal",
									marginBottom: 0,
								}}
							/>
							<Header
								as='h2'
								inverted
								content='Big Skull. Big Beard.'
								style={{
									fontSize: "1.7em",
									fontWeight: "normal",
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
									fontWeight: "normal",
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
