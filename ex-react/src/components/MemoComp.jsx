import '../assets/css/memoComp.css';
import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';

export class MemoComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memoList : [
                {id : 1, memo : "기록", time : moment().format('HH:mm:ss')},
                {id : 2, memo : "연습", time : moment().format('HH:mm:ss')}
            ],
            inputMemo : "",
        }
        this.id = 3;
    }
    insertMemo = () => {
        const newMemo = this.state.memoList.concat(
            {id : this.id, memo : this.state.inputMemo, time : moment().format("HH:mm:ss")}
        );
        this.setState({memoList : newMemo, inputMemo : ""})
        console.log(this.state.memoList);
        this.id++
    }
    deleteMemo = (val) => {
        const newMemoList = this.state.memoList.filter((memo) => memo.id !== val.id);
        this.setState({memoList : newMemoList})
    }
  render() {
    
    return (
        <div className='container'>
            <br />
            <h3>MemoList</h3>
            <div className='input-box'>
                <input placeholder='메모를 입력하세요'
                    type="text"
                    onChange={(e) => {this.setState({inputMemo : e.target.value})}}
                    value={this.state.inputMemo}
                />
                <button className='btn-insert'
                    onClick={this.insertMemo}
                >추가</button>
            </div>

            <table>
                <thead  className='thead'>
                    <tr>
                        <td>번호</td>
                        <td className='memo'>메모</td>
                        <td>시간</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.memoList.map((val) => 
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.memo}</td>
                            <td>{val.time}</td>
                            <td> 
                                <button className='delBtn'
                                    onClick={() => {this.deleteMemo(val)}}
                                >
                                    x
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
  }
}

export default MemoComp;
