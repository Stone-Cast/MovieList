import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Menu = () => {
    const links = [
        { href: "/recent", label: "Recently Watched" },
        { href: "/profile", label: "Profile" },
    ];

    const [isMenuOn, setIsMenuOn] = useState(false);
    const openMenu = () => {
        setIsMenuOn(!isMenuOn);
    };
    return (
        <>
            <div
                className={clsx(
                    "flex md:gap-2 flex-col md:flex-row max-md:absolute z-10 right-0 bottom-0 max-md:translate-y-[100%]",
                    isMenuOn == false && "max-md:hidden"
                )}
            >
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={clsx(
                            "text-base md:w-auto md:border border-black bg-amber-50 md:rounded-2xl px-1.5 py-1.5 md:py-0.5"
                            // pathname === `${link.href}` &&
                            //     "font-bold underline",
                            // isMenuOn == true
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <Image
                src={isMenuOn ? "/close.png" : "/menu.png"}
                width={30}
                height={30}
                alt="menu"
                onClick={openMenu}
                className="block md:hidden z-10 h-full"
            />
        </>
    );
};

export default Menu;
