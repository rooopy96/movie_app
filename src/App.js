import React from "react";
import Home from "./routers/Home.js";
import Navigation from "./components/Navigation.js";
import About from "./routers/About.js";
import { HashRouter, Route } from "react-router-dom";
import MoviePage from "./routers/MoviePage.js";

function App() {
	return (
		<HashRouter>
			<Navigation />
			<Route path="/" exact component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/movie/:id" component={MoviePage} />
		</HashRouter>
	)
}

export default App;