import React from "react";
import "./MoviePage.css";

class MoviePage extends React.Component {
	componentDidMount() {
		const {
			location, history
		} = this.props;

		if(location.state === undefined) {
			history.push("/");
		}
	}

	render() {
		const {
			location
		} = this.props;
		
		if(location.state) {
			return (
				<div className="moviePage">
					<img src={location.state.largePoster} alt={location.state.title}/>
					<div className="moviePage__info">
						<h2 className="moviePage__title">{location.state.title}, 
						<span className="moviePage__year"> {location.state.year}</span></h2>
						<ul className="moviePage__genres">{location.state.genres.map((genre, index) => {
							return <li key={index}>{genre}</li>
						})}</ul>
						<p>{location.state.summary}</p>
					</div>
				</div>
			)
		} else {
			return null;
		}
	}
}

export default MoviePage;