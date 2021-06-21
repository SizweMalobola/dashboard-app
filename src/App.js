import './App.css'
import React, { useState, useEffect } from 'react'
import firebase from './firebase'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='App'>
				<h1 className='pt-4 text-2xl bg-blue-dark text-yellow-dark font-ropa-sans'>
					Good luck
				</h1>
			</div>
		</Router>
	)
}

export default App
