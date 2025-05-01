"use client";

import Link from "next/link";
import Search from "./Search";
import Menu from "./Menu";

const Header = () => {
    return (
        <header className="sticky top-0 z-20 flex justify-center bg-gray-100 px-2 py-2">
            <div className="w-full max-w-[1550px]  flex justify-between items-center">
                <Link
                    href="/950387"
                    className="text-xl md:text-2xl lg:text-3xl"
                >
                    MovieList
                </Link>

                <div className="flex flex-row items-center gap-3 md:w-[60%]">
                    <Search />
                    <Menu />
                </div>
            </div>
        </header>
    );
};

export default Header;
