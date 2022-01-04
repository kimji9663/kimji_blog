---
title: React 개발환경 설정하기
date: "2019-12-30"
---


## 1. node.js 설치
   - https://nodejs.org 접속하여 다운로드.
   - 윈도우의 명령프롬프트 창 열고 npm -v 입력하여 설치가 되었는지 확인.
   


## 2. React-create-app 설치
   - 명령프롬프트 창에서 npm install -g create-react-app@2.1.8 입력하여 설치
     -g 는 전역으로 설치하고자 할 경우 붙여준다.
     @2.1.8은 create-react-app프로그램의 설치버전이다. 최신버전을 설치하고자 할 경우에는 숫자를 붙이지 않고
     npm install -g create-react-app만 입력하면 된다.
   - 공식문서는 https://reactjs.org 참고.



## 3. 개념정리
   - npm : 명령프롬프트에서 프로그램의 설치를 도와주는 앱스토어와 같은 기능.
   - npx : npm과 같은 프로그램 설치를 도와주는 기능. 프로그램을 1회 설치 후 바로 자동으로 삭제한다. 
           실무에서는 npx를 사용하는 것이 용이. 매번 최신 버전을 사용할 수 있음.

