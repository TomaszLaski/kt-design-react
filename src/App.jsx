import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EntryPage from './components/entryPage/EntryPage';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<EntryPage />}></Route>
				<Route path='/portfolio' element={<Portfolio />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
