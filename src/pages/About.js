import React from 'react'
import {
  Container,
  Divider,
  Header,
  Segment,
} from 'semantic-ui-react'

function About() {
  return (
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '1.8em' }}>
          Merging My Left Brain With My Right Brain
        </Header>
        <p>
          Greetings! My name is Roberto Rubet, but I go by Berto! I am a Latino artist and a Full Stack Web Developer. With 18 years of experience as a designer/illustrator and my ability to absorb complex technical data, I am a developer capable of unifying design and technology, creation and implementation, analysis and realization.
        </p>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Kudos - Praises - Comments</a>
        </Divider>
        <Header as='h3'>
          "Are you eating enough?""
        </Header>
        <p>
          - A Concerned Mother
        </p>
        <Divider/>
        <Header as='h3'>
          "A real funny guy with a grand beard!""
        </Header>
        <p>
          - The Pope
        </p>
        <Divider/>
        <Header as='h3'>
          "A hard worker with a good grasp on reality.""
        </Header>
        <p>
          - Wendy's Drive-thru Manager
        </p>
        <Divider/>
      </Container>
    </Segment>
  );
}

export default About;