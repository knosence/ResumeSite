import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Phone Number:{resumeData.phoneNumber} </h4>
                <h4>Email Address:{resumeData.emailid}</h4>
                <h4>Address:{resumeData.address}</h4> <br />
                <h4><a href={resumeData.linkedin}> Visit My LinkedIn</a> </h4>
                <h4><a href={resumeData.github}> Visit My GitHub</a> </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
