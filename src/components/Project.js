import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Grid, Image, Segment, Card, Button } from "semantic-ui-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBrain,
	faCode,
	faPencilRuler,
	faToolbox,
	faUsers,
	faUser,
	faHourglassHalf,
	faChevronCircleUp,
	faChevronCircleRight,
	faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
	faEdit,
	faEye,
	faObjectGroup,
} from "@fortawesome/free-regular-svg-icons";
import Carousel from "react-bootstrap/Carousel";

function Project(props) {
	const skillz = {
		idea: {
			font: faBrain,
			label: "Ideation",
		},
		visual: {
			font: faEye,
			label: "Visual Design",
		},
		group: {
			font: faUsers,
			label: "Collaboration",
		},
		iterate: {
			font: faEdit,
			label: "Iterative Process",
		},
		wireframe: {
			font: faObjectGroup,
			label: "Wireframing",
		},
		graphics: {
			font: faPencilRuler,
			label: "Custom Graphics",
		},
		code: {
			font: faCode,
			label: "Coding",
		},
		frameworks: {
			font: faToolbox,
			label: "Frameworks",
		},
		solo: {
			font: faUser,
			label: "Solo Work",
		},
		time: {
			font: faHourglassHalf,
			label: "Time Management",
		},
	};

	return (
		<>
			<Card raised fluid style={{ margin: "1em 2em 0em 2em" }}>
				<Segment basic style={{ margin: "0em 0em 1em 0em" }}>
					<Grid centered columns={1}>
						<Grid.Row>
							<Grid.Column mobile={16} tablet={14} computer={7}>
								<Segment basic>
									<Carousel
										interval={null}
										nextIcon={
											<FontAwesomeIcon
												style={{ color: "35979b" }}
												icon={faChevronCircleRight}
												size='2x'
											/>
										}
										prevIcon={
											<FontAwesomeIcon
												style={{ color: "35979b" }}
												icon={faChevronCircleLeft}
												size='2x'
											/>
										}
									>
										<Carousel.Item>
											<img
												className='d-block w-100'
												src={props.demoView[0]}
												alt='First slide'
											/>
											{/* <Carousel.Caption style={{color: "#fff"}}>
												<h3>{props.demoViewL[0]}</h3>
												<p>{props.demoViewC[0]}</p>
											</Carousel.Caption> */}
										</Carousel.Item>
										<Carousel.Item>
											<img
												className='d-block w-100'
												src={props.demoView[1]}
												alt='Second slide'
											/>
											{/* <Carousel.Caption style={{color: "#fff"}}>
												<h3>{props.demoViewL[1]}</h3>
												<p>{props.demoViewC[1]}</p>
											</Carousel.Caption> */}
										</Carousel.Item>
										<Carousel.Item>
											<img
												className='d-block w-100'
												src={props.demoView[2]}
												alt='Third slide'
											/>
											{/* <Carousel.Caption style={{color: "#fff"}}>
												<h3>{props.demoViewL[2]}</h3>
												<p>{props.demoViewC[2]}</p>
											</Carousel.Caption> */}
										</Carousel.Item>
									</Carousel>
								</Segment>
							</Grid.Column>
							<Grid.Column tablet={16} computer={9} textAlign='left'>
								<Segment basic>
									<hr></hr>
									<p>{props.demoLink}</p>
									<p>{props.info} {props.repoLink}</p>
									<hr></hr>
									<p>Skills I Leveled Up:</p>
									{props.skill.map((skill) => (
										<Button rounded basic style={{ margin: "5px 5px 0 0" }}>
											<FontAwesomeIcon icon={skillz[skill].font} size='2x' />
											<p style={{ fontSize: "0.8em" }}>{skillz[skill].label}</p>
										</Button>
									))}
									<hr></hr>
									<p>Tech Tree:</p>
									{props.tech.map((tech) => (
										<Image
											key={tech}
											inline
											rounded
											size='tiny'
											spaced='right'
											src={tech}
											style={{ margin: "5px 5px 0 0" }}
										/>
									))}
									<hr></hr>
									<AnchorLink href='#top'>
										<FontAwesomeIcon
											style={{ color: "35979b", float: "right" }}
											icon={faChevronCircleUp}
											size='2x'
										/>
									</AnchorLink>
									<p
										style={{
											textAlign: "middle",
											float: "right",
											padding: "4px 5px 0 0",
										}}
									>
										Back to Top
									</p>
								</Segment>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Card>
		</>
	);
}

export default Project;
