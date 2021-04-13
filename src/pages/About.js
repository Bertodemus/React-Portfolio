import React from "react";
import { Container, Divider, Header, Segment } from "semantic-ui-react";

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
				<Divider
					as='h4'
					className='header'
					horizontal
					style={{ margin: "3em 0em", textTransform: "uppercase" }}
				>
					<a href='#' style={{ color: "#d84bbf" }}>
						Kudos - Praises - Comments
					</a>
				</Divider>
				<Header as='h3'>"Are you eating enough?""</Header>
				<p>- A Concerned Mother</p>
				<Divider />
				<Header as='h3'>"A real funny guy with a grand beard!""</Header>
				<p>- Gandalf the Grey</p>
				<Divider />
				<Header as='h3'>"A hard worker with a good grasp on reality.""</Header>
				<p>- Immortan Joe</p>
				<Divider />
			</Container>
		</Segment>
	);
}

export default About;
