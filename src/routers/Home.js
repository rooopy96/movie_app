import React from "react";
import axios from "axios";
import Movie from "../components/Movie.js";
import "./Home.css";

class Home extends React.Component {
	state = {
		isLoading: true,
		movies: []
	}

	async getMovie () {
		const {
			data: {
				data: { movies }
			}
		} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
		this.setState({ movies, isLoading: false });
		window.scrollTo(0, 0);
	}

	componentDidMount() {
		this.getMovie();
	}

	render() {
		const { isLoading, movies } = this.state;
		return (
			<section className="container">
				{isLoading ? (
					<div className="loader">
						<span className="loader__message">Loading...</span>
					</div>
				) : (
					<div className="movies">
						{movies.map(movie => {
							return <Movie 
								key={movie.id}
								id={movie.id}
								title={movie.title}
								year={movie.year}
								rating={movie.rating}
								summary={movie.summary}
								poster={movie.medium_cover_image}
								largePoster={movie.large_cover_image}
								genres={movie.genres}
							/>
						})}
					</div>
				)}
			</section>
		)
	}
}

export default Home;