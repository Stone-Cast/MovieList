"use client";

import { Movie, MovieDetails } from "@/types";
import MovieOverview from "./MovieOverview";
import { useEffect, useState } from "react";
import Cast from "./Cast";

const MoviePage = ({ movieId }: { movieId: string }) => {
    const [movie, setMovie] = useState<Movie>();
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}demovieDetailslanguage=en-US`;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWUzZDhhMDg5ZWNhMjIxYWI0OWRjZDNkMmQ0OGI4NSIsIm5iZiI6MTc0MDgyNDY4My41MDIsInN1YiI6IjY3YzJlMDZiOWIxNDRmMDIzOTY2YTJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oVnnLJ_eYPEdozZdRqBACUIpQZFo-QrheEgNZaiTCQs",
            },
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((json: MovieDetails) =>
                setMovie(fromMovieDetailsToMovie(json))
            )
            .catch((err) => console.error(err));
    });

    function fromMovieDetailsToMovie(movieDetails: MovieDetails): Movie {
        return {
            id: movieDetails.id,
            title: movieDetails.title,
            original_title: movieDetails.original_title,
            overview: movieDetails.overview,
            poster_path: movieDetails.poster_path,
            backdrop_path: movieDetails.backdrop_path,
            release_date: movieDetails.release_date,
            vote_average: movieDetails.vote_average,
            vote_count: movieDetails.vote_count,
            popularity: movieDetails.popularity,
            genre_ids: genreObjToGenres(movieDetails.genres),
            adult: movieDetails.adult,
            video: movieDetails.video,
            original_language: movieDetails.original_language,
        };
    }

    function genreObjToGenres(genreObjArr: { id: number; name: string }[]) {
        return genreObjArr.map((genreObj) => genreObj.id);
    }

    return (
        <>
            <MovieOverview clickedMovie={movie} />
            <Cast />
        </>
    );
};

export default MoviePage;

// details
// https://developer.themoviedb.org/reference/movie-details
// credits
// https://developer.themoviedb.org/reference/person-movie-credits
// review
// https://developer.themoviedb.org/reference/movie-reviews
// lai yo page maa add garney
