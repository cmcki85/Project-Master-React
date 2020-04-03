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

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{name: 'Cam', age: '20'},
				{name: event.target.value, age: '17'}
			],
			otherState: 'Some Value'
		})
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

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid #ccc',
			padding: '8px',
			cursor: 'pointer'
		}

		return (
			<div className='App'>
				<h1>Is this working?</h1>
				<button 
					onClick = {this.switchNameHandler.bind(this, 'Cameron')} 
					style = {style}	
					>
						Switch Name
				</button>
				<Person 
					name={this.state.persons[0].name} 
					age={this.state.persons[0].age}>
						My Hobbies: Programming 
				</Person>
				<Person 
					name={this.state.persons[1].name} 
					age={this.state.persons[1].age}
					click = {this.switchNameHandler.bind(this, 'Cam!!')}
					changed = {this.nameChangedHandler}
				/>
				
			</div>
		);
	}
}

export default App;
