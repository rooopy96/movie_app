import React from "react";
import PropTypes from "prop-types";

function Movie({title, year, summary, poster, genres}) {
	return (
		<div className="movie">
			<img src={poster} alt={title} className="movie__poster" />
			<div className="movie__info">
				<h3 className="movie__title">{title}</h3>
				<h5 className="movie__year">{year}</h5>
				<ul className="movie__genres">
					{genres.slice(0, 3).map((genre, index) => {
						return <li key={index}>{genre}</li>
					})}
				</ul>
				<p className="movie__summary">{summary}</p>
			</div>
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