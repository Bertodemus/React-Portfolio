import React from "react"
import {
  Divider,
  Grid,
  Header,
  Image,
  Segment,
  Card
} from 'semantic-ui-react'

function Contact() {
  return(
    <div>
      <Grid centered>
        <Grid.Row columns={16} style={{ padding: '3em 0 0 0' }}>
          <Grid.Column width={8} textAlign='center'>
            <Header
              as='h2'
              content='THINKY STUFF'
            />
          </Grid.Column>
          <Grid.Column width={7} textAlign='center'>
            <Header
              as='h2'
              content='ARTSY STUFF'
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{
            padding: '0 0 0 0'
          }}>
          <Grid.Column width={16}>
            <Divider horizontal>
              <Header
                as='h3'
                content="Let's get in touch, nerds!"
                textAlign='center'
                style={{
                  fontWeight: 'normal',
                }}
                />
            </Divider>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Segment basic style={{ margin: '0em 0em 1em 0em' }}>
        <Grid centered> 
          <Grid.Row>
            <Grid.Column width={8} textAlign='left' style={{ padding: '0em 1em 0em 1em' }}>
              <Card.Group>

                <Card fluid>
                  <a href="mailto:roberto@robertorubet.com" target='blank'><Image src='../../assets/images/logos/email.png' /></a>
                  <Card.Content>
                    <Card.Header>E-Mail</Card.Header>
                    <Card.Description>
                      <a href="mailto:roberto@robertorubet.com" target='blank'>roberto@robertorubet.com</a>
                    </Card.Description>
                  </Card.Content>
                </Card>

                <Card fluid>
                  <a href="https://github.com/Bertodemus" target="blank"><Image src='../../assets/images/logos/github.png' /></a>
                  <Card.Content>
                  <Card.Header>GitHub</Card.Header>
                    <Card.Description>
                      <a href="https://github.com/Bertodemus" target="blank">Bertodemus</a>
                    </Card.Description>
                  </Card.Content>
                </Card>

                <Card fluid>
                  <a href="https://www.linkedin.com/in/roberto-rubet-3a76859?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BM%2FYCJfmaSsq99IrQHrj1LA%3D%3D" target="blank"><Image src='../../assets/images/logos/linkedin.png' /></a>
                  <Card.Content>
                  <Card.Header>LinkedIn</Card.Header>
                    <Card.Description>
                      <a href="https://www.linkedin.com/in/roberto-rubet-3a76859?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BM%2FYCJfmaSsq99IrQHrj1LA%3D%3D" target="blank">Roberto</a>
                    </Card.Description>
                  </Card.Content>
                </Card>

                <Card fluid>
                  <a href="https://github.com/Bertodemus/React-Portfolio/raw/main/public/assets/files/RRResume.pdf"><Image src='../../assets/images/logos/resume.png' /></a>
                  <Card.Content>
                  <Card.Header>Resume</Card.Header>
                    <Card.Description>
                      <a href="https://github.com/Bertodemus/React-Portfolio/raw/main/public/assets/files/RRResume.pdf">Download</a>
                    </Card.Description>
                  </Card.Content>
                </Card>

                <Card fluid>
                  <Image src='../../assets/images/logos/phone.png' />
                  <Card.Content>
                  <Card.Header>Mobile</Card.Header>
                    <Card.Description>
                      (804) 355-1231
                    </Card.Description>
                  </Card.Content>
                </Card>

              </Card.Group>
            </Grid.Column>

            <Grid.Column width={8} textAlign='left' style={{ padding: '0em 1em 0em 1em' }}>
              <Card.Group>

                <Card fluid>
                  <a href="https://www.instagram.com/berto_berto/" target='blank'><Image src='../../assets/images/logos/instagram.png' /></a>
                  <Card.Content>
                  <Card.Header>Instagram</Card.Header>
                    <Card.Description>
                      <a href="https://www.instagram.com/berto_berto/" target='blank'>berto_berto</a>
                    </Card.Description>
                  </Card.Content>
                </Card>

                <Card fluid>
                  <a href="http://www.robertorubet.com" target='blank'><Image src='../../assets/images/logos/mylogo.png' /></a>
                  <Card.Content>
                  <Card.Header>BERTO!</Card.Header>
                    <Card.Description>
                      <a href="http://www.robertorubet.com" target='blank'>My artwork</a>
                    </Card.Description>
                  </Card.Content>
                </Card>

              </Card.Group>                    
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider vertical>
          <Image size='mini' src='../../assets/images/biglogo.png' style={{ margin: '-1.5em 0 0 0' }} />
        </Divider>
      </Segment>
    </div>
  );
}

export default Contact;