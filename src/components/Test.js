import React, { Component } from 'react';

// react 장점 : 자체 컨포넌트 생성 및 사용 가능
class Test extends Component{
    render() {
        return (
            <header className="App-header">
                {/* props를 통해 component의 요소를 가져올 수 있음 */}
                <h1>
                    <a href="/" 
                    onClick={function(e) {
                        e.preventDefault();
                        this.props.onChange();
                    }.bind(this)}
                    >
                        {this.props.title}
                    </a>
                </h1>
            </header>
        );
    }
}

export default Test;