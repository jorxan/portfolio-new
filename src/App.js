import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
function App() {
	return (
		<div>
			<Home />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
