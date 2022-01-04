---
title: '[Javascript] 함수'
date: "2021-12-28"
---

## 12장. 함수
<br>

#### 12.4.1 함수선언문
<br>

함수선언문은 함수 이름을 생략할 수 없다.
```javascript
function(x, y) {
    return x + y;
} 
// SyntaxError: Function statements require a function name
```
<br>

함수선언문은 표현식이 아닌 문이다. 표현식이 아닌 문은 변수에 할당할 수 없다.

```javascript
// 예제의 함수선언문이 변수에 할당되는 것 처럼 보이는 이유는 자바스크립트 엔진이 코드의 문맥에 따라 해석을 달리하는 경우가 있기 때문인데 이 경우는 자바스크립트 엔진이 암묵적으로 add2라는 식별자를 생성했기 때문에 호출이 가능하다.
var add = function foo(x, y){
    return x + y;
}
console.log(add(2, 5)); // 7

// 함수 이름은 함수 몸체 내에서만 유효한 식별자이다.
console.log(foo(2, 5)); // ReferenceError: foo is not defined
```
```javascript
// 이름이 있는 함수 리터럴을 단독으로 사용하면 자바스크립트 엔진은 이것을 함수선언문으로 해석한다. 이 경우도 암묵적으로 foo라는 식별자를 생성했기 때문에 호출이 가능하다.
function foo() {console.log('foo');}
foo(); // foo
```
<br>

> **식별자** 와 **이름**은 다른 개념임.<br>
> 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 **식별자**로 호출한다.

<br>
<br>

- - - 

<br>
<br>

#### 12.4.2 함수표현식
<br>

함수표현식은 생성한 함수객체를 변수에 할당하는 함수 정의 방식이다.
```javascript
var add = fuction(x, y){
    return x + y;
};
console.log(add(2, 5);) // 7
``` 
<br>
<br>

- - - 

<br>
<br>

#### 12.4.3 함수 생성 시점과 함수 호이스팅
<br>

함수선언문으로 정의한 함수는 함수선언문 이전에 호출할 수 있다. <br>
함수표현식으로 정의한 함수는 함수표현식 이전에 호출할 수 없다. <br>

**왜냐하면, 함수의 생성 시점이 다르기 때문! 이것이 호이스팅이다.**

함수표현식으로 정의한 함수는 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생한다.

```javascript
// 함수 호출
console.log(add(2, 5));
console.log(sub(2, 5));

// 변수 호이스팅이 발생하여 sub변수는 호출할 수 있다. 그러나 함수는 호출할 수 없다.
console.log(sub); // undifined

// 함수선언문
function add(x, y){
    return x + y;
}

// 함수표현식
var sub = function(x, y){
    return x - y;
}
```
<br>
<br>

- - - 

<br>
<br>

#### 12.4.4 Function 생성자 함수
<br>

자바스크립트가 기본으로 제공하는 빌트인 함수. <br>
생성자 함수로 함수를 생성하는 방법은 일반적이지 않으며 바람직하지 않음. <br>
클로저를 생성하지 않으며, 함수선언문이나 함수표현식으로 생성한 함수와 동일하게 동작하지 않음.
```javascript
var add = new Function('x', 'y', 'return x + y');
console.log(add(2, 5));
```

<br>
<br>

- - - 

<br>
<br>

#### 12.4.5 화살표 함수
<br>

기존 함수보다 표현도 간략하며 내부 동작 또한 간락화되어 있다. <br>
생성자 함수로 호출할 수 없다. <br>
인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고, 프로토타입도 생성하지 않는다.
```javascript
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7

// 프로토타입이 없다.
add.hasOwnProperty('prototype'); // false
```
<br>

중복된 매개변수를 선언할 수 없다.
```javascript
const add = (a, a) => a + a; 
// SyntaxError: Duplicate parameter name not allowed in this context
```

함수 자체의 this 바인딩을 갖지 않기 때문에 this를 교체할 수 없고, 언제나 가장 가까운 상위 스코프(화살표 함수가 아닌)의 this 바인딩을 참조한다.
```javascript
// increase의 this가 가리키는 것은 counter가 아닌 전역 객체이다.
const counter = {
    num: 1,
    increase: () => ++this.num
};
console.log(counter.increase()); // NaN

// 따라서 위와 같이 화살표 함수로 메서드를 정의하는 것은 바람직하지 않다.

// 스코프 내의 this를 바인딩하고 싶다면 ES6 메서드 축약 표현으로 작성해야 한다.
const person = {
    name: 'Lee',
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
};

person.sayHi(); // Hi Lee
```
