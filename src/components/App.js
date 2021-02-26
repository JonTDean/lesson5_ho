import '../css/App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Home, About, FavoriteThings, Things } from './Routes/_routes';

function App() {
	return (
		<div className="App">
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/About">About</Link>
						</li>
						<li>
							<Link to="/FavoriteThings">FavoriteThings</Link>
						</li>
						<li>
							<Link to="Things">Things</Link>
						</li>
					</ul>
				</nav>
			</div>

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/About">
					<About />
				</Route>
				<Route exact path="/FavoriteThings">
					<FavoriteThings />
				</Route>
				<Route exact path="/Things">
					<Things />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
