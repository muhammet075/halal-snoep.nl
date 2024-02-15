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

export default function Blog() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Ontdek de laatste nieuwtjes, trends en interessante verhalen op de blogpagina van halal-snoep.nl. Lees boeiende artikelen over halal snoepjes, recepten, en meer."/>
        <meta name="og:description" content="Ontdek de laatste nieuwtjes, trends en interessante verhalen op de blogpagina van halal-snoep.nl. Lees boeiende artikelen over halal snoepjes, recepten, en meer."/>
        <meta property="og:url" content="https://www.halal-snoep.nl/blog/"/>
        <meta property="og:title" content="Ontdek de laatste nieuwtjes, trends en interessante verhalen op de blogpagina van halal-snoep.nl. Lees boeiende artikelen over halal snoepjes, recepten, en meer."/>
        <meta name="keywords" content="contact halal-snoep.nl, klantenservice, vragen, opmerkingen"/>
        <meta name="author" content="Muhammet"/>

      </Head>

      <div className="pagecontent">
        <div id="pageheader9">
            <ul class="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Blog</li>
            </ul>

            <section>
                <h1>Blog</h1>
            </section>
            <section>
            </section>
        </div>

        <div>
            <div>
                <section>
                    <h2>Ontdek de zoete geheimen en smaakvolle verhalen</h2>
                    <p>Welkom op de blogpagina van halal-snoep.nl, waar we je meenemen op een ontdekkingsreis door de heerlijke wereld van halal snoepjes. Hier vind je de laatste nieuwtjes, boeiende verhalen en smakelijke recepten om je snoepervaring te verrijken.</p>
                    <p>Of je nu een fervent liefhebber bent van zoete lekkernijen, op zoek bent naar nieuwe recepten om zelf halal snoepjes te maken, of geïnteresseerd bent in de nieuwste trends op het gebied van snoep, onze blog is de plek waar je wilt zijn.</p>
                    <p>Ontdek de fascinerende artikelen geschreven door onze experts, variërend van diepgaande inzichten in de wereld van halal snoep tot creatieve recepten waarmee je zelf aan de slag kunt. We delen graag onze passie voor heerlijke en verantwoorde snoepjes met jou.</p>
                    <p>Blijf op de hoogte van de laatste ontwikkelingen, geniet van inspirerende verhalen en laat je smaakpapillen prikkelen. Deel gerust je gedachten en opmerkingen onder de artikelen; we kijken ernaar uit om jouw ervaringen en smaakavonturen te ontdekken!</p>
                    <hr/>
                </section>
            </div>
        </div>

        <div className="blogcontentbox">
                    <Link href="/blog/is-snoep-slecht-voor-je">
                        <h3>Is snoep slecht voor je?</h3>
                        <Image src={gezond} alt="Een gezonde aardbeien hartje"/>
                        <p>Datum: <time datetime="2024-02-15">14 Februari 2024</time></p>
                        <p>Lees meer</p>
                    </Link>
                    <Link href="/blog/snoep-uit-de-jaren-90-en-80">
                        <h3>Snoep uit de jaren 90 en 80</h3>
                        <Image src={oudesnoep} alt="Snoepje"/>
                        <p>Datum: <time datetime="2024-02-15">14 Februari 2024</time></p>
                        <p>Lees meer</p>
                    </Link>
                    <Link href="blog/snoep-uit-amerika">
                        <h3>Snoep uit Amerika</h3>
                        <Image src={amerikaansesnoep} alt="Amerikaanse snoep merken"/>
                        <p>Datum: <time datetime="2024-02-15">15 Februari 2024</time></p>
                        <p>Lees meer</p>
                    </Link>
                    <Link href="blog/snoep-uit-turkije">
                        <h3>Snoep uit Turkije</h3>
                        <Image src={turksevlag} alt="De Turkse vlag"/>
                        <p>Datum: <time datetime="2024-02-15">15 Februari 2024</time></p>
                        <p>Lees meer</p>
                    </Link>
                    <Link href="blog/wat-doet-snoep-met-je-lichaam">
                        <h3>Wat doet snoep met je lichaam?</h3>
                        <Image src={lichaam} alt="Het menselijke lichaam"/>
                        <p>Datum: <time datetime="2024-02-15">15 Februari 2024</time></p>
                        <p>Lees meer</p>
                    </Link>
                </div>



      </div>
    </>
  );
}
