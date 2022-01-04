---
title: 인프런 React 강의 - Contact App 예제 05
date: "2020-04-15"
---

## 배열에서 데이터 수정하기

1. App.js에 handleUpdate 함수를 추가한다.
   - 내용을 수정하려면 기존 값을 알아야 하므로, 우리가 변경할 값 name과 phone의 값과 각 항목의 고유 값 id를 handleUpdate의 파라미터로 전달해주어야 한다. name과 phone은 PhoneInfo.js에서 info라는 props로 PhoneInfoList.js에 전달되었다. PhoneInfoList.js에서 info는 data안에 포함되는데, 이 때 ```.map()```메서드를 통해 불변성을 유지하도록하여 기존의 data값은 그대로 있고, 새롭게 들어온 data값을 list라는 변수로 정의해준다. 
   현재 필요한 값은 기존의 값이므로 handleUpdate에서 전달받을 파라미터는 id와 data가 된다.

```javascript
//PhoneInfo.js

const { name, phone } = this.props.info;
```

```javascript
//PhoneInfoList.js

const list = data.map(
    info => (<PhoneInfo onRemove={onRemove} info={info} key={info.id} />)
);
```

```javascript
handleUpdate = (id, data) => {}
```

<br />
<br />

2. handleUpdate 안에 비구조화 할당을 통해 information에 대한 참조(레퍼런스)를 가져온다. 그리고 setState로 state를 변경해주면된다.
   - state의 information값을 ```.map()```메서드를 통해 새로운 값을 가져올 수 있다. map의 파라미터로 info를 주고(파라미터로 받은 값 info를 변경하겠다는 의미) 함수를 넣어준다.
    + 함수 해석 : 
    만약 info의 id값이 현재 파라미터로 받아온 id값과 일치하면, id값은 그대로 가져오고 data는 새로운 값을 넣어준다. 만약 일치하지 않으면, 기존 info값을 그대로 출력한다.
   - handleUpdate 함수를 PhoneInfoList 컴포넌트에 onUpdate라는 이름의 props로 넣어준다.

```javascript
//App.js

class App extends Component {

  id = 0;

  state = {
    information: [], //name, phone
  }

  handleCreate = (data) => {
    ...
  }

  handleRemove = (id) => {
    ...
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if (info.id === id) {
            return {
              id,
              ...data, //name: data.name, phone: data.phone,
            }
          }
          return info;
        }
      )
    })
  }
  
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <PhoneInfoList 
          data={this.state.information} //name, phone
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
```

<br />
<br />

3. PhoneInfoList.js에서도 onUpdate를 똑같이 props로 전달해준다. 전달한 이 props는 PhoneInfo.js에서 사용한다.

```javascript
//PhoneInfoList.js

const list = data.map(
    info => (<PhoneInfo onRemove={onRemove} onUpdate={onUpdate} info={info} key={info.id} />)
);
```

<br />
<br />

4. PhoneInfo.js에서 수정 버튼을 클릭하면 내용을 수정할 수 있는 상태가 되는 수정모드를 만들어주어야 한다. 
   - 먼저 현재상태를 보여주는 state를 정의한다. 

```javascript
//PhoneInfo.js

state = {
    editing: false,
}
```

   - handleToggleEdit함수를 만들어주고 함수가 실행되면 editing상태가 false에서 true로, true에서 false로 반전될 수 있도록 setState를 설정한다.

```javascript
//PhoneInfo.js

handleToggleEdit = () => {
    this.setState({
        editing: !this.state.editing,
    })
}
```

   - render 하위에 비구조화 할당을 통해 editing에 대한 참조(레퍼런스)를 만들어준다. 그리고 return에서 삼항조건연산자를 이용하여 표현식을 작성한다.
     + 조건이 true일 경우 : ```input```형식의 입력창을 출력
     + 조건이 false일 경우 : 일반 텍스트형식으로 출력

```javascript
//PhoneInfo.js

{
    editing ? ( //true 이면
        <Fragment>
            <div><input /></div>
            <div><input /></div>
        </Fragment>
    ) : ( //false 이면
        <Fragment>
            <div><b>{name}</b></div>
            <div>{phone}</div>
        </Fragment>
    )
}
```

* Fragment 기능을 사용하려면 상단에 Fragment를 추가해주어야 한다.

```javascript
import React, { Component, Fragment } from 'react';
```

   - 수정버튼에 onClick이벤트로 handleToggleEdit함수를 실행시켜주고, 여기에도 삼항조건연산자를 이용하여 조건에 따라 버튼 이름이 바뀌도록 표현식을 작성한다.
     + 조건이 true일 경우 : '적용' 텍스트를 표시
     + 조건이 false일 경우 : '수정' 텍스트 표시

```javascript
//PhoneInfo.js

<button onClick={this.handleToggleEdit}>
    { editing ? '적용' : '수정' }
</button>
```

<br />
<br />

5. 수정모드가 완성되었으면 이제 실제로 내용을 수정할 수 있도록 만들어주자.
   - 먼저 state에 name과 phone을 추가하여 현재상태를 보여준다.
   - handleChange함수를 이용하여 input에 작성된 내용이 state에 반영되도록 한다.
   - input에 onChange이벤트를 추가하여 handleChange함수를 실행시킨다.
   - handleToggleEdit함수에서 editing모드일 때와 아닐 때의 데이터처리를 if문으로 작성한다.
     + 현재 true(클릭 시 false)일 때 : onUpdate함수 호출
     + 현재 false(클릭 시 true)일 때 : 기존내용 불러오기

```javascript
//PhoneInfo.js
class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: ''
    }

    handleRemove = () => {
        ...
    }
    
    handleToggleEdit = () => {
        const { info, onUpdate } = this.props;
        if (this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        } else {
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        this.setState({
            editing: !this.state.editing, //현재 값을 반전시킨다. true <-> false
        })
    }

    handleChange = (e) => {
        this.state({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, phone } = this.props.info; //info는 name과 phone
        const { editing } = this.state;
        
        const style = {
            ...
        };

        return (
            <div style={style}>
                {
                    editing ? ( //true 이면
                        <Fragment>
                            <div><input name="name" onChange={this.handleChange} value={this.state.name} /></div>
                            <div><input name="phone" onChange={this.handleChange} value={this.state.phone} /></div>
                        </Fragment>
                    ) : ( //false 이면
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? '적용' : '수정' }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;
```
