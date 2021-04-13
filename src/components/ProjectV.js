import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	Segment,
	Popup,
	Card,
} from "semantic-ui-react";

function Project(props) {
	return (
		<>
			<Card fluid style={{ margin: "1em 2em 0em 2em" }}>
				<Card.Content
					style={{
						background: "#dddddd",
					}}
				>
					<Card.Header>{props.name}</Card.Header>
				</Card.Content>
				<Card.Content>
					<Segment basic style={{ margin: "0em 0em 1em 0em" }}>
						<Grid centered columns={2}>
							<Grid.Row centered className='mobile only'>
								<Grid.Column
									width={7}
									textAlign='left'
									style={{ padding: "0em 2em 0em 0em" }}
								>
									<p>{props.logicCopy}</p>
									<hr></hr>
									{props.repoLink}
									<hr></hr>
									<Grid.Row>
										<Grid.Column style={{ padding: "0em 0em 0em 1em" }}>
											{props.tech.map((tech) => (
												<Image
													inline
													rounded
													size='mini'
													spaced='right'
													src={tech}
												/>
											))}
										</Grid.Column>
									</Grid.Row>
								</Grid.Column>
								<Grid.Column
									width={7}
									textAlign='left'
									style={{ padding: "0em 0em 0em 2em" }}
								>
									<p>{props.creativeCopy}</p>
									<hr></hr>
									{props.demoLink}
									<hr></hr>
									<Grid.Row>
										<Grid.Column style={{ padding: "0em 1em 0em 1em" }}>
											<Image
												rounded
												size='large'
												spaced='right'
												src={props.demoViewM}
											/>
										</Grid.Column>
									</Grid.Row>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row centered className='tablet computer only '>
								<Grid.Column
									width={7}
									textAlign='left'
									style={{ padding: "0em 2em 0em 0em" }}
								>
									<p>{props.logicCopy}</p>
									<hr></hr>
									{props.repoLink}
									<hr></hr>
									<Grid.Row>
										<Grid.Column style={{ padding: "0em 0em 0em 1em" }}>
											{props.tech.map((tech) => (
												<Image
													inline
													rounded
													size='tiny'
													spaced='right'
													src={tech}
												/>
											))}
										</Grid.Column>
									</Grid.Row>
								</Grid.Column>
								<Grid.Column
									width={7}
									textAlign='left'
									style={{ padding: "0em 0em 0em 2em" }}
								>
									<p>{props.creativeCopy}</p>
									<hr></hr>
									{props.demoLink}
									<hr></hr>
									<Grid.Row>
										<Grid.Column style={{ padding: "0em 1em 0em 1em" }}>
											<Image
												rounded
												size='large'
												spaced='right'
												src={props.demoView}
											/>
										</Grid.Column>
									</Grid.Row>
								</Grid.Column>
							</Grid.Row>
						</Grid>
						<Divider vertical>
							<AnchorLink href='#top'>
								<Popup
									content='Back to Top'
									position='top center'
									size='mini'
									inverted
									trigger={
										<Icon
											size='large'
											color='red'
											name='arrow alternate circle up outline'
											style={{ margin: "-0.5em 0 0 0" }}
										/>
									}
								/>
							</AnchorLink>
						</Divider>
					</Segment>
				</Card.Content>
			</Card>
		</>
	);
}

export default Project;
