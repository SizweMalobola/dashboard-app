import React from 'react'
import firebase from '../../firebase'
import { useFormik } from 'formik'
import GoogleButton from '../auth/GoogleButton'
import SignupButton from '../auth/SignupButton'

const db = firebase.firestore().collection('users')
const ref = firebase.auth()

const validate = values => {
	const errors = {}

	if (!values.name) {
		errors.name = 'Required'
	} else if (values.name.length < 3) {
		errors.name = 'Name not long enough'
	}

	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Incorrect email'
	}

	if (!values.password) {
		errors.password = 'Required'
	} else if (values.password.length < 6) {
		errors.password = 'Choose a longer password'
	}

	return errors
}

const initialValues = {
	name: '',
	email: '',
	password: '',
}

function FormSignUp() {
	const formik = useFormik({
		initialValues,
		validate,
		onSubmit: values => {
			ref.createUserWithEmailAndPassword(values.email, values.password)
				.then(response => {
					console.log('Successful:', response)
				})
				.catch(error => {
					console.log('There was an error:', error)
				})

			ref.onAuthStateChanged(user => {
				if (user) {
					db.doc(user.uid)
						.set({
							id: user.uid,
							name: values.name,
							email: values.email,
						})
						.catch(error => {
							console.log('An error occurred', error)
						})
				} else {
					console.log('An error has occurred')
				}
			})
		},
	})

	return (
		<>
			<div className='max-w-sm px-6 py-2 mt-2 bg-blue-light rounded-2xl md:px-6 md:mx-6'>
				<form
					className='flex flex-col items-center'
					onSubmit={formik.handleSubmit}
				>
					<div className='flex flex-col w-full'>
						<label className='self-start py-2 text-sm text-blue-lighter font-poppins'>name</label>
						<input
							id='name'
							type='text'
							name='name'
							placeholder='e.g. Chris'
							className='h-10 px-4 py-2 text-gray-400 transition rounded-lg bg-blue-dark placeholder-blue-light focus:outline-none focus:ring-2 focus:ring-blue-500'
							onChange={formik.handleChange}
							value={formik.values.name}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.name && formik.errors.name ? (
							<div className='flex justify-end px-1 pt-1 text-sm text-red-400 font-ropa-sans'>
								{formik.errors.name}
							</div>
						) : null}
					</div>

					<div className='flex flex-col w-full'>
						<label className='self-start py-2 text-sm text-blue-lighter font-poppins'>email</label>
						<input
							id='email'
							type='email'
							name='email'
							placeholder='e.g. Chris@myEmail.com'
							className='h-10 px-4 py-2 text-gray-400 transition rounded-lg bg-blue-dark placeholder-blue-light focus:outline-none focus:ring-2 focus:ring-blue-500'
							onChange={formik.handleChange}
							value={formik.values.email}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.email && formik.errors.email ? (
							<div className='flex justify-end px-1 pt-1 text-sm text-red-400 font-ropa-sans'>
								{formik.errors.email}
							</div>
						) : null}
					</div>

					<div className='flex flex-col w-full'>
						<label className='self-start py-2 text-sm text-blue-lighter font-poppins'>password</label>
						<input
							type='password'
							name='password'
							placeholder='Must be 6 characters or longer'
							className='h-10 px-4 py-2 text-gray-400 transition rounded-lg bg-blue-dark placeholder-blue-light focus:outline-none focus:ring-2 focus:ring-blue-500'
							onChange={formik.handleChange}
							value={formik.values.password}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.password && formik.errors.password ? (
							<div className='flex justify-end px-1 pt-1 text-sm text-red-400 font-ropa-sans'>
								{formik.errors.password}
							</div>
						) : null}
					</div>

					<SignupButton />

					<GoogleButton />
				</form>
			</div>
		</>
	)
}

export default FormSignUp
