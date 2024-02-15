import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import snoeppot1 from "@/assets/img/snoeppot1.png";
import snoeppot2 from "@/assets/img/snoeppot2.png";
import snoeppot3 from "@/assets/img/snoeppot3.png";
import snoeppot4 from "@/assets/img/snoeppot4.png";
import snoeppot5 from "@/assets/img/snoeppot5.png";
import snoeppot6 from "@/assets/img/snoeppot6.png";
import ExternalLink from "@/assets/icons/external-link.svg";
import halallogo from "@/assets/img/halallogo.jpeg";
import koe from "@/assets/img/koe.png";
import turksevlag from "@/assets/img/turksevlag.png";
import amerikaansesnoep from "@/assets/img/amerikaansesnoep.png";
import lichaam from "@/assets/img/lichaam.png";
import oudesnoep from "@/assets/img/oudesnoep.png";
import gezond from "@/assets/img/gezond.png";

export default function SnoepUitTurkije() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Snoep uit Turkije</title>
        <meta name="description" content="Ontdek de laatste nieuwtjes, trends en interessante verhalen op de blogpagina van halal-snoep.nl. Lees boeiende artikelen over halal snoepjes, recepten, en meer."/>
        <meta name="og:description" content="Ontdek de laatste nieuwtjes, trends en interessante verhalen op de blogpagina van halal-snoep.nl. Lees boeiende artikelen over halal snoepjes, recepten, en meer."/>
        <meta property="og:url" content="https://www.halal-snoep.nl/blog/snoep-uit-turkije"/>
        <meta property="og:title" content="Ontdek de laatste nieuwtjes, trends en interessante verhalen op de blogpagina van halal-snoep.nl. Lees boeiende artikelen over halal snoepjes, recepten, en meer."/>
        <meta name="keywords" content="contact halal-snoep.nl, klantenservice, vragen, opmerkingen"/>
        <meta name="author" content="Muhammet"/>

      </Head>

      <div className="pagecontent">
        <div id="pageheader7">
            <ul class="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Snoep uit Turkije</li>
            </ul>

            <section>
                <h1>Snoep uit Turkije</h1>
            </section>
            <section>
            </section>
        </div>

        <div>
            <div>
                <section>
                    <h2>wordt aan gewerkt</h2>
                    <p>komt nog...</p>
                </section>
            </div>
        </div>

      </div>
    </>
  );
}
