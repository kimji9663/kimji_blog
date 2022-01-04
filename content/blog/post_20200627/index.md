---
title: jQuery latest 버전을 사용하면 안되는 이유
date: "2020-06-27"
---

## CDN 방식의 이점
이전에 사이트를 방문했을 경우 캐시되어 다시 다운로드할 필요가 없으므로 사이트 로딩 속도가 빨라진다.
브라우저는 단일 도메인으로의 동시 파일 다운로드 수를 제한하는데 대부분 4개까지의 연결을 허용한다. 만일 다운로드할 파일이 많을 경우 이전 파일 중 하나가 완전히 검색 될 때까지 다운로드가 차단된다. CDN 파일은 다른 도메인에서 호스팅되기 때문에 브라우저가 동시에 파일을 다운로드 할 수 있다.
<br>
<br>

## jquery-latest.js의 이점
jquery의 최신버전이 자동으로 적용되어 항상 최신상태의 jQuery를 사용할 수 있다. 
<br>
<br>

## jQuery 1.11.1 이후 업데이트가 중단됨
jQuery 1.11.1 이후 jQuery와 Google이 업데이트를 중단하였다. 더 이상 이 URL은 업데이트 되지 않는다. 공식 문서에도 jquery-latest.js를 사용하지 말 것을 공지하고 있다. 그 이유는 실제 운영되는 사이트에서는 jquery가 최신으로 업데이트 됨에 따라 호환성 이슈가 발생할 수 있어 불안정하기 때문이다. 이러한 문제에도 불구하고 대중적으로 남용되고 있어 부주의한 사용을 차단하기 위해 업데이트 중단을 결정했다.
<br>
<br>

## jquery 공식블로그에서 권장하는 방식

공식 CDN 홈페이지를 통해 최신버전을 사용할 것을 권장하고 있다.
http://code.jquery.com/ <br>


다운로드 방식이나 다른 CDN을 사용하고자 할 경우 https://jquery.com/download/ 를 참조 <br>
- 구글 공식문서 : https://developers.google.com/speed/libraries#jquery <br>
- ex)구글 CDN을 사용할 경우 <br>
```<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>```



