(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{383:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"개요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#개요","aria-hidden":"true"}},[t._v("#")]),t._v(" 개요")]),s("p",[t._v("한 화면에 유튜브 이미지+링크를 많이 모아놓은 사이트를 개발하고 있는데,  이를 모두 iframe으로 embed하는 것은 낭비이기에 thumbnail만 가져오는 방법을 찾아보았다.")]),s("h2",{attrs:{id:"썸네일-가져오기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#썸네일-가져오기","aria-hidden":"true"}},[t._v("#")]),t._v(" 썸네일 가져오기")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://img.youtube.com/vi/JnxwbY07jmY/0.jpg"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("일단 이렇게 하면 썸네일이 나온다.\n하지만 이런 식으로 6:4비율로 검정 background가 포함되어 나온다.\n"),s("img",{attrs:{src:"http://img.youtube.com/vi/JnxwbY07jmY/0.jpg"}})]),s("h2",{attrs:{id:"썸네일-크롭하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#썸네일-크롭하기","aria-hidden":"true"}},[t._v("#")]),t._v(" 썸네일 크롭하기")]),s("p",[s("a",{attrs:{href:"http://www.nelsdrums.com/inspiration/tips/cropping-youtube-thumbnails-using-css"}},[t._v("이 링크")]),t._v("를 보고 따라했다.")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("crop"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://img.youtube.com/vi/JnxwbY07jmY/0.jpg"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v("div.video")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v("width")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{attrs:{class:"token selector"}},[t._v(";\n        img")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v("border")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token selector"}},[t._v(".crop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v("float")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("left"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v("margin")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(".5em 10px .5em 0"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v("overflow")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  this is important\n            "),s("span",{attrs:{class:"token property"}},[t._v("border")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px solid #ccc"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("/* input values to crop the image */")]),t._v("\n        "),s("span",{attrs:{class:"token selector"}},[t._v(".crop img")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v("margin")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("-25px -0px -25px 0px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("img를 crop으로 감싸 요리 죠리 이동하고 자르는 방법이다.\n하지만 예쁘고 깔끔하지 못해서 조금 더 찾아봤다.")]),s("h2",{attrs:{id:"그냥-16-9로-가져오기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#그냥-16-9로-가져오기","aria-hidden":"true"}},[t._v("#")]),t._v(" 그냥 16:9로 가져오기")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://img.youtube.com/vi/<insert-youtube-video-id-here>/mqdefault.jpg"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v("http://img.youtube.com/vi/<insert-youtube-video-id-here")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/maxresdefault.jpg>\n")])])]),s("p",[t._v("그냥 이렇게 하면 된다...\n이 "),s("a",{attrs:{href:"http://stackoverflow.com/questions/13220715/removing-black-borders-43-on-youtube-thumbnails"}},[t._v("스택오버플로우")]),t._v("를 참고하였다.\n위는 320x180, 아래는 (가능하면)1500x900를 준다.\n"),s("img",{attrs:{src:"http://img.youtube.com/vi/JnxwbY07jmY/mqdefault.jpg"}}),s("img",{attrs:{src:"http://img.youtube.com/vi/JnxwbY07jmY/maxresdefault.jpg"}}),t._v("\n이런식으로.")])])}],!1,null,null,null);a.default=e.exports}}]);