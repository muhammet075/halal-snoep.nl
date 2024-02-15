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

export default function HalalDelightWebshop() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Halal Delight Webshop</title>
        <meta name="description" content="Ontdek de halal wereld van snoep bij Halal Delight Webshop! Bestel heerlijke halal snoepjes."/>
        <meta name="og:description" content="Ontdek de halal wereld van snoep bij Halal Delight Webshop! Bestel heerlijke halal snoepjes."/>
        <meta property="og:url" content="https://www.halal-snoep.nl/halal-snoep-bestellen/halal-delight-webshop"/>
        <meta property="og:title" content="Ontdek de halal wereld van snoep bij Halal Delight Webshop! Bestel heerlijke halal snoepjes."/>
        <meta name="keywords" content="halal delight, halal snoep, webshop, halal gelatine, haram e-nummers, rundergelatine"/>
        <meta name="author" content="Muhammet"/>

      </Head>

      <div className="pagecontent">
        <div id="pageheader4">
            <ul class="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/halal-snoep-bestellen/">Halal snoep bestellen</Link></li>
                <li>Halal Delight Webshop</li>
            </ul>

            <section>
                <h1>Halal Delight Webshop</h1>
            </section>
            <section>
            </section>
        </div>

        <div>
            <div>
                <section>
                    <h2>Halal Delight</h2>
                    <Link href="https://halaldelight.nl/" target="_blank" className="calltoactionbtn greenbtn">Bezoek de webshop <Image className="externeicoon" src={ExternalLink} alt="Externe link icoon"/></Link>

                    <h3>Authentieke en Kwalitatieve Snoepjes</h3>
                    <p>Ontdek de onweerstaanbare wereld van <Link href="/halal-snoep-bestellen/">Halal Snoepjes</Link> bij Halal Delight, waar authenticiteit en kwaliteit samenkomen. Bij Halal-Snoep.nl vertellen we je graag meer over het uitgebreide assortiment van Halal Delight en hoe je deze heerlijke lekkernijen kunt bestellen.</p>
                    <p>Halal Delight biedt een uitgebreide selectie authentieke <Link href="/halal-snoep-bestellen/">Halal Snoepjes</Link>, gemaakt met zorgvuldig geselecteerde ingrediënten en gegarandeerd halal geslachte dieren. Van zure cola flesjes tot perzik ringen, elk snoepje belooft een unieke smaakbeleving van de hoogste kwaliteit.</p>

                    <h3>Vrij van Haram E-nummers</h3>
                    <p>Bij Halal Delight is elk snoepje vrij van haram e-nummers, zoals karmijn afkomstig van luizenbloed. Dit betekent dat je met een gerust hart kunt genieten van de heerlijke traktaties, wetende dat ze voldoen aan de principes van halal en dat er bewust wordt omgegaan met de keuze van ingrediënten.</p>
                </section>
                <section>
                    <Image src={snoeppot3} alt="Halal blauwe frambozen schuimpjes snoep pot"/>
                </section>
            </div>

            <div>
                <section>
                    <h2>Bestel Halal Delight Snoepjes</h2>
                    <h3>Eenvoudig en Betrouwbaar Bestellen</h3>
                    <p>Op Halal-Snoep.nl kun je eenvoudig en betrouwbaar de heerlijke <Link href="/halal-snoep-bestellen/">Halal Snoepjes</Link> van Halal Delight bestellen. Blader door het assortiment, voeg je favorieten toe aan de winkelwagen en geniet van een vlotte en veilige bestelervaring. Het is nog nooit zo eenvoudig geweest om authentieke halal snoepjes in huis te halen!</p>

                    <h3>Snel Geleverd bij Jou Thuis</h3>
                    <p>Na je bestelling op Halal Delight worden de Halal Delight snoepjes snel en veilig bij jou thuis geleverd. Geniet binnen de kortste keren van de heerlijke smaken die Halal Delight te bieden heeft, zonder het comfort van je eigen huis te verlaten.</p>
                    <p>Ervaar zelf de zoete verrassingen van Halal Delight en ontdek het uitgebreide assortiment op Halal-Snoep.nl. Bestel vandaag nog en laat je smaakpapillen genieten van de unieke en verantwoorde halal snoepjes!</p>
                </section>
                <section>
                    <Image src={snoeppot4} alt="Halal zure beertjes snoep pot"/>
                </section>
            </div>
        </div>



      </div>
    </>
  );
}
