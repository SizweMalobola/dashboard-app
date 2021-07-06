import React from 'react'
import { useFormik } from 'formik'
import firebase from '../../firebase'
import GoogleButton from '../auth/GoogleButton'
import LoginButton from '../auth/LoginButton'

let ref = firebase.auth()
// const user = firebase.auth().currentUser

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
	email: '',
	password: '',
}

function FormLogin() {
	const formik = useFormik({
		initialValues,
		validate,
		onSubmit: values => {
			ref.signInWithEmailAndPassword(values.email, values.password).catch(
				error => console.log('An error occurred:', error),
			)

			ref.onAuthStateChanged(user => {
				if (user) {
					console.log('Logged in bro')
				} else {
					console.log('Haha it did not work')
				}
			})
		},
	})

	return (
		<>
			<div className='max-w-sm px-6 py-1 mt-2 bg-blue-light rounded-2xl md:px-6 md:mx-6'>
				<form
					className='flex flex-col items-center'
					onSubmit={formik.handleSubmit}
				>
					<div className='flex flex-col w-full'>
						<label className='self-start py-2 text-sm text-blue-lighter font-poppins'>email</label>
						<input
							id='email'
							type='email'
							name='email'
							placeholder='e.g. Chris@myEmail.com'
							className='h-10 px-4 py-2 mt-2 text-gray-400 transition rounded-lg bg-blue-dark placeholder-blue-light focus:outline-none focus:ring-2 focus:ring-blue-500'
							onChange={formik.handleChange}
							value={formik.values.email}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.email && formik.errors.email ? (
							<div className='flex justify-end px-1 pt-1 text-xs text-red-400 font-ropa-sans'>
								{formik.errors.email}
							</div>
						) : null}
					</div>

					<div className='flex flex-col w-full mt-2'>
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
							<div className='flex justify-end px-1 pt-1 text-xs text-red-400 font-ropa-sans'>
								{formik.errors.password}
							</div>
						) : null}
					</div>

					<LoginButton />
					<GoogleButton />
				</form>
			</div>
		</>
	)
}

export default FormLogin
