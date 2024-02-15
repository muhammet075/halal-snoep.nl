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

export default function Disclaimer() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Disclaimer</title>
        <meta name="description" content="Lees hier de Disclaimer van halal-snoep.nl, een informatieve website over diverse halal snoepjes van merken zoals Halal Delight."/>
        <meta name="og:description" content="Lees hier de Disclaimer van halal-snoep.nl, een informatieve website over diverse halal snoepjes van merken zoals Halal Delight."/>
        <meta property="og:url" content="https://www.halal-snoep.nl/disclaimer"/>
        <meta property="og:title" content="Lees hier de Disclaimer van halal-snoep.nl, een informatieve website over diverse halal snoepjes van merken zoals Halal Delight."/>
        <meta name="keywords" content="Disclaimer, halal-snoep.nl, halal snoepjes"/>
        <meta name="author" content="Muhammet"/>
      </Head>

      <div className="pagecontent">
        <div id="pageheader9">
            <ul class="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Disclaimer</li>
            </ul>

            <section>
                <h1>Disclaimer</h1>
            </section>
            <section>
            </section>
        </div>

        <div>
            <div>
                <section>
                    <br/><br/>
                    <p>De informatie op halal-snoep.nl is met de grootste zorgvuldigheid samengesteld. Desondanks willen we benadrukken dat de informatie op deze website van algemene aard is en niet bedoeld is als juridisch, financieel of professioneel advies.</p>

                    <h2>Geen Garanties</h2>
                    <p>Hoewel we ons best doen om accurate en actuele informatie te verstrekken, kunnen we geen garanties bieden voor de volledigheid, juistheid, betrouwbaarheid of geschiktheid van de informatie op halal-snoep.nl. Het gebruik van de verstrekte informatie is dan ook voor eigen risico.</p>

                    <h2>Externe Links</h2>
                    <p>Deze website kan links bevatten naar externe websites. We hebben geen controle over de inhoud en beschikbaarheid van deze websites en aanvaarden geen aansprakelijkheid voor enige vorm van schade die voortvloeit uit het gebruik van deze externe links.</p>

                    <h2>Geen Aansprakelijkheid</h2>
                    <p>Halal-snoep.nl aanvaardt geen aansprakelijkheid voor directe of indirecte schade, van welke aard dan ook, die voortvloeit uit het gebruik van deze website of de informatie die op deze website wordt verstrekt. Dit geldt ook voor eventuele fouten, onvolkomenheden of onjuistheden in de verstrekte informatie.</p>

                    <h2>Wijzigingen</h2>
                    <p>We behouden het recht voor om de inhoud van deze disclaimer op elk moment en zonder voorafgaande kennisgeving te wijzigen. Het is jouw verantwoordelijkheid om regelmatig de disclaimer te controleren op updates.</p>

                    <p>Voor vragen of opmerkingen over onze disclaimer kun je contact met ons opnemen via info (apenstaartje) halal-snoep.nl.</p>
                </section>
            </div>
        </div>

      </div>
    </>
  );
}
