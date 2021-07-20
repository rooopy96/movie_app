import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({title, year, summary, poster, genres, id, largePoster, rating}) {
	return (
		<div className="movie">
			<Link to={{
				pathname: `/movie/${id}`,
				state: { title, year, summary, genres, largePoster, rating}
			}}>
				<img src={poster} alt={title} className="movie__poster" />
				<div className="movie__info">
					<h3 className="movie__title">{title}, <span className="movie__year">{year}</span></h3>
					<ul className="movie__genres">
						{genres.slice(0, 3).map((genre, index) => {
						return <li key={index}>{genre}</li>
						})}
					</ul>
					<p className="movie__summary">{summary.slice(0, 200)}...</p>
				</div>
			</Link>
		</div>
	)
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;