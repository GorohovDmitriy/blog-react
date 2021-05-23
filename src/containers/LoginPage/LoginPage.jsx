import './LoginPage.css';


export const LoginPage = (props) => {
	const handleLogIn = (e) => {
		e.preventDefault()
		props.history.push('/')

	}



	return (
		<div>
			<form className="box" onSubmit={handleLogIn}>
				<h1>Login</h1>
				<input type="text" name="" placeholder="Username" required></input>
				<input type="password" name="" placeholder="Password" required></input>
				<input type="submit" value="Login" name=""></input>
			</form>
		</div>
	)
}