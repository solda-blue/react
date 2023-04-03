import React, { Component } from 'react';
import '../assets/css/style.css';
// 컵포넌트에서 원하는 컴포넌트를 들고와서 사용가능
import EventComp from './EventComp';

export class RefDomEvent extends Component {
    constructor (props) {
        super(props);
        // 1. input 태그가 들어갈 공간(변수)
        this.textInput = [];
        // 2. ref 콜백함수를 통해 DOM에 접근
        // 1) ref에 들어갈 함수 작성
        this.setTextInputRef = (element) => {
            // 2) element를 ref를 통해 DOM 가져옴
            // 3) 저장해서 쓰기위해 만든 공간에 할당
            this.textInput.push(element);
        }
        // 16.3 버전 이후 사용가능
        this.myRef = React.createRef();

        // ref 연습
        // ref 콜백함수
        this.inputBackground = null;
        this.setInputBackground = (element) => {
            this.inputBackground = element;
        };
        // createRef 작성
        this.inputBackgroundRef = React.createRef();

        // 직접작성한 컴포넌트도 ref를 통해 들고올 수 있다
        this.myComp = React.createRef();
    }

    // this.textInput에 접근하는 메서드
    textInputEvent = () => {
        if(this.textInput) {
            // ref를 통해서 DOM을 가져와서 그 안에 있는 내용에
            // JS에서 id를 통해 가져온것 처럼 접근할 수 있다
            this.textInput[0].focus();
        }
    }

    // myRef 확인
    myRefEvent = () => {
        if(this.myRef.current) {
            this.myRef.current.focus();
        }
    }
    render() {
        return (
            <div>
                <h1>Ref를 통해 input 가져오기</h1>
                <input className='input'
                    type="text"
                    // 3. ref 속성을 이용해서 setTextInputRef를 호출
                    ref={this.setTextInputRef}
                />
                {/* input 태그가 들고와졌는지 확인 */}
                <button onClick={() => {
                    console.log(this.textInput[0]);
                    console.dir(this.textInput[0]);
                }}>console에 textInput 출력</button>
                <button
                    onClick={this.textInputEvent}
                >
                    버튼을 누르면 input에 포커스
                </button>
                <br />

                <input
                    className='input'
                    type="text"
                    ref={this.myRef}
                />
                <button
                    onClick={() => {
                        console.log(this.myRef.current);
                    }}
                >
                    myRef의 값 확인
                </button>

                <button onClick={this.myRefEvent}>
                    myRef에 포커스
                </button>
                <hr />
                <h3>ref 연습</h3>
                <input
                    type="text"
                    ref={this.setInputBackground}
                />
                <button onClick={() => {
                    this.inputBackground.style.backgroundColor = "red";
                }}>
                    색을 바꿉니다
                </button>
                <br />

                <input
                    type="text"
                    ref={this.inputBackgroundRef}
                />
                <button onClick={() => {this.inputBackgroundRef.current.style.backgroundColor = "red"}}>
                    색을 바꿉니다
                </button>

                <hr />
                <h3>ref를 통해 컴포넌트를 가져올 수 있다</h3>
                <button onClick={() => {
                // 컴포넌트를 ref로 들고오게 되면 그 컴포넌트에 있는
                // 매서드 state, props, refs에 다 접근할 수 있다
                // state와 props의 경우 값을 가져올 수 있고, 메서드의 경우 실행할 수 있다
                    console.log(this.myComp.current);
                    console.dir(this.myComp.current);
                }}>ref로 들고온 myComp확인</button>
                <EventComp ref={this.myComp} />

                <hr />
                <h3>리액트에서 이벤트를 사용할 때 화살표 함수 / 익명함수에 넣어서 사용하는 이유</h3>
                <p>JS에서 addEventListener를 사용할 떄와 동일한 이유</p>
                <p>이벤트 리스너를 사용할 때 함수 이름을 넣어서 실행</p>
                <p>그래서 함수이름() 실행할 결과를 넣어주면 이벤트가 실행 할 때마다 되는 것이 아니라</p>
                <p>화면이 렌더할 때 실행</p>
            </div>
        )
    }
}

export default RefDomEvent
