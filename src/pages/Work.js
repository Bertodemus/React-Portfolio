import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import {
  Grid,
  Header,
  Image,
} from 'semantic-ui-react'
import Project from '../components/Project'

function Work() {
  return(
  <div>
    <Grid centered style={{ paddingTop: '2em' }}>
      <Grid.Row columns={16}>
        <Grid.Column width={8} textAlign='center'>
          <Header
            as='h2'
            content='LOGIC'
          />
        </Grid.Column>
        <Grid.Column width={8} textAlign='center'>
          <Header
            as='h2'
            content='CREATIVITY'
          />
        </Grid.Column>
      </Grid.Row>

      <Project
        name="TOGETHER:AGAINST"
        logicCopy="TOGETHER:AGAINST was difficult, yet fulfilling! We overcame some heavy technical obstacles and put together a decent functional app. It utilized the MVC software design pattern. Seeing it all come together was really exciting. Check out the REPO and our Readme for more details on the technology and the application itself."
        repoLink={<a href='https://github.com/Bertodemus/LeopardLightning' target='blank'>TOGETHER:AGAINST REPO</a>}
        tech={[
          '../../assets/images/logos/html5Logo.png',
          '../../assets/images/logos/cssLogo.png',
          '../../assets/images/logos/JavaScript-logo.png',
          '../../assets/images/logos/bootstrap-logo.png',
          '../../assets/images/logos/jqueryLogo.png',
          '../../assets/images/logos/ajax-logo.png',
          '../../assets/images/logos/nodejs-logo.png',
          '../../assets/images/logos/express-logo.png',
          '../../assets/images/logos/mysql-logo.png',
          '../../assets/images/logos/handlebars-logo.png',
          '../../assets/images/logos/sequelize-logo.png',
          '../../assets/images/logos/disqus-logo.png',
          '../../assets/images/logos/passport-logo.png',
          '../../assets/images/logos/jdenticon-logo.png'
        ]
        }
        creativeCopy="Putting together this frontend with Meaghan was an absolute blast! It all came together rather quickly and we were able to build a clean and functional UI/UX. This also granted me the opportunity to make some 3D assets. Head on over to the deployed site to see it in action!"
        demoLink={<a href='https://leopard-ta.herokuapp.com/' target='blank'>TOGETHER:AGAINST DEMO</a>}
        demoView={<Image centered size='large' src='../../assets/images/taview.png' />}
      />

<Project
        name="BURGER DESTROYER"
        logicCopy="Burger Destroyer was a fun and perplexing project to work on. It utilized the MVC software design pattern. It forced me to really consider how my code was constructed. I got the opportunity to use new technologies such as Handlebars, ORM, and JawsDB."
        repoLink={<a href='https://github.com/Bertodemus/BurgerDestroyer' target='blank'>BURGER DESTROYER REPO</a>}
        tech={[
          '../../assets/images/logos/html5Logo.png',
          '../../assets/images/logos/cssLogo.png',
          '../../assets/images/logos/JavaScript-logo.png',
          '../../assets/images/logos/bootstrap-logo.png',
          '../../assets/images/logos/jqueryLogo.png',
          '../../assets/images/logos/ajax-logo.png',
          '../../assets/images/logos/nodejs-logo.png',
          '../../assets/images/logos/express-logo.png',
          '../../assets/images/logos/mysql-logo.png',
          '../../assets/images/logos/handlebars-logo.png'
        ]}
        creativeCopy="I had a great time working on the design for this project! I got the chance to draw a monsterous face, oozing liquids, and some beef patties! haha I went for a 'metal / Thrasher' sort of vibe."
        demoLink={<a href='https://powerful-cliffs-00589.herokuapp.com/' target='blank'>BURGER DESTROYER DEMO</a>}
        demoView={<Image centered size='large' src='../../assets/images/bdview.png' />}
      />

<Project
        name="PERSPEKTIV"
        logicCopy="This project was an interactive mural search of Richmond, Va. (RVA). It exposed us to some great technologies, including a different CSS framework: Materialze CSS. On the backend, Mark and Javonte knocked it out of the park. Using multiple APIs and data sources, they pulled together all the data needed to get the map view operational."
        repoLink={<a href='https://github.com/markdcross/perspektiv' target='blank'>PERSPEKTIV REPO</a>}
        tech={[
          '../../assets/images/logos/html5Logo.png',
          '../../assets/images/logos/cssLogo.png',
          '../../assets/images/logos/JavaScript-logo.png',
          '../../assets/images/logos/materializeLogo.png',
          '../../assets/images/logos/jqueryLogo.png',
          '../../assets/images/logos/ajax-logo.png',
          '../../assets/images/logos/mapboxLogo.png',
          '../../assets/images/logos/leafletLogo.png',
          '../../assets/images/logos/googleapiLogo.png'
        ]}
        creativeCopy="Designed to be responsive, functional, and attractive, we had a wonderful time collaborating and coming together on this design. As part of the design team, Danny and I worked numerous hours getting the UI/UX just right."
        demoLink={<a href='https://markdcross.github.io/perspektiv/' target='blank'>PERSPEKTIV DEMO</a>}
        demoView={<Image centered size='large' src='../../assets/images/pview.png' />}
      />

<Project
        name="METEOR"
        logicCopy="Meteor is a weather dashboard that allows a user to enter in a city name and receive updated weather conditions for that city. I really enjoyed digging into the open weather map API. Aside from wrestling with the API calls, making the bar graphs functional and tracking the local storage was an adventure! Checkout the Readme file in the repository for more detailed information."
        repoLink={<a href='https://github.com/Bertodemus/Meteor-Weather-Dashboard' target='blank'>METEOR REPO</a>}
        tech={[
          '../../assets/images/logos/html5Logo.png',
          '../../assets/images/logos/cssLogo.png',
          '../../assets/images/logos/JavaScript-logo.png',
          '../../assets/images/logos/bootstrap-logo.png',
          '../../assets/images/logos/jqueryLogo.png',
          '../../assets/images/logos/ajax-logo.png',
          '../../assets/images/logos/OpenWeather-Logo.jpg',
          '../../assets/images/logos/momentJS.jpg'
        ]}
        creativeCopy="Laying out this design presented itself with some ineteresting opportunities. I wanted to keep the layout clean and to the point."
        demoLink={<a href='https://bertodemus.github.io/Meteor-Weather-Dashboard/' target='blank'>METEOR DEMO</a>}
        demoView={<Image centered size='large' src='../../assets/images/mview.png' />}
      />

<Project
        name="ORCHESTRATE"
        logicCopy="This is a simple hour-by-hour work day scheduler. This application runs in the browser and features dynamically updated HTML and CSS powered by jQuery. This project presented itself with some interesting opportunties regarding local storage, detecting time of day, and looping."
        repoLink={<a href='https://github.com/Bertodemus/Work-Day-Scheduler' target='blank'>ORCHESTRATE REPO</a>}
        tech={[
          '../../assets/images/logos/html5Logo.png',
          '../../assets/images/logos/cssLogo.png',
          '../../assets/images/logos/JavaScript-logo.png',
          '../../assets/images/logos/bootstrap-logo.png',
          '../../assets/images/logos/jqueryLogo.png',
          '../../assets/images/logos/momentJS.jpg',
          '../../assets/images/logos/faLogo.png'
        ]}
        creativeCopy="This is another responsive design that was built to be simple and functional. Upon your first visit, you are met with a modal that introduces you to the application and gives you a rundown of all the icons and how the software works. I really liked the color palette and the overall layout."
        demoLink={<a href='https://bertodemus.github.io/Work-Day-Scheduler/' target='blank'>ORCHESTRATE DEMO</a>}
        demoView={<Image centered size='large' src='../../assets/images/oview.png' />}
      />

    </Grid>
  </div>
  );
}

export default Work;