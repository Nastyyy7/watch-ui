import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card } from "@/components/Card";

export const metadata = {
  title: "",
};

export default async function Home({ params }) {
  const slug = (await params).slug;
  // console.log((await params).slug);


  const uri = new URL("http://127.0.0.1:8000/api/v1/products/" + slug);
  const response = await fetch(uri, {
    headers: {
      'Accept': 'application/vnd.api+json'
    }
  });

  const product = await response.json();
  // console.log(product.data);
  // console.log(uri);

  return (
    <>
      <Header />
      <Card
        product={product.data} />
      <Footer />
    </>
  );
}
