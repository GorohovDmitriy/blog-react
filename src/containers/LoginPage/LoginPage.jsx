import { useState } from 'react'
import './LoginPage.css'

export const LoginPage = ({ setUserName, setIsLoggedIn, history }) => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const handleLoginChange = (e) => {
		setLogin(e.target.value)
	}
	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleLogIn = (e) => {
		e.preventDefault()

		localStorage.setItem('isLoggedIn', true)
		localStorage.setItem('userName', login)
		setUserName(login)
		setIsLoggedIn(true)
		history.push('/')
	}

	return (
		<div>
			<form className='box' onSubmit={handleLogIn}>
				<h1>Login</h1>
				<input
					onChange={handleLoginChange}
					type='text'
					name=''
					placeholder='Username'
					required
				></input>
				<input
					onChange={handlePasswordChange}
					type='password'
					name=''
					placeholder='Password'
					required
				></input>
				<input type='submit' value='Login' name=''></input>
			</form>
		</div>
	)
}
