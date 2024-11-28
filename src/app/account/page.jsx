import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { PersonAccount } from "@/components/PersonAccount";

export const metadata = {
  title: "Личный кабинет",
};

export default function Home() {
  return (
    <>
      <Header />
      <PersonAccount />
      <Footer />
    </>
  );
}
