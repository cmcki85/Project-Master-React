import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/person';


class App extends Component {
	state = {
		persons: [
			{name: 'Cam', age: '19', id: 1},
			{name: 'Lauren', age: '17', id: 2}
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

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({
			persons: persons
		});
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
							changed = {(event) => this.nameChangeHandler(event, person.id)}
							name = {person.name} 
							age = {person.age} 
							key = {person.id}
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