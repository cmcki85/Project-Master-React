import React, { useState } from 'react';
import './App.css';
import Person from './Components/Person/person';

const app = (props) => {
	const [personsState, setPersonsState] = useState({
		persons: [
			{name: 'Cam', age: '19'},
			{name: 'Lauren', age: '17'}
		]
	})
	const [otherState, setOtherState] = useState('Some other value');

	const switchNameHandler = () => {
		setPersonsState({
			persons: [
				{name: 'Cameron', age: '20'},
				{name: 'Lauren', age: '17'}
			],
			otherState: 'Some Value'
		})
	}

	return (
		<div className='App'>
			<h1>Is this working?</h1>
			<button onClick = {switchNameHandler} >Switch Name</button>
			<Person name={personsState.persons[0].name} age={personsState.persons[0].age}> My Hobbies: Programming </Person>
			<Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
			
		</div>
	);
}

export default app;
