---
title: '[Javascript] 함수와 일급객체'
date: "2021-12-29"
---

## 18장. 함수와 일급 객체
<br>

### 18.1 일급 객체
<br>

다음 조건을 만족하면 **일급객체**이다.

- 변수에 저장할 수 있고 이름없이 몸체만 생성할 수 있다.
- 함수의 매개변수(parameter)에 전달할 수있다.
- 리턴(return) 값으로 사용할 수 있다.

```javascript
// javascript가 실행되는 동안에 함수 리터럴(이름없이 몸체만 있는 함수)이 생성되고 변수에 할당된다.
const increase = function(num) {
    return ++num;
};
const decrease = function(num) {
    return --num;
};

// 함수는 객체에 저장할 수 있다.
const auxs = { increase, decrease };

// 매개변수에 전달할 수 있고, 반환값으로 사용할 수 있다.
function makeCounter(aux){
    let num = 0;

    return function () {
        num = aux(num);
        return num;
    };
};

// 함수는 매개변수에 함수를 전달할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser());
```

<br>
<br>

- - -

<br>
<br>

### 18.2 함수 객체의 프로퍼티
<br>

```javascript
function square(number) {
    return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));
/*
arguments: {value: null, writable: false, enumerable: false, configurable: false}
caller: {value: null, writable: false, enumerable: false, configurable: false}
length: {value: 1, writable: false, enumerable: false, configurable: true}
name: {value: 'square', writable: false, enumerable: false, configurable: true}
prototype: {value: {…}, writable: true, enumerable: false, configurable: false}
[[Prototype]]: Object
*/
console.log(Object.getOwnPropertyDescriptors(square, '__proto__')); // undefined
```

```arguments, caller, length, name, prototype``` <br>
일반 객체에는 없는 함수 객체 고유의 프로퍼티이다.

```__proto__``` <br>
Object.prototype 객체의 프로퍼티이다.  <br>
모든 객체가 상속받아 사용할 수 있는 접근자 프로퍼티이다.

<br>
<br>

#### 18.2.1 arguments 프로퍼티
<br>

자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다. <br> (갯수가 다르더라도 애러가 발생하지 않음) <br>
초과된 인수는 arguments 객체의 프로퍼티로 보관된다.


```javascript
function multiply(x, y){ // 매개변수 개수
    console.log(arguments);
    return x * y;
}

// 인수개수 불일치
console.log(multiply(1)); // NaN
console.log(multiply(1, 2, 3)); // 2
/* arguments 객체의 프로퍼티로 보관됨

Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
0: 1
1: 2
2: 3
*/
```
<br>

인수 개수를 확인해야할 경우에는 arguments 객체를 사용한다. <br>
arguments는 유사 배열 객체이며 이터러블이다.
> 유사 배열 객체란? <br>
> length 프로퍼티를 가진 객체로, for문으로 순회할 수 있다. 

<br>

ES6부터는 유사 배열 객체에 배열 메서드를 사용하기위해 **Rest 파라미터**를 사용한다.
Rest 파라미터는 매개변수 이름앞에 세개의 점 ```...```을 붙여서 정의한다.

```javascript
function sum(...args){
    return args.reduce((prev, current) => prev + current, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));
```

<br>
<br>

#### 18.2.3 length 프로퍼티
<br>

함수를 정의할 때 선언한 매개변수의 개수

<br>
<br>

#### 18.2.4 name 프로퍼티
<br>

name 프로퍼티는 익명 함수 표현식에서 <br>
ES5 버전은 **빈 문자열**을 값으로 갖고,
ES6 버전은 **식별자**를 값으로 갖는다.

> 식별자는 함수이름이 아니고, 함수 객체를 가리키는 것이다.

<br>
<br>

#### 18.2.5 ```__proto__``` 접근자 프로퍼티
모든 객체는 ```[[Prototype]]``` 내부 슬롯을 가지고 있다. <br>
```[[Prototype]]``` 내부 슬롯은 prototype 객체를 가리킨다. <br>
```prototype``` 객체는 ```__proto__```프로퍼티를 사용하여 간접적으로 접근할 수 있다.

```javascript
// 객체 리터럴 방식
const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 prototype 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); // true
```

<br>
<br>

#### 18.2.6 prototype 프로퍼티
<br>

생성자 함수로 호출할 수 있는 함수객체인 constructor만이 소유하는 프로퍼티다.

```javascript

```





