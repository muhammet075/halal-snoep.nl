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
                    <Link href=""><Image src={winkelwagen} alt="Icoontje van een winkelwagen"/> <span>Halal snoep bestellen</span></Link>
                    <Link href=""><Image src={informatie} alt="Informatie icoontje"/> <span>Wat is halal snoep?</span></Link>
                    <Link href=""><Image src={snoepje} alt="Icoontje van een snoepje"/> <span>Halal snoep producten</span></Link>
                    <Link href=""><Image src={blogs} alt="Icoontje van een blaadje met tekst"/> <span>Blog</span></Link>
                    <Link href=""><Image src={contact} alt="Icoontje van envelop"/> <span>Contact</span></Link>
                </div>
            </div>
        </div>




        <div>
            <div>
                <h2>Blog</h2>
                <p>Ontdek het laatste nieuws en de meest recente ontwikkelingen met betrekking tot halal snoep door een bezoek te brengen aan onze informatieve blog. Wij delen boeiende en gedetailleerde artikelen die niet alleen inzicht geven in de nieuwste trends in de wereld van halal snoep.</p>

                <div>
                    <Link href="">
                        <h3>Is snoep slecht voor je?</h3>
                        <Image src={snoepje} alt="Snoepje"/>
                        <p>Datum: <time datetime="2024-02-15">15 Februari 2024</time></p>
                        <p>Lees meer</p>
                    </Link>
                    <Link href="">
                        <h3>Is snoep slecht voor je?</h3>
                        <Image src={snoepje} alt="Snoepje"/>
                        <p>Datum: <time datetime="2024-02-15">15 Februari 2024</time></p>
                        <p>Lees meer</p>
                    </Link>
                    <Link href="">
                        <h3>Is snoep slecht voor je?</h3>
                        <Image src={snoepje} alt="Snoepje"/>
                        <p>Datum: <time datetime="2024-02-15">15 Februari 2024</time></p>
                        <p>Lees meer</p>
                    </Link>
                    <Link href="">
                        <h3>Is snoep slecht voor je?</h3>
                        <Image src={snoepje} alt="Snoepje"/>
                        <p>Datum: <time datetime="2024-02-15">15 Februari 2024</time></p>
                        <p>Lees meer</p>
                    </Link>
                    <Link href="">
                        <h3>Is snoep slecht voor je?</h3>
                        <Image src={snoepje} alt="Snoepje"/>
                        <p>Datum: <time datetime="2024-02-15">15 Februari 2024</time></p>
                        <p>Lees meer</p>
                    </Link>
                </div>

                <p>Scroll naar rechts om meer blogs te zien.</p>
      
      
            </div>
        </div>



        </div>
    )
}
  
export default Homepagecontent;