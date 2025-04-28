"use client";

import { useEffect } from "react";
import { MovieApiResponse } from "@/types";
import Image from "next/image";
import { bebasNeue } from "@/app/fonts/fonts";
import { useMovieStore } from "@/store";

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
        <section className="flex justify-center">
            <div className="max-w-[1550px] w-full p-3">
                <span className={`${bebasNeue.className} text-2xl md:text-4xl`}>
                    Popular Movies
                </span>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-x-6 md:gap-y-6 lg:gap-x-3 md:mt-5">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="mx-auto bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 self-baseline w-full max-w-[250px]"
                            aria-label={`Movie card for ${movie.title}`}
                        >
                            {movie.poster_path ? (
                                <Image
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    width={250}
                                    height={375}
                                    alt={`Poster of ${movie.title}`}
                                    className="w-full h-auto"
                                />
                            ) : (
                                <div className="w-full h-[375px] flex items-center justify-center bg-gray-200">
                                    <span className="text-gray-500">
                                        No Image Available
                                    </span>
                                </div>
                            )}
                            <div className="p-3">
                                <h3
                                    className="text-lg font-semibold truncate"
                                    title={movie.title}
                                >
                                    {movie.title}
                                </h3>
                                <p className="flex items-center w-max">
                                    <Image
                                        src="https://img.icons8.com/fluency/48/star--v1.png"
                                        width={17}
                                        height={17}
                                        alt="ratings"
                                        className="inline-block mr-1.5"
                                    />
                                    <span>
                                        {Math.floor(movie.vote_average * 10) /
                                            10}
                                    </span>
                                    <span className="text-xs text-gray-500 ml-1">
                                        ({movie.vote_count})
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularMovies;
