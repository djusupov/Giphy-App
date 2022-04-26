import React, { Component } from 'react';
import './Loading.css'

class Loading extends Component {
    render() {
        return (
            <div className="animBody">
                <section className='animSection'>
                    <div className="animLoader"></div>
                </section>
            </div>
        );
    }
}

export default Loading;