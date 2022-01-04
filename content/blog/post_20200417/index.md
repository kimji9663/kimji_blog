---
title: 인프런 React 강의 - Contact App 예제 07
date: "2020-04-17"
---

## 이름으로 전화번호 찾기

1. state에 keyword 항목을 추가한다. keyword는 검색어의 현재 값을 보여준다.

```javascript
//App.js

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

2. HandleChange 함수를 작성한다. keyword의 값을 사용자가 지정한 값으로 바꿔주는 역할을 한다. 

```javascript
//App.js

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }
```

<br />
<br />

3. 그 다음은 검색창을 만들고, 그 안에 글자를 입력하면 그 입력한 글자와 일치하는 항목이 보이도록 render를 설정한다.
   - ```input```을 추가하여 검색 키워드를 넣을 입력창을 만들고 state의 keyword 값을 value라는 props로 전달해준다. ~이 value는 handleChange 함수가 참조하는 값이다.~ (이 props는 아직 어디에도 참조되지 않았다.)   
   - onChange 이벤트로 handleChange 함수를 실행시키도록 한다.
   - data는 전화번호 리스트를 출력하는 부분이다. 이 data에 ```.filter()```메소드를 이용하여 keyword에 입력된 글자와 name이 일치하는 항목만 반환하는 함수를 넣어 준다.

```javascript
//App.js

render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <input onChange={this.handleChange} value={this.state.keyword} placeholder="검색..." />
        <PhoneInfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1 //indexOf: 주어진 값과 일치하는 값의 인덱스를 반환
          )} //name, phone
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
```

* .indexOf() : 주어진 값과 일치하는 값의 **인덱스**를 반환한다.
* .filter() : 주어진 조건에 해당하는 요소를 **배열**로 반환한다.