
import React from 'react';
import './style.css';
import maldives from './photos/maldives.PNG';
import mexico from './photos/mexico.PNG';
import newZealand from './photos/newzealand.PNG';
import venice from './photos/venice.PNG';
import Welcome from './welcome.js';

class Home extends React.Component {
    render() {
        return (

            <div class="parent">
                <section>
                    <div class="time-wrap">
                    <Welcome />
                     </div>
                </section>


                <section class="intro">
                    <h2 class="lead-heading">Travel Packages</h2>
                    <p class="lead-body">
                        We are specialized with International Travels and Tours. Our expertized and experience can save
                        you 100's of dollars in your pocket. Beside the money you can also save your valuable time at the
                        time of transit of tour. You decide your budget and the time from your comfort zone. We will make it
                        happen
                        for you for an exceptional memory. Mega Travels is committed for an excellent service and support
                        for all of its past, present and future customers. We are here today only for you. We remind ourself
                        everyday
                        and every moment with a sincere gratitude.
                    </p>
                </section>
                <section class="travel-cards">
                    <div class="travel-card">
                        <img src={maldives} alt="Maldives Resort" class="travel-img"></img>
                        <h3 class="travel-heading"><a href>Maldives Resort</a></h3>
                        <p class="price">$1800.99</p>
                        <p class="price-paying">Price you pay: <span class="bold">$999.99</span></p>
                        <p class="price-savings">Your saving $801</p>
                    </div>
                    <div class="travel-card">
                        <img src={mexico} alt="Mexico Resort" class="travel-img"></img>
                        <h3 class="travel-heading"><a href>Mexico Resort (All Inclusive!)</a></h3>
                        <p class="price">$2999.99</p>
                        <p class="price-paying">Price you pay: <span class="bold">$2199.99</span></p>
                        <p class="price-savings">Your saving $800</p>
                    </div>
                    <div class="travel-card">
                        <img src={newZealand} alt="New Zealand Resort" class="travel-img"></img>
                        <h3 class="travel-heading"><a href>Maldives Resort</a></h3>
                        <p class="price">$2499.99</p>
                        <p class="price-paying">Price you pay: <span class="bold">$2100.00</span></p>
                        <p class="price-savings">Your saving $399</p>
                    </div>
                    <div class="travel-card">
                        <img src={venice} alt="Venice Resort" class="travel-img"></img>
                        <h3 class="travel-heading"><a href>Maldives Resort</a></h3>
                        <p class="price">$4100.00</p>
                        <p class="price-paying">Price you pay: <span class="bold">$3699.00</span></p>
                        <p class="price-savings">Your saving $400</p>
                    </div>
                </section>


            </div>
        );
    }
}

export default Home;