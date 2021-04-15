import React from "react";
import { Card, Grid, Header, Divider } from "semantic-ui-react";
import Project from "../components/Project";

function Work() {
	return (
		<div>
			<Grid centered style={{ padding: "1em 2em 1em 2em" }}>
				<Grid.Row
					style={{
						padding: "0 0 0 0",
					}}
				>
					<Grid.Column width={16}>
						<Divider horizontal>
							<Header 
								as='h3'
								content="Arm wrestling logic and creativity"
								textAlign='center'
								style={{
									fontWeight: "normal"
								}}
							/>
						</Divider>
					</Grid.Column>
				</Grid.Row>
				<Card.Group>
				<Project
						name='PERSPEKTIV'
						logicCopy='This project was an interactive mural search of Richmond, Va. (RVA). It exposed us to some great technologies, including a different CSS framework: Materialze CSS. On the backend, Mark and Javonte knocked it out of the park. Using multiple APIs and data sources, they pulled together all the data needed to get the map view operational.'
						repoLink={
							<a href='https://github.com/markdcross/perspektiv' target='blank'>
								PERSPEKTIV REPO
							</a>
						}
						tech={[
							"../../assets/images/logos/html5Logo.png",
							"../../assets/images/logos/cssLogo.png",
							"../../assets/images/logos/JavaScript-logo.png",
							"../../assets/images/logos/materializeLogo.png",
							"../../assets/images/logos/jqueryLogo.png",
							"../../assets/images/logos/ajax-logo.png",
							"../../assets/images/logos/mapboxLogo.png",
							"../../assets/images/logos/leafletLogo.png",
							"../../assets/images/logos/googleapiLogo.png",
						]}
						creativeCopy='Designed to be responsive, functional, and attractive, we had a wonderful time collaborating and coming together on this design. As part of the design team, Danny and I worked numerous hours getting the UI/UX just right.'
						demoLink={
							<a href='https://markdcross.github.io/perspektiv/' target='blank'>
								PERSPEKTIV DEMO
							</a>
						}
						demoView={'../../assets/images/pview.png'}
						demoViewM={'../../assets/images/pviewSQ.png'}
					/>

					<Project
						name='PERSPEKTIV V2'
						logicCopy='A continuation of the original Perspektiv App, we took it to the next level! Our backend team created an incredibly in-depth foundation for the React driven front-end.'
						repoLink={
							<a
								href='https://github.com/markdcross/perspektiv-v2'
								target='blank'
							>
								PERSPEKTIV V2 REPO
							</a>
						}
						tech={[
							"../../assets/images/logos/react-logo.png",
							"../../assets/images/logos/html5Logo.png",
							"../../assets/images/logos/cssLogo.png",
							"../../assets/images/logos/JavaScript-logo.png",
							"../../assets/images/logos/reactbootstrap-logo.png",
							"../../assets/images/logos/semanticuireact-logo.png",
							"../../assets/images/logos/express-logo.png",
							"../../assets/images/logos/mongodb-logo.jpg",
							"../../assets/images/logos/mapboxLogo.png",
						]}
						creativeCopy='Danny and I had to really put our heads together on the front-end. We wanted to increase user engagement, add a "game" element to visiting the murals, and hit most of our "wants" from Version 1.'
						demoLink={
							<a href='http://bit.ly/perspektiv-rva' target='blank'>
								PERSPEKTIV V2 DEMO
							</a>
						}
						demoView={'../../assets/images/p2view.png'}
						demoViewM={'../../assets/images/p2viewSQ.png'}
					/>

					<Project
						name='TOGETHER:AGAINST'
						logicCopy='TOGETHER:AGAINST was difficult, yet fulfilling! We overcame some heavy technical obstacles and put together a decent functional app. It utilized the MVC software design pattern. Seeing it all come together was really exciting. Check out the REPO and our Readme for more details on the technology and the application itself.'
						repoLink={
							<a
								href='https://github.com/Bertodemus/LeopardLightning'
								target='blank'
							>
								TOGETHER:AGAINST REPO
							</a>
						}
						tech={[
							"../../assets/images/logos/html5Logo.png",
							"../../assets/images/logos/cssLogo.png",
							"../../assets/images/logos/JavaScript-logo.png",
							"../../assets/images/logos/bootstrap-logo.png",
							"../../assets/images/logos/jqueryLogo.png",
							"../../assets/images/logos/ajax-logo.png",
							"../../assets/images/logos/nodejs-logo.png",
							"../../assets/images/logos/express-logo.png",
							"../../assets/images/logos/mysql-logo.png",
							"../../assets/images/logos/handlebars-logo.png",
							"../../assets/images/logos/sequelize-logo.png",
							"../../assets/images/logos/disqus-logo.png",
							"../../assets/images/logos/passport-logo.png",
							"../../assets/images/logos/jdenticon-logo.png",
						]}
						creativeCopy='Putting together this frontend with Meaghan was an absolute blast! It all came together rather quickly and we were able to build a clean and functional UI/UX. This also granted me the opportunity to make some 3D assets. Head on over to the deployed site to see it in action!'
						demoLink={
							<a href='https://leopard-ta.herokuapp.com/' target='blank'>
								TOGETHER:AGAINST DEMO
							</a>
						}
						demoView={'../../assets/images/taview.png'}
						demoViewM={'../../assets/images/taviewSQ.png'}
					/>

					<Project
						name='BUDGET BUDDY'
						logicCopy='This project is a small budget tracker. It is designed to be a PWA (progressive web application). I had a great time exploring that functionality and getting the site to function while off-line. If there is no connection, it will track any user input and then update the chart once it detects a connection.'
						repoLink={
							<a
								href='https://github.com/Bertodemus/BudgetBuddy/'
								target='blank'
							>
								BUDGET BUDDY REPO
							</a>
						}
						tech={[
							"../../assets/images/logos/html5Logo.png",
							"../../assets/images/logos/cssLogo.png",
							"../../assets/images/logos/JavaScript-logo.png",
						]}
						creativeCopy="This design was simple and moreso focused on functioning as a PWA. Though, I did have a blast designing and creating the 'Budget Buddy. I also updated the formatting and color scheme."
						demoLink={
							<a href='https://warm-taiga-26819.herokuapp.com/' target='blank'>
								BUDGET BUDDY DEMO
							</a>
						}
						demoView={'../../assets/images/bbview.png'}
						demoViewM={'../../assets/images/bbviewSQ.png'}
					/>

					<Project
						name='BURGER DESTROYER'
						logicCopy='Burger Destroyer was a fun and perplexing project to work on. It utilized the MVC software design pattern. It forced me to really consider how my code was constructed. I got the opportunity to use new technologies such as Handlebars, ORM, and JawsDB.'
						repoLink={
							<a
								href='https://github.com/Bertodemus/BurgerDestroyer'
								target='blank'
							>
								BURGER DESTROYER REPO
							</a>
						}
						tech={[
							"../../assets/images/logos/html5Logo.png",
							"../../assets/images/logos/cssLogo.png",
							"../../assets/images/logos/JavaScript-logo.png",
							"../../assets/images/logos/bootstrap-logo.png",
							"../../assets/images/logos/jqueryLogo.png",
							"../../assets/images/logos/ajax-logo.png",
							"../../assets/images/logos/nodejs-logo.png",
							"../../assets/images/logos/express-logo.png",
							"../../assets/images/logos/mysql-logo.png",
							"../../assets/images/logos/handlebars-logo.png",
						]}
						creativeCopy="I had a great time working on the design for this project! I got the chance to draw a monsterous face, oozing liquids, and some beef patties! haha I went for a 'metal / Thrasher' sort of vibe."
						demoLink={
							<a
								href='https://powerful-cliffs-00589.herokuapp.com/'
								target='blank'
							>
								BURGER DESTROYER DEMO
							</a>
						}
						demoView={'../../assets/images/bdview.png'}
						demoViewM={'../../assets/images/bdviewSQ.png'}
					/>

					<Project
						name='METEOR'
						logicCopy='Meteor is a weather dashboard that allows a user to enter in a city name and receive updated weather conditions for that city. I really enjoyed digging into the open weather map API. Aside from wrestling with the API calls, making the bar graphs functional and tracking the local storage was an adventure! Checkout the Readme file in the repository for more detailed information.'
						repoLink={
							<a
								href='https://github.com/Bertodemus/Meteor-Weather-Dashboard'
								target='blank'
							>
								METEOR REPO
							</a>
						}
						tech={[
							"../../assets/images/logos/html5Logo.png",
							"../../assets/images/logos/cssLogo.png",
							"../../assets/images/logos/JavaScript-logo.png",
							"../../assets/images/logos/bootstrap-logo.png",
							"../../assets/images/logos/jqueryLogo.png",
							"../../assets/images/logos/ajax-logo.png",
							"../../assets/images/logos/OpenWeather-Logo.jpg",
							"../../assets/images/logos/momentJS.jpg",
						]}
						creativeCopy='Laying out this design presented itself with some ineteresting opportunities. I wanted to keep the layout clean and to the point.'
						demoLink={
							<a
								href='https://bertodemus.github.io/Meteor-Weather-Dashboard/'
								target='blank'
							>
								METEOR DEMO
							</a>
						}
						demoView={'../../assets/images/mview.png'}
						demoViewM={'../../assets/images/mviewSQ.png'}
					/>

					<Project
						name='ORCHESTRATE'
						logicCopy='This is a simple hour-by-hour work day scheduler. This application runs in the browser and features dynamically updated HTML and CSS powered by jQuery. This project presented itself with some interesting opportunties regarding local storage, detecting time of day, and looping.'
						repoLink={
							<a
								href='https://github.com/Bertodemus/Work-Day-Scheduler'
								target='blank'
							>
								ORCHESTRATE REPO
							</a>
						}
						tech={[
							"../../assets/images/logos/html5Logo.png",
							"../../assets/images/logos/cssLogo.png",
							"../../assets/images/logos/JavaScript-logo.png",
							"../../assets/images/logos/bootstrap-logo.png",
							"../../assets/images/logos/jqueryLogo.png",
							"../../assets/images/logos/momentJS.jpg",
							"../../assets/images/logos/faLogo.png",
						]}
						creativeCopy='This is another responsive design that was built to be simple and functional. Upon your first visit, you are met with a modal that introduces you to the application and gives you a rundown of all the icons and how the software works. I really liked the color palette and the overall layout.'
						demoLink={
							<a
								href='https://bertodemus.github.io/Work-Day-Scheduler/'
								target='blank'
							>
								ORCHESTRATE DEMO
							</a>
						}
						demoView={'../../assets/images/oview.png'}
						demoViewM={'../../assets/images/oviewSQ.png'}
					/>
				</Card.Group>
				<br></br>
			</Grid>
		</div>
	);
}

export default Work;
