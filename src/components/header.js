import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import logo from "@/assets/logo/halalsnoep-logo.svg";

function Header() {

    useEffect(() => {
    }, []);

    return(      
        <header className={styles.header + " fadeinheader stickyheader"} id="halalsnoepheader">  
        <div className="container">

            <nav class="navbar navbar-expand-lg navbar-light">

            <a class="navbar-brand" href="/"><Image src={logo} alt="Logo van halal-snoep.nl"/></a>

            <button class="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">

                <li class="nav-item">
                    <a class="nav-link text-light" href="/">Home</a>
                </li>

                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle text-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Halal snoep bestellen</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item text-dark" href="/halal-snoep-bestellen">Halal snoep bestellen</a>
                            <a class="dropdown-item text-dark" href="/halal-snoep-bestellen/halal-delight-webshop">Halal Delight Webshop</a>
                            <a class="dropdown-item text-dark" href="/halal-snoep-bestellen/halal-snoepjes-in-nederland">Halal Snoepjes in Nederland</a>
                            <a class="dropdown-item text-dark" href="/halal-snoep-bestellen/halal-snoepjes-in-belgie">Halal Snoepjes in België</a>
                        </div>
                </li>

                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle text-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Wat is halal snoep?</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item text-dark" href="/wat-is-halal-snoep">Wat is halal snoep?</a>
                            <a class="dropdown-item text-dark" href="/wat-is-halal-snoep/hoe-werkt-halal-slachten">Hoe werkt halal slachten?</a>
                            <a class="dropdown-item text-dark" href="/wat-is-halal-snoep/waar-kan-ik-halal-snoep-kopen/">Waar kan ik halal snoep kopen?</a>
                            <a class="dropdown-item text-dark" href="/wat-is-halal-snoep/halal-snoep-merken/">Halal snoep merken</a>
                        </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link text-light" href="/halal-snoep-producten">Halal Snoep Producten</a>
                </li>

                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle text-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item text-dark" href="/blog">Blog</a>
                            <a class="dropdown-item text-dark" href="/blog/is-snoep-slecht-voor-je">Is snoep slecht voor je?</a>
                            <a class="dropdown-item text-dark" href="/blog/snoep-uit-de-jaren-90-en-80">Snoep uit de jaren 90 en 80</a>
                            <a class="dropdown-item text-dark" href="/blog/snoep-uit-amerika">Snoep uit Amerika</a>
                            <a class="dropdown-item text-dark" href="/blog/snoep-uit-turkije">Snoep uit Turkije</a>
                            <a class="dropdown-item text-dark" href="/blog/wat-doet-snoep-met-je-lichaam">Wat doet snoep met je lichaam?</a>
                        </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link text-light" href="/contact">Contact</a>
                </li>

                </ul>
            </div>

            </nav>

        </div>
        </header>
    )
}
  
export default Header;