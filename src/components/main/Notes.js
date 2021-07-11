import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

function Notes() {
	const [todos, setTodos] = useState([])
	const [input, setInput] = useState('')
	const db = firebase.firestore().collection('notes')

	useEffect(() => {
		db.onSnapshot(snapshot => {
			setTodos(
				snapshot.docs.map(doc => {
					return {
						id: doc.id,
						name: doc.data().todo,
					}
				}),
			)
		})
	}, [])

	const addTodo = event => {
		event.preventDefault()
		db.add({
			todo: input,
		})
		setInput('')
	}

	const deleteTodo = id => {
		db.doc(id)
			.delete()
			.then(response => console.log('Deleted', response))
	}

	return (
		<div className='flex flex-col items-center h-full p-3'>
			<form className='flex items-center justify-center w-full'>
				<input
					type='text'
					name='task'
					id='task'
					onChange={event => setInput(event.target.value)}
					className='w-[80%] px-4 py-1 mx-2 rounded-full outline-none bg-blue-dark text-teal-light transition'
				/>

				<button
					type='submit'
					onClick={addTodo}
					className='flex items-center justify-center w-8 h-8 text-xl text-white transition rounded-full focus:outline-none bg-blue-dark font-poppins hover:text-yellow-dark active:text-white focus:text-yellow-dark hover:animate-spin'
				>
					+
				</button>
			</form>
			<div className='relative flex flex-col items-center justify-center w-full h-auto overflow-scroll-y'>
				{todos.map(todo => (
					<div className='relative z-10 w-full md:h-10 px-4 py-1 mx-2 my-3 rounded-full outline-none xl:max-w-64 bg-blue-dark text-gray-300 xl:w-[90%] transition flex items-center justify-between'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 transition cursor-pointer text-blue-light hover:text-green-500 focus:text-green-500 hover:animate-pulse'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M5 13l4 4L19 7'
							/>
						</svg>
						<p className='text-xs text-left w-[80%] md:text-base'>
							{input.value}
						</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							onClick={() => deleteTodo(todo.id)}
							className='w-6 h-6 transition transform cursor-pointer text-blue-light hover:text-red-500 hover:animate-bounce focus:text-red-500'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
							/>
						</svg>
					</div>
				))}
			</div>
		</div>
	)
}

export default Notes
