import React, { Component } from 'react';

class UpdateContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.id,
            name:this.props.name
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
        }
    inputFormHandler(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
            <article>
                <h2>Update</h2>
                <form
                    onSubmit={function(e){
                        this.props.onSubmit(
                            e.target.name.id,
                            e.target.name.value
                        );
                    }.bind(this)}>
                    <input onChange={this.inputFormHandler} type="text" name="name" placeholder="name" id={this.state.id} value={this.state.name}/>
                    <button type="submit">update</button>
                </form>
            </article>
        );
    }
}

export default UpdateContent;