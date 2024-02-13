"use client"
import About from "@/components/About";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [nav,setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)
  return (
   <div className="overflow-x-hidden">
    <div>
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Nav openNav={openNav}/>
      {/* Hero section */}
      <Hero/>   
      <div className="relative z-[30]">
        {/* About */}
        <About/>
      </div>
    </div>
   </div>
  );
}
