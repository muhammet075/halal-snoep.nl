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
          <title>halal-snoep.nl | Halal Snoep Bestellen</title>
          <meta name="description" content="Halal snoep bestellen? Ontdek ons smaakvolle assortiment op halal-snoep.nl en geniet van heerlijke zoetigheden die voldoen aan strikte halal-normen!"/>
          <meta name="og:description" content="Halal snoep bestellen? Ontdek ons smaakvolle assortiment op halal-snoep.nl en geniet van heerlijke zoetigheden die voldoen aan strikte halal-normen!"/>
          <meta property="og:url" content="https://www.halal-snoep.nl/"/>
          <meta property="og:title" content="Halal snoep bestellen? Ontdek ons smaakvolle assortiment op halal-snoep.nl en geniet van heerlijke zoetigheden die voldoen aan strikte halal-normen!"/>
          <meta name="keywords" content="halal snoep, islamitische voeding, online snoep bestellen, snoep bestellen, halal snoepjes, halal levensstijl"/>
          <meta name="author" content="Muhammet"/>
      </Head>

      <Hero/>
      <Homepagecontent/>
      
    </>
  );
}
