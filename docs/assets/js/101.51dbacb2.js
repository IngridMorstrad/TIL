(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{289:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("p",[t._v("젤 위에 dataLayer를 정의해준다.")]),t._m(5),s("p",[t._v("GTM호출되기 전에 넣어주어야 한다. 안그러면 못 불림.")]),t._m(6),s("p",[t._v("JS이벤트랑 같이 쓰려면")]),t._m(7),t._m(8),t._m(9),t._m(10),s("p",[t._v("비동기 문제인 듯 한데")]),t._m(11),s("p",[t._v("태그매니저 프리뷰엔 보이면서 GA까진 전달이 되지 않는 걸 보면, pageview일때 안불려서 그렇거나 이벤트가 gtm.dom이 아니라서 전달이 되지 않는것일까. 혹은 데이터레이어랑 태그가 매치가 되어 있지 않을 수 있다.")]),s("p",[t._v("detail view를 보면")]),t._m(12),s("p",[t._v("문제 알았다. DOM Ready에서 태그는 두 개 다 불리는데 그 당시 detail만 들어가 있다.")]),t._m(13),s("p",[t._v("디버깅은 차분히 GTM Preview로 한뎁스씩 클릭해보며 하자.")]),t._m(14),s("p",[s("a",{attrs:{href:"https://youtu.be/NRb7wFAtExM",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Tag Manager course: The DataLayer [Preview]"),s("OutboundLink")],1),s("a",{attrs:{href:"https://youtu.be/ZKjlIhFJMCU",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Tag Manager eCommerce Tracking installation explained"),s("OutboundLink")],1),s("a",{attrs:{href:"http://www.simoahava.com/analytics/data-layer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Data Layer"),s("OutboundLink")],1),s("a",{attrs:{href:"http://www.simoahava.com/analytics/google-tag-manager-data-model/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Tag Manager’s Data Model"),s("OutboundLink")],1),s("a",{attrs:{href:"https://developers.google.com/tag-manager/devguide",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Tag Manager for Web Tracking"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"data-layer-in-tagmanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-layer-in-tagmanager","aria-hidden":"true"}},[this._v("#")]),this._v(" Data Layer in tagmanager")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("서버 데이터를 GA에서 쓰고 해석하기 쉽게 객체 형식으로 들고 있는 것.\n크롬 자바스크립트 콘솔에서 "),a("code",[this._v("dataLayer")]),this._v("라고 쳐보면 객체들이 나온다.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("gtm.js: 구글 태그매니저가 로드되었을 때 불림")]),a("li",[this._v("gtm.dom: 페이지 돔이 모두 로드되었을 때 불림")]),a("li",[this._v("gtm.load: 모든 태그들까지 다 실행되었을 때 불림")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"사용법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법","aria-hidden":"true"}},[this._v("#")]),this._v(" 사용법")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"데이터레이어-넣어주기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데이터레이어-넣어주기","aria-hidden":"true"}},[this._v("#")]),this._v(" 데이터레이어 넣어주기")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  dataLayer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    dataLayer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token string"}},[t._v("'pageCategory'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'signup'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token string"}},[t._v("'visitorType'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'high-value'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" Google Tag Manager "),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" End Google Tag Manager "),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button1"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("onclick")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dataLayer.push({"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(": "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("button1-click"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("});"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Button 1"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{attrs:{start:"2"}},[a("li",[this._v("태그매니저 접속해서 태그를 만든다.\n"),a("ul",[a("li",[this._v("Track Type: Transaction으로 잡고")]),a("li",[this._v("new trigger를 만든다.\n"),a("ul",[a("li",[this._v("Transaction이란 이름으로")]),a("li",[this._v("Custom Event로")]),a("li",[this._v("Fire On에서 Event name을 데이터레이어에 박혀있는 이벤트 이름을 가져온다. (e.g. gtm4wp.orderCompleted)")])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"의문"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#의문","aria-hidden":"true"}},[this._v("#")]),this._v(" 의문")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("impression이랑 detail모두 태그매니저에서 "),a("code",[this._v("pageview")]),this._v("가 일어날 때 불린다. 둘 다 이벤트가 gtm.dom일때 불리운다.\nimpression은 커스텀 자바스크립트로 돔을 긁어와서 dataLayer에 푸쉬해준다. 그래서 "),a("code",[this._v("$(window).load")]),this._v("등으로 감싸서 전달해주면 데이터레이어에 잘 전달되므로 태그매니저 프리뷰에는 보인다.\ndetail은 django template tag로 모델에서 바로 긁어온 데이터를 넣는거라 돔 위에 있어도 데이터를 가져올 수 있다.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ol",[s("li",[t._v("GTM을 돔 로드 후에 넣으면\n"),s("ul",[s("li",[t._v("impression은 측정O.")]),s("li",[t._v("detail view는 측정X. (태그매니저 프리뷰엔 보임)")]),s("li",[t._v("카트 넣고 빼기 측정O.")])])]),s("li",[t._v("GTM을 돔 로드 전에 넣으면 (공식 사이트 권고)\n"),s("ul",[s("li",[t._v("impression이 측정X. (태그매니저 프리뷰엔 보임)")]),s("li",[t._v("detail view는 측정O.")]),s("li",[t._v("카트 넣고 빼기 측정X. (태그매니저 프리뷰에도 안보임)")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("message: [DL values after this msg] detail 들어옴")]),a("li",[this._v("pageview: [DL values after this msg] ecommerce에 감싸진 detail 들어오고 밑에 gtm, event:'gtm.js'도 함께 들어간다.")]),a("li",[this._v("DOM ready: [DL values after this msg] ecommerce에 감싸진 detail 들어오고 밑에 gtm, event:'gtm.dom'이 함께 들어간다. 이 때가 진짜인듯?")]),a("li",[this._v("Message: [DL values after this msg] ecommerce에 detail밑에 impressions가 추가되어 들어오고 밑에 gtm, event:'gtm.dom'이 함께 들어간다. 이 때 두 개 다 잘 들어간 거 아닌가?! 아! 3번 돔 레디에서 이미 두개 다 들어가버렸구나!")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"해결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#해결","aria-hidden":"true"}},[this._v("#")]),this._v(" 해결")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"refer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refer","aria-hidden":"true"}},[this._v("#")]),this._v(" Refer")])}],!1,null,null,null);a.default=n.exports}}]);