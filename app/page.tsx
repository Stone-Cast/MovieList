import MovieOverview from "@/components/MovieOverview";
import MoviePage from "@/components/MoviePage";
import PopularMovies from "@/components/PopularMovies";

const Home = () => {
    return (
        <>
            <MovieOverview />
            <PopularMovies />
        </>
    );
};

export default Home;
