"use client";

import { FormEvent, useState } from "react";

const Input = () => {
    const [input, setInput] = useState("");

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
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className=""
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </form>
        </>
    );
};

export default Input;
