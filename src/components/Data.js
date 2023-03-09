import React, { Component } from 'react';

// react 장점 : 자체 컨포넌트 생성 및 사용 가능
class Data extends Component{
    render() {
        return (
        <div>
            <ul>
                {this.props.data.map((test) => 
                // component의 key 설정
                <li key={test.id}
                onClick={function(e) {
                    e.preventDefault();
                    // 이벤트 안에 변수 파라미터 부모로 전달
                    // 내부에서 props를 변경할 수는 없다 props는 read-only이고 전달만 가능
                    this.props.onChange(test.id);
                }.bind(this)}
                >{test.id}-{test.name}</li>)
                }
            </ul>
        </div>
        );
    }
}

export default Data;