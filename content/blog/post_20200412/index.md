---
title: 인프런 React 강의 - Contact App 예제 04
date: "2020-04-12"
---

## 배열에서 데이터 제거하기

1. App.js에 데이터를 제거하는 함수 handleRemove를 만든다.
   - information이라는 레퍼런스를 현재 값 this.state로 정의한다.
   - setState를 통해 information 값을 갱신해준다.
     + 현재 값 inforamtion에 filter메소드를 사용하여 info의 id가 현재 파라미터로 받은 id가 아닌 것만 필터링하여 새 상태를 보여주도록 한다.

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
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }
  
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <PhoneInfoList 
          data={this.state.information} //name, phone
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
```

handleRemove 함수를 PhoneInfoList 컨포넌트에 onremove라는 이름의 props로 전달한다.

<br />
<br />

2. PhoneInfoList.js에 props로 정의하는 레퍼런스에 onRemove를 추가한다.

```javascript
//PhoneInfoList.js

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    } //data의 초기값을 정해준다.

    render() {
        const { data, onRemove } = this.props; //data를 props로 받는다. 비구조 할당을 통해 레퍼런스를 만들어 줌

        //if (!data) return null; //만약 data 값이 없으면 중단

        const list = data.map(
            info => (<PhoneInfo onRemove={onRemove} info={info} key={info.id} />)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
```

<br />
<br />

3. PhoneInfo.js에서 handleRemove 함수를 추가한다.
   - info와 onRemove를 props로 불러오고, onRemove의 파라미터(매개변수)로는 info.id를 준다.

```javascript
//PhoneInfo.js

class PhoneInfo extends Component {

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    render() {
        const { name, phone } = this.props.info; //info는 name과 phone
        
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;
```
삭제 button을 생성하고 onClick 이벤트로  handleRemove를 연결해준다.