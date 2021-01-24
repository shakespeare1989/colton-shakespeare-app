import React, { Component } from "react";




export default class About extends Component {
    render() {
        let resumeData=this.props.resumeData;
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <div className="imageFrame">
                            <img className="profile-pic" src="../images/Colton.jpg" alt="Colton" />
                        </div>
                    </div>
                    
                    <div className="nine columns main-col">
                        <div className="aboutHeader">About Me:</div>
                        <div className="aboutMe">
                        Lead Data Center Technician
                        </div>
                        <div className="row">
                            <div className="columns contact-details">
                                <div className="contactHeader">Contact Details:</div>
                                    <div className="contact-wigdet">
                                        <div className="emailContact"><span className="icons"><i class="far fa-envelope"></i></span>Email: shakeca@gmail.com</div>
                                        <div className="phoneContact"><span className="icons"><i class="fas fa-phone"></i></span>Phone: 385.210.5739</div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}