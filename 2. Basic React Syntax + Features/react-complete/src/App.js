import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/person';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<h1>Hello</h1>
				<Person />
				<Person />
				<Person />
			</div>
		);
	}
}

export default App;
