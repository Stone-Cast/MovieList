"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "./Search";
import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";

const Header = () => {
    return (
        <header className="relative flex justify-center bg-amber-50 px-2 py-2">
            <div className="w-full max-w-[1550px]  flex justify-between items-center">
                <Link href="/" className="text-xl md:text-2xl lg:text-3xl">
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
