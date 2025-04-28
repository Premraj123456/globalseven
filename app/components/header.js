"use client"
import {
  Globe,
  Instagram,
  Menu,
  Rss,
  Search,
  Twitter,
  Youtube,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { useRef, useState } from "react";

export const LinksIcons = (
  <div className="flex gap-3">
    <a href="https://instagram.com/globalseven"><Instagram size={21} /></a>
    <a href="https://youtube.com/@globalseven"><Youtube size={21} /></a>
    <a href="https://twitter.com/globalseven"><Twitter size={21} /></a>
    <Rss size={21} />
  </div>
);

export const MenuTrigger = (

  <Sheet>
  <SheetTrigger>
    <Menu size={30} />
  </SheetTrigger>
  <SheetContent className="w-1/2">
    <SheetHeader className="hidden">
      <SheetTitle></SheetTitle>
      <SheetDescription>
      </SheetDescription>
    </SheetHeader>
    <div className="p-5 flex flex-col space-y-4 opacity-90">
      <a href={'/'} className="font-[ProximaNova] text-lg" > Home</a>
      <a href={'/about'} className="font-[ProximaNova] text-lg" > About</a>
      <a href={'/contact'} className="font-[ProximaNova] text-lg" > Contact</a>
      <a href={'/advertise'} className="font-[ProximaNova] text-lg" > Advertise</a>
      
      
      <a href={'/privacy-policy'} className="font-[ProximaNova] text-lg" > Privacy Policy</a>

      
    </div>
    
  </SheetContent>
</Sheet>
)


export default function Header() {

  const [ren, SetRender] = useState(null)
  const inputRef = useRef("")

  const searchValue = inputRef.current?.value 

  

  return (
    <>
      <header className="w-full p-5 bg-[#2A53C1] ">
        <section className="space-y-5 md:flex md:flex-row md:justify-between">
          <div className="flex text-white justify-between items-center md:space-x-5">
            <Link href={"/"}>
              <Globe size={27} />
            </Link>

            <div className="space-x-4">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
              <Link href={"/advertise"}>Advertise</Link>
              <Link href={"/provacy-policy"}>Privacy Policy</Link>
            </div>
            {LinksIcons}

            {MenuTrigger}
          </div>

          <div href="https://www.google.com/search?q=site%3A%2F%2Fglobalseven.in+ " target="_blank" className="bg-white flex p-2.5 gap-3 text-lg font-semibold text-[#2A53C1] ">
            <Search />
            {/* <input type="text">Search...</input> */}
            <input ref={inputRef} onChange={(e) => SetRender(e.target?.value)} className="w-full" type="search" name="search" id="search" placeholder="Search" />
            { ren ? <a href={`https://www.google.com/search?q=site%3A%2F%2Fglobalseven.in+${searchValue}`}>Search</a> : null}
          </div>
        </section>
      </header>

      <section className="flex lg:flex-row lg:gap-5 justify-center lg:mr-20 text-left sm:text-3xl md:text-4xl lg:text-5xl flex-col mx-auto font-extrabold text-2xl px-5 py-3 space-y-1">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">GlobalSeven</h1>
        <h2 className="ml-1 lg:w-18">News & Opinion Blog</h2>
      </section>
    </>
  );
}
