import React from 'react';

function Forms() {
    return (
        <section className="formsContainer">
            <p className="contactUs">Contact Us</p>
            <h2 className="formsTitle">Let's Start a Conversation</h2>
            <p className="formsDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>

            <div className="formsInfoBox">
                <div className="formsWorkingHours">
                    <h4 className="formsSubtitle">Working hours</h4>
                    <p className="formsWorkingTime"><strong>Monday To Friday</strong><br />9:00 AM to 8:00 PM</p>
                    <p className="formsSupport">Our Support Team is available 24/7</p>
                </div>
                <div className="formsContactInfo">
                    <h4 className="formsSubtitle">Contact Us</h4>
                    <p className="formsPhoneNumber"><strong>020 7993 2905</strong></p>
                    <p className="formsEmail">hello@finsweet.com</p>
                </div>
            </div>

            <form className="formsForm">
                <label htmlFor="fullName" className="formsLabel">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    className="formsInput"
                />

                <label htmlFor="email" className="formsLabel">Your Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="formsInput"
                />

                <label htmlFor="queryType" className="formsLabel">Query Related</label>
                <select id="queryType" name="queryType" className="formsSelect">
                    <option>Select a topic</option>
                    <option>Support</option>
                    <option>Sales</option>
                    <option>Other</option>
                </select>

                <label htmlFor="message" className="formsLabel">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="formsTextarea"
                ></textarea>

                <button type="submit" className="formsButton">Send Message</button>
            </form>
        </section>
    );
}

export default Forms;