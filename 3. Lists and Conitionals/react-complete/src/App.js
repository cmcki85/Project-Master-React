import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/person';


class App extends Component {
	state = {
		persons: [
			{name: 'Cam', age: '19'},
			{name: 'Lauren', age: '17'}
		],
		otherState: 'Some Value',
		showPersons: false,
	}
	
	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons]; 
		persons.splice(personIndex, 1);
		this.setState({
			persons: persons
		});
	}

	handleNameChange = (event) => {
		this.setState({
			persons: [
				{name: 'Cameron', age: '20'},
				{name: event.target.value, age: '17'}
			],
			otherState: 'Some Value'
		})
	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		})
	}

	render() {

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person 
							click = {() => this.deletePersonHandler(index)}
							name = {person.name} 
							age = {person.age} 
							/>
					})}
				</div>
			)
		};

		return (
			<div className='App'>
				<h1>Change these names:</h1>
				<button onClick = {this.togglePersonHandler}>Toggle Names</button>
				{ persons } 
			</div>
		);
	}
}

export default App;