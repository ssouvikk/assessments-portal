import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from './Component/TopBar/TopBar';
import './App.css'
import HomePage from './Container/HomePage/HomePage';
import Footer from './Component/Footer/Footer';
import { ROUTE_ENDPOINT } from './Utilities/RouteEndPoint';
import TopicDetails from './Container/TopicDetails/TopicDetails';
import ProblemList from './Container/ProblemList/ProblemList';

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
					</Switch>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
