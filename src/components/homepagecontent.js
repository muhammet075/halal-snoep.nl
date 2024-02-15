import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/homepagecontent.module.css";
import halalsnoeppotjes from "@/assets/img/halalsnoeppotjes.png";
import halaldelight from "@/assets/logo/halal-delight-logo.png";
import ExternalLink from "@/assets/icons/external-link.svg";
import greenCheck from "@/assets/icons/greencheck.svg";
import cadeau from "@/assets/icons/cadeau.svg";

import home from "@/assets/icons/home.svg";
import contact from "@/assets/icons/contact.svg";
import informatie from "@/assets/icons/informatie.svg";
import snoepje from "@/assets/icons/snoepje.svg";
import winkelwagen from "@/assets/icons/winkelwagen.svg";
import blogs from "@/assets/icons/blogs.svg";

import turksevlag from "@/assets/img/turksevlag.png";
import amerikaansesnoep from "@/assets/img/amerikaansesnoep.png";
import lichaam from "@/assets/img/lichaam.png";
import oudesnoep from "@/assets/img/oudesnoep.png";
import gezond from "@/assets/img/gezond.png";

function Homepagecontent() {

    useEffect(() => {
        AOS.init();
    }, []);

    return(      
        <div className={styles.homepagecontent}>  
        <div>
            <div>
                <section>
                    <h2>Halal Snoep Kopen</h2>
                    <p>Welkom op halal-snoep.nl, dé website waar je uitgebreide informatie en boeiende wetenswaardigheden ontdekt over een verrukkelijke wereld van Halal Snoep, koekjes, chocolade, spekjes, marshmallows en nog veel meer lekkernijen. Wij nemen je graag mee op een smaakvolle reis volgens de halal-tradities, waarbij we niet alleen de heerlijke producten presenteren, maar ook inzicht geven in de herkomst, productiemethoden en diverse aspecten die deze lekkernijen halal maken. Ontdek de zoete en smaakvolle wereld van halal snoep op onze website, waar genieten en traditie samenkomen!</p>
                </section>
                <section>
                    <Image src={halalsnoeppotjes} alt="Halal Snoep Potjes"/>
                </section>
            </div>
        </div>


        <div>
            <div>
                <h2>Goedgekeurde halal snoep merken</h2>
                <p>Ontdek onze selectie goedgekeurde halal snoepmerken. Deze zorgvuldig gekozen merken belichamen smaak, kwaliteit en authenticiteit, en voldoen aan strenge halal-certificeringen. Geniet met een gerust hart van deze heerlijke traktaties die de diversiteit van halal snoep vertegenwoordigen!</p>
                <ul>
                    <li>
                        <span>
                            <Image src={halaldelight} alt="Logo van Halal Delight"></Image>
                            <h3>Halal Delight</h3>
                        </span>

                        <ul>
                            <li><Image src={greenCheck} alt="Groene vink icoontje"/> Alles Halal</li>
                            <li><Image src={greenCheck} alt="Groene vink icoontje"/> Halal Certificaat</li>
                            <li><Image src={cadeau} alt="Cadeau icoontje"/> Gratis cadeau vanaf €30,-</li>
                        </ul>

                        <Link target="_blank" href="https://halaldelight.nl/">Bezoek webshop <Image className="externeicoon" src={ExternalLink} alt="Externe link icoon"/></Link>
                    </li>
                </ul>

            </div>
        </div>



        <div>
            <div>
                <h2>Pagina's / Categorieën</h2>
                <div>
                    <Link href="/"><Image src={home} alt="Icoontje van een huis"/> <span>Home pagina</span></Link>
                    <Link href="/halal-snoep-bestellen"><Image src={winkelwagen} alt="Icoontje van een winkelwagen"/> <span>Halal snoep bestellen</span></Link>
                    <Link href="/wat-is-halal-snoep"><Image src={informatie} alt="Informatie icoontje"/> <span>Wat is halal snoep?</span></Link>
                    <Link href="/halal-snoep-producten"><Image src={snoepje} alt="Icoontje van een snoepje"/> <span>Halal snoep producten</span></Link>
                    <Link href="/blog"><Image src={blogs} alt="Icoontje van een blaadje met tekst"/> <span>Blog</span></Link>
                    <Link href="/contact"><Image src={contact} alt="Icoontje van envelop"/> <span>Contact</span></Link>
                </div>
            </div>
        </div>




        <div>
            <div>
                <h2>Blog</h2>
                <p>Ontdek het laatste nieuws en de meest recente ontwikkelingen met betrekking tot halal snoep door een bezoek te brengen aan onze informatieve <Link href="/blog" className="redcolor">Blog</Link>. Wij delen boeiende en gedetailleerde artikelen die niet alleen inzicht geven in de nieuwste trends in de wereld van halal snoep.</p>

                <div>
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

                <p>Scroll naar rechts om meer blogs te zien.</p>
      
      
            </div>
        </div>


        <div>
            <div>
                <h2>Online snoep bestellen</h2>
                <h3>De Introductie van Halal-Snoep.nl</h3>
                <p>Halal-Snoep.nl is een online platform dat zich toewijdt aan de wereld van halal snoepgoed. De website biedt een scala aan informatie en artikelen over halal gelsachte snoepvarianten. Met een focus op zowel veganistische als halal geslachte rundergelatine-opties, streeft de site ernaar om een brug te slaan tussen de liefhebbers van snoep en degenen die zich houden aan halal levenswijzen. In deze paragraaf verkennen we de verschillende aspecten van de website en hoe het een centrale plek is geworden voor liefhebbers van halal snoep.</p>

                <h3>Vegan Opties en Halal Certificering</h3>
                <p>Een van de kenmerken die Halal-Snoep.nl onderscheidt, is de nadruk op veganistische snoepvarianten die voldoen aan halal standaarden. De huidige trend naar bewuste voeding wordt omarmd door de website, waarbij het belang van veganistische ingrediënten en halal geslachte rundergelatine wordt benadrukt. Elke snoepoptie wordt zorgvuldig geselecteerd op basis van strikte halal certificeringen, wat de bezoekers verzekert van de naleving van de Islamitische voedingsvoorschriften. In deze paragraaf duiken we dieper in op de diverse snoepopties en de zorgvuldige selectiecriteria.</p>

                <h3>De Gemeenschap van Halal Snoep Liefhebbers</h3>
                <p>Halal-Snoep.nl gaat verder dan alleen het aanbieden van producten; het creëert een gemeenschap van halal snoep liefhebbers. De blogsectie van de website fungeert als een platform waar bezoekers hun ervaringen kunnen delen, recepten kunnen uitwisselen en op de hoogte kunnen blijven van de laatste trends in de wereld van halal snoep. De interactieve elementen versterken de band tussen de site en de gemeenschap, waardoor Halal-Snoep.nl niet alleen een plek is om snoep te bestellen, maar ook een virtuele ontmoetingsplaats voor gelijkgestemde individuen. Deze paragraaf benadrukt de sociale component die de website uniek maakt binnen het domein van online snoep bestellen.</p>
            </div>
        </div>



        </div>
    )
}
  
export default Homepagecontent;