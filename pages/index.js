import Image from "next/image";
import Navbar from "./navbar";
import Hero from "./hero";
import Content from "./content";
import About from "./about";
import Footer from "./footer";
import Team from "./team";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Hero />
      <Content />
    </div>
  );
}
