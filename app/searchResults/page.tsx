"use client";

import MovieGrid from "@/components/MovieGrid";
import { useMovieStore } from "@/store";

const SerachResults = () => {
    const movies = useMovieStore((state) => state.searchResults);
    const movieName = useMovieStore((state) => state.searchedMovieName);

    return <MovieGrid movies={movies} sectionName={movieName} />;
};

export default SerachResults;
