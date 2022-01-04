---
title: SCSS 정리
date: "2020-04-01"
---

## SCSS란?

**SASS + CSS (Sassy CSS)**
SASS는 CSS 전처리기(preprocessor)이며 SCSS는 SASS의 가독성과 편의성을 높이기위해 기존의 친숙한 CSS문법과 거의 유사하게 만든 문법이다. 
CSS 전처리기는 CSS가 동작하기 전에 사용하는 기능이며, SASS는 그 중 가장 먼저 만들어졌으며 현재 가장 널리 쓰이고 있다. 그 밖에는 Less, Stylus 등이 있다.
SCSS문법으로 작성하고 이를 웹에서 동작 가능한 표준 CSS로 컴파일하여 사용한다.

<br />
<br />

## SCSS를 사용하는 이유

기존에 CSS에서는 지원하지 않는 Nesting, 변수, 조건문, 반복문, 함수 등을 사용하여 CSS를 좀 더 구조적, 논리적으로 작성하기가 용이해진다. 이에 따라 코드 작성 시 생산성과 관리 시 효율성이 높아진다.

<br />
<br />

## SCSS의 문법

### 중첩(Nesting)
선택자의 구문 ```{}``` 안에 하위 선택자의 구문을 중첩하여 넣는다.

```css
.section {
  width: 100%;
}
.section .list {
  padding: 20px;
}
.section .list li {
  float: left;
}
```

```scss
.section {
  width: 100%;
  .list {
    padding: 20px;
    li {
      float: left;
    }
  }
}
```
<br />

### 참조
동일한 위치의 선택자의 전체 또는 일부를 참조할 수 있다.
중첩 안에서 ```&```를 앞에 넣으면 상위 선택자가 ```&```의 자리에 치환된다.

```css
.btn {
  position: absolute;
}
.btn.active {
  color: red;
}
.list li:last-child {
  margin-right: 0;
}
.fs-small {
  font-size: 12px;
}
.fs-medium {
  font-size: 14px;
}
.fs-large {
  font-size: 16px;
}
```

```scss
.btn {
  position: absolute;
  &.active {
    color: red;
  }
}    
.list {
  li {
    &:last-child {
      margin-right: 0;
    }
  }
}    
.fs {
  &-small { font-size: 12px; }
  &-medium { font-size: 14px; }
  &-large { font-size: 16px; }
}
```
<br />

### 중첩 벗어나기
중첩 안에 있지만 상위 선택자의 간섭없이 사용하고자 할 경우 ```@at-root```를 앞에 넣어준다.

```css
.list li {
  width: 100px;
  height: 50px;
}
.box {
  width: 100px;
  height: 50px;
}
```

```scss
.list {
  $w: 100px;
  $h: 50px;
  li {
    width: $w;
    height: $h;
  }
  @at-root .box {
    width: $w;
    height: $h;
  }
}
```
특정 변수를 사용해야 할 때, 범위밖에서는 변수를 사용 할 수 없으므로 상위 선택자에 종속되지 않고 변수만 참조하고자 할 때 사용된다.

<br />

### 속성 중첩
동일한 네임 스페이스를 가지는 속성들의 중복 코드를 줄이고 관련성을 높인다.

```css
.box {
  font-weight: bold;
  font-size: 10px;
  font-family: sans-serif;
  background-color: #3c3e3d;
  background-image: url(../images/bg-grid01.png);
  background-size: 35px auto;
  background-attachment: fixed;
}
```

```scss
.box {
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  }
  background: {
    color: #3c3e3d;
    image: url(../images/bg-grid01.png);
    size: 35px auto;
    attachment: fixed;
  }
} 
```
<br />

### 변수(Variables)
빈번하게 사용되는 속성 값에 ```$```를 붙여 변수로 지정한다.
한번만 지정해놓으면 **하위 구문에서** 자유롭게 불러올 수 있고 재할당도 가능하다.

```css
.box {
  width: 200px;
  margin-left: 200px;
  background: #e96900 url("/assets/images/bg.jpg");
}
/* '200px'속성이 반복적으로 쓰이고 있다. */
```

```scss
$width: 200px; //변수로 선언
$blue: #0000FF;
$color-primary: $blue; //변수를 재할당
.box {
  width: $width;
  margin-left: $width;
  background: $color-primary;
}
```



