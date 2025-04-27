import Header from "@/components/Header";
import Input from "@/components/Input";
import MovieOverview from "@/components/MovieOverview";
import PopularMovies from "@/components/PopularMovies";
import { Movie } from "@/types";

const Home = () => {
    return (
        <>
            <MovieOverview />
            <PopularMovies />
        </>
    );
};

export default Home;
