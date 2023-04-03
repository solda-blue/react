import React, { Component } from 'react'

export class LoginComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'test',
            login : false
        }
    };

    inputChange = (e) => {
        this.setState({name : e.target.value});
    }

    loginMethod = () => {
        this.setState({login : !this.state.login});
    }

  render() {
    return (
      <div>
        {/* className = {login ? "on" : "off" } 클래스 네임을 이용해서 디자인추가 */}
        {this.state.login ? (<h1>{this.state.name}님 로그인 되었습니다</h1>) : (
            <div>
                <p>이름을 입력하세요</p>
                <input type="text" onChange={this.inputChange} />
                <button onClick={this.loginMethod}>클릭</button>
            </div>
        )}
      </div>
    )
  }
}

export default LoginComp
