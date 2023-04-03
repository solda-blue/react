import CountComp from './components/CountComp';
import CountPropsComp from './components/CountPropsComp';
import LoginComp from './components/LoginComp';
import MemoComp from './components/MemoComp';
import PropsComp from './components/PropsComp';

function App() {
  return (
    <div>
      {/* props를 사용하는 클래스 컴포넌트 */}
      <PropsComp color="red">
        props값을 받아와서 글자색을 바꿉니다
      </PropsComp>
      {/* state를 사용하는 클래스 컴포넌트 
        버튼을 클릭할 때마다 10씩 증가하는 컴포넌트 */}
      <CountComp />
      {/* props, state를 사용하는 클래스 컴포넌트 
        props의 num값을 가져와서 버튼을 클릭할 떄마다 num씩 증가 */}
      <CountPropsComp num={5} />
      <br />

      {/* LoginComp 작성후
        state : name, login : false
        input에서 name 받아오기
        button에서 login true만들기
        h1 => name 출력 > login값이 true일 때 화면에 보여주기
      */}
      <LoginComp />
      {/* 기록장 작성
        state = {
          memoList : [
            {id : 1, memo : "기록", time : new Date()},
            {id : 2, memo : "내용", time : new Date()}
          ]
        }
        state를 이용하여, memoList의 내용을 map을 이용하여
        li 태그에 출력하세요
        input 태그로 입력, btn 클릭 추가, memo 내욜 눌렀을 때 삭제
      */}
      <MemoComp />
    </div>
  );
}

export default App;
