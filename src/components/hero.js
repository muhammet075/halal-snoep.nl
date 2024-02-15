import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/hero.module.css";
import ExternalLink from "@/assets/icons/external-link.svg";

function Hero() {

    useEffect(() => {
        AOS.init();
    }, []);

    return(      
        <div className={styles.hero}>  
            <div>
                <div>
                    <section>
                    <h1>Halal Snoep Bestellen</h1>
                    <p>Ontdek de meest smakelijke en lekkerste Halal Snoep van Nederland en België op halal-snoep.nl</p>
                    <p>Vind op onze website alle interessante weetjes, feiten en informatie over halal snoepjes.</p>
                    </section>
                    <section>
                        <Link href="/halal-snoep-bestellen">Halal snoep bestellen</Link>
                        <Link href="https://halaldelight.nl/" target="_blank">Halal Delight webshop <Image className="externeicoon" src={ExternalLink} alt="Externe link icoon"/></Link>
                        <Link href="/blog">Blog</Link>
                    </section>
                </div>

                </div>
        </div>
    )
}
  
export default Hero;