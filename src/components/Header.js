import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
                                    <a href="https://drive.google.com/file/d/1__cmyBf5_pr57aMpGyKzEgqruH9tEBhl/view?usp=sharing" target="_blank">Resume</a>
                                </li>
                                <li>
                                    <a className="smoothscroll" href="#about">About Me</a>
                                </li>
                                <li>
                                <a className="smoothscroll" href="#contact">Contact</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/colton-shakespeare-8b1301133/" target="_blank">LinkedIn</a>
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
                                                    <a key={item.url} href={item.url} target="">
                                                        <i key={item.className} className={item.className}></i>
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