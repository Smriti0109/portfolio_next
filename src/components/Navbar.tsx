'use client';
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../../public/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-0 left-0 right-0 w-full z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </Link>
                <Link href={"/#about"}>
                    <MenuItem setActive={setActive} active={active} item="About" />
                </Link>
                <Link href={"/#projects"}>
                    <MenuItem setActive={setActive} active={active} item="Projects" />
                </Link>
                <Link href={"/#experience"}>
                    <MenuItem setActive={setActive} active={active} item="Experience" />
                </Link>
                <Link href={"/#contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact" />
                </Link>
            </Menu>
        </div>
    );
}

export default Navbar;
