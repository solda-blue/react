import React, { Component } from 'react'

export class MapComp extends Component {
    constructor(props) {
        super(props);
        // this.state에 들어가 있는 내용만 this.setState를 사용할 수 있다
        this.state = {
            names : ['JavaScript', 'React', 'Vue'],
            students : [
                {id : 1, name : '홍길동'}, 
                {id : 2, name : '성춘향'}, 
                {id : 3, name : 'John'}, 
            ],
            inputText : "" // onChange를 이용해서 input의 value값 가져옴
        };
        // 수정 될 때 마다 값이 화면에 표현되지 않고, 값을 저장하고 싶을 때 
        this.id = 4;
    }
    insertStudent = () => {
        console.log(this.state.inputText);
        // 리액트는 state값이 바뀔 때 화면 업데이트
        // 1. state.students에 배열의 요소를 추가하는 방법 => 1) push 2) concat
        // let newStudent = {id : this.state.students.length + 1, name : this.state.inputText};
        // push를 이용해서 직접접근해서 수정할 수 있지만 화면에 바로 업데이트 되지않는다
        // button의 click이벤트 발생시 업데이트 안됨 / onChange => 이벤트 발생시 업데이트 됨
        // push는 잘 사용하지 않는다
        // this.state.students.push(this.setState(students => newStudent));

        // concat을 이용해서 새로운 배열을 만든 후
        // setState를 이용하여 추가
        const newStudent = this.state.students.concat(
            {id : this.id, name : this.state.inputText}
        );
        this.setState({students : newStudent});
        // input 태그에 value={} state 값으로 연결하면 
        // setState를 통해서 값을 수정할 수 있다
        this.setState({inputText : ''});
        // 아래와 같이 함께 적어도 된다
        // this.setState({students : newStudent, inputText : ''});
        // 속성값에 직접접근해서 1증가
        console.log(this.state.students);
        this.id++
    }
    deleteStudent = (val) => {
        // 1. 배열에서 값을 제거하는 방법
        // 1) pop, splice .. > 원래값에 제거 x
        // 2) 값을 제거하고 새로운 배열 생성 : filter
        // filter(걸러냄)
        // : (value) => return 참 일때 value값을 return 배열에 추가
        const newStudents = this.state.students.filter((student) => student.id !== val.id);
        console.log(newStudents);
        this.setState({students : newStudents})
    }
    render() {
        // 배열의 map 메소드 확인
        const arr = [1, 2, 3, 4];
        // map 메서드의 특징
        // .map((value, index) => {return 값});
        // map에 함수를 넣어서 그 함수의 return 값으로 
        // 새로운 배열 작성
        // => return 값에 태그나 컴포넌트를 넣어서 반복가능
        const arrMap = arr.map((num, idx) => <span key={idx}>{num * 2}</span>);
        return (
            <div>
                <h3>배열로 바로 출력</h3>
                <p>{arr}</p>
                {arrMap}
                <h3>map 으로 만든 배열을 화면에 바로 출력가능</h3>
                {arr.map((num, idx) => <span key={idx}>{num*3}</span>)}
                {/* state 값을 가져와서 출력 */}
                <ul>
                    {this.state.names.map((val, idx) =><li
                        style={ {listStyle : 'none'} }
                        key={idx}><p>{val}</p></li>)
                    }
                </ul>
                {/* input 태그를 이용해서 값을 추가하고 state에 추가
                    1. input의 값을 저장할 state.inputText 변수작성
                    2. onchange를 통해서 값을 받아옴(state.inputTxt)
                    3. 버튼을 눌렀을 때 state.students에 추가
                */}
                <input
                    type="text" placeholder='inputText'
                    // inputText에 앖을 저장
                    onChange={(e) => {this.setState({inputText : e.target.value})}}
                    value={this.state.inputText}
                />
                <button
                    // 버튼을 클릭했을 때 state.students에 {id : 4, name: ""} 추가 
                    onClick={this.insertStudent}
                >
                    이름 추가
                </button>

                {/* table에 배열의 객체 값 출력 */}
                <table>
                    <thead>
                        <tr>
                            <td>아이디</td>
                            <td>이름</td>
                            <td>삭제</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((val) => 
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>
                                    <button
                                        // 이름을 눌렀을 때 이름을 가진 객체를 배열에서 삭제
                                        // 매개변수를 가지려면 외부에 작성한 함수를 화살표 함수안에 담는다
                                        onClick={() => {this.deleteStudent(val)}}
                                    >x</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <hr />
                <table>
                    <tbody>
                {
                    // 컴포넌트의 props 값을 이용해서 값 전달 가능
                    this.state.students.map(students => 
                        <TableComp
                            key={students.id}
                            id={students.id}
                            name={students.name}
                        />)
                }
                    </tbody>
                </table>
            </div>
        )
    }
}

class TableComp extends Component {
    render () {
        const { id, name } = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
            </tr>
        )
    }
}

export default MapComp;