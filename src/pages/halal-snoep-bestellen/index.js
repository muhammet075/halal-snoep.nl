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

export default function HalalSnoepBestellen() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Halal Snoep Bestellen</title>
        <meta name="description" content="Bestel nu halal snoep en geniet van heerlijke snoepjes."/>
        <meta name="og:description" content="Bestel nu halal snoep en geniet van heerlijke snoepjes."/>
        <meta property="og:url" content="https://www.halal-snoep.nl/halal-snoep-bestellen"/>
        <meta property="og:title" content="Bestel nu halal snoep en geniet van heerlijke snoepjes."/>
        <meta name="keywords" content="halal delight, halal snoep, webshop, halal gelatine, rundergelatine"/>
        <meta name="author" content="Muhammet"/>

      </Head>

      <div className="pagecontent">
        <div id="pageheader1">
            <ul class="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Halal snoep bestellen</li>
            </ul>

            <section>
                <h1>Halal snoep bestellen</h1>
            </section>
            <section>
            </section>
        </div>

        <div>
            <div>
                <section>
                    <h2>Halal Snoep bij Halal Delight</h2>
                    <Link href="https://halaldelight.nl/" target="_blank" className="calltoactionbtn">Direct Bestellen <Image className="externeicoon" src={ExternalLink} alt="Externe link icoon"/></Link>

                    <h3>Authentieke Smaakbeleving</h3>
                    <p>Ontdek de zoete wereld van halal snoep bij Halal-Snoep.nl! We bieden een uitgebreid assortiment aan verrukkelijke snoepjes die voldoen aan strikte halal-eisen. Bestel jouw favoriete zoetigheden eenvoudig online en geniet van een smaakvolle ervaring.</p>
                    <p>Duik in de diepte van de authentieke halal snoepjes op <Link href="/halal-snoep-bestellen/halal-delight-webshop/">Halal Delight</Link>, zoals zure cola flesjes, perzik ringen, dolfijntjes, kersen flesjes, spekjes, en nog veel meer. <Link href="/halal-snoep-bestellen/halal-delight-webshop/">Halal Delight</Link> heeft voor elk wat wils. Ontdek de rijke smaakbeleving die hun halal snoepjes te bieden hebben.</p>

                    <h3>Seizoensgebonden Specialiteiten</h3>
                    <p>Vier feestelijke momenten met de seizoensgebonden specialiteiten van <Link href="/halal-snoep-bestellen/halal-delight-webshop/">Halal Delight</Link>. Van Ramadan tot Eid, voegt hun assortiment halal snoepjes een zoete noot toe aan elke viering. Verwen jezelf en je dierbaren met unieke smaken en texturen die passen bij de sfeer van elk seizoen.</p>
                </section>
                <section>
                    <Image src={snoeppot1} alt="Halal perzik snoep pot"/>
                </section>
            </div>

            <div>
                <section>
                    <h2>Halal Snoepjes, Verantwoord Genieten</h2>
                    <h3>Kwaliteit en Halal Certificaat</h3>
                    <p>Bij <Link href="/halal-snoep-bestellen/halal-delight-webshop/">Halal Delight</Link> streven ze naar de hoogste kwaliteit en transparantie. Hun halal snoepjes zijn niet alleen heerlijk, maar voldoen ook aan strenge halal-certificeringen. Geniet met een gerust hart van de smakelijke traktaties, wetende dat ze in overeenstemming zijn met jouw culinaire voorkeuren.</p>

                    <h3>Eenvoudig Bestellen en Snelle Levering</h3>
                    <p>Maak het bestellen van halal snoepjes moeiteloos met het gebruiksvriendelijke online platform van <Link href="/halal-snoep-bestellen/halal-delight-webshop/">Halal Delight</Link>. Kies jouw favorieten, voeg ze toe aan je winkelwagen op <Link href="/halal-snoep-bestellen/halal-delight-webshop/">Halal Delight</Link> en laat ze snel bij je thuis bezorgen. De webshop bezorgt in <Link href="/halal-snoep-bestellen/halal-snoep-in-nederland/">Nederland</Link> en <Link href="/halal-snoep-bestellen/halal-snoep-in-belgie/">België</Link>. Halal snoep bestellen was nog nooit zo gemakkelijk en plezierig.</p>
                    <p>Ontdek de zoete wereld van <Link href="/halal-snoep-bestellen/halal-delight-webshop/">Halal Delight</Link> op Halal-Snoep.nl en verrijk je smaakpapillen met hun heerlijke halal snoepjes. Bestel vandaag nog en laat je verrassen door de diversiteit aan smaken die ze te bieden hebben!</p>
                </section>
                <section>
                    <Image src={snoeppot2} alt="Halal mini kikkertjes snoep pot"/>
                </section>
            </div>
        </div>



      </div>
    </>
  );
}
