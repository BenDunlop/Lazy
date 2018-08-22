import React, { Component } from 'react';
import Link from 'next/link';
import './navbar.scss'

class Navbar extends Component {

    componentDidUpdate(){

        if(typeof window !== 'undefined'){
            window.WOW = require('wowjs')
        }

        new WOW.WOW().init();


        function classToggle() {
            const navs = document.querySelectorAll('.navbar__items')

            navs.forEach(nav => nav.classList.toggle('navbar__toggleshow'));
        }

        console.log(classToggle)
        document.querySelector('.navbar__link-toggle').addEventListener('click', classToggle);

    }



    render() {


        return (
            <div className="navbar wow fadeInUp" data-wow-offset="20">
                <div className="navbar__link navbar__link-brand">
                Website title
                </div>
                <div className="navbar__link navbar__link-toggle">
                    <div className="boxPlaceHolder"></div>
                </div>
                <nav className="navbar__items">
                    <div className="navbar__link">
                        <Link href="/contact">
                            <a>Home</a>
                        </Link>
                    </div>
                    <div className="navbar__link">
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </div>
                    <div className="navbar__link">
                    Link
                    </div>
                </nav>
                <nav className="navbar__items navbar__items--right">
                    <div className="navbar__link">
                    Link
                    </div>
                    <div className="navbar__link">
                    Link
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar