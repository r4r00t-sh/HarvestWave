import { About } from "@/components/about";
import { Approach } from "@/components/approach";
import { Close } from "@/components/close";
import { Heritage } from "@/components/heritage";
import { Hero } from "@/components/hero";
import { Principles } from "@/components/principles";
import { Products } from "@/components/products";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Principles />
      <Heritage />
      <Approach />
      <Close />
    </>
  );
}
