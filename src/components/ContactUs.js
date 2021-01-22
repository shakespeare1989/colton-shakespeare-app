import React, { Component } from "react";


export default class ContactUs extends Component {
    render() {
        let resumeData=this.props.resumeData;
        return (
            <second id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Feel Free to contact me for any work suggestions below
                        </p>
                    </div>
                </div>
                
                <div className="row">
                    <aside className="eigth columns footer-widgets">
                        <div className="wigdet">
                            <h4>LinkedIn: {resumeData.linkedinId}</h4>
                        </div>
                    </aside>
                </div>
            </second>
        )
    }
}
