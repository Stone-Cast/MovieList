"use client";

import Image from "next/image";
import { Movie } from "@/types";
import Link from "next/link";

const MovieGrid = ({ movies }: { movies: Movie[] }) => {
    return (
        <section className="flex justify-center">
            <div className="max-w-[1550px] w-full px-3">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-x-6 md:gap-y-6 lg:gap-x-3 md:mt-3">
                    {movies.map((movie) => (
                        <Link href={`/${movie.id}`} key={movie.id}>
                            <div
                                className="flex flex-col mx-auto bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full max-w-[250px]"
                                aria-label={`Movie card for ${movie.title}`}
                            >
                                {movie.poster_path ? (
                                    <Image
                                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                        width={250}
                                        height={375}
                                        alt={`Poster of ${movie.title}`}
                                        className="w-full grow"
                                    />
                                ) : (
                                    <div className="grow w-full flex items-center justify-center bg-gray-200">
                                        <span className="text-gray-500">
                                            No Image Available
                                        </span>
                                    </div>
                                )}
                                <div className="p-3">
                                    <h3 className="text-lg font-semibold truncate">
                                        {movie.title}
                                    </h3>
                                    <div className="flex flex-col md:flex-row md:justify-between items-start">
                                        <span className="text-gray-600 text-sm hidden md:block">
                                            {movie.release_date.slice(0, 4)}
                                        </span>
                                        <p>
                                            <span>
                                                ⭐{" "}
                                                {Math.floor(
                                                    movie.vote_average * 10
                                                ) / 10}
                                            </span>
                                            <span className="text-xs text-gray-600 ml-1">
                                                ({movie.vote_count})
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MovieGrid;
