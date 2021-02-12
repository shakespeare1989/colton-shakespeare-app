import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class ContactUs extends Component {
    render() {
        return (      
            <section id="contact">    
                <div className="contactWigdet">
                    <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
                        <label className="message" htmlFor="message-input">Your Message</label>
                        <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>
                        <label class="message-name" htmlFor="message-name">Your Name</label>
                        <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name}/>
                        <label class="message-email" htmlFor="message-email">Your Email</label>
                        <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />
                            <div className="button-container">
                                <button className="submit-button" type="submit" className="button button-primary">{ this.state.buttonText }</button>
                            </div>
                    </form>
                        <div className="emailContact" > Email: shakeca@gmail.com</div>
                        <div className="phoneContact">Phone: 385.210.5739</div>
                </div>
            </section>       
        )
    }
}
