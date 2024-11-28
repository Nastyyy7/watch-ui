import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card } from "@/components/Card";

export const metadata = {
  title: "Наручные часы LEVEL Артикул:7001410",
};

export default function Home() {
  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  );
}
