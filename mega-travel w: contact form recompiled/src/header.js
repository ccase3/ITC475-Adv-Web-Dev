import React from 'react';
import './style.css';
import logo from './photos/mega travel logo.png'

class Header extends React.Component {
    render() {
        return (
            <div>
                <div class="lightBlueBackground">
                    <img src={logo} class="mega-logo" alt="mega travel logo"></img>
                </div>
                <nav class="top-navigation">
                    <a href="/home.js">Home</a>
                    <a href="/about.js">About Us</a>
                    <a href="/contact.js">Contact Agent</a>
                </nav>
            </div>
        );
    }

}

export default Header;
