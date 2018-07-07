(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{250:function(i,l,n){"use strict";n.r(l);var e=n(0),t=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var i=this,l=i.$createElement,n=i._self._c||l;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"storm과-elasticsearch를-활용한-로깅-프로그램의-실시간-알람-시스템-구현-이승진"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#storm과-elasticsearch를-활용한-로깅-프로그램의-실시간-알람-시스템-구현-이승진","aria-hidden":"true"}},[i._v("#")]),i._v(" Storm과 Elasticsearch를 활용한 로깅 프로그램의 실시간 알람 시스템 구현 (이승진)")]),n("ul",[n("li",[i._v("알람의 필요성\n"),n("ul",[n("li",[i._v("적절한 시기에 개발자들에게 노티가 있었더라면? (급 에러같은거 나타났을때)")])])]),n("li",[i._v("네이버 사내 로깅 플랫폼\n"),n("ul",[n("li",[i._v("NELO2")]),n("li",[i._v("Elasticsearch기반")]),n("li",[i._v("검색, 대시보드, 크래시분석, 알람 등 기능")])])]),n("li",[i._v("기존 알람 모듈의 문제점\n"),n("ul",[n("li",[i._v("주기적인 동작 방식")]),n("li",[i._v("확장성 제약\n"),n("ul",[n("li",[i._v("수집서버와 알람서버가 직접 메세지 주고받음")])])]),n("li",[i._v("이원화 된 알람 처리")])])]),n("li",[i._v("Storm\n"),n("ul",[n("li",[i._v("Storm UI, Storm rest API준다.")])])]),n("li",[i._v("Elasticsearch\n"),n("ul",[n("li",[i._v("Shard: 인데스 데이터의 횡적 분할")]),n("li",[i._v("Percolator API\n"),n("ul",[n("li",[i._v("검색 vs "),n("strong",[i._v("역검색")])])])])])])]),n("h2",{attrs:{id:"implementing-deep-learning-using-cudnn-이예하"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementing-deep-learning-using-cudnn-이예하","aria-hidden":"true"}},[i._v("#")]),i._v(" Implementing Deep learning using cuDNN (이예하)")]),n("p",[i._v("후...")]),n("h2",{attrs:{id:"코끼리-냉장고에-집어넣기-실시간-추천엔진을-머신-한-대에-구겨넣기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#코끼리-냉장고에-집어넣기-실시간-추천엔진을-머신-한-대에-구겨넣기","aria-hidden":"true"}},[i._v("#")]),i._v(" 코끼리 냉장고에 집어넣기 - 실시간 추천엔진을 머신 한 대에 구겨넣기")]),n("ul",[n("li",[i._v("추천엔진 2개로 나뉨\n"),n("ul",[n("li",[i._v("Content-based (어려움)\n"),n("ul",[n("li",[i._v("사전에 현업지식 있어야 함")]),n("li",[i._v("개별 컨텐츠의 메타데이터도 거의 없고")]),n("li",[i._v("상품에서 뽑아내기도 어렵다.")])])]),n("li",[i._v("Collaborate Filtering\n"),n("ul",[n("li",[i._v("모던 추천엔진 많이 씀.")]),n("li",[i._v("두개로 나뉨\n"),n("ul",[n("li",[n("strong",[i._v("Memory based")]),n("ul",[n("li",[i._v("오늘 말할 내용!")])])]),n("li",[i._v("Model based")])])])])])])]),n("li",[i._v("Memory based\n"),n("ul",[n("li",[i._v("얼마나 닮았냐를 보고 닮았으면 다른 이가 좋아한 것을 추천")]),n("li",[i._v("Jaccard Similarity\n"),n("ul",[n("li",[i._v("전체중에 겹치는 비율을 측정")]),n("li",[i._v("사람이 많을 수록 비교해야 할 쌍이 늘어난다.")]),n("li",[i._v("Too many combinations")])])]),n("li",[i._v("pre-clusturing")]),n("li",[i._v("Locality sensitive hashing (LSH)\n"),n("ul",[n("li",[i._v("적은 버킷에 일부러 clusturing되게 뿌린다면?")]),n("li",[i._v("계산할 녀석과 비슷한 애들이 있는 cluster를 찾고 n을 줄이고 상세한 비교를 한다.")]),n("li",[i._v("원본이 조금만 닮아도 결과값들도 닮아야 하는 특수 hash function이 필요.")])])]),n("li",[i._v("MinHash\n"),n("ul",[n("li",[i._v("Jaccard similarity를 유지하는 타입의 LSH")])])]),n("li",[i._v("일종의 dimension reduction\n"),n("ul",[n("li",[i._v("e.g. 6차원 -> 3차원")])])])])]),n("li",[i._v("클러스터를 쓴다\n"),n("ul",[n("li",[i._v("장점: 후보를 한정한다 - speed gain")]),n("li",[i._v("단점: 후보를 한정한다 - quality loss")])])]),n("li",[i._v("매우 인기있는 아이템\n"),n("ul",[n("li",[i._v("커어어다랗다.")]),n("li",[i._v("클릭스트림의 길이를 어떻게든 해야 등장할 때마다 퍼포먼스루즈를 막는다.")]),n("li",[i._v("해결방법: 클릭스트림 원본 말고 짧은 대체본.\n"),n("ul",[n("li",[i._v("-> 대체본끼리 비교해 바로 유사도를 알아야 한다.")]),n("li",[i._v("==> MinHash")])])])])]),n("li",[i._v("다량의 건수를 in-memory안에 fit가능")]),n("li",[i._v("대량 배치\n"),n("ul",[n("li",[i._v("새로운 click일어나면 기존 계산 signature버리고 다시 계산해야 하나?")]),n("li",[i._v("minhash는 min함수의 chane이라는 좋은 성질")]),n("li",[i._v("새 데이터가 들어오면 누적 정용하면 된다.")])])]),n("li",[i._v("분할 상환\n"),n("ul",[n("li",[i._v("거대한 한방이 아니고 자잘한 업데이트로!")])])])])])}],!1,null,null,null);l.default=t.exports}}]);