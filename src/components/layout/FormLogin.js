import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

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

function FormLogin() {

   const formik = useFormik({
		initialValues,
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
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
						<label className='label'>name</label>
						<input
							id='name'
							type='text'
							name='name'
							placeholder='e.g. Chris'
							className='input'
							onChange={formik.handleChange}
							value={formik.values.name}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.name && formik.errors.name ? (
							<div className='flex justify-end px-1 pt-1 text-xs text-red-400 font-ropa-sans'>
								{formik.errors.name}
							</div>
						) : null}
					</div>

					<div className='flex flex-col w-full'>
						<label className='label'>email</label>
						<input
							id='email'
							type='email'
							name='email'
							placeholder='e.g. Chris@myEmail.com'
							className='mt-2 input'
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
						<label className='label'>password</label>
						<input
							type='password'
							name='password'
							placeholder='Must be 6 characters or longer'
							className='input'
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

					<div className='w-full pt-4'>
						<button
							type='submit'
							className='w-full px-4 py-2 text-xl text-white transition border-none rounded-lg bg-yellow-dark font-ropa-sans hover:bg-yellow-500 active:bg-yellow-dark focus:outline-none focus:ring-2 focus:ring-yellow-600 active:outline-none'
						>
							Sign In
						</button>
					</div>

					<div className='flex items-center self-end pt-4'>
						<p className='pr-1 text-blue-lighter'>
							Sign in with Google instead
						</p>
						<Link className='focus:outline-none'>
							<button>
								<img
									src={process.env.PUBLIC_URL + 'assets/Google.svg'}
									alt='sign in with google instead'
									className='transition transform hover:scale-110 active:scale-100 focus:outline-none'
								/>
							</button>
						</Link>
					</div>
				</form>
			</div>
		</>
	)
}

export default FormLogin
