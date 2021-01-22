import React, { Component } from "react";
export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {
                                resumeData.socialLinks&&resumeData.socialLinks.map((item) => {
                                    return(
                                        <li>
                                            <a href={item.url}>
                                                <i className={item.className} />
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open"/>
                        </a>
                    </div>
                </div>
                            
                        <div className="contactMe">
                            <div className="footerEmailContact" ><i class="far fa-envelope"></i>Email: shakeca@gmail.com</div>
                            <div className="footerPhoneContact"><i class="fas fa-phone"></i>Phone: 385.343.8883</div>
                        </div>
            </footer>
        )
    }
}