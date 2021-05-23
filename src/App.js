import { Header } from './components/Header/Header';
import { BlockPage } from './containers/BlogPage/BlockPage';
import { Footer } from './components/Footer/Footer';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginPage } from './containers/LoginPage/LoginPage';



export function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={BlockPage} />
						<Route path="/login" component={LoginPage} />
					</Switch>
				</main>
				<Footer year={new Date().getFullYear()} />
			</div>
		</BrowserRouter>
	);
}


