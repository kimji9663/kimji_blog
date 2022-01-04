---
title: 함수선언문과 함수표현식
date: "2020-08-08"
---

## 함수선언문
```javascript
function hello() {
    alert('hello!');
}
```

## 함수표현식
```javascript
let hello = function() {
    alert('hello!');
}
```
<br>
<br>

## 함수의 출력
```javascript
...
alert(hello); //함수 코드가 출력됨
```
```javascript
...
alert(hello()); //함수의 실행결과가 출력됨
```
<br>
<br>

## 함수선언문과 함수표현식의 차이
### 함수 생성 시점
- 함수선언문 : 함수선언문이 정의되기 전에 호출 가능
- 함수표현식 : 실행흐름이 해당 함수에 도달했을 때 함수 생성


### 유효범위 (Scope)
- 함수선언문 : 유효범위 안에서만 호출가능
```javascript
'use strict';
// 엄격모드에서

let age = 20;

if (age < 18) {
  function welcome() {
    console.log("안녕!");
  }
} else {
  function welcome() {
    console.log("안녕하세요!");
  }
}

// 유효범위 밖에서 호출 시 애러 출력
welcome(); // Error: welcome is not defined
```

- 함수표현식 : 유효범위 밖에서도 호출가능
```javascript
'use strict';
// 엄격모드에서

let age = 20;
let welcome;

// 조건에 따라 함수를 선언함
if (age < 18) {
  welcome = function() {
    console.log("안녕!");
  }
} else {
  welcome = function() {
    console.log("안녕하세요!");
  }
}

// 유효범위 밖에서 호출해도 값이 출력됨
welcome(); // '안녕하세요!'
```


