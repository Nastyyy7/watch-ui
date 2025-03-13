// import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Basket } from "@/components/Basket";

export const metadata = {
  title: "Корзина",
};

export default function Home() {
  return (
    <>
      <Header />
      <Basket />
      <Footer />
    </>
  );
}
