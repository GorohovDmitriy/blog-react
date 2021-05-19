import { Header } from './components/Header/Header';
import { BlockContent } from './components/BlockContent/BlockContent';
import { Footer } from './components/Footer/Footer';

import './App.css';



export function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<BlockContent />
			</main>
			<Footer year={new Date().getFullYear()} />
		</div>
	);
}


