import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Header.css';

export function Header({ isLoggedIn, setIsLoggedIn, userName }) {
	const handleLogOut = () => {
		localStorage.setItem('isLoggedIn', false)
		setIsLoggedIn(false)
	}



	return (
		<div>
			<header>
				{
					isLoggedIn ?
						<nav>
							Welcom &nbsp; <strong>{userName}</strong>
							<NavLink onClick={handleLogOut} exact to="/login"><ExitToAppIcon />Exit</NavLink>
						</nav>
						: 'WELCOM'
				}

			</header>
		</div>
	)
}


