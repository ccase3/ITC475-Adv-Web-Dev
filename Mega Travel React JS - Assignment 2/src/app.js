import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Home from './home';
import About from './about';
import ContactAgent from './contact';
import Footer from './footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Home />
        <About />
        <ContactAgent />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();