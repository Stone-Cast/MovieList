import { create } from "zustand";
import { Movie } from "./types";

type MovieStore = {
    movies: Movie[];
    setMovies: (movies: Movie[]) => void;

    searchedMovieName: string;
    setSearchedMovieName: (name: string) => void;

    searchResults: Movie[];
    setSearchedResults: (movies: Movie[]) => void;

    clickedMovie: Movie;
    setClickedMovie: (movie: Movie) => void;
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

    clickedMovie: {
        id: 0,
        title: "",
        original_title: "",
        overview: "",
        poster_path: "",
        backdrop_path: "",
        release_date: "",
        vote_average: 0,
        vote_count: 0,
        popularity: 0,
        genre_ids: [],
        adult: false,
        video: false,
        original_language: "",
    },

    setClickedMovie: (movie) => {
        set(() => ({
            clickedMovie: movie,
        }));
    },
}));
