"use client";

import { useEffect } from "react";
import { MovieApiResponse } from "@/types";
import { useMovieStore } from "@/store";
import MovieGrid from "./MovieGrid";
import { bebasNeue } from "@/app/fonts/fonts";

const PopularMovies = () => {
    // const [movies, setMovies] = useState<Movie[]>([]);
    const movies = useMovieStore((state) => state.movies);
    const setMovies = useMovieStore((state) => state.setMovies);

    useEffect(() => {
        async function fetchMovies() {
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWUzZDhhMDg5ZWNhMjIxYWI0OWRjZDNkMmQ0OGI4NSIsIm5iZiI6MTc0MDgyNDY4My41MDIsInN1YiI6IjY3YzJlMDZiOWIxNDRmMDIzOTY2YTJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oVnnLJ_eYPEdozZdRqBACUIpQZFo-QrheEgNZaiTCQs",
                },
            };
            const response = await fetch(
                "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
                options
            );
            if (!response.ok) {
                console.error(`Error: ${response.statusText}`);
                return;
            }
            const data: MovieApiResponse = await response.json();
            setMovies(data.results);
        }
        fetchMovies();
    }, []);

    return (
        <>
            <span className={`${bebasNeue.className} m-2 text-2xl md:text-4xl`}>
                Popular Movies
            </span>
            <MovieGrid movies={movies} sectionName="Popular Movies" />
        </>
    );
};

export default PopularMovies;
