import React, { Component } from 'react';
import './App.css';
import Test from './components/Test'
import Data from './components/Data'

// https://www.youtube.com/watch?v=MDGFEV_idSY&list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi&index=29

// class 형태
class App extends Component{
  // 컴포넌트 실행 전에 실행되어 초기화를 담당한다
  constructor(props) {
    super(props);
    this.state={
      mode:'welcome',
      selected_content_id:2,
      msg:{first : 'hello!', again : 'comeback!'},
      subject:{title:'newTitle'},
      contents:[
        {id:1, name:'data1'},
        {id:2, name:'data2'},
        {id:3, name:'data3'}
      ]
    }
  }
  onClickButton = () => { // 함수를 arrow function방식으로 작성
    alert('ok');
  }
  // props나 state값이 변경되면 render함수가 다시 실행
  render() {
    var render = null;
    var name = null;
    if(this.state.mode === 'welcome') {
      render = this.state.msg.first
    } else {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          name = data.name;
          break;
        }
        i ++;
      }
      render = this.state.msg.again
    }
    return (
      <div className = "APP">
        <h1 
          // onClick={function(e){
          //       console.log(e);
          //       // state 값 변경하는 방법
          //       this.setState({mode:'again'});
          //       // 현재 this를 강제로 가져와서 사용하는 방법
          //   }.bind(this)}
          // arrow function을 사용해서 더 간편하게 코드를 작성
          onClick={this.onClickButton}
        >
          {render}
        </h1>
        <Test
          title={this.state.subject.title} 
          onChange={function() {
            // 클릭 이벤트 컴포넌트 내부로 전달
            alert('hello')
            this.setState({mode:'again'});
          }.bind(this)
        }></Test>
        <Data 
        data={this.state.contents}
        onChange={function(id) { // 자식에서 파라미터로 전달 받은 id 값 가져오기
          // 클릭 이벤트 컴포넌트 내부로 state를 전달
          // 이벤트 트리거 시 값을 다시 전달 받음
          this.setState({mode:'again', selected_content_id:id});
          }.bind(this)
        }
        ></Data>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default App;
