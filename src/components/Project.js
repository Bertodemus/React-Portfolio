import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
	Divider,
	Grid,
	Icon,
	Image,
	Segment,
	Popup,
	Card,
} from "semantic-ui-react";

function Project(props) {
	return (
		<>
			<Card raised fluid style={{ margin: "1em 2em 0em 2em" }}>
				<Card.Content
					style={{
						background: "#dddddd",
					}}
				>
					<Card.Header>{props.name}</Card.Header>
				</Card.Content>
				<Card.Content>
					<Segment basic style={{ margin: "0em 0em 1em 0em" }}>
						<Grid centered columns={1}>
							<Grid.Row centered only='mobile'>
								<Grid.Column width={16} textAlign='left'>
									<p>{props.logicCopy}</p>
									<br></br>
									<p>
										{props.repoLink} - This is a link to the repository and just
										below is a list of some of the tech we used.
									</p>
									<Grid.Row>
										<Grid.Column style={{ padding: "0em 0em 0em 1em" }}>
											{props.tech.map((tech) => (
												<Image
													key={tech}
													inline
													rounded
													size='mini'
													spaced='right'
													src={tech}
												/>
											))}
										</Grid.Column>
									</Grid.Row>
									<hr></hr>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row centered only='mobile'>
								<Grid.Column width={16} textAlign='left'>
									<p>{props.creativeCopy}</p>
									<p>{props.demoLink} - This is a link to the live demo.</p>
									<br></br>
									<Grid.Row>
										<Grid.Column style={{ padding: "0em 1em 0em 1em" }}>
											<Image rounded size='large' src={props.demoView} />
										</Grid.Column>
									</Grid.Row>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row centered only='mobile' style={{ padding: "0 0 0 0" }}>
								<Grid.Column width={16}>
									<Divider horizontal>
										<AnchorLink href='#top'>
											<Popup
												content='Back to Top'
												position='top center'
												size='mini'
												inverted
												trigger={
													<Icon
														size='large'
														color='teal'
														name='arrow alternate circle up outline'
														style={{ padding: "0 0 0 5px" }}
													/>
												}
											/>
										</AnchorLink>
									</Divider>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row centered only='tablet computer'>
								<Grid.Column
									width={7}
									textAlign='left'
									style={{ padding: "0em 2em 0em 0em" }}
								>
									<p>{props.logicCopy}</p>
									<hr></hr>
									<p>
										{props.repoLink} - This is a link to the repository and just
										below is a list of some of the tech we used.
									</p>
									<hr></hr>
									<Grid.Row>
										<Grid.Column style={{ padding: "0em 0em 0em 1em" }}>
											{props.tech.map((tech) => (
												<Image
													key={tech}
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
													color='teal'
													name='arrow alternate circle up outline'
													style={{ margin: "-10px 0 0 3px" }}
												/>
											}
										/>
									</AnchorLink>
								</Divider>
								<Grid.Column
									width={7}
									textAlign='left'
									style={{ padding: "0em 0em 0em 2em" }}
								>
									<p>{props.creativeCopy}</p>
									<hr></hr>
									<p>{props.demoLink} - This is a link to the live demo.</p>
									<hr></hr>
									<Grid.Row>
										<Grid.Column style={{ padding: "0em 1em 0em 1em" }}>
											<Image rounded size='large' src={props.demoViewM} />
										</Grid.Column>
									</Grid.Row>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Segment>
				</Card.Content>
			</Card>
		</>
	);
}

export default Project;
