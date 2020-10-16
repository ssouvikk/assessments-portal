import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from './Component/TopBar/TopBar';
import './App.css'
import HomePage from './Container/HomePage/HomePage';
import Footer from './Component/Footer/Footer';
import { ROUTE_ENDPOINT } from './Utilities/RouteEndPoint';
import TopicDetails from './Container/TopicDetails/TopicDetails';
import ProblemList from './Container/ProblemList/ProblemList';
import SessionPlan from './Container/SessionPlan/SessionPlan';
import SessionRecording from './Container/SessionRecording/SessionRecording';

const App = () => {
	return (
		<div className='container'>
			<BrowserRouter>
				<TopBar />
				<div className='content'>
					<Switch>
						<Route exact path={ROUTE_ENDPOINT.HOME_PAGE} component={HomePage} />
						<Route exact path={ROUTE_ENDPOINT.TOPIC_DETAILS} component={TopicDetails} />
						<Route exact path={ROUTE_ENDPOINT.PROBLEM_LIST} component={ProblemList} />
						<Route exact path={ROUTE_ENDPOINT.SESSION_PLAN} component={SessionPlan} />
						<Route exact path={ROUTE_ENDPOINT.SESSION_RECORDING} component={SessionRecording} />
					</Switch>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
