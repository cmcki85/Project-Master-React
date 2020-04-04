import React, { Component } from 'react';
import './App.css';
import UserOutput from './Components/UserOutputs/UserOutputs';
import UserInput from './Components/UserInputs/UserInputs';

class App extends Component {
	state = {
		username: 'cmcki85'
	}

	handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value
		})
	}


	render() { 

		return (
			<div className='App'>
				<UserOutput userName = {this.state.username} />
				<UserInput change = {this.handleUsernameChange} />
			</div>
		);
	}
}

export default App;
