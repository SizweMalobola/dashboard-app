import './App.css'
import React, { useState } from 'react'
import firebase from './firebase'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	const [notes, setNotes] = useState([])

	const ref = firebase.firestore().collection('notes')
	console.log(ref)

	return (
		<Router>
			<div className='App'>
				<h1 className='pt-4 text-2xl font-semibold bg-blue-dark text-yellow-dark font-ropa-sans'>
					Hello World
				</h1>

				{notes.map(note => (
					<div key={note.id}>
						<h2>{note.title}</h2>
						<p>{note.description}</p>
					</div>
				))}
			</div>
		</Router>
	)
}

export default App
