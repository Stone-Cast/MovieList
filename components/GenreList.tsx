import { genres } from "@/genres";
export const GenreList = ({
    genreIds,
    className,
}: {
    genreIds: number[];
    className?: string;
}) => {
    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            {genreIds.map((genre_id) => (
                <span
                    className="border border-white rounded-2xl py-1 px-3"
                    key={genre_id}
                >
                    {genres[genre_id]}
                </span>
            ))}
        </div>
    );
};
