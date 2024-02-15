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

export default function SnoepUitAmerika() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Algemene Voorwaarden</title>
        <meta name="description" content="Lees hier de algemene voorwaarden van halal-snoep.nl, een informatieve website over diverse halal snoepjes van merken zoals Halal Delight."/>
        <meta name="og:description" content="Lees hier de algemene voorwaarden van halal-snoep.nl, een informatieve website over diverse halal snoepjes van merken zoals Halal Delight."/>
        <meta property="og:url" content="https://www.halal-snoep.nl/algemene-voorwaarden"/>
        <meta property="og:title" content="Lees hier de algemene voorwaarden van halal-snoep.nl, een informatieve website over diverse halal snoepjes van merken zoals Halal Delight."/>
        <meta name="keywords" content="algemene voorwaarden, halal-snoep.nl, halal snoepjes"/>
        <meta name="author" content="Muhammet"/>

      </Head>

      <div className="pagecontent">
        <div id="pageheader1">
            <ul class="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Algemene Voorwaarden</li>
            </ul>

            <section>
                <h1>Algemene Voorwaarden</h1>
            </section>
            <section>
            </section>
        </div>

        <div>
            <div>
                <section>
                    <br/><br/>
                    <p>Welkom bij halal-snoep.nl, dé informatieve website over diverse halal snoepjes van merken zoals Halal Delight. Door deze website te gebruiken, ga je akkoord met onderstaande algemene voorwaarden.</p>

                    <h2>1. Doel van de Website</h2>
                    <p>Halal-snoep.nl heeft als doel informatie te verstrekken over verschillende halal snoepjes, waaronder producten van merken zoals Halal Delight. De website verkoopt geen producten, slaat geen persoonlijke gegevens op en fungeert puur als een informatief platform.</p>

                    <h2>2. Geen Opslag van Gebruikersinformatie</h2>
                    <p>Wij slaan geen persoonlijke gegevens van gebruikers op. Bij het bezoeken van onze website hoef je geen account aan te maken, en we vragen niet om persoonlijke informatie.</p>

                    <h2>3. Informatie over Halal Snoepjes</h2>
                    <p>Alle informatie over halal snoepjes op deze website is informatief van aard. We streven ernaar accurate en actuele informatie te verstrekken, maar kunnen geen garanties bieden voor de volledigheid of juistheid van de content.</p>

                    <h2>4. Geen Verkoop van Producten</h2>
                    <p>Halal-snoep.nl verkoopt geen producten. Als je geïnteresseerd bent in het aanschaffen van halal snoepjes, raden we aan contact op te nemen met de desbetreffende fabrikanten of verkooppunten.</p>

                    <h2>5. Wijzigingen Algemene Voorwaarden</h2>
                    <p>We behouden het recht om deze algemene voorwaarden op elk moment te wijzigen. Het is jouw verantwoordelijkheid om regelmatig te controleren op updates. Door de website te blijven gebruiken, ga je akkoord met eventuele wijzigingen in de voorwaarden.</p>

                    <p>Voor vragen of opmerkingen over onze algemene voorwaarden kun je contact met ons opnemen via info (apenstaartje) halal-snoep.nl.</p>
                </section>
            </div>
        </div>

      </div>
    </>
  );
}
