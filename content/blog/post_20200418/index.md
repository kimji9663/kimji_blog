---
title: 인프런 React 강의 - Contact App 예제 08
date: "2020-04-18"
---

## Ref를 통하여 DOM에 직접 접근하기

1. 이름과 전화번호 입력창에 내용을 넣고 등록 버튼을 클릭하면 목록에 추가가 되고 입력창은 다시 비워지지만 포커스는 여전히 전화번호 입력창에 있는 것을 볼 수 있다. 등록이 완료되면 포커스가 시작점인 이름으로 이동하게 하려면 DOM에 직접 접근하여야 한다. Ref를 사용하면 DOM에 접근할 수 있는데 방법은 두가지가 있다. 첫번째 방법은 함수를 사용하는 방법이다. 접근하고자 하는 요소에 ref라는 콜백 함수를 props로 전달해주는 것이다.

```javascript
//PhoneForm.js

<input 
    placeholder="이름" 
    name="name" 
    onChange={this.handleChange} 
    value={this.state.name}
    ref={ref => this.input = ref}
/>
```

<br />
<br />

2. 컨포넌트 내부 상단에 ```input = null```이라는 값을 주고, 그 다음에는 등록 버튼을 클릭 했을 때 동작하는 handleSubmit 함수에 ```.focus()``` 메서드를 준다. 이렇게 하면 등록버튼을 눌렀을 때 포커스가 이름 칸으로 이동된다.

```javascript
this.input.focus();
```

<br />
<br />

3. 두번째 방법으로는 createRef라는 기능을 사용햐는 것이다. 이것은 React에 내장되어 있는 함수로 위 방법보다 적은 코드로 쉽게 작성할 수 있다.(React v16.3 이상)
접근하고자 하는 요소에 ref라는 props를 넣어준다.

```javascript
<input 
    placeholder="이름" 
    name="name" 
    onChange={this.handleChange} 
    value={this.state.name}
    ref={this.input}
/>
```

<br />
<br />

4. 컨포넌트 내부 상단에 ```input = React.createRef();```를 넣어주고 handleSubmit 함수에 ```.focus()```메서드를 주되 ```current```를 함께 써주어야 한다. 이렇게 하면 등록버튼을 눌렀을 때 포커스가 이름 칸으로 이동된다.

```javascript
this.input.current.focus();
```