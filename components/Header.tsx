"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Input from "./Input";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
    const [isMenuOn, setIsMenuOn] = useState(true);
    const pathname = usePathname();
    const links = [
        { href: "/recent", label: "Recently Watched" },
        { href: "/profile", label: "Profile" },
    ];
    const openMenu = () => {
        setIsMenuOn(!isMenuOn);
    };
    return (
        <header className="flex justify-center bg-amber-50 px-2 py-2">
            <div className="w-full max-w-[1550px]  flex justify-between items-center">
                <Link href="/" className="text-lg md:text-2xl lg:text-3xl">
                    MovieList
                </Link>

                <div className="flex flex-row items-center gap-3 md:w-[60%]">
                    <Input />
                    <div className="flex gap-2">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={clsx(
                                    "text-base hidden md:block border border-black rounded-2xl px-1.5 py-0.5",
                                    pathname === `${link.href}` &&
                                        "font-bold underline"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <Image
                        src={isMenuOn ? "/menu.png" : "/close.png"}
                        width={30}
                        height={30}
                        alt="menu"
                        onClick={openMenu}
                        className="block md:hidden"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
