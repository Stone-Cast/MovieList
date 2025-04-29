"use client";

import clsx from "clsx";
import Image from "next/image";
import { FormEvent, useState } from "react";

const Search = () => {
    const [input, setInput] = useState("");
    const [isSearchOn, setIsSearchOn] = useState(false);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWUzZDhhMDg5ZWNhMjIxYWI0OWRjZDNkMmQ0OGI4NSIsIm5iZiI6MTc0MDgyNDY4My41MDIsInN1YiI6IjY3YzJlMDZiOWIxNDRmMDIzOTY2YTJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oVnnLJ_eYPEdozZdRqBACUIpQZFo-QrheEgNZaiTCQs",
            },
        };

        const query = encodeURIComponent(input);

        fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1`,
            options
        )
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    }

    return (
        <form onSubmit={handleSubmit} className="grow">
            <div className="relative flex justify-end">
                <input
                    type="text"
                    className={clsx(
                        "md:w-full py-0.5 px-2 rounded-xl border border-black",
                        isSearchOn == false && "hidden md:block"
                    )}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <span
                    className={clsx(
                        "absolute text-base top-[50%] left-[10px] translate-y-[-50%] text-gray-500 max-md:hidden",
                        `${input}` != "" && "hidden"
                    )}
                >
                    Search movies
                </span>
                <Image
                    src="/close.png"
                    alt="close_search"
                    width={20}
                    height={20}
                    className={clsx(
                        "block md:hidden absolute top-[50%] right-[5px] translate-y-[-50%] bg-gray-200 rounded-2xl",
                        isSearchOn == false && "hidden"
                    )}
                    onClick={() => {
                        setIsSearchOn(!isSearchOn);
                        setInput("");
                    }}
                />
                <Image
                    src="/search.png"
                    alt="search_icon"
                    width={25}
                    height={25}
                    className={clsx("block md:hidden", isSearchOn && "hidden")}
                    onClick={() => setIsSearchOn(!isSearchOn)}
                />
            </div>
        </form>
    );
};

export default Search;
