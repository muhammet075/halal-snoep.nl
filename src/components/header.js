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

            <a class="navbar-brand" href="#"><Image src={logo} alt="Logo van halal-snoep.nl"/></a>

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
                            <a class="dropdown-item text-dark" href="#">Halal snoep bestellen</a>
                            <a class="dropdown-item text-dark" href="#">Halal Delight Webshop</a>
                            <a class="dropdown-item text-dark" href="#">Halal Snoepjes in Nederland</a>
                            <a class="dropdown-item text-dark" href="#">Halal Snoepjes in België</a>
                        </div>
                </li>

                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle text-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Wat is halal snoep?</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item text-dark" href="#">Wat is halal snoep?</a>
                            <a class="dropdown-item text-dark" href="#">Wat is halal?</a>
                            <a class="dropdown-item text-dark" href="#">Waar kan ik halal snoep kopen?</a>
                            <a class="dropdown-item text-dark" href="#">Halal snoep merken</a>
                        </div>
                </li>

                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle text-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Halal snoep producten</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item text-dark" href="#">Halal snoep producten</a>
                            <a class="dropdown-item text-dark" href="#">Gummies</a>
                            <a class="dropdown-item text-dark" href="#">Zure halal snoepjes</a>
                            <a class="dropdown-item text-dark" href="#">Zoete halal snoepjes</a>
                            <a class="dropdown-item text-dark" href="#">Halal spekjes</a>
                            <a class="dropdown-item text-dark" href="#">Halal marshmallows</a>
                            <a class="dropdown-item text-dark" href="#">Halal chocolade</a>
                            <a class="dropdown-item text-dark" href="#">Halal koekjes</a>
                        </div>
                </li>


                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle text-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item text-dark" href="#">Is snoep slecht voor je?</a>
                            <a class="dropdown-item text-dark" href="#">Snoep uit de jaren 90 en 80</a>
                            <a class="dropdown-item text-dark" href="#">Snoep uit Amerika</a>
                            <a class="dropdown-item text-dark" href="#">Snoep uit Turkije</a>
                            <a class="dropdown-item text-dark" href="#">Wat doet snoep met je lichaam?</a>
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