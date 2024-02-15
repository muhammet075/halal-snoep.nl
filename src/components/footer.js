import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/footer.module.css";
import logo from "@/assets/logo/halalsnoep-logo.svg";
import { useEffect } from "react";

function Footer() {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={styles.footer}>
      <div>
        <ul>
          <li><Link href="/"><Image src={logo} alt="Logo van halal-snoep.nl"/></Link></li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/algemene-voorwaarden">Algemene Voorwaarden</Link></li>
          <li><Link href="/disclaimer">Disclaimer</Link></li>
          <li><Link target="_blank" href="/sitemap.xml">XML Sitemap</Link></li>
        </ul>

        <ul>
          <li><h2>Halal snoep bestellen</h2></li>
          <li><Link href="/halal-snoep-bestellen">Halal snoep bestellen</Link></li>
          <li><Link href="/halal-snoep-bestellen/halal-delight-webshop">Halal Delight Webshop</Link></li>
          <li><Link href="/halal-snoep-bestellen/halal-snoepjes-in-nederland">Halal snoepjes in Nederland</Link></li>
          <li><Link href="/halal-snoep-bestellen/halal-snoepjes-in-belgie">Halal snoepjes in België</Link></li>
        </ul>

        <ul>
          <li><h2>Wat is halal snoep?</h2></li>
          <li><Link href="/wat-is-halal-snoep">Wat is halal snoep?</Link></li>
          <li><Link href="/wat-is-halal-snoep/hoe-werkt-halal-slachten">Hoe werkt halal slachten?</Link></li>
          <li><Link href="/wat-is-halal-snoep/waar-kan-ik-halal-snoep-kopen">Waar kan ik halal snoep kopen?</Link></li>
          <li><Link href="/wat-is-halal-snoep/halal-snoep-merken">Halal snoep merken</Link></li>
          <li><Link href="/halal-snoep-producten">Halal snoep producten</Link></li>
        </ul>

        <ul>
          <li><h2>Blog</h2></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/blog/is-snoep-slecht-voor-je">Is snoep slecht voor je?</Link></li>
          <li><Link href="/blog/snoep-uit-de-jaren-90-en-80">Snoep uit de jaren 90 en 80</Link></li>
          <li><Link href="/blog/snoep-uit-amerika">Snoep uit Amerika</Link></li>
          <li><Link href="/blog/snoep-uit-turkije">Snoep uit Turkije</Link></li>
          <li><Link href="/blog/wat-doet-snoep-met-je-lichaam">Wat doet snoep met je lichaam?</Link></li>
        </ul>
      </div>
      <div>
        <p>Halal-snoep.nl - &copy; Copyright 2023 - {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
