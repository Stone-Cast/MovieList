"use client";

import { GenreList } from "@/components/GenreList";
import { dummyData } from "@/dummy";
import { useMovieStore } from "@/store";
import { Movie } from "@/types";
import Image from "next/image";

const MovieOverview = () => {
    let movie = useMovieStore((state) => state.movies[0]);

    return (
        <section className="relative border text-amber-50 pb-2">
            <img
                src={
                    "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
                }
                alt="backdrop image"
                className="absolute top-0 left-0 -z-2 h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 -z-1 h-full w-full bg-black/50 backdrop-blur-lg"></div>
            <div className="flex flex-wrap justify-center md:py-3 md:px-7 lg:px-10">
                <div className="flex justify-between w-full max-w-[1450px] p-1">
                    <div className="ml-2">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl">
                            {movie.title}
                        </h1>
                        <span className="text-gray-400 text-sm md:text-lg">
                            {movie.release_date.slice(0, 4)}
                        </span>
                    </div>
                    <p className="py-1 md:py-3 md:px-1 max-sm:hidden">
                        <span>
                            ⭐ {Math.floor(movie.vote_average * 10) / 10}
                        </span>
                        <span className="text-xs text-gray-300 ml-1">
                            ({movie.vote_count})
                        </span>
                    </p>
                </div>

                <div className="flex items-center justify-center lg:justify-around w-full max-w-[1550px] gap-2 sm:gap-4 sm:mx-2">
                    <div className="hidden sm:block rounded-2xl overflow-hidden">
                        <Image
                            width={200}
                            height={200}
                            alt="Movie poster"
                            src={
                                "https://image.tmdb.org/t/p/original" +
                                movie.poster_path
                            }
                            // className="w-auto h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px]"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <Image
                            width={600}
                            height={600}
                            alt="Movie poster"
                            src={
                                "https://image.tmdb.org/t/p/original" +
                                movie.backdrop_path
                            }
                            // className="w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover"
                            className="object-contain"
                        />
                    </div>
                    <div className="lg:w-[40%] hidden lg:block h-full p-1">
                        <p>{movie.overview}</p>
                        <GenreList
                            genreIds={movie.genre_ids}
                            className="mt-5"
                        />
                    </div>
                </div>
                <div className="block lg:hidden p-3">
                    <p className="line-clamp-3">{movie.overview}</p>
                    <GenreList genreIds={movie.genre_ids} className="mt-3" />
                </div>
            </div>
        </section>
    );
};

export default MovieOverview;
