import { create } from "zustand";
import { Movie } from "./types";

type MovieStore = {
    movies: Movie[];
    setMovies: (movies: Movie[]) => void;

    searchedMovieName: string;
    setSearchedMovieName: (name: string) => void;

    searchResults: Movie[];
    setSearchedResults: (movies: Movie[]) => void;
};

export const useMovieStore = create<MovieStore>((set) => ({
    movies: [],
    setMovies: (movies) => {
        set(() => ({
            movies: movies,
        }));
    },

    searchedMovieName: "",
    setSearchedMovieName: (name) => {
        set(() => ({
            searchedMovieName: name,
        }));
    },

    searchResults: [],
    setSearchedResults: (movies) => {
        set(() => ({
            searchResults: movies,
        }));
    },
}));
