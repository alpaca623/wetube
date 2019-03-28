#WeTube

* 3/28 기록
####사용 기술 리스트 - 뭔지도 모르고 쓰면 안되니까

* **babel** -> preset-env
* __body-parser__ - 말 그대로 parser인데.. 내용정리가 필요하다. 우선 중요한 사실은 express 4.16.0 version부터는 body-parser가 built-in 되어있다고 한다. -> [요기](https://expressjs.com/en/4x/api.html#express-json-middleware)
* **cookie-parser** - 정리중..
* **helmet** - 보안을 위한 middleware, [github page](https://github.com/helmetjs/helmet)
  * express에서는 보안을 위해 helmet사용을 권장하고 있다. [link](https://expressjs.com/ko/advanced/best-practice-security.html)
* **morgan** - log기록을 위한 middleware, [github page](https://github.com/expressjs/morgan)

__1. express__
  * Fast, unopinionated, minimalist web framework for Node.js라고 [홈페이지](https://expressjs.com/)에 나와있음
  * node.js를 더 간편하게 사용할 수 있도록 한 것이다. 나는 node.js를 따로 배우지 않아서.. 먼저 이걸 쓰는게 순서가 바뀌었다 생각하지만, 강의 듣는중이라 우선 써보는중.
  * 기존에 내가 써봤던 기술들에 비해서 정말 간편한 점은, 서버를 동작하게 하는 방식이나 routing을 아주 기가막히게 해준다는 점이다. [여기 보세요](https://expressjs.com/en/guide/routing.html)

__2. pug__
  * html template.
  * 문서가 좀 보기 힘들다..
  * 난 이런 템플릿은 별로 좋아하지 않는다.. 그냥 html이 좋음 -> pug를 모르는 사람이랑 대화하기엔 힘드니까. 소스보기는 편한거같지만.. 여튼 html template이 많이 나오고 있기 때문에.. 이러다가는 결국 html으로 돌아가자! 그러지 않을까..?
  * **하지만 난 강의듣는중이라 이걸 쓸 것이다.**