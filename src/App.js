import './App.css'
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from './Component/TopBar/TopBar';
import HomePage from './Container/HomePage/HomePage';
import Footer from './Component/Footer/Footer';
import { ROUTE_ENDPOINT } from './Utilities/RouteEndPoint';
import TopicDetails from './Container/TopicDetails/TopicDetails';
import ProblemList from './Container/ProblemList/ProblemList';
import SessionPlan from './Container/SessionPlan/SessionPlan';
import SessionRecording from './Container/SessionRecording/SessionRecording';
import ClassRoomPage from './Container/ClassRoom/ClassRoom';
import ProgramDetails from './Container/ProgramDetails/ProgramDetails';
import Curriculum from './Container/Curriculum/Curriculum';
import Grades from './Container/Grades/Grades';

const App = () => {
	return (
		<div className='container'>
			<BrowserRouter>
				<TopBar />
				<div className='content'>
					<Switch>
						<Route exact path={ROUTE_ENDPOINT.HOME_PAGE} component={HomePage} />
						<Route exact path={`${ROUTE_ENDPOINT.TOPIC_DETAILS}/:id`} component={TopicDetails} />
						<Route exact path={`${ROUTE_ENDPOINT.PROBLEM_LIST}/:id`} component={ProblemList} />
						<Route exact path={ROUTE_ENDPOINT.CLASS_ROOM} component={ClassRoomPage} />
						<Route exact path={`${ROUTE_ENDPOINT.PROGRAM_DETAIL}/:id`} component={ProgramDetails} />
						<Route exact path={`${ROUTE_ENDPOINT.CURRICULUM}/:id1/:id2`} component={Curriculum} />
						<Route exact path={`${ROUTE_ENDPOINT.GRADE}/:id1/:id2`} component={Grades} />
						<Route exact path={`${ROUTE_ENDPOINT.SESSION_PLAN}/:id1/:id2/:id3`} component={SessionPlan} />
						<Route exact path={`${ROUTE_ENDPOINT.SESSION_RECORDING}/:id1/:id2/:id3`} component={SessionRecording} />
					</Switch>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
