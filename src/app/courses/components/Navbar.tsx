"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
export const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All courses</HoveredLink>
            <HoveredLink href="/individual">Basic music Theory</HoveredLink>
            <HoveredLink href="/team">Advanced Composition</HoveredLink>
            <HoveredLink href="/enterprise">Songwriting</HoveredLink>
            <HoveredLink href="/enterprise">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={'/contact'}>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          
        </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}
