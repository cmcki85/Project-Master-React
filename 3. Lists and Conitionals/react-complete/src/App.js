import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/person';


class App extends Component {
	state = {
		persons: [
			{name: 'Cam', age: '19'},
			{name: 'Lauren', age: '17'}
		]
	}
	
	switchNameHandler = (newName) => {
		// console.log("Click!")
		this.setState({
			persons: [
				{name: newName, age: '20'},
				{name: 'Lauren', age: '17'}
			],
			otherState: 'Some Value'
		})
	}

	handleNameChange = (event) => {
		this.setState({
			persons: [
				{name: 'Cameron', age: '20'},
				{name: event.target.value, age: '17'}
			],
			otherState: 'Some Value',
			showPersons: false,
		})
	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		})
	}

	render() {
		return (
			<div className='App'>
				<h1>Change these names:</h1>
				<button onClick = {this.togglePersonHandler} >Toggle Names</button>
				{ this.state.showPersons ? 
					<div>
						<Person 
							name={this.state.persons[0].name} 
							age={this.state.persons[0].age}>
								My Hobbies: Programming 
						</Person>
						<Person 
							name={this.state.persons[1].name} 
							age={this.state.persons[1].age}
							click = {this.switchNameHandler.bind(this, 'Cam!!')}
							changed = {this.handleNameChange}
						/>
					</div> : null
				}
				

			</div>
		);
	}
}

export default App;