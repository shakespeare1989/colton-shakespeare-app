import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactForm from './ContactForm.js';

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
            return (
                <React.Fragment>
                    <header id="home">
                        <nav id="nav-wrap">
                            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show Navigation</a>
                            <ul id="nav" className="nav">
                                <li className="current">
                                    <a className="smoothscroll" href="#home">Home</a>
                                </li>
                                <li>
                                    <a className="smoothscroll" href="#resume">Resume</a>
                                </li>
                                <li>
                                    <a className="smoothscroll" href="#about">About Me</a>
                                </li>
                                <li>
                                <a className="smoothscroll" href="/ContactForm">Contact</a>
                                </li>
                                
                            </ul>
                        </nav>
                        
                        <div className="row banner">
                            <div className="banner-text">
                                <div className="responsive-headline">I am</div>
                                <h1 className="headerName">Colton Shakespeare</h1>
                                <div className="headerHeadline">{resumeData.role}{resumeData.roleDescription}</div>
                                <hr/>
                                <ul className="social">
                                    {
                                        resumeData.socialLinks&&resumeData.socialLinks.map(item => {
                                            return(
                                                <li key={item.name}>
                                                    <a href={item.url} target="">
                                                        <i className={item.className}></i>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <p className="scrolldown">
                            <a className="smoothscroll" href="#about">
                                <i className="icon-down-circle"></i>
                            </a>
                        </p>
                    </header>
                </React.Fragment>

);
}
}