"use client";

import MovieGrid from "@/components/MovieGrid";
import { useMovieStore } from "@/store";

const SerachResults = () => {
    const movies = useMovieStore((state) => state.searchResults);

    return <MovieGrid movies={movies} />;
};

export default SerachResults;
