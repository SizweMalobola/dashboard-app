import './App.css'
import React, { useState, useEffect } from 'react'
import firebase from './firebase'
import Welcome from './components/welcome/Welcome'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Main from './components/main/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
               <Route path='/' exact component={Welcome} />
               <Route path='/login' component={Login} />
               <Route path='/sign-up' component={SignUp} />
               <Route path='/main' component={Main} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
