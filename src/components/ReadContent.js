import React, { Component } from 'react';

class ReadContent extends Component{
    render() {
        return (
            <article>
                <h2>Read</h2>
                <h3>{this.props.name}</h3>
            </article>
        );
    }
}

export default ReadContent;