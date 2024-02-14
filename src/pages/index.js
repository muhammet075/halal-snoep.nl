import { useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/hero";
import Homepagecontent from "@/components/homepagecontent";

export default function Home() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Halal Snoep</title>
          <meta name="description" content="halal-snoep.nl"/>
          <meta name="og:description" content="halal-snoep.nl"/>
          <meta property="og:url" content="https://www.halal-snoep.nl/"/>
          <meta property="og:title" content="Halal Snoep"/>
      </Head>

      <Hero/>
      <Homepagecontent/>
      
    </>
  );
}
