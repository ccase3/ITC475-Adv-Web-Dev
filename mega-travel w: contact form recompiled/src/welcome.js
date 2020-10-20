import React from 'react';
import Sun from './photos/sun.svg';
import Moon from './photos/moon.svg'

function setGreeting() {
    let date = new Date(),
        hours = date.getHours(),
        time = date.toLocaleTimeString(),
        timeOfDay;

    if (hours < 12) {
        timeOfDay = "Morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon";
    } else {
        timeOfDay = "Evening";
    }
    return (
        React.createElement("h3", {id: "Welcome"}, " Good ", timeOfDay, "! ", React.createElement("p", {id: "WelcomeTime"}), time));
}

function setIcon() {
    let date = new Date(),
        hours = date.getHours(),
        min = date.getMinutes();

    if ((hours >= 6 && hours < 18) || (hours = 18 && min === 0)) {
        return (
            React.createElement("img", {
                src: Sun,
                width: "30px",
                alt: "sun",
            }));
    } else {
        return (
            React.createElement("img", {
                src: Moon,
                width: "30px",
                alt: "moon"
            }));
    }
    
}

function welcome() {
    return(
        React.createElement("div", null, React.createElement(setGreeting, null), React.createElement(setIcon, null))
    )
}

setInterval(welcome, 1000);

export default welcome;