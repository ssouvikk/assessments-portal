import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from './Component/TopBar/TopBar';
import './App.css'
import HomePage from './Container/HomePage/HomePage';
import Footer from './Component/Footer/Footer';

const App = () => {
	return (
		<div className='container'>
			<BrowserRouter>
				<TopBar />
				<div className='content'>
					<HomePage />
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
