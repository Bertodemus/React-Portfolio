import React from "react";
import { Divider, Grid, Header, Image, Segment, Card } from "semantic-ui-react";

function Contact() {
	return (
		<div>
			<Grid centered style={{ paddingTop: "1em" }}>
				<Grid.Row
					style={{
						padding: "0 0 0 0",
					}}
				>
					<Grid.Column width={16}>
						<Divider horizontal>
							<Header
								as='h3'
								content="Let's get in touch, nerds!"
								textAlign='center'
								style={{
									fontWeight: "normal",
								}}
							/>
						</Divider>
					</Grid.Column>
				</Grid.Row>
			</Grid>

			<Segment basic style={{ margin: "0em 0em 1em 0em" }}>
				<Grid centered>
					<Grid.Row only='tablet computer largescreen'>
						<Grid.Column
							computer={5}
							tablet={6}
							mobile={14}
							textAlign='left'
							style={{ padding: "0em 1em 0em 1em" }}
						>
							<Card.Group>
								<Card raised fluid>
									<a
										href='https://docs.google.com/document/d/1quRV0Rgsaj-3IHFhuCKTk_3FuiGqNiVtRjyzLUrkWTo/edit?usp=sharing'
										target='blank'
									>
										<Image src='../../assets/images/logos/resume.png' />
									</a>
									<Card.Content>
										<Card.Header>Resume</Card.Header>
										<Card.Description>
											<a
												href='https://docs.google.com/document/d/1quRV0Rgsaj-3IHFhuCKTk_3FuiGqNiVtRjyzLUrkWTo/edit?usp=sharing'
												target='blank'
											>
												View Resume
											</a>
										</Card.Description>
									</Card.Content>
								</Card>

								<Card raised fluid>
									<a href='http://www.robertorubet.com' target='blank'>
										<Image src='../../assets/images/logos/mylogo.png' />
									</a>
									<Card.Content>
										<Card.Header>BERTO!</Card.Header>
										<Card.Description>
											<a href='http://www.robertorubet.com' target='blank'>
												My artwork
											</a>
										</Card.Description>
									</Card.Content>
								</Card>

								<Card raised fluid>
									<a
										href='https://www.linkedin.com/in/roberto-rubet-3a76859?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BM%2FYCJfmaSsq99IrQHrj1LA%3D%3D'
										target='blank'
									>
										<Image src='../../assets/images/logos/linkedin.png' />
									</a>
									<Card.Content>
										<Card.Header>LinkedIn</Card.Header>
										<Card.Description>
											<a
												href='https://www.linkedin.com/in/roberto-rubet-3a76859?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BM%2FYCJfmaSsq99IrQHrj1LA%3D%3D'
												target='blank'
											>
												Roberto
											</a>
										</Card.Description>
									</Card.Content>
								</Card>
							</Card.Group>
						</Grid.Column>

						<Grid.Column
							computer={5}
							tablet={6}
							mobile={14}
							textAlign='left'
							style={{ padding: "0em 1em 0em 1em" }}
						>
							<Card.Group>
								<Card raised fluid>
									<a href='mailto:roberto@robertorubet.com' target='blank'>
										<Image src='../../assets/images/logos/email.png' />
									</a>
									<Card.Content>
										<Card.Header>E-Mail</Card.Header>
										<Card.Description>
											<a href='mailto:roberto@robertorubet.com' target='blank'>
												roberto@robertorubet.com
											</a>
										</Card.Description>
									</Card.Content>
								</Card>

								<Card raised fluid>
									<a href='https://github.com/Bertodemus' target='blank'>
										<Image src='../../assets/images/logos/github.png' />
									</a>
									<Card.Content>
										<Card.Header>GitHub</Card.Header>
										<Card.Description>
											<a href='https://github.com/Bertodemus' target='blank'>
												Bertodemus
											</a>
										</Card.Description>
									</Card.Content>
								</Card>

								<Card raised fluid>
									<a
										href='https://www.instagram.com/berto_berto/'
										target='blank'
									>
										<Image src='../../assets/images/logos/instagram.png' />
									</a>
									<Card.Content>
										<Card.Header>Instagram</Card.Header>
										<Card.Description>
											<a
												href='https://www.instagram.com/berto_berto/'
												target='blank'
											>
												berto_berto
											</a>
										</Card.Description>
									</Card.Content>
								</Card>
							</Card.Group>
						</Grid.Column>
					</Grid.Row>
					{/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
					<Grid.Row only='mobile'>
						<Grid.Column
							mobile={14}
							textAlign='left'
							style={{ padding: "0em 1em 0em 1em" }}
						>
							<Card.Group>
								<Card raised fluid>
									<a
										href='https://docs.google.com/document/d/1quRV0Rgsaj-3IHFhuCKTk_3FuiGqNiVtRjyzLUrkWTo/edit?usp=sharing'
										target='blank'
									>
										<Image src='../../assets/images/logos/resume.png' />
									</a>
									<Card.Content>
										<Card.Header>Resume</Card.Header>
										<Card.Description>
											<a
												href='https://docs.google.com/document/d/1quRV0Rgsaj-3IHFhuCKTk_3FuiGqNiVtRjyzLUrkWTo/edit?usp=sharing'
												target='blank'
											>
												View Resume
											</a>
										</Card.Description>
									</Card.Content>
								</Card>

								<Card raised fluid>
									<a href='mailto:roberto@robertorubet.com' target='blank'>
										<Image src='../../assets/images/logos/email.png' />
									</a>
									<Card.Content>
										<Card.Header>E-Mail</Card.Header>
										<Card.Description>
											<a href='mailto:roberto@robertorubet.com' target='blank'>
												roberto@robertorubet.com
											</a>
										</Card.Description>
									</Card.Content>
								</Card>

								<Card raised fluid>
									<a href='http://www.robertorubet.com' target='blank'>
										<Image src='../../assets/images/logos/mylogo.png' />
									</a>
									<Card.Content>
										<Card.Header>BERTO!</Card.Header>
										<Card.Description>
											<a href='http://www.robertorubet.com' target='blank'>
												My artwork
											</a>
										</Card.Description>
									</Card.Content>
								</Card>

								<Card raised fluid>
									<a href='https://github.com/Bertodemus' target='blank'>
										<Image src='../../assets/images/logos/github.png' />
									</a>
									<Card.Content>
										<Card.Header>GitHub</Card.Header>
										<Card.Description>
											<a href='https://github.com/Bertodemus' target='blank'>
												Bertodemus
											</a>
										</Card.Description>
									</Card.Content>
								</Card>
								
								<Card raised fluid>
									<a
										href='https://www.linkedin.com/in/roberto-rubet-3a76859?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BM%2FYCJfmaSsq99IrQHrj1LA%3D%3D'
										target='blank'
									>
										<Image src='../../assets/images/logos/linkedin.png' />
									</a>
									<Card.Content>
										<Card.Header>LinkedIn</Card.Header>
										<Card.Description>
											<a
												href='https://www.linkedin.com/in/roberto-rubet-3a76859?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BM%2FYCJfmaSsq99IrQHrj1LA%3D%3D'
												target='blank'
											>
												Roberto
											</a>
										</Card.Description>
									</Card.Content>
								</Card>

								<Card raised fluid>
									<a
										href='https://www.instagram.com/berto_berto/'
										target='blank'
									>
										<Image src='../../assets/images/logos/instagram.png' />
									</a>
									<Card.Content>
										<Card.Header>Instagram</Card.Header>
										<Card.Description>
											<a
												href='https://www.instagram.com/berto_berto/'
												target='blank'
											>
												berto_berto
											</a>
										</Card.Description>
									</Card.Content>
								</Card>

							</Card.Group>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				{/* <Divider vertical>
					<Image
						size='mini'
						src='../../assets/images/biglogo.png'
						style={{ margin: "-1.5em 0 0 0" }}
					/>
				</Divider> */}
			</Segment>
		</div>
	);
}

export default Contact;
