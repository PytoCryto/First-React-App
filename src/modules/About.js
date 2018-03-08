import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="mdl-grid center-items">
                <div className="mdl-cell mdl-cell--6-col mdl-cell--3-offset">
                    <h2>About</h2>
                    <p>
                        Obama was here.
                        <button onClick={() => { alert('You clicked me!'); }} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                            Click me
                        </button>
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
