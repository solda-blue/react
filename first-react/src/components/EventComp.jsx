import React, { Component } from 'react'

export class EventComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '홍길동',
            address : '부산',
            toggle : true,
            color : '',
            input : '',
            inputNickname : '',
            inputBook : '',
        }
        // 메소드에 .bind로 묶어서 this 전달
        this.printEvent1 = this.printEvent.bind(this);
        this.getAddress = this.getAddress.bind(this);
        this.setToggle = this.setToggle.bind(this);
        this.chageColor = this.chageColor.bind(this);
    }

    // 이벤트 안에서 작성한 함수 그대로 들고와서 사용할 수 있다
    // render에서 사용한 값을 쓸 수 없다
    // this.state.name을 통해서 접근
    // 메소드에 바로 bind를 통해서 this를 묶어줄 수 없다
    // 메소드만 만들어서 바로 사용하면 this를 찾지 못해서 오류
    // constructor에서 bind로 묶어서 사용
    printEvent() {
        console.log('이벤트 출력');
        console.log(this.state.name);
    };
    getAddress() {
        let address = this.state.address;
        console.log(address);
        console.log('이벤트 완료');
    };

    // this.setState 사용해서 값을 수정
    setToggle() {
        this.setState({toggle : !this.state.toggle});
    };

    chageColor(e) {
        if(e.type === 'mouseenter') {
            this.setState({color : 'red'});
        } else if(e.type === 'mouseleave') {
            this.setState({color : ''});
        }
    };
    // 화살표 함수를 가지는 메서드
    // 메서드 이름에 화살표 함수 작성
    arrowPrint = () => {
        console.log('이벤트 실행');
        console.log(this.state.name);
    };

    changeName = () => {
        this.setState(state => ({name : '성춘향'}));
    };

    // onChage 공용메서드
    onInputChage = (e) => {
        // inputNiecName을 그대로 사용 > inputNickname에만 값이 들어감
        // e.target.name : name속성값을 가져와서 사용
        // 변수 값을 사용하려면 [] 사용가능
        this.setState({[e.target.name] : e.target.value});
    };

    render() {
        // render안에서 this = EventComp => ex) const {} = this.state;
        // this.state는 construct의 속성값
        const { name } = this.state;
        const printEvent2 = this.printEvent1;
        return (
            // 이벤트를 위한 버튼 작성
            <div>
            <h3>버튼 클릭시 console.log('이벤트 실행');</h3>
            <button
                // 실행할 함수 내용이 짧을 때 (화살표 함수를 이용하여 바로작성)
                // 이벤트 객체 사용가능
                // this를 사용했을 때 자기자신 클래스 컴포넌트 호출 => props와 state 호출가능
                onClick={(e) => {console.log(e, this);}}
            >
                화살표함수를 사용해서 이벤트 실행
            </button>
            <button
                // 익명함수를 사용해서 이벤트 객체 사용가능
                // this를 사용하면 연결된 객체가 없으므로 undefined 츨력
                // html 파일에서 js익명함수 들고오면 window객체로 들고오지만
                // react에서 익명함수를 들고오면 this의 값이 undefined이다
                // react에서 익명함수를 사용하려면 함수의 this값을 연결
                // this값을 연결하기 위해 익명함수 뒤에 .bind()
                // return 안에서 .bind(this) 불러오는 this = EventComp
                onClick={function(e) {
                    console.log(e, this);
                }.bind(this)}
            >
                익명함수를 사용해서 이벤트 실행
            </button>

            <h3>이벤트의 함수(메서드)를 따로 작성하는 방법</h3>
            <p>
                버튼을 눌렀을 때 console.log(이벤트 출력)
                this.state.name '홍길동' 작성후 출력
            </p>
            <button
                onClick={function() {
                    console.log('이벤트 출력');
                    // name값을 이미 render에서 this.state값으로 가져와서
                    // this를 연결하지 않아도 사용가능
                    console.log(name);
                }
            }
            >
                메소드를 사용한 이벤트
            </button>
            <button
                // 작성한 메소드를 들고올 때 this.로 가능
                onClick={printEvent2}
            >
                메소드를 사용한 이벤트
            </button>
            <button
                // 작성한 메소드를 들고올 때 this.로 가능
                onClick={this.printEvent1}
            >
                메소드를 사용한 이벤트
            </button>
            <br />
            {/* 이벤트 : 메소드 만들기 실습 */}
            <p>
                버튼을 누르면 state의 address 부산을 출력하고
                console.log를 이용하여 이벤트 완료라고 
            </p>
            <button onClick={this.getAddress}>
                이벤트
            </button>

            {/* this.setState를 사용하는 메서드 */}
            <button onClick={function() {
                this.setState({toggle : !this.state.toggle});
            }.bind(this)}>
                {this.state.toggle ? 'on' : 'off'}
            </button>
            <button onClick={this.setToggle}>
                {this.state.toggle ? 'on' : 'off'}
            </button>
            <br />
            {/* state의 color : "" 추가 후 
                changeColor 메서드를 만들고, 메서드에서 this.state.color값을 "red"로 수정
            */}
            <p style = {{color : this.state.color}}
                onMouseEnter={this.chageColor}
            >
                p태그에 마우스를 올리면 글자를 빨간색으로 바꾸기
            </p>
            {/* 화살표 함수로 메서드 만들어서 사용하기 */}
            <button onClick={() => {
                console.log('이벤트 실행');
                console.log(this.state.name);
            }}>
                화살표 함수를 사용한 이벤트
            </button>
            <button onClick={this.arrowPrint}>
                화살표 함수를 사용한 이벤트
            </button>
            {/* 화살표 함수를 이용해서 버튼을 클릭했을 때 name값을 성춘향으로 바꾸기 */}
            <button onClick={this.changeName}>
                {name}
            </button>
            {/* form - input 태그의 값 사용하기 */}
            <h3>input태그에서 값을 가져올 state를 onChange를 사용해서 수정</h3>
            <p>{this.state.input}</p>
            <input type="text" 
                onChange={(e) => {
                    console.log(e.target.value);
                    // setState는 비동기로 움직임으로
                    // 바로 state에 접근해서 값을 출력하면 이전 값이 나온다
                    this.setState({input : e.target.value});
                    console.log('input', this.state.input);
                }}/>

            {/* change 공용함수 만들기 => 사용하지 않아도 상관x */}
            <h3>input 2개에서 값 받아오기</h3>
            <p>inputNickname의 값 : {this.state.inputNickname}</p>
            <input 
                name='inputNickname' // state의 속성이름과 동일
                type="text"
                onChange={this.onInputChage}
            />
            <p>inputBook의 값 : {this.state.inputBook}</p>
            <input
                name='inputBook'
                type="text"
                onChange={this.onInputChage}
            />
            </div>
        )
    }
}

export default EventComp
