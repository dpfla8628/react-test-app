import React, { Component } from 'react';

class CreateContent extends Component{
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form
                    onSubmit={function(e){
                        this.props.onSubmit(
                            e.target.name.value
                        );
                    }.bind(this)}>
                    <input type="text" name="name" placeholder="name"/>
                    <button type="submit">create</button>
                </form>
            </article>
        );
    }
}

export default CreateContent;