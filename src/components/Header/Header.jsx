import { NavLink } from 'react-router-dom';
import './Header.css';

export function Header() {
	return (
		<div>
			<header>
				<nav>
					<NavLink activeClassName="activLink" exact to="/">Home</NavLink>
					<NavLink activeClassName="activLink" exact to="/login">login</NavLink>
				</nav>
			</header>
		</div>
	)
}


