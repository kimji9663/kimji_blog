---
title: CSS 방법론 정리
date: "2020-06-01"
---

## OOCSS
### 구조와 스타일의 분리

```class="btn facebook"``` ```class="header width-100"```

되도록 짧고 의미가 분명하도록 네이밍한다. 

장점 : 짧고 간결하여 사용성이 좋다. CSS 파일의 용량이 줄어든다.
단점 : 복잡한 구조에서는 오히려 유지보수가 어려울 수 있다. 다중 클래스 사용으로 HTML코드가 복잡해질 수 있다.

<br />
<br />

## BEM
### block__element--modifier 

```content__category--food``` ```button__primary--large``` ```header__logo```
'구성요소__기능--모양/상태'의 순서로 타입에 맞게 체계적으로 네이밍을 한다.
ID에는 사용하지 않는다.
modifier는 필요하지 않으면 정의하지 않아도 된다. 

장점 : 한 눈에 요소의 목적과 기능과 형태를 바로 알 수 있다. 클래스명 충돌을 효과적으로 방지할 수 있다.
단점 : 클래스명이 지나치게 길어질 수 있어 사용의 편의성이 떨어진다. 소규모 프로젝트에서는 부적합하다.

** SASS와 함께 사용할 경우 긴 네이밍을 반복해서 입력하는 불편함을 해소할 수 있다.

<br />
<br />

## SMACSS
### 크게 5가지로 나누어 모듈화

```base``` ```layout``` ```module``` ```state``` ```theme```
base : 스타일 초기화 (body, p, table, form, ul, li, button)
layout : 주요 요소 (#header, #footer, #aside, .l-fixed)
module : 재사용 가능한 요소, ID와 태그명 사용 X, ```.box > span```은 허용 (.box, .table, .btn, .icon)
state : 요소의 상태변화 (.is-hidden, .is-disabled, .is-active)
theme : 전반적인 색상이나 표현 (.theme-color, .dark, .light)

장점 : CSS 구조를 탄탄하게 잡을 수 있다. 체계적이고 확장성이 좋다.
단점 : 많은 규칙 때문에 CSS작성에 제약이 있을 수 있다. 규칙을 잘 이해하고 사용할 수 있도록 훈련이 필요하다. 클래스 충돌이 발생할 수 있다.

** BEM과 적절히 혼용하여 사용하면 클래스 충돌을 피할 수 있다.