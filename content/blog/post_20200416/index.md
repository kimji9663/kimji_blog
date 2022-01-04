---
title: 인프런 React 강의 - Contact App 예제 06
date: "2020-04-16"
---

## shouldComponentUpdate를 통한 최적화, 불변성

1. state에 기본 값을 세팅해준 다음 keyword 항목을 추가한다.

```javascript
state = {
    information: [
        {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0001'
        },
        {
        id: 1,
        name: '김00',
        phone: '010-0000-0002'
        },
        {
        id: 2,
        name: '이∆∆',
        phone: '010-0000-0003'
        }
    ], //name, phone
    keyword: '',
}
```

<br />
<br />

2. PhoneInfo.js와 phoneInfoList.js에 각각 ```console.log()```를 넣어주고 어떤 경우에 화면이 render함수가 호출되는지 확인한다. 확인 결과, 하나의 항목을 수정했을 때에도 모든 항목이 render되는 것을 볼 수 있다. 수정한 항목만 업데이트 되고 변화가 없는 나머지 항목들은 업데이트 하지 않도록 하는 것이 shouldComponentUpdate를 사용하는 이유이다.

```javascript
//PhoneInfo.js

console.log(name);
```

```javascript
//phoneInfoList.js

console.log('rendering list');
```

<br />
<br />

3. shouldComponentUpdate 함수를 만들고 현재 state가 새로운 값과 일치하지 않을때만 true, 즉 랜더링되도록 한다.

```javascript
//PhoneInfo.js

shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) { //state값이 달라졌을 때만 true
        return true;
    }
    return this.props.info !== nextProps.info; //props값이 달라졌을 때만 true
}
```
