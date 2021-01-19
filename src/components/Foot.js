import React from "react";
import {
    Container,
    Grid,
    Header,
    Image,
    List,
    Segment,
} from 'semantic-ui-react'

function Foot() {
    return(
        <Segment inverted vertical style={{ padding: '2em 0em' }}>
            <Container>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Header inverted as='h4' content='Noteworthy' />
                        <List link inverted>
                            <List.Item as='a'>Designer</List.Item>
                            <List.Item as='a'>Illustrator</List.Item>
                            <List.Item as='a'>Former Luchador</List.Item>
                            <List.Item as='a'>Founding Member of the X-Men</List.Item>
                            <List.Item as='a'>Poorly Timed Jokes</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h4' inverted>
                            I love to chat and engage with people!
                        </Header>
                            <p>
                                Feel free to reach out to me whenever you wish! I welcome the interaction! Best case scenario, I have a skillset that can benefit you. Worst case scenario, we have a fantastic converstaion and have a few laughs!
                            </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <a href="http://www.robertorubet.com" target='blank'><Image size='small' src='../../assets/images/biglogo.png' /></a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
    );
}

export default Foot;