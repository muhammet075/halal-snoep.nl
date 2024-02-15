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

export default function WaarKanIkHalalSnoepKopen() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Waar kan ik halal snoep kopen?</title>
        <meta name="description" content="Ontdek waar je hoogwaardige halal snoepjes kunt kopen op halal-snoep.nl"/>
        <meta name="og:description" content="Ontdek waar je hoogwaardige halal snoepjes kunt kopen op halal-snoep.nl"/>
        <meta property="og:url" content="https://www.halal-snoep.nl/wat-is-halal-snoep/waar-kan-ik-halal-snoep-kopen"/>
        <meta property="og:title" content="Ontdek waar je hoogwaardige halal snoepjes kunt kopen op halal-snoep.nl"/>
        <meta name="keywords" content="halal snoep, islamitische voeding, halal slachten, toegestane dieren, halal levensstijl"/>
        <meta name="author" content="Muhammet"/>

      </Head>

      <div className="pagecontent">
        <div id="pageheader6">
            <ul class="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/wat-is-halal-snoep/">Wat is halal snoep?</Link></li>
                <li>Waar kan ik halal snoep kopen?</li>
            </ul>

            <section>
                <h1>Waar kan ik halal snoep kopen?</h1>
            </section>
            <section>
            </section>
        </div>

        <div>
            <div>
                <section>
                    <h2>Ontdek Ons Assortiment</h2>
                    <Link href="https://halaldelight.nl/" target="_blank" className="calltoactionbtn greenbtn">Bezoek de webshop <Image className="externeicoon" src={ExternalLink} alt="Externe link icoon"/></Link>
                    <h3>Uitgebreide Keuze in Halal Snoep</h3>
                    <p>Bij halal-snoep.nl bieden we een divers assortiment van heerlijke halal snoepjes die aan de hoogste kwaliteitsnormen voldoen. Of je nu van zoet, zuur, zacht of kauwbaar houdt, ons assortiment heeft voor elk wat wils. We streven ernaar om jouw snoepervaring te verrijken met een scala aan smaken en texturen.</p>

                    <h3>Kwaliteit en Halal Zekerheid</h3>
                    <p>Ons assortiment wordt zorgvuldig samengesteld met aandacht voor kwaliteit en de strikte principes van halal. Wij garanderen dat al onze snoepjes afkomstig zijn van halal gelachte dieren, waardoor je met een gerust hart kunt genieten van jouw favoriete traktaties. Ontdek de wereld van heerlijke halal snoepjes die voldoen aan jouw verwachtingen van smaak en kwaliteit.</p>
                </section>
                <section>
                    <Image src={snoeppot4} alt="Halal zure beertjes snoep pot"/>
                </section>
            </div>

            <div>
                <section>
                <h2>Bestel Eenvoudig bij Halal Delight</h2>
                <h3>Betrouwbare Partner in Halal Lekkernijen</h3>
                <p>We begrijpen het belang van vertrouwen bij het kopen van halal snoepjes. Daarom hebben we gekozen voor een samenwerking met Halal Delight, een betrouwbare partner die zich toelegt op het aanbieden van hoogwaardige halal lekkernijen. Met hun uitgebreide assortiment en toewijding aan halal kwaliteit ben je verzekerd van een bevredigende snoepervaring.</p>

                <h3>Veilig en Snel Bestellen</h3>
                <p>Bezoek onze bevriende site, <Link href="https://www.halaldelight.nl" target="_blank">Halal Delight</Link>, en ervaar het gemak van veilig en snel bestellen. Met een gebruiksvriendelijke interface en beveiligde betaalopties kun je moeiteloos jouw favoriete halal snoepjes selecteren en laten bezorgen. Geniet van het gemak van online winkelen terwijl je verzekerd bent van de beste halal lekkernijen op de markt. De webshop verzendt de heerlijke snoepjes zowel binnen <Link href="/halal-snoep-bestellen/halal-snoepjes-in-nederland/">Nederland</Link> als in <Link href="/halal-snoep-bestellen/halal-snoepjes-in-belgie/">België</Link>.</p>
                </section>
                <section>
                    <Image src={logo2} alt="Een bruine witte rund / koe"/>
                </section>
            </div>

        </div>



      </div>
    </>
  );
}
