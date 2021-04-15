import React from "react";
import {
	Container,
	Divider,
	Header,
	Segment,
	Button,
	Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

function About() {
	return (
		<Segment style={{ padding: "3em 0em" }} vertical>
			<Container text>
				<Header as='h3' style={{ fontSize: "1.8em" }}>
					Merging My Left Brain With My Right Brain
				</Header>
				<p>
					My name is Roberto Rubet, but I go by Berto! I am a creative, turned
					developer! I am looking to unify design and technology, creation and
					implementation, analysis and realization. With my experience as a
					designer/illustrator, my keen ability to quickly absorb complex
					technical data, and my love for ideation and the iterative process, I
					believe that I can do just that!
				</p>
				<Link
					to={{
						pathname:
							"https://docs.google.com/document/d/1quRV0Rgsaj-3IHFhuCKTk_3FuiGqNiVtRjyzLUrkWTo/edit?usp=sharing",
					}}
					target='_blank'
				>
					<Button compact circular>
						<Button.Content visible>Resume</Button.Content>
					</Button>
				</Link>
				<Link
					to={{
						pathname:
							"work",
					}}
				>
					<Button compact circular>
						<Button.Content visible>Work</Button.Content>
					</Button>
				</Link>
				<Divider
					as='h4'
					className='header'
					horizontal
					style={{ margin: "3em 0em", textTransform: "uppercase", color: "#ff9000" }}
				>
					{/* <a href='#' style={{ color: "#d84bbf" }}> */}
						Kudos - Praises - Comments
					{/* </a> */}
				</Divider>
				<Header as='h3'>"Are you eating enough?""</Header>
				<p>- A Concerned Mother</p>
				<Divider />
				<Header as='h3'>"A most comedic human with a grand beard!""</Header>
				<p>- Gandalf the Grey</p>
				<Divider />
				<Header as='h3'>"A hard worker, which I will carry through the gates of Valhalla. He shall ride eternal. Shiny, and chrome."</Header>
				<p>- Immortan Joe</p>
				<Divider />
			</Container>
		</Segment>
	);
}

export default About;
