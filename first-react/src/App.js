import './App.css';
import MyComponent from './components/MyComponent';
// 동일한 파일에서 두개이상 내보냈을때, 그 각각의 값을
// 각각 가져와야 쓸수 있다
import LoginComp from './components/LoginComp';
// import { LoginText } from './components/LoginComp';
import TextComp from './components/TextComp';
import OtherComp from './components/OtherComp';
import StateComp from './components/StateComp';
import EventComp from './components/EventComp';
import RefDomEvent from './components/RefDomEvent';
import MapComp from './components/MapComp';

// 리액트에서 오류가 뜨는 이유
// 1. 존재하지 않는 컴포넌트 출력 (가급적 컴포넌트이름 수정 X)
// 2. {}를 닫지 않았을 경우

function App() {
  return (
    <div style={{padding : 20}}>
      <h1>리액트 프로젝트를 수정해서 사용합니다</h1>
      <hr />

      {/* 컴포넌트의 반복 */}
      <MapComp />

      <RefDomEvent />

      <hr />
      <EventComp />
      <hr />
      <MyComponent />
      {/* 만든 컴포넌트에 속성=값을 통해 값을 props전달 */}
      <LoginComp login={true} name="홍길동" />
      {/* 만든 컴포넌트사이에 글자를 적어서 전달 */}
      {/* props의 children으로 전달 */}
      {/* props값을 전달하지 않으면 undefined로 들어감 */}
      <LoginComp>내용전달</LoginComp>
      {/* 새로운 TextComp를 만들어서 children에 들어간 값을 h1태그에 넣어서 출력 */}
      {/* name값을 받아와서 p태그에 name님을 출력 */}
      <TextComp name="홍길동">반갑습니다</TextComp>
      <TextComp name="성춘향">환영합니다</TextComp>
      <OtherComp name={123} />

      {/* State를 가진 컴포넌트 */}
      <StateComp />
      <StateComp />
    </div>
  );
}

// import를 이용하여 다른 파일에서 값을 가져올때
// export를 이용해서 내보내는 값
export default App;
