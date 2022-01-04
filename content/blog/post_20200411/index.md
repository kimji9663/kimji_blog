---
title: 인프런 React 강의 - Contact App 예제 03
date: "2020-04-11"
---

## 배열 랜더링하기

1. JavaScript 배열 내장함수 map

```javascript
const numbers = {1,2,3,4,5};
const squared = numbers.map(n => n * n);

console.log(squared); //[1,4,9,16,25]
```
배열 값 1,2,3,4,5 를 담고 있는 number가 있을 때, 이 number안 각각의 배열 값을 map()안의 수식에 대입하여 결과값을 출력한다.
출력값의 변수명은 squared로 정의한다.
예를들어 n에 1을 대입할 경우 (n => 1 * 1)이므로 n = 1, 2를 대입할 경우 (n => 2 * 2)이므로 n = 4 ... 
따라서 결과 값은 [1,4,9,16,25]가 된다.

<br />
<br />

2. 전화번호 목록에 필요한 정보를 담는 틀 역할을 하는 PhoneInfo.js를 생성한다.

```javascript
//PhoneInfo.js
import React, { Component } from 'react';

class PhoneInfo extends Component {
    render() {
        const { name, phone, id } = this.props.info;
        
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;
```

<br />
<br />

3. PhoneInfoList.js도 새로 생성한다. PhoneInfoList.js는 PhoneForm 컨포넌트에서 작성한 이름과 전화번호 값을 ```.map()``` 매서드를 이용해서 목록에 생성해주고 이 때 id 값도 부여해주는 역할을 하는 컨포넌트이다.

```javascript
//PhoneInfoList.js
import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    } //data의 초기값을 정해준다.

    render() {
        const { data } = this.props; //data를 props로 받는다.

        //if (!data) return null; //만약 data 값이 없으면 중단

        const list = data.map(
            info => (<PhoneInfo info={info} key={info.id} />)
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
```

초기 화면에서는 data의 값이 없기 때문에 오류가 뜨게된다. 이때에는 data값이 없는 경우 코드진행을 중단하는 if문을 넣어주거나, 또 다른 방법으로는 data의 초기값을 빈 값(빈 값도 유효)으로 정해주어야한다.



