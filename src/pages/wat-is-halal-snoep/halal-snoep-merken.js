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
import koe from "@/assets/img/koe2.png";
import logo2 from "@/assets/logo/halal-delight-logo.png";

export default function HalalSnoepMerken() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Halal snoep merken</title>
        <meta name="description" content="Ontdek het toonaangevende Halal snoep merk, Halal Delight. Verken het assortiment van hoogwaardige en smakelijke lekkernijen die voldoen aan strikte halal normen."/>
        <meta name="og:description" content="Ontdek het toonaangevende Halal snoep merk, Halal Delight. Verken het assortiment van hoogwaardige en smakelijke lekkernijen die voldoen aan strikte halal normen."/>
        <meta property="og:url" content="https://www.halal-snoep.nl/wat-is-halal-snoep/halal-snoep-merken"/>
        <meta property="og:title" content="Ontdek het toonaangevende Halal snoep merk, Halal Delight. Verken het assortiment van hoogwaardige en smakelijke lekkernijen die voldoen aan strikte halal normen."/>
        <meta name="keywords" content="halal snoep, islamitische voeding, halal slachten, toegestane dieren, halal levensstijl"/>
        <meta name="author" content="Muhammet"/>

      </Head>

      <div className="pagecontent">
        <div id="pageheader9">
            <ul class="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/wat-is-halal-snoep/">Wat is halal snoep?</Link></li>
                <li>Halal snoep merken</li>
            </ul>

            <section>
                <h1>Halal snoep merken</h1>
            </section>
            <section>
            </section>
        </div>

        <div>
            <div>
                <section>
                    <h2>De Toewijding aan Halal Kwaliteit</h2>
                    <Link href="https://halaldelight.nl/" target="_blank" className="calltoactionbtn greenbtn">Bezoek de webshop <Image className="externeicoon" src={ExternalLink} alt="Externe link icoon"/></Link>
                    <h3>Halal Delight's Kwaliteitsnormen</h3>
                    <p>Halal Delight onderscheidt zich door onwrikbare toewijding aan kwaliteit. Elk snoepje binnen het assortiment wordt geproduceerd volgens strikte normen, zowel in ingrediënten als in productieprocessen. De focus op het gebruik van halal gelatine afkomstig van ritueel geslachte dieren garandeert niet alleen de halal status, maar ook de hoogste kwaliteit.</p>
                    <p>Deze kwaliteitsnormen zorgen ervoor dat consumenten vertrouwen hebben in de snoepjes van Halal Delight, waardoor het merk een marktleider is geworden in de wereld van halal snoep.</p>

                    <h3>Unieke Smaakbeleving</h3>
                    <p>Wat Halal Delight echt onderscheidt, is de unieke smaakbeleving die elk snoepje biedt. Met een breed scala aan smaken, variërend van verfrissend zuur tot verrukkelijk zoet, streeft Halal Delight ernaar om aan de diverse smaakvoorkeuren van consumenten te voldoen.</p>
                    <p>Elk snoepje is zorgvuldig samengesteld om niet alleen te voldoen aan halal voorschriften, maar ook om een onvergetelijke smaakervaring te bieden. Geniet van de heerlijke en unieke combinaties die Halal Delight tot de favoriet maken onder liefhebbers van halal snoep.</p>
                </section>
                <section>
                    <Image src={logo2} alt="Halal Delight logo"/>
                </section>
            </div>
        </div>



      </div>
    </>
  );
}
