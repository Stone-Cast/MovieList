import MoviePage from "@/components/MoviePage";

const MovieById = async ({
    params,
}: {
    params: Promise<{ movieId: string }>;
}) => {
    const { movieId } = await params;
    return <MoviePage movieId={movieId} />;
};

export default MovieById;
