import { create } from "zustand";
import { Movie } from "./types";

type MovieStore = {
    movies: Movie[];
    setMovies: (movies: Movie[]) => void;
};

export const useMovieStore = create<MovieStore>((set) => ({
    movies: [],
    setMovies: (movies) => {
        set(() => ({
            movies: movies,
        }));
    },
}));
