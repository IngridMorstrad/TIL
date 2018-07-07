(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{384:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),s("p",[t._v("그리고 아래 명령어를 넣었더니")]),t._m(11),s("p",[t._v("퍼미션 에러가 떴당 ^^; 햄복할수업성")]),t._m(12),s("p",[s("a",{attrs:{href:"http://www.howtogeek.com/168119/fixing-warning-unprotected-private-key-file-on-linux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 글"),s("OutboundLink")],1),t._v("을 참고해 퍼미션을 변경해주니 완료!")]),t._m(13),s("p",[t._v("실행을 해본다.")]),t._m(14),t._m(15),s("p",[t._v("http://www.hanbit.co.kr/network/view.html?bi_id=547\nhttp://118k.tistory.com/64")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"ssh란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh란","aria-hidden":"true"}},[this._v("#")]),this._v(" SSH란?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Secure Shell")]),e("li",[this._v("네트워크 보안을 위해 만들어진 프로토콜")]),e("li",[this._v("인증/암호화/무결성/압축")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"터널링"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#터널링","aria-hidden":"true"}},[this._v("#")]),this._v(" 터널링")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("a.k.a Forwarding")]),e("li",[this._v("A에 SSH클라이언트 설치하고, B에도 설치하고, A의 SSH클라이언트를 통해 SSH서버에 접속. 이 연결 통로를 "),e("code",[this._v("터널")]),this._v("이라 한다.")]),e("li",[this._v("암호화 등을 통해 터널처럼 외부로부터 연결 보호.")]),e("li",[this._v("이 터널을 다른 애플리케이션이 이용 가능. => "),e("code",[this._v("포트 포워딩(Port Forwarding)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"사용-예"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용-예","aria-hidden":"true"}},[this._v("#")]),this._v(" 사용 예")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ ssh 서버명\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"local-port-forwarding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-port-forwarding","aria-hidden":"true"}},[this._v("#")]),this._v(" Local Port Forwarding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ ssh -L 포트번호1:호스트명:포트번호2 서버명\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("포트번호1: SSH 클라이언트가 검사(Listen)하고 있을 포트번호 지정\n"),e("ul",[e("li",[this._v("이 포트번호1로 데이터가 왔을 때 SSH클라가 SSH서버로 데이터를 전송")]),e("li",[this._v("SSH서버는 이 데이터를 다시 "),e("code",[this._v("포트번호2")]),this._v("로 보냄\n*참고: 포트")])])]),e("li",[this._v("1024~65535사이의 임의의 숫자")]),e("li",[this._v("1~1023까지 포트는 예약된 포트로 보통 수퍼유저만 지정 가능")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"나의-예시"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#나의-예시","aria-hidden":"true"}},[this._v("#")]),this._v(" 나의 예시")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("상황: 회사에서 아마존 DB에 접속하는 키가 있고, 그걸 동료에게 받아서 사용\n해결: 동료 개발자에게 키를 받아서 "),e("code",[this._v("~/.ssh/")]),this._v("폴더에 "),e("code",[this._v("어쩌구-저쩌구.pem")]),this._v("이란 이름으로 "),e("code",[this._v("RSA PRIVATE KEY")]),this._v("를 넣었다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ ssh-add -K <key filename>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("ssh-add -K 어쩌구-저쩌구.pem\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nPermissions 0644 for '어쩌구-저쩌구.pem' are too open.\nIt is required that your private key files are NOT accessible by others.\nThis private key will be ignored.\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ ssh-add -K 어쩌구-저쩌구.pem\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ ssh -L 포트번호1:호스트명:포트번호2 서버명\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"refer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#refer","aria-hidden":"true"}},[this._v("#")]),this._v(" refer")])}],!1,null,null,null);e.default=a.exports}}]);