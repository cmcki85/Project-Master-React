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

	switchNameHandler = (event) => {
		// console.log("Click!")
		this.setState({
			persons: [
				{name: 'Cameron', age: '20'},
				{name: 'Lauren', age: '17'}
			],
			otherState: 'Some Value'
		})
	}

	render() {
		return (
			<div className='App'>
				<h1>Is this working?</h1>
				<button onClick = {this.switchNameHandler} >Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My Hobbies: Programming </Person>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
				
			</div>
		);
	}
}

export default App;
