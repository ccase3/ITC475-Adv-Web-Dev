import React from 'react';
import './style.css';
import ContactForm from './contactForm';


class contact extends React.Component {

    render() {
        return (
            <div>
                <section class="intro">
                    <h2 class="lead-heading">Contact an Agent</h2>
                    <p class="lead-body">
                        We would love to know more about your travel plans. Please fill out this contact form to get in touch with a
                            travel agent.</p>
                </section>
                <ContactForm />

            </div>
        );
    }
}

export default contact;