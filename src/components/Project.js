import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
  Popup,
} from 'semantic-ui-react'


function Project(props) {
    return (
        <>
        <Grid.Row>
            <Grid.Column width={16}>
                <Header
                as='h3'
                content={props.name}
                textAlign='center'
                style={{
                    fontWeight: 'normal',
                    background: '#f0ad4e'
                }}
                />
            </Grid.Column>
        </Grid.Row>
    <Segment style={{ margin: '0em 0em 1em 0em' }}>
    <Grid centered columns={2}>
        <Grid.Row centered>
            <Grid.Column width={7} textAlign='left' style={{ padding: '0em 2em 0em 0em' }}>
                <p>
                    {props.logicCopy}
                </p>
                <hr></hr>
                    {props.repoLink}
                <hr></hr>
                <Grid.Row>
                    <Grid.Column>
                        {props.tech.map((tech) =>
                            <Image inline size='mini' src={tech}/>
                        )}
                    </Grid.Column>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width={7} textAlign='left' style={{ padding: '0em 0em 0em 2em' }}>
                <p>
                    {props.creativeCopy}
                </p>
                <hr></hr>
                    {props.demoLink}
                <hr></hr>
                <Grid.Row>
                    <Grid.Column style={{ padding: '0em 1em 0em 1em' }}>
                        {props.demoView}
                    </Grid.Column>
                </Grid.Row>
            </Grid.Column>
        </Grid.Row>
    </Grid>
        <Divider vertical>
            <AnchorLink href="#top" >
            <Popup content='Back to Top' position='top center' size='mini' inverted trigger={<Icon size='large' color='red' name='arrow alternate circle up outline' style={{ margin: '-0.5em 0 0 0' }} />}/>
            </AnchorLink>   
            {/* <a href="#top"><Icon color='red' name='arrow alternate circle up outline' style={{ margin: '0 0 0 0' }} /></a> */}
        </Divider>
    </Segment>
    </>

    );
}

export default Project;