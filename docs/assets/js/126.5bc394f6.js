(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{251:function(l,i,_){"use strict";_.r(i);var v=_(0),p=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var l=this,i=l.$createElement,_=l._self._c||i;return _("div",{staticClass:"content"},[_("h2",{attrs:{id:"네트워크"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#네트워크","aria-hidden":"true"}},[l._v("#")]),l._v(" 네트워크")]),_("ul",[_("li",[_("p",[l._v("repeater")]),_("ul",[_("li",[_("p",[l._v("physical layer에서 함")])]),_("li",[_("p",[l._v("신호증폭")])]),_("li",[_("p",[l._v("거리가 멀어지면 노이즈도 들어가고 어쩌구.")])])])]),_("li",[_("p",[l._v("브릿지")]),_("ul",[_("li",[_("p",[l._v("데이터링크레이어")])]),_("li",[_("p",[l._v("2개의 떨어져있는 네트웍 연결")])]),_("li",[_("p",[l._v("브릿지, 스위치는 본질적으로 같음")])])])]),_("li",[_("p",[l._v("라우터")]),_("ul",[_("li",[l._v("네트웍 레이어")])])]),_("li",[_("p",[l._v("게이트웨이")]),_("ul",[_("li",[_("p",[l._v("네트웤 레이어 포함하는 윗쪽에서 씀")])]),_("li",[_("p",[l._v("데이터를 전달 시 바꿔주는 부분")])])])]),_("li",[_("p",[l._v("End-point")]),_("ul",[_("li",[l._v("자기와 같이 일하는 상대 어플리케이션이 있는 네트워크로 데이터 주고받음")])])]),_("li",[_("p",[l._v("소켓")]),_("ul",[_("li",[l._v("데이터를 보내고 받는 인터페이스 포인트")])])]),_("li",[_("p",[l._v("어플리케이션 프로토콜")]),_("ul",[_("li",[_("p",[l._v("HTTP가 한 종류임")])]),_("li",[_("p",[l._v("엔드포인트와 엔드포인트 사이에 정보 전달 규칙")])]),_("li",[_("p",[l._v("트랜스포트레이어에서 제공한 인터페이스만으론 안전히 정보전달 못함")])])])]),_("li",[_("p",[l._v("bandwidth / latench")]),_("ul",[_("li",[l._v("b : 시간당 전송할수있븐")]),_("li",[l._v("L: 지연")])])])]),_("h2",{attrs:{id:"tcp-ip-소켓-프로그래밍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-소켓-프로그래밍","aria-hidden":"true"}},[l._v("#")]),l._v(" TCP/IP 소켓 프로그래밍")]),_("p",[l._v("[ ] Ch 1 - 서론")]),_("ul",[_("li",[_("p",[l._v("1.1 네트워크, 패킷, 프로토콜")]),_("ul",[_("li",[_("p",[l._v("컴 네트워크")]),_("ul",[_("li",[_("p",[l._v("통신 채널로 상호 연결된 수많은 장비들로 구성.")])]),_("li",[_("p",[l._v("=>호스트, 라우터")])]),_("li",[_("p",[l._v("호스트: 웹 브라우저, 메진저 프로그램, 파일 공유 프로그램들을 구동하는 컴퓨터")])])])]),_("li",[_("p",[l._v("호스트 상에서 동작하는 응용프로그램 <<네트워크의 ‘실 사용자’")])]),_("li",[_("p",[l._v("라우터(=게이트웨이)")]),_("ul",[_("li",[_("p",[l._v("하나의 통신 채널로부터 온 정보들을 다른 통신 채널로 교체, 전달하는 일을 도맡은 장비")])]),_("li",[_("p",[l._v("프로그램을 구동시키기도 하지만")])]),_("li",[_("p",[l._v("보통 응용 프로그램을 구동하진 않는다.")])]),_("li",[_("p",[l._v("실제로 모든 호스트를 다른 호스트에게 직접 연결하진 않는다.")])]),_("li",[_("p",[l._v("대신 소수의 호스트들이 라우터에 연결. 이 라우터가 다른 라우터에게 계속적으로 연결이 되어 네트워크를 구성.")])]),_("li",[_("p",[l._v("실제로 대부분의 호스트는 하나의 연결이면 충분.")]),_("ul",[_("li",[l._v("네트워크상에서 정보를 교환하는 프로그램은 라우터와 직접 상호작용 ㄴㄴ, 일반적으로 라우터의 존재를 모르는 상태로 동작.")])])]),_("li",[_("p",[l._v("*통신채널: 하나의 호스트에서 다른 호스트로 일련의 바이트 집합을 전달하는 매개체")]),_("ul",[_("li",[_("p",[l._v("이더넷처럼 유선이거나")])]),_("li",[_("p",[l._v("와이파이처럼 무선일수도 있고 그 외일수도 있다.")])])])])])]),_("li",[_("p",[l._v("정보: 연속된 바이트로 이루어진 집합체.")]),_("ul",[_("li",[_("p",[l._v("프로그램에 의해 생성되고 이해됨.")])]),_("li",[_("p",[l._v("패킷: 컴퓨터 네트워크의 관계에서 이런 일련의 바이트 집합체")]),_("ul",[_("li",[_("p",[l._v("하나의 패킷은 제어정보를 가지는데, 이는 주로 네트워크 자체가 자신의 목적을 위해 사용하기도 하며, 때때로 사용자의 정보를 포함하기도 함.")])]),_("li",[_("p",[l._v("제어정보의 경우 패킷의 목적지를 나타내는 정보가 하나의 예가 될 수 있음.")])]),_("li",[_("p",[l._v("라우터는 이러한 패킷의 제어 정보를 이용하여 각 패킷을 어떻게 전달할지 알아냄.")])])])])])]),_("li",[_("p",[l._v("프로토콜")]),_("ul",[_("li",[_("p",[l._v("통신 프로그램 사이에서 교환되는 패킷에 대한 약속이자 정의")])]),_("li",[_("p",[l._v("패킷이 어떻게 구성되어있고 정보가 어케 이해되는지를 정의")]),_("ul",[_("li",[l._v("ex. 패킷 내부에서 목적지 정보는 어디에 위치해있는지, 그 크기는 어케 되는지…")])])]),_("li",[_("p",[l._v("일반적으로 특별한 문제를 해결하기 위해 설계")])])])]),_("li",[_("p",[l._v("HTTP(Hyper text transfer Protocol)")]),_("ul",[_("li",[_("p",[l._v("하이퍼 텍스트를 생성하고 저장하는 서버와")])]),_("li",[_("p",[l._v("이를 분석해서 사용자에게 보여주는 클라이언트 간의 전송문제를 해결")])])])]),_("li",[_("p",[l._v("인스턴스 메세지 프로토콜")]),_("ul",[_("li",[l._v("둘 이상의 사용자들이 간단한 텍스트 메세지를 교환하는데 있어서 생기는 문제를 해결.")])])]),_("li",[_("p",[l._v("실제로 유용한 네트워크를 구현하기 위해 많은 수의 다양한 문제들을 해결하는것이 필요.")]),_("ul",[_("li",[_("p",[l._v("이러한 문제들을 모듈화하고 쉽게 관리하기 위해 여러 개의 프로토콜이 설계")])]),_("li",[_("p",[l._v("TCP/IP는 이러한 문제를 해결하기 위한 프로토콜의 모음 중 하나.")]),_("ul",[_("li",[_("p",[l._v("보통 이런 프로토콜의 모음을 ‘프로토콜 집합체(Protocol suite)라 부름.")]),_("ul",[_("li",[_("p",[l._v("인터넷에도 사용되지만 사실 네트워크에서도 사용가능.")])]),_("li",[_("p",[l._v("따라서 우리가 ‘네트워크’라고 말할 때는 TCP/IP프로토콜 집합체를 사용하는 어떠한 네트워크도 이에 해당됨.")])])])]),_("li",[_("p",[l._v("인터넷 프로토콜(IP), 전송제어프로토콜(TCP, Transmission control), 사용자데이터그램프로토콜(UDP,User datagram protocol)이 있음.")])])])])])]),_("li",[_("p",[l._v("프로토콜은 계층(layer)화 시키는것이 유용.")]),_("ul",[_("li",[_("p",[l._v("응용 프로그램은 점선에서 표현된 소켓 API를 통해 TCP또는 UDP의 서비스에 접근하게 됨.")])]),_("li",[_("p",[l._v("하부계층: 이더넷이나 전화모뎀 연결과 같은 하부통신 채널로 이루어져있음.")]),_("ul",[_("li",[l._v("(라우터가 하는것처럼)패킷을  목적지로 전달하는 담당인 네트워크계층에 의해 사용됨.")]),_("li",[l._v("TCP/IP 프로토콜 집합체에서 네트워크 계층을 구성하는건 인터넷프로토콜(IP)계층 뿐이다.")]),_("li",[l._v("IP는 임의의 두 개의 호스트 사이에 존재하는 여러 개의 채널과 라우터의 순서를 마치 하나의 호스트-호스트 연결 채널처럼 보이게 만듦")])])])])]),_("li",[_("p",[l._v("인터넷 프로토콜은 ‘데이터그램’서비스를 제공.")]),_("ul",[_("li",[_("p",[l._v("모든 패킷들은 네트워크에 의해 각각 독립적으로 다뤄짐.")])]),_("li",[_("p",[l._v("각 IP패킷들은 자신의 목적지주소(adress)를 가짐.")])]),_("li",[_("p",[l._v("IP는 단순히 최선전달서비스(best-effort service)를 할뿐")]),_("ul",[_("li",[l._v("아이피는 각 패킷을 전송하지만 네트웍을 경유하며 가끔 패킷을 손실할수도 있고 순서가 바뀔수도 있으며 복제된 패킷이 생길수도 이씀.")])])])])]),_("li",[_("p",[l._v("전송계층(transport layer): IP계층위에 존재")]),_("ul",[_("li",[_("p",[l._v("TCP, UDP 2개의 선택 프로토콜 제공.")]),_("ul",[_("li",[_("p",[l._v("이것들은 IP가 제공하는 서비스를 이용해 각각 다른 전송 기능을 제공")])]),_("li",[_("p",[l._v("응용프로토콜(application protocol)의 전송특징에 따른 필요성에 의해 그에 맞는 프로토콜이 선택적으로 사용.")])])])])])])])])]),_("h2",{attrs:{id:"network-공부"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#network-공부","aria-hidden":"true"}},[l._v("#")]),l._v(" Network 공부")]),_("ul",[_("li",[_("p",[l._v("cmd")]),_("ul",[_("li",[l._v("핑을 확인할 때 사용하는 명령어")])])]),_("li",[_("p",[l._v("ncpa.cpl")]),_("ul",[_("li",[l._v("네트워크 상황을 볼 수 있는 제어판의 네트워크 창 명령어")])])]),_("li",[_("p",[l._v("LAN")]),_("ul",[_("li",[_("p",[l._v("근거리 통신망.")])]),_("li",[_("p",[l._v("어느 좁은 지역(pc방, 사무실…)을 엮는 네트워크 망")])]),_("li",[_("p",[l._v("초기투자비용 높지만 유지보수비 낮다.")])]),_("li",[_("p",[l._v("구성장비: 2계층 장비인 switch, 1계층장비인 hub")])])])]),_("li",[_("p",[l._v("WAN")]),_("ul",[_("li",[_("p",[l._v("원거리 통신망")])]),_("li",[_("p",[l._v("LAN구간을 서로 연결하는 네트워크망")])]),_("li",[_("p",[l._v("광역 네트워크(서울과 부산을 이어주는 넷웍)")])]),_("li",[_("p",[l._v("초기 투자비용이 낮은대신 유지보수비 높은평")])]),_("li",[_("p",[l._v("KT, 메가패스.. 등 ISP업체가 담당")])]),_("li",[_("p",[l._v("구성장비: 3계층장비인 Router, L3 switch")])])])]),_("li",[_("p",[l._v("port")]),_("ul",[_("li",[_("p",[l._v("컴 네트웍에 접속하려면 컴의 문(=포트)를 이용해 들어가야함.")])]),_("li",[_("p",[l._v("포트는 각 번호마다의 특징 가졌는데, 주요 포트를 보면 다음과 같다.")])]),_("li",[_("p",[l._v("HTTP(80)")]),_("ul",[_("li",[_("p",[l._v("웹서버와 클라이언트가 상호 통신하기 위해 사용하는 하이퍼텍스트 전송 규약.")])]),_("li",[_("p",[l._v("우리가 주소창에 도메인명 적을때, 우리는 이 포트번호 80번을 사용하고 있는겨.")])])])]),_("li",[_("p",[l._v("FTP(21, 21)")]),_("ul",[_("li",[l._v("컴이 파일 전달할때 사용")])])]),_("li",[_("p",[l._v("Telnet(23)")]),_("ul",[_("li",[_("p",[l._v("가상 터미널 서비스.")])]),_("li",[_("p",[l._v("원격지에서 컴으로 접속하는 서비스.")])])])]),_("li",[_("p",[l._v("SMTP(25)")])]),_("li",[_("p",[l._v("DNS(53)")]),_("ul",[_("li",[_("p",[l._v("Domain name system.")])]),_("li",[_("p",[l._v("IP주소와 문자로 이루어진 주소를 연결시켜줌.")])]),_("li",[_("p",[l._v("daum.net을 인터넷에 치면 - 이 주소를 DNS에 물어봄.")])]),_("li",[_("p",[l._v("그럼 DNS가 다음의 IP주소를 클라이언트에 돌려주게 되고, 이 IP주소로 클라이언트는 다음에 접속.")])])])]),_("li",[_("p",[l._v("TFTP(69)")])])])]),_("li",[_("p",[l._v("ARP")]),_("ul",[_("li",[_("p",[l._v("Application Requirement Profile")])]),_("li",[_("p",[l._v("IP를 이용하여 맥어드레스를 알아오는 프로토콜.")])]),_("li",[_("p",[l._v("컴은 IP주소로만 통신 불가. 물리주소인 맥어드레스 필요.")])]),_("li",[_("p",[l._v("분당구 삼평동 진유림 귀하")]),_("ul",[_("li",[_("p",[l._v("분당구삼평동: 논리주소. 이사하면 바뀜")])]),_("li",[_("p",[l._v("진유림 : 사람의 고유이름. 맥어드레스")])])])]),_("li",[_("p",[l._v("IP주소를 이용하여 mac address를 알아오는 프로토콜")])])])]),_("li",[_("p",[l._v("인트라넷")]),_("ul",[_("li",[_("p",[l._v("내부의 네트워크. 인터넷과는 단절된 또 다른 네트워크.")])]),_("li",[_("p",[l._v("주로 보안 위해 사용.(회사기밀, 군사기밀…)")])]),_("li",[_("p",[l._v("또 다른 작은 인터넷을 하나 더 만들기.")])])])]),_("li",[_("p",[l._v("엑스트라넷")]),_("ul",[_("li",[l._v("인트라넷과 유사하지만, 회사 외의 회사고객이나 협력 회사에게도 사용 가능")])])]),_("li",[_("p",[l._v("통신 방식")]),_("ul",[_("li",[l._v("1.유니캐스트\n"),_("ul",[_("li",[_("p",[l._v("1:1전달방식")])]),_("li",[_("p",[l._v("수신측이 한 곳으로 정해져 있는 경우 사용.")])]),_("li",[_("p",[l._v("정확한 특정 목적지가 있고, 그 목적지를 알고 있다면 그 주소 하나로 1:1통신")])])])]),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[l._v("브로드캐스트")])]),_("ul",[_("li",[l._v("1:전체 전달방식")]),_("li",[l._v("TV, Radio…")]),_("li",[l._v("255.255.255.255")]),_("li",[l._v("FF-FF-FF-FF-FF-FF")])])]),_("li",[_("ol",{attrs:{start:"3"}},[_("li",[l._v("멀티캐스트")])]),_("ul",[_("li",[_("p",[l._v("IT용어 자체.")])]),_("li",[_("p",[l._v("1:그룹 전달")])]),_("li",[_("p",[l._v("한사람이 어떠한 하나의 그룹을 대상으로 정보 전송")])]),_("li",[_("p",[l._v("케이블 TV, 인터넷방속")])]),_("li",[_("p",[l._v("244.0.0.5")])]),_("li",[_("p",[l._v("01-00-5E-00-00-02")])])])])])]),_("li",[_("p",[l._v("Ethernet(이더넷)")]),_("ul",[_("li",[_("p",[l._v("LAN구간에서 사용되는 네트워크 방식 중 하나.")])]),_("li",[_("p",[l._v("2계층에서 사용되는 프로토콜.")])]),_("li",[_("p",[l._v("울나라는 대부분 Ethernet방식으로 네트워킹함.")])]),_("li",[_("p",[l._v("가장 큰 특징: CSMA/CD방식으로 통신.")]),_("ul",[_("li",[_("p",[l._v("위 3단계가 일어나면 데이터가 충돌했다고 일컫음.")])]),_("li",[_("p",[l._v("이렇게 데이터가 충돌하면 Frame을 전송한 컴퓨터는 서로 랜덤한 시간을 지정하고 그 시간만큼 대기한다. 그리고 그 시간 지난 후 다시 데이터 전송.")])]),_("li",[_("p",[l._v("3번과정 재전송을 15회이상 실패하게 되면 Frame전송을 포기")])]),_("li",[_("p",[l._v("충돌이 발생하는 영역을 Collision Domain이라 일컫음.")])]),_("li",[_("p",[l._v("하지만 Full-duplex로 동작하는 네트워크 구간에서는 데이터를 서로 다른 링크로 전달하기 때문에 충돌 일어나지 않음.")])])])])])]),_("li",[_("p",[l._v("토큰링")]),_("ul",[_("li",[_("p",[l._v("LAN구간에서 사용되는 네트워킹 방식은 이더넷 말고 토큰링 있음.")])]),_("li",[_("p",[l._v("우리나라에선 잘 사용x.")])]),_("li",[_("p",[l._v("2계층 프로토콜.")])]),_("li",[_("p",[l._v("PC가 데이터를 전송하고자 할때, 이더넷처럼 네트워크 링크에 데이터가 있나 없나 보는게 아니고,")])]),_("li",[_("p",[l._v("토큰링이 네트워크 데이터를 전송하고자 할땐 네트워크에 부여되는 토큰을 이용.")])]),_("li",[_("p",[l._v("토큰이 있는 PC는 데이터를 전송할 수 있으며, 토큰이 없으면 토큰이 자기에게 올때까지 기다려야함.")])]),_("li",[_("p",[l._v("데이터가 충돌할 염려는 ㄴㄴ")])]),_("li",[_("p",[l._v("당장 데이터 보내야할 PC가 있더라도 토큰이 자기에게 돌앙ㄹ때까지 기다려야함.")])])])]),_("li",[_("p",[l._v("계층별 사용 장비")]),_("ul",[_("li",[_("ol",[_("li",[l._v("Physical layer(물리계층)")])]),_("ul",[_("li",[_("p",[l._v("리피터")]),_("ul",[_("li",[_("p",[l._v("케이블로 데이터가 전송되며 저항에 의해 약화된 신호를 다시 증폭시켜 계속해서 전달")])]),_("li",[_("p",[l._v("2계층에서 사용하는 mac add나 IP주소 이해불가.")])]),_("li",[_("p",[l._v("오로지 전기신호 증폭만.")])]),_("li",[_("p",[l._v("요즘 추세는 리피터보다 허브")])])])]),_("li",[_("p",[l._v("허브")]),_("ul",[_("li",[_("p",[l._v("전기신호 증폭")])]),_("li",[_("p",[l._v("=>LAN구간 전송거리 연장가능, 여러 대의 장비를 LAN에 접속할 수 있도록 해줌.")])]),_("li",[_("p",[l._v("200~300m떨어진 PC에는 중간중간 허브 설치해줌.")])]),_("li",[_("p",[l._v("Flooding: 허브는 여러대에 연결가능한데, 만약 한장비에서 신호 보내면 나머지 연결된 모든 장비로 신호 전송")])]),_("li",[_("p",[l._v("허브에 연결된 장비들은 하나의 Collision Domain에 속해있다 표현")])])])])])]),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[l._v("Data link layer")])]),_("ul",[_("li",[_("p",[l._v("Bridge")]),_("ul",[_("li",[_("p",[l._v("Ethernet 장비를 물리적으로 연결할 수 있으며 전기적 신호 증폭.")])]),_("li",[_("p",[l._v("허브처럼 단순증폭X, Frame이라는 데이터 자체를 다시 생성하여 전송.")])]),_("li",[_("p",[l._v("Mac add식별가능 ->이걸 사용하여 Frame전송 포트를 결정가능.")])]),_("li",[_("p",[l._v("요즘은 bridge보다 스위치 많이 씀")])])])]),_("li",[_("p",[l._v("Switch")]),_("ul",[_("li",[_("p",[l._v("Mac add식별가능, Mac address table이란걸 생성하고 이 테이블 보고 목적지를 결정.")])]),_("li",[_("p",[l._v("스위치는 이걸 사용해서 특정장비에게만 데이터 보내기 때문에 충돌 일어나지 않는다.")])])])]),_("li",[_("p",[l._v("Mac add를 사용하는 계층으로, IP주소는 알아볼 수 없다 하지만 이로 인해 데이터충돌을 완화시키고 감지 가능.")])]),_("li",[_("p",[l._v("스위치에 연결된 장비는 각각의 포트가 하나의 Collision Domain에 속해있다 표현")])])])]),_("li",[_("ol",{attrs:{start:"3"}},[_("li",[l._v("Network layer")])]),_("ul",[_("li",[_("p",[l._v("Router")]),_("ul",[_("li",[_("p",[l._v("라우터와 L3스위치는 Layer3 header에 있는 IP주소를 참조하여 목적지와 연결되는 포트로 Packet을 전송.")])]),_("li",[_("p",[l._v("다른 랜구간의 장비와 통신하기 위해선 이 라우터를 거쳐야함.")])]),_("li",[_("p",[l._v("라우터는 수신된 Packet을 보고 출발지 IP를 알아냄.")])]),_("li",[_("p",[l._v("그리고 출발지와 연결된 인터페이스를 통하여 데이터를 전송 ==>라우팅")])]),_("li",[_("p",[l._v("전세계의 인터넷을 연결시켜주는 장비")]),_("ul",[_("li",[_("p",[l._v("한국에서 미국까지 가려면 30개도 안되는 라우터 장비 지나감.")])]),_("li",[_("p",[l._v("이런 라우터가 Broadcast를 하면? 내가 인터넷에 접속했다~라는 패킷이 전세계로 뿌려지는것과 똑같은 이치")])])])])])])])])])]),_("li",[_("p",[l._v("TCP/IP")]),_("ul",[_("li",[_("p",[l._v("인터넷을 이용하기 위한 필수조건. 프로토콜의 한 종류")])]),_("li",[_("p",[l._v("인터넷의 공용어")])]),_("li",[_("p",[l._v("특징: 네트워크에 접속하는 각각의 컴이 각각 주소 가지고, 네트워크에 접속되어 있는 또다른 컴과 통신을 원활히 해줌.")])])])]),_("li",[_("p",[l._v("IP Address")]),_("ul",[_("li",[_("p",[l._v("컴퓨터의 이름")])]),_("li",[_("p",[l._v("같은 네트워크 내부에서 같은 IP add가 둘이상 존재=>원활통신 불가, IP가 충돌.")])]),_("li",[_("p",[l._v("ipconfig입력하면 보임.")])]),_("li",[_("p",[l._v("Network ID: 시골 동네 이름(넷피리)")])]),_("li",[_("p",[l._v("Host ID: 동네에 사는 각각 가정 주민들.")]),_("ul",[_("li",[_("p",[l._v("하나의 네트워크 아이디에 여러개의 호스트 아이디가 존재가능")])]),_("li",[_("p",[l._v("하나의 동네=>하나의 LAN구간(=하나의 Broadcast Domain)=3계층 장비인 라우터를 지나치지 않고 통신 가능한 구간.")]),_("ul",[_("li",[l._v("반대로 LAN과 LAN사이의 통신을 위해선 3계층장비인 Router가 필요.")])])])])])])]),_("li",[_("p",[l._v("서브넷 마스크")]),_("ul",[_("li",[_("p",[l._v("네트워크 아이디랑 호스트 아이디 구분하려고 만듦.")])]),_("li",[_("p",[l._v("1로 이뤄진 부분과 0으로 이뤄진 부분으로 나뉨.")])]),_("li",[_("p",[l._v("111111.11111.111111.00000  <<1로 이뤄진걸 넷웍아이디, 0으로 이뤄진부분을 Host Id")])]),_("li",[_("p",[l._v("IP address와 Subnet 마스크를 AND연산(1이면그대로, 0이면 0으로)한게 Network Id")])]),_("li",[_("p",[l._v("네트워크 아이디와 브로드캐스트 주소는 IP주소로 사용불가!")])])])])])])}],!1,null,null,null);i.default=p.exports}}]);