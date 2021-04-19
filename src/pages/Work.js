import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Card, Grid, Divider, Segment, List } from "semantic-ui-react";
import Project from "../components/Project";

function Work() {
	return (
		<div>
			<Grid centered style={{ padding: "1em 2em 1em 2em" }}>
				<Grid.Row
					style={{
						padding: "1em 0 0 0",
					}}
				>
					<Grid.Column width={16}>
						<Divider
							as='h4'
							className='header'
							horizontal
							style={{
								textTransform: "uppercase",
							}}
						>
							<p>
								&#60;<span style={{ color: "#35979b" }}>Projects</span> /&#62;
							</p>
						</Divider>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row centered>
					<Grid.Column width={16}>
						<Segment inverted>
							<List divided inverted relaxed>
								<List.Item>
									<AnchorLink href='#p1'>
										<List.Content>
											<List.Header>PERSPEKTIV</List.Header>
											<List.Description>
												- Initial concept for a different way to experience
												Richmond murals
											</List.Description>
										</List.Content>
									</AnchorLink>
								</List.Item>

								<List.Item>
									<AnchorLink href='#p2'>
										<List.Content>
											<List.Header>PERSPEKTIV V2</List.Header>
											<List.Description>
												- Revamp of the original project built in React
											</List.Description>
										</List.Content>
									</AnchorLink>
								</List.Item>

								<List.Item>
									<AnchorLink href='#ta'>
										<List.Content>
											<List.Header>TOGETHER:AGAINST</List.Header>
											<List.Description>
												- Group app built to explore the MVC software design
												pattern
											</List.Description>
										</List.Content>
									</AnchorLink>
								</List.Item>

								<List.Item>
									<AnchorLink href='#bb'>
										<List.Content>
											<List.Header>BUDGET BUDDY</List.Header>
											<List.Description>
												- Tiny PWA app where I got to code and desgin a logo
											</List.Description>
										</List.Content>
									</AnchorLink>
								</List.Item>

								<List.Item>
									<AnchorLink href='#bd'>
										<List.Content>
											<List.Header>BURGER DESTROYER</List.Header>
											<List.Description>
												- "BURGER LOGGER" where I got to code and create visuals
											</List.Description>
										</List.Content>
									</AnchorLink>
								</List.Item>

								<List.Item>
									<AnchorLink href='#me'>
										<List.Content>
											<List.Header>METEOR</List.Header>
											<List.Description>
												- Sleek and simple weather dashboard
											</List.Description>
										</List.Content>
									</AnchorLink>
								</List.Item>

								<List.Item>
									<AnchorLink href='#or'>
										<List.Content>
											<List.Header>ORCHESTRATE</List.Header>
											<List.Description>
												- Hour-by-hour work day scheduler
											</List.Description>
										</List.Content>
									</AnchorLink>
								</List.Item>
							</List>
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Card.Group>
					<div id='p1'></div>

					<Project
						name='PERSPEKTIV'
						repoLink={
							<a href='https://github.com/markdcross/perspektiv' target='blank'>
								PERSPEKTIV REPO
							</a>
						}
						skill={[
							"idea",
							"visual",
							"group",
							"iterate",
							"wireframe",
							"graphics",
							"code",
							"frameworks",
							"time",
						]}
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
						info="Get to know the beautifully weird city of Richmond through its murals and food via a web application integrating multiple server-side APIs to display information about the city's art and food scenes. If you want to find more info on the app and the tech we used, vist the repo:"
						demoLink={<p>PERSPEKTIV</p>}
						demoView={[
							"../../assets/images/p1/pviewSQ.png",
							"../../assets/images/p1/pviewSQ2.png",
							"../../assets/images/p1/pviewSQ3.png",
						]}
						demoViewL={["Main Page", "Map View", "Detail View"]}
						demoViewC={[
							"a collection of all the murals with a chance to preview them or follow them to the app to get more info",
							"this is where you get to see the mural you selected and a view of all the murals, pinned to a map of RVA",
							"selecting 'Details' gives you artist info and chance to see resaurants in half-mile radius",
						]}
					/>

					<div id='p2'></div>
					<Project
						name='PERSPEKTIV V2'
						repoLink={
							<a
								href='https://github.com/markdcross/perspektiv-v2'
								target='blank'
							>
								PERSPEKTIV V2 REPO
							</a>
						}
						skill={[
							"idea",
							"visual",
							"group",
							"iterate",
							"wireframe",
							"graphics",
							"code",
							"frameworks",
							"time",
						]}
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
						info='A continuation of the original Perspektiv App, we took it to the next level! Our backend team created an incredibly in-depth foundation for the React driven front-end. With only two weeks to get this done, Danny and I had to really put our heads together on the front-end. We wanted to increase user engagement, add a "game" element to visiting the murals, and hit most of our "wants" from Version 1. If you want to find more info on the app and the tech we used, vist the repo:'
						demoLink={
							<p>
								PERSPEKTIV V2{" "}
								<a href='http://bit.ly/perspektiv-rva' target='blank'>
									(link to live demo)
								</a>
							</p>
						}
						demoView={[
							"../../assets/images/p2/pviewSQ.png",
							"../../assets/images/p2/pviewSQ2.png",
							"../../assets/images/p2/pviewSQ3.png",
						]}
						demoViewL={["Main Page", "Map View", "Detail View"]}
						demoViewC={[
							"a quick preview of all the murals with a chance to preview it or follow it to the app to get more info",
							"this is where you get to see the mural you selected and view of all murals, pinned to a map of RVA",
							"selecting 'Details' gives you artist info and chance to see resaurants in half-mile radius",
						]}
					/>

					<div id='ta'></div>
					<Project
						name='TOGETHER:AGAINST'
						repoLink={
							<a
								href='https://github.com/Bertodemus/LeopardLightning'
								target='blank'
							>
								TOGETHER:AGAINST REPO
							</a>
						}
						skill={[
							"idea",
							"visual",
							"group",
							"iterate",
							"graphics",
							"code",
							"time",
						]}
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
						info='This one was difficult, but very fulfilling! In a very compressed amount of time, we overcame some heavy technical obstacles and put together a decent functional app. It utilizes the MVC software design pattern. Putting together the frontend with Meaghan was an absolute blast! It all came together rather quickly and we were able to build a clean and functional UI. This also granted me an opportunity to make some 3D assets. If you want to find more info on the app and the tech we used, vist the repo:'
						demoLink={
							<p>
								TOGETHER:AGAINST{" "}
								<a href='https://leopard-ta.herokuapp.com/' target='blank'>
									(link to live demo)
								</a>
							</p>
						}
						demoView={[
							"../../assets/images/ta/pviewSQ.png",
							"../../assets/images/ta/pviewSQ2.png",
							"../../assets/images/ta/pviewSQ3.png",
						]}
						demoViewL={["Main Page", "Map View", "Detail View"]}
						demoViewC={[
							"a quick preview of all the murals with a chance to preview it or follow it to the app to get more info",
							"this is where you get to see the mural you selected and view of all murals, pinned to a map of RVA",
							"selecting 'Details' gives you artist info and chance to see resaurants in half-mile radius",
						]}
					/>

					<div id='bb'></div>
					<Project
						name='BUDGET BUDDY'
						repoLink={
							<a
								href='https://github.com/Bertodemus/BudgetBuddy/'
								target='blank'
							>
								BUDGET BUDDY REPO
							</a>
						}
						skill={["visual", "solo", "graphics", "code", "frameworks", "time"]}
						tech={[
							"../../assets/images/logos/html5Logo.png",
							"../../assets/images/logos/cssLogo.png",
							"../../assets/images/logos/JavaScript-logo.png",
						]}
						info="This project is a small budget tracker. It is designed to be a PWA (progressive web application). I had a great time exploring that aspect and getting the site to function while off-line. If there is no connection, it will track any user input and then update the chart once it detects a connection. This design was simple and moreso focused on functioning as a PWA. Though, I did have a blast designing and creating the 'Budget Buddy. If you want to find more info on the app and the tech we used, vist the repo:"
						demoLink={
							<p>
								BUDGET BUDDY{" "}
								<a
									href='https://warm-taiga-26819.herokuapp.com/'
									target='blank'
								>
									(link to live demo)
								</a>
							</p>
						}
						demoView={[
							"../../assets/images/bb/pviewSQ.png",
							"../../assets/images/bb/pviewSQ2.png",
							"../../assets/images/bb/pviewSQ3.png",
						]}
						demoViewL={["Main Page", "Map View", "Detail View"]}
						demoViewC={[
							"a quick preview of all the murals with a chance to preview it or follow it to the app to get more info",
							"this is where you get to see the mural you selected and view of all murals, pinned to a map of RVA",
							"selecting 'Details' gives you artist info and chance to see resaurants in half-mile radius",
						]}
					/>

					<div id='bd'></div>
					<Project
						name='BURGER DESTROYER'
						repoLink={
							<a
								href='https://github.com/Bertodemus/BurgerDestroyer'
								target='blank'
							>
								BURGER DESTROYER REPO
							</a>
						}
						skill={[
							"idea",
							"visual",
							"solo",
							"iterate",
							"graphics",
							"code",
							"frameworks",
							"time",
						]}
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
						info="Burger Destroyer was a fun and perplexing project to work on. It utilized the MVC software design pattern. It forced me to really consider how my code was constructed. I got the opportunity to use 'new to me' technologies such as Handlebars, ORM, and JawsDB. I also had a great time working on the design for this project! I got the chance to draw a burger monster, oozing liquids, and some beef patties! haha I went for a 'metal / Thrasher' sort of vibe. If you want to find more info on the app and the tech we used, vist the repo:"
						demoLink={
							<p>
								BURGER DESTROYER{" "}
								<a
									href='https://powerful-cliffs-00589.herokuapp.com/'
									target='blank'
								>
									(link to live demo)
								</a>
							</p>
						}
						demoView={[
							"../../assets/images/bd/pviewSQ.png",
							"../../assets/images/bd/pviewSQ2.png",
							"../../assets/images/bd/pviewSQ3.png",
						]}
						demoViewL={["Main Page", "Map View", "Detail View"]}
						demoViewC={[
							"a quick preview of all the murals with a chance to preview it or follow it to the app to get more info",
							"this is where you get to see the mural you selected and view of all murals, pinned to a map of RVA",
							"selecting 'Details' gives you artist info and chance to see resaurants in half-mile radius",
						]}
					/>

					<div id='me'></div>
					<Project
						name='METEOR'
						repoLink={
							<a
								href='https://github.com/Bertodemus/Meteor-Weather-Dashboard'
								target='blank'
							>
								METEOR REPO
							</a>
						}
						skill={[
							"idea",
							"visual",
							"solo",
							"wireframe",
							"graphics",
							"code",
							"frameworks",
							"time",
						]}
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
						info='Meteor is a weather dashboard that allows a user to enter in a city name and receive updated weather conditions for that city. I really enjoyed digging into the open weather map API. Aside from wrestling with the API calls, making the bar graphs functional and tracking the local storage was an adventure! Laying out this design presented itself with some ineteresting opportunities. I wanted to keep the layout clean and to the point. If you want to find more info on the app and the tech we used, vist the repo:'
						demoLink={
							<p>
								METEOR{" "}
								<a
									href='https://bertodemus.github.io/Meteor-Weather-Dashboard/'
									target='blank'
								>
									(link to live demo)
								</a>
							</p>
						}
						demoView={[
							"../../assets/images/me/pviewSQ.png",
							"../../assets/images/me/pviewSQ2.png",
							"../../assets/images/me/pviewSQ3.png",
						]}
						demoViewL={["Main Page", "Map View", "Detail View"]}
						demoViewC={[
							"a quick preview of all the murals with a chance to preview it or follow it to the app to get more info",
							"this is where you get to see the mural you selected and view of all murals, pinned to a map of RVA",
							"selecting 'Details' gives you artist info and chance to see resaurants in half-mile radius",
						]}
					/>

					<div id='or'></div>
					<Project
						name='ORCHESTRATE'
						repoLink={
							<a
								href='https://github.com/Bertodemus/Work-Day-Scheduler'
								target='blank'
							>
								ORCHESTRATE REPO
							</a>
						}
						skill={[
							"idea",
							"visual",
							"solo",
							"wireframe",
							"code",
							"frameworks",
							"time",
						]}
						tech={[
							"../../assets/images/logos/html5Logo.png",
							"../../assets/images/logos/cssLogo.png",
							"../../assets/images/logos/JavaScript-logo.png",
							"../../assets/images/logos/bootstrap-logo.png",
							"../../assets/images/logos/jqueryLogo.png",
							"../../assets/images/logos/momentJS.jpg",
							"../../assets/images/logos/faLogo.png",
						]}
						info='This is a simple hour-by-hour work day scheduler. This application runs in the browser and features dynamically updated HTML and CSS powered by jQuery. This project presented itself with some interesting opportunties regarding local storage, detecting time of day, and looping. This is another responsive design that was built to be simple and functional. Upon your first visit, you are met with a modal that introduces you to the application and gives you a rundown of all the icons and how the software works. I really liked the color palette and the overall layout. If you want to find more info on the app and the tech we used, vist the repo:'
						demoLink={
							<p>
								ORCHESTRATE{" "}
								<a
									href='https://bertodemus.github.io/Work-Day-Scheduler/'
									target='blank'
								>
									(link to live demo)
								</a>
							</p>
						}
						demoView={[
							"../../assets/images/or/pviewSQ.png",
							"../../assets/images/or/pviewSQ2.png",
							"../../assets/images/or/pviewSQ3.png",
						]}
						demoViewL={["Main Page", "Map View", "Detail View"]}
						demoViewC={[
							"a quick preview of all the murals with a chance to preview it or follow it to the app to get more info",
							"this is where you get to see the mural you selected and view of all murals, pinned to a map of RVA",
							"selecting 'Details' gives you artist info and chance to see resaurants in half-mile radius",
						]}
					/>
				</Card.Group>
				<br></br>
			</Grid>
		</div>
	);
}

export default Work;
