---
title: :root와 css변수
date: "2020-10-13"
---

## :root와 css변수
:root : html의 루트요소에 스타일이 적용되는 css 클래스 <br>
css변수 : css에서 정의해서 사용할 수 있는 변수명 앞에 '--'를 붙인다.

```css
/* css 우선순위 : html < :root < * < body */
    * {
        background: rgb(195, 245, 179);
        color: green;
    }
    body {
        background: rgb(179, 184, 245);
        color: #000;
    }
    :root {
        background: wheat;
        color: blue;
        --my-color-1 : red;
    }

    /* css 변수 (IE Not supported) */
    .x {
        color: rgb(174, 255, 98);
        color: var( --my-color-2, orange);
    }
    .y {
        color: var(--my-color-1);
    }

    .a {
        --my-depth: 1;
        width: calc(var(--my-depth) * 50px);
        height: calc(var(--my-depth) * 50px);
        background: green;
    }
    .b {
        --my-depth: 2;
        width: calc(var(--my-depth) * 50px);
        height: calc(var(--my-depth) * 50px);
        background: pink;
    }
    .c {
        --my-depth: 3;
        width: calc(var(--my-depth) * 50px);
        height: calc(var(--my-depth) * 50px);
        background: yellow;
    }
```

```html
<div class="x">Hello</div>

<div class="y">World</div>

<div class="a">Hello world!</div>

<div class="b">Hello world!</div>

<div class="c">Hello world!</div>
```

[DEMO link →](https://codepen.io/kimji9663/pen/vYKNXBW)


