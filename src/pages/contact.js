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

export default function Contact() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Neem contact op met halal-snoep.nl voor vragen, opmerkingen of bestellingsinformatie. We staan klaar om je te helpen en streven naar de beste klantenservice."/>
        <meta name="og:description" content="Neem contact op met halal-snoep.nl voor vragen, opmerkingen of bestellingsinformatie. We staan klaar om je te helpen en streven naar de beste klantenservice."/>
        <meta property="og:url" content="https://www.halal-snoep.nl/contact/"/>
        <meta property="og:title" content="Neem contact op met halal-snoep.nl voor vragen, opmerkingen of bestellingsinformatie. We staan klaar om je te helpen en streven naar de beste klantenservice."/>
        <meta name="keywords" content="contact halal-snoep.nl, klantenservice, vragen, opmerkingen"/>
        <meta name="author" content="Muhammet"/>
      </Head>

      <div className="pagecontent">
        <div id="pageheader8">
            <ul class="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Contact</li>
            </ul>

            <section>
                <h1>Contact</h1>
            </section>
            <section>
            </section>
        </div>

        <div>
            <div>
                <section>
                    <h2>Neem contact met ons op</h2>
                    <p>Heb je vragen, opmerkingen of wil je meer informatie over onze heerlijke halal snoepjes? Aarzel dan niet om contact met ons op te nemen. Bij halal-snoep.nl streven we naar de beste klantenservice en staan we klaar om je te assisteren.</p> 
                    <p>Ons toegewijde team staat klaar om al jouw vragen te beantwoorden en je te voorzien van de informatie die je nodig hebt. Of je nu nieuwsgierig bent naar ons assortiment, specifieke productinformatie zoekt of gewoon een vriendelijke opmerking wilt delen, we zijn hier om je te assisteren.</p> 
                    <p>Wij streven naar de beste klantenservice en willen ervoor zorgen dat jouw ervaring met halal-snoep.nl probleemloos en bevredigend is. Jouw tevredenheid is onze prioriteit, en we waarderen de kans om je van dienst te zijn. Aarzel niet om het formulier op onze contactpagina in te vullen of stuur een e-mail naar info (apenstaartje) halal-snoep.nl. We kijken ernaar uit om van je te horen en je te helpen met alles wat je nodig hebt rondom onze heerlijke halal snoepjes.</p>

                    <hr/>
                    <Link className="redcolor" href="mailto:info@halal-snoep.nl">Klik hier om ons te mailen.</Link>
                    <hr/>
                </section>
            </div>

   

        </div>



      </div>
    </>
  );
}
