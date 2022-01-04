---
title: 인프런 React 강의 - Contact App 예제 02
date: "2020-04-10"
---

## 배열에 데이터 삽입하기

1. PhonForm.js 안에 Submit 버튼 추가해준다.

```javascript
//PhoneForm.js
...

    render() {
        return (
            //단일 태그로 감싸주어야 함. form이던 div던 상관없이.
            <form onSubmit={this.handleSubmit}>
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
                <button type="submit">등록</button>
                <br />
                <br />
                <br />
                {this.state.name}
                <br />
                {this.state.phone}
            </form>
        );
    }

...
```

<br />
<br />

2. Submit 버튼의 기본 이벤트를 막는다.     

handleSubmit 이라는 함수를 새로 만들고  ```e.preventDefault()```를 넣어줌으로써 클릭 시 값이 전송되고 페이지가 reroad되는 이벤트 발생을 막을 수 있다.     
이벤트를 막는 이유는 React는 싱글 페이지 앱이기 때문에 페이지 이동을 할 필요가 없기 때문이다.     
단, handleSubmit 이벤트는 버튼에 주는 것이 아니라  ```form``` 태그에 넣어주어야 한다. 그 이유는 ```input```과 ```submit```태그를 모두 감싸고 있는 ```form```에서 이벤트 값을 전송해야 하위에 있는  ```input```과 ```submit```의 상태를 반영할 수 있기 때문이다.

```javascript
//PhoneForm.js
...

    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.myOnCreate({
        //     name: this.state.name,
        //     phone: this.state.phone,
        // });
        this.props.onCreate(this.state);// 위와 동일, 더 간결하다.
        this.setState({
            name: '',
            phone: '',
        })
    }

...
```
<br />
<br />

3. PhoneForm.js에서 이름과 전화번호 값을 입력 시 목록에 추가되도록 하기 위해 App.js에다가 새 전화번호를 생성하는 handleCreate 함수를 만든다. 그리고 phoneForm 컨포넌트에 onCreate를 props로 주고 onCreate는 handleCreate 함수를 실행한다.

```javascript
//App.js
class App extends Component {

  id = 0;// 초기 값

  state = {
    information: [],
  }

  handleCreate = (data) => { //data = this.state
    //information: this.state.information.concat(data) 
    const { information } = this.state; //위 문장을 비구조화 할당 문법을 사용하여 간결하게 바꿀 수 있다.
    this.setState({
        information: information.concat({ ...data, id: this.id++ })// 추가할 때마다 1씩 증가
      //information: information.concat({ name: data.name, phone: data.phone, id: this.id++ })
      //information: information.concat({ Object.assign({}, data, { id: this.id++ }) })
    });
    //console.log(data);
  }
  
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
  ```

handleCreate 함수는 data를 인수로 받는다. 이 data는 this.state를 반영하는데, 이 this.state값은 PhoneForm에서 이름과 전화번호를 입력하고 등록 버튼을 눌렀을 때 생성된다. 여기에 추가로 id를 생성하여 새 전화번호를 생성할 때마다 각각의 고유번호를 갖도록 한다. 이렇게 얻어진 번호가 생성된 새 전화번호를 state 안에 있는 information에 전달한다.
이 때 concat() 매서드를 쓰는 이유는 information 원래 값의 불변성을 유지하기 위함이다.

