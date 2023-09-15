(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{312:function(a,s,e){"use strict";e.r(s);var t=e(14),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[a._v("#")]),a._v(" SSH")]),a._v(" "),s("ul",[s("li",[a._v("Secure Shell")]),a._v(" "),s("li",[a._v("네트워크 보안을 위해 만들어진 프로토콜")]),a._v(" "),s("li",[a._v("인증/암호화/무결성/압축")])]),a._v(" "),s("h2",{attrs:{id:"터널링"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#터널링"}},[a._v("#")]),a._v(" 터널링")]),a._v(" "),s("ul",[s("li",[a._v("a.k.a Forwarding")]),a._v(" "),s("li",[a._v("A에 SSH클라이언트 설치하고, B에도 설치하고, A의 SSH클라이언트를 통해 SSH서버에 접속. 이 연결 통로를 "),s("code",[a._v("터널")]),a._v("이라 한다.")]),a._v(" "),s("li",[a._v("암호화 등을 통해 터널처럼 외부로부터 연결 보호.")]),a._v(" "),s("li",[a._v("이 터널을 다른 애플리케이션이 이용 가능. => "),s("code",[a._v("포트 포워딩(Port Forwarding)")])])]),a._v(" "),s("h2",{attrs:{id:"사용-예"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용-예"}},[a._v("#")]),a._v(" 사용 예")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v(" 서버명\n")])])]),s("h3",{attrs:{id:"local-port-forwarding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-port-forwarding"}},[a._v("#")]),a._v(" Local Port Forwarding")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" 포트번호1:호스트명:포트번호2 서버명\n")])])]),s("ul",[s("li",[a._v("포트번호1: SSH 클라이언트가 검사(Listen)하고 있을 포트번호 지정\n"),s("ul",[s("li",[a._v("이 포트번호1로 데이터가 왔을 때 SSH클라가 SSH서버로 데이터를 전송")]),a._v(" "),s("li",[a._v("SSH서버는 이 데이터를 다시 "),s("code",[a._v("포트번호2")]),a._v("로 보냄\n*참고: 포트")])])]),a._v(" "),s("li",[a._v("1024~65535사이의 임의의 숫자")]),a._v(" "),s("li",[a._v("1~1023까지 포트는 예약된 포트로 보통 수퍼유저만 지정 가능")])]),a._v(" "),s("h2",{attrs:{id:"나의-예시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#나의-예시"}},[a._v("#")]),a._v(" 나의 예시")]),a._v(" "),s("p",[a._v("상황: 회사에서 아마존 DB에 접속하는 키가 있고, 그걸 동료에게 받아서 사용\n해결: 동료 개발자에게 키를 받아서 "),s("code",[a._v("~/.ssh/")]),a._v("폴더에 "),s("code",[a._v("어쩌구-저쩌구.pem")]),a._v("이란 이름으로 "),s("code",[a._v("RSA PRIVATE KEY")]),a._v("를 넣었다.")]),a._v(" "),s("p",[a._v("그리고 아래 명령어를 넣었더니")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ ssh-add "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-K")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("퍼미션 에러가 떴당 ^^; 햄복할수업성")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ssh-add -K 어쩌구-저쩌구.pem\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nPermissions 0644 for '어쩌구-저쩌구.pem' are too open.\nIt is required that your private key files are NOT accessible by others.\nThis private key will be ignored.\n")])])]),s("p",[s("a",{attrs:{href:"http://www.howtogeek.com/168119/fixing-warning-unprotected-private-key-file-on-linux/",target:"_blank",rel:"noopener noreferrer"}},[a._v("이 글"),s("OutboundLink")],1),a._v("을 참고해 퍼미션을 변경해주니 완료!")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ ssh-add "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-K")]),a._v(" 어쩌구-저쩌구.pem\n")])])]),s("p",[a._v("실행을 해본다.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" 포트번호1:호스트명:포트번호2 서버명\n")])])]),s("h2",{attrs:{id:"refer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[a._v("#")]),a._v(" refer")]),a._v(" "),s("p",[a._v("http://www.hanbit.co.kr/network/view.html?bi_id=547\nhttp://118k.tistory.com/64")])])}),[],!1,null,null,null);s.default=r.exports}}]);