---
title: 인프런 React 강의 - Contact App 예제 01
date: "2020-04-09"
---

## Input 상태 관리하기

1. 이름과 전화번호를 입력하는 컴포넌트 PhoneForm.js 생성한다.

<br />

2. Input의 상태관리를 하는 데 필요한 요소들을 넣어준다.
    - state : 현재 상태를 나타냄
    - setState : 상태값을 바꿔줌
    - onChange : 값이 바뀔 때마다 동작하는 이벤트 함수

```javascript
//PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: '', // = value={this.state.name}
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            // onChange가 실행되는 e.target은 input이므로, 그 하위 값 value를 넣어 줌 
            // name: e.target.value,
            // phone: e.target.value,
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            //단일 태그로 감싸주어야 함. form이던 div던 상관없이.
            <form>
                {/* input이 여러개 일 때에는 name값을 지정해서 handleChange 값을 변경한다. */}
                <input 
                    placeholder="이름" 
                    name="name" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                />
                <br />
                <input 
                    placeholder="전화번호" 
                    name="phone" 
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <br />
                {this.state.name}
                <br />
                {this.state.phone}
            </form>
        );
    }
}

export default PhoneForm;
```
<br />
<br />

3. Input이 여러개일 경우에는 name 값을 부여하여야 한다.   
 ```javascript
 <input name="name" />
 <input name="phone" />
 ```     
onChange 이벤트가 실행될 때, 정의된 함수 handleChange 내에서 name의 속성값을 지정함으로써 각각의 상태관리가 가능하다.

<br />
<br />

4. App.js에 PhoneForm.js 컨포넌트를 불러온다.

```javascript
//App.js
import PhoneForm from './component/PhoneForm';

class App extends Component {
  render() {
    return (
      <div>
        <PhoneForm></PhoneForm>
      </div>
    );
  }
}

export default App;
```
