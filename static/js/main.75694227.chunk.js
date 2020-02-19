(this["webpackJsonpxstate-sample-kit"]=this["webpackJsonpxstate-sample-kit"]||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"id",(function(){return re})),n.d(r,"config",(function(){return ae})),n.d(r,"options",(function(){return oe})),n.d(r,"api",(function(){return ce}));var a={};n.r(a),n.d(a,"id",(function(){return ie})),n.d(a,"config",(function(){return se})),n.d(a,"options",(function(){return le})),n.d(a,"api",(function(){return de}));var o={};n.r(o),n.d(o,"id",(function(){return Ee})),n.d(o,"config",(function(){return ye})),n.d(o,"options",(function(){return we})),n.d(o,"api",(function(){return xe}));var c,u=n(0),i=n.n(u),s=n(55),l=n.n(s),d=(n(87),n(19)),f=(n(88),n(58)),m=n(10),p=n(47),b=n(17),h=n(15),g=n(66),O=n.n(g),v=n(53),j={flex:"1 1 auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},E=function(e){return u.createElement(u.Fragment,null,u.createElement("div",{className:O.a.content,style:j},e.children),u.createElement(v.a,{progress:e.loading?void 0:0}))},y=n(22),w=n(18),x=n(12),k=function(e){return function(t){return t[e]}},I=(c="",function(e){return Object(w.a)(e,Object(y.a)(Object(x.a)(c),x.b))}),C=n(28),S=C.c({id:C.a,name:C.b,username:C.b,email:C.b},"User"),T=(k("id"),k("username")),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(t){return e?"".concat(e,".").concat(t):t}},N=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.replace(/%(\d+)/g,(function(e,t){return"undefined"!=typeof n[t]?n[t]:e}))},L=n(67),B=function(e){return u.createElement("div",{id:"welcome"},N(L["Welcome %username"],T(e.user)))},V=n(50),U=n(61),J=n(4),P=n(27),R=function(e,t){return Object.keys(Object(P.a)({},e,{},t)).reduce((function(n,r){return Object(P.a)({},n,Object(J.a)({},r,Object(P.a)({},e[r]||{},{},t[r]||{})))}),{})},A=function(e,t){return Object(u.useEffect)((function(){var n=0,r=e.subscribe((function(e){return t&&console.groupCollapsed("".concat(t," (").concat(++n,")")),console.log(JSON.stringify(e.value,null,2)),console.log(JSON.stringify(e.context,null,2)),console.log(e),t&&console.groupEnd(),function(){r.unsubscribe()}}))}),[e,t])},M="edit",G="pristine",W="dirty",q="touched",H="touching",D="untouched",$="focused",_="blurred",Q="valid",z="invalid",K="CHANGE",X="FOCUS",Y="BLUR",Z="RESET",ee=n(3);function te(e){var t,n,r=e.id,a=e.isValid,o=e.initialValue,c=F(r),u={eventCreators:{change:function(e){return{type:c(K),value:e}},reset:function(){return{type:c(Z)}},focus:function(){return{type:c(X)}},blur:function(){return{type:c(Y)}}},selector:function(e){var t;return null!==(t=e[r])&&void 0!==t?t:m.none}},i=function(e){return e.type===c(K)},s=function(e){var t,n,r,a,o,c,u,i=e.id,s=F(i);return{type:"parallel",states:(u={},Object(J.a)(u,M,{entry:s("assignInitialValue"),on:(t={},Object(J.a)(t,s(K),{actions:s("assignChange")}),Object(J.a)(t,s(Z),{actions:s("assignInitialValue")}),t)}),Object(J.a)(u,G,{initial:G,states:(n={},Object(J.a)(n,G,{on:Object(J.a)({},s(K),{target:W,cond:s("isHuman")})}),Object(J.a)(n,W,{on:Object(J.a)({},s(Z),G)}),n)}),Object(J.a)(u,q,{initial:D,states:(r={},Object(J.a)(r,D,{on:Object(J.a)({},s(X),{target:H})}),Object(J.a)(r,H,{on:Object(J.a)({},s(Y),{target:q})}),Object(J.a)(r,q,{on:Object(J.a)({},s(Z),D)}),r)}),Object(J.a)(u,Q,{initial:z,states:(o={},Object(J.a)(o,z,{"":{target:Q,cond:s("isValid")},on:Object(J.a)({},s(K),{target:Q,cond:s("isValid")})}),Object(J.a)(o,Q,{on:(a={},Object(J.a)(a,s(K),{target:z,cond:s("isNotValid")}),Object(J.a)(a,s(Z),z),a)}),o)}),Object(J.a)(u,$,{initial:_,states:(c={},Object(J.a)(c,$,{on:Object(J.a)({},s(Y),_)}),Object(J.a)(c,_,{on:Object(J.a)({},s(X),$)}),c)}),u)}}({id:r}),l=Object(ee.b)((function(e,t){var n=i(t)?Object(m.fromNullable)(t.value):e[r];return Object(J.a)({},r,n)})),d=Object(ee.q)((function(e,t){return{type:c(K),value:o,isRobot:!0}})),f={actions:(t={},Object(J.a)(t,c("assignInitialValue"),d),Object(J.a)(t,c("assignChange"),l),t),guards:(n={},Object(J.a)(n,c("isHuman"),(function(e,t){return!!i(t)&&!t.isRobot})),Object(J.a)(n,c("isValid"),(function(e,t){return a(i(t)?Object(m.fromNullable)(t.value):u.selector(e))})),Object(J.a)(n,c("isNotValid"),(function(e,t){return!a(i(t)?Object(m.fromNullable)(t.value):u.selector(e))})),n)};return{id:r,config:s,options:f,api:u}}var ne=te({id:"username",isValid:function(e){return Object(b.pipe)(e,Object(m.fold)(Object(h.constant)(!1),(function(e){return!!e.trim()})))}}),re=ne.id,ae=ne.config,oe=ne.options,ce=ne.api,ue=te({id:"password",isValid:function(e){return Object(b.pipe)(e,Object(m.fold)(Object(h.constant)(!1),(function(e){return!!e.trim()})))}}),ie=ue.id,se=ue.config,le=ue.options,de=ue.api,fe="inProgress",me="submitting",pe="done",be="SUBMIT",he="RESET";var ge,Oe,ve,je=function(e){var t,n,r=e.id,a=F(r),o={eventCreators:{submit:function(e){return{type:a(be),promiser:e}},reset:function(){return{type:a(he)}}},selector:function(e){var t;return null!==(t=e[r])&&void 0!==t?t:m.none}},c=(n=be,function(e){return e.type===a(n)}),u=function(e){var t,n=e.id,r=F(n);return{initial:fe,on:Object(J.a)({},r(he),{target:"".concat(n,".").concat(fe),actions:r("assignInitial")}),states:(t={},Object(J.a)(t,fe,{entry:r("assignInitial"),on:Object(J.a)({},r(be),{target:me})}),Object(J.a)(t,me,{invoke:{id:r("submitOperation"),src:r("submitOperation"),onDone:pe,onError:pe}}),Object(J.a)(t,pe,{entry:r("assignDone")}),t)}}({id:r}),i=Object(ee.b)((function(e){return Object(J.a)({},r,m.none)})),s=function(e,t){return Object(J.a)({},e,t)},l=Object(ee.b)((function(e,t){return/^error.platform/.test(t.type)?s(r,m.some(p.left(t.data))):function(e){return/^done.invoke/.test(e.type)}(t)?s(r,m.some(t.data)):e})),d={services:Object(J.a)({},a("submitOperation"),(function(e,t){return c(t)?t.promiser():Promise.reject("submitService invoked by non-submit event!")})),actions:(t={},Object(J.a)(t,a("assignInitial"),i),Object(J.a)(t,a("assignDone"),l),t),guards:{}};return{id:r,config:u,options:d,api:o}}({id:"status"}),Ee=je.id,ye=je.config,we=je.options,xe=je.api,ke=(ge="login",function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.reduce((function(e,t){return e.api[t.id]=t.api,e.config.states[t.id]=t.config,e.options=R(e.options,t.options),e}),{api:{},config:{id:ge,type:"parallel",states:{}},options:{}}),a=r.api,o=r.config,c=r.options;return{id:ge,api:a,config:o,options:c}})(r,a,o),Ie=ke.config,Ce=ke.api,Se=ke.options,Te=Object(U.b)(Ie,Se),Fe=function(e){return u.createElement(V.a,{"data-test":"btn-reset",type:"button",theme:"secondary",onClick:function(){e.send([Ce.status.eventCreators.reset(),Ce.username.eventCreators.reset(),Ce.password.eventCreators.reset()])}},e.children)},Ne=n(42),Le=n.n(Ne),Be=n(57),Ve=n(11),Ue=(n(69),C.c({code:C.a,error:C.b})),Je=function(e){return function(t){return t.reason===e}},Pe=function(e){return function(t){return{reason:e,error:t}}},Re=Pe("api"),Ae=Pe("decode"),Me=(Pe("error"),Je("api")),Ge=Je("decode"),We=(Je("error"),function(e){return function(){var t=Object(Be.a)(Le.a.mark((function t(n){var r,a,o;return Le.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n();case 3:return r=t.sent,t.next=6,r.json();case 6:a=t.sent,console.log(JSON.stringify(a,null,2)),t.next=20;break;case 15:if(3!==o){t.next=19;break}throw Error(".. my hands up in the air sometime!");case 19:4===o&&delete a.username;case 20:return t.abrupt("return",Object(w.a)(e.decode(a),Ve.f((function(e){return Object(w.a)(Ue.decode(a),Ve.e(Re),Ve.b(Object(x.a)(Ae(e)),x.b))}))));case 23:return t.prev=23,t.t0=t.catch(0),t.abrupt("return",Ve.d({reason:"error",error:t.t0 instanceof Error?t.t0:Error("".concat(t.t0))}));case 27:case"end":return t.stop()}}),t,null,[[0,23]])})));return function(e){return t.apply(this,arguments)}}()}),qe=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e?N.apply(void 0,[e].concat(n)):null},He=function(e){var t=Me(e.failure)?qe(e.api,e.failure.error.code,e.failure.error.error):Ge(e.failure)?qe(e.decode):qe(e.error,e.failure.error);return t?u.createElement("span",{"data-test":"FailureMessage"},t):null},De=n(25),$e=function(e){return u.createElement(He,{failure:e.failure,api:De["The server responded with code %code"],decode:De["The server has responded with an unknown response."],error:De["The following error has occurred"]})},_e=(n(95),n(51)),Qe=n(70),ze=n(40),Ke=function(e){var t=Object(ze.b)(),n=Object(d.a)(t,2),r=n[0];n[1];return u.createElement("form",null,u.createElement(_e.a,{use:"headline3"},"[".concat(r(Qe.titleOfShow),"]")),u.createElement("br",null),u.createElement("br",null),e.usernameInput,u.createElement("br",null),e.passwordInput,u.createElement("br",null),u.createElement("div",null,e.loginButton,e.resetButton))},Xe=function(e){return u.createElement(V.a,Object.assign({},e,{type:"button","data-test":"btn-login",raised:!0,disabled:e.disabled,onClick:e.onClick}),De.Login)},Ye=n(31),Ze=n(43),et=n(74),tt=u.createElement(_e.a,{use:"headline6"},et.usernameLabel),nt={block:{display:"block"}},rt=function(e){return u.createElement(u.Fragment,null,u.createElement("div",null,tt),u.createElement("div",null,u.createElement(Ze.a,{"data-test":"input-username",value:e.value,placeholder:"Username",required:!0,invalid:e.invalid,disabled:e.disabled,onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onBlur,style:nt.block,helpText:{children:e.invalid?u.createElement("span",null,"A username is required!"):"",validationMsg:!0},icon:u.createElement(Ye.a,{icon:"person",theme:e.focused?"primary":""})})))},at=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){e.apply(void 0,n)}}},ot=(Oe="currentTarget",ve="value",function(e){return e[Oe][ve]}),ct=function(e){var t={value:Object(b.pipe)(e.api.selector(e.context),Object(m.fold)(Object(h.constant)(""),h.identity)),onChange:Object(h.flow)(ot,e.api.eventCreators.change,e.send),onFocus:at(e.send)(e.api.eventCreators.focus()),onBlur:at(e.send)(e.api.eventCreators.blur())};return e.children(t)},ut=function(e){return u.createElement(ct,{send:e.send,context:e.current.context,api:ce},(t=e.current,function(e){return u.createElement(rt,Object.assign({},e,{disabled:t.matches("status.submitting"),focused:t.matches("username.focused.focused"),invalid:t.matches("username.touched.touched")&&t.matches("username.valid.invalid")}))}));var t},it=n(75),st=u.createElement(_e.a,{use:"headline6"},it.passwordLabel),lt={display:"block"},dt=function(e){return u.createElement(u.Fragment,null,u.createElement("div",null,st),u.createElement("div",null,u.createElement(Ze.a,{"data-test":"input-password",value:e.value,placeholder:"Password",type:"password",required:!0,invalid:e.invalid,disabled:e.disabled,onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onBlur,style:Object.assign({},e.style,lt),helpText:{children:e.invalid?u.createElement("span",null,"A password is required!"):"",validationMsg:!0},icon:u.createElement(Ye.a,{icon:e.focused?"lock_open":"lock",theme:e.focused?"primary":""})})))},ft=function(e){return u.createElement(ct,{send:e.send,context:e.current.context,api:de},(t=e.current,function(e){return u.createElement(dt,Object.assign({},e,{focused:t.matches("password.focused.focused"),disabled:t.matches("status.submitting"),invalid:t.matches("password.touched.touched")&&t.matches("password.valid.invalid")}))}));var t},mt=function(e){return i.a.createElement(Ke,{usernameInput:i.a.createElement(ut,{send:e.send,current:e.current,context:e.current.context}),passwordInput:i.a.createElement(ft,{send:e.send,current:e.current,context:e.current.context}),loginButton:i.a.createElement(Xe,{disabled:e.canNotSubmit,onClick:e.onLogin}),resetButton:e.resetButton})},pt=function(){var e=Object(Be.a)(Le.a.mark((function e(t){return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",We(S)((function(){return fetch("https://jsonplaceholder.typicode.com/users/1")})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),bt=function(){var e=Object(f.useMachine)(Te),t=Object(d.a)(e,3),n=t[0],r=t[1],a=t[2];A(a,"login");var o=n.matches("status.inProgress"),c=!o,u=n.matches("password.valid.invalid"),s=n.matches("password.valid.invalid"),l=n.matches("status.submitting"),g=c||u||s,O=Object(b.pipe)(Ce.status.selector(n.context),m.fold(Object(h.constant)(!1),(function(e){return Object(b.pipe)(e,p.fold(Object(h.constant)(!1),Object(h.constant)(!0)))}))),v=o?De.Reset:l?De.Cancel:O?De.Logout:De["Try again"],j=i.a.createElement(Fe,{send:r},v),y=i.a.createElement(mt,{send:r,current:n,isInProgress:o,isNotInProgress:c,usernameIsInvalid:u,passwordIsInvalid:s,isSubmitting:l,canNotSubmit:g,onLogin:function(){r(Ce.status.eventCreators.submit((function(){return pt({username:I(n.context.username),password:I(n.context.password)})})))},resetButton:j}),w=Object(b.pipe)(Ce.status.selector(n.context),m.fold(Object(h.constant)(y),(function(e){return Object(b.pipe)(e,p.fold((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement($e,{failure:e}),j)}),(function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(B,{user:e}),j)})))})));return i.a.createElement(E,{loading:l},w)},ht=n(79),gt=n(59),Ot=function(e){u.useEffect((function(){return gt.a.push(e),function(){}}),[e])},vt={setUserId:Object(ee.b)({userId:function(e,t){return t.userId}}),clearUserId:Object(ee.b)({userId:function(e,t){}})},jt=Object(U.b)({id:"routes",initial:"home",context:{},on:{GOTO:[{target:"home",cond:"home"},{target:"users.user",cond:"users.user"},{target:"users",cond:"users"},{target:"notFound"}]},states:{home:{},users:{initial:"home",states:{home:{},user:{entry:"setUserId",exit:"clearUserId"}}},notFound:{}}},{guards:{home:function(e,t){return"home"===t.route},"users.user":function(e,t){return"users"===t.route&&/^\d+$/.test("".concat(t.userId||""))},users:function(e,t){return"users"===t.route}},actions:vt}),Et=Object(u.createContext)(y.c),yt=Et.Provider,wt=Et.Consumer,xt=function(e){return u.createElement(wt,null,function(e){return function(t){var n=Object(w.a)(t,y.b((function(t){return t.bind(null,Object(P.a)({type:"GOTO",route:e.to},e.params),void 0)})),y.a(Object(x.a)(void 0),x.b));return u.createElement("a",{href:"#",onClick:n},e.children)}}(e))},kt=function(e){return u.createElement(wt,null,function(e){return function(t){return u.useEffect((function(){Object(w.a)(t,y.b((function(t){return function(){t({type:"GOTO",route:e.to})}})),y.a(Object(x.a)((function(){})),x.b))()}),[e.to]),null}}(e))},It=function(){Ot("/users");var e=u.useState([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=!1;u.useEffect((function(){return fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return!a&&r(e)})),function(){a=!0}}),[]);var o=n.map((function(e){return u.createElement("li",{key:e.id},u.createElement(xt,{to:"users",params:{userId:e.id}},e.username))}));return u.createElement("ul",null,o)},Ct=function(e){Ot("/users/"+e.id);var t=u.useState(void 0),n=Object(d.a)(t,2),r=n[0],a=n[1],o=!1;return u.useEffect((function(){try{fetch("https://jsonplaceholder.typicode.com/users/"+e.id).then((function(e){return e.json()})).then((function(e){o||(e.id?a(e):a(null))}))}catch(t){a(null)}return function(){o=!0}})),null===r?u.createElement(kt,{to:"notFound"}):r?u.createElement("div",null,u.createElement("h1",null,r.username),u.createElement("label",null,u.createElement("strong",null,"Id")),u.createElement("br",null),r.id,u.createElement("hr",null),u.createElement("label",null,u.createElement("strong",null,"Email")),u.createElement("br",null),r.email):"Loading..."},St=function(){return Ot("/"),u.createElement(u.Fragment,null,u.createElement("h1",null,"Hello CodeSandbox"),u.createElement("h2",null,"Start editing to see some magic happen!"),u.createElement(xt,{to:"users"},"Show users"))},Tt=function(){return Ot("404"),u.createElement("div",null,"404")},Ft=function(e){var t=e.state;return t.matches("home")?u.createElement(St,null):t.matches("users.user")?t.context.userId?u.createElement(Ct,{id:t.context.userId}):u.createElement(kt,{to:"users"}):t.matches("users")?u.createElement(It,null):t.matches("notFound")?u.createElement(Tt,null):u.createElement(kt,{to:"notFound"})},Nt=[Object(ht.a)(/users\/([0-9]+)/,{userId:1}),/users/],Lt=function(){var e=Object(f.useMachine)(jt),t=Object(d.a)(e,3),n=t[0],r=t[1],a=t[2],o=u.useState(!1),c=Object(d.a)(o,2),i=c[0],s=c[1];A(a,"router");var l=y.d(r);return u.useEffect((function(){var e=function(e){var t=e.replace(/^\/|\/$/,"");return Nt.reduce((function(e,n){if(e.match)return e;if(n instanceof RegExp&&n.test(t)){var r=n.exec(t);if(r){var a=r.groups||{},o=Object.keys(a).reduce((function(e,t){var n=a[t];return e.replace("/".concat(n),"")}),r.input).replace(/\//g,".").replace(/^\.|\.$/,"");return{match:!0,event:Object(P.a)({type:"GOTO",route:o},a)}}}return e}),{match:!1,event:{type:"GOTO",route:"home"}}).event}(gt.a.location.pathname);r(e),s(!0)}),[]),i?u.createElement(yt,{value:l},u.createElement("div",{style:{background:"White",padding:20,margin:20}},u.createElement(Ft,{state:n}),u.createElement("hr",null),u.createElement(xt,{to:"home"},"Home"),u.createElement("hr",null),u.createElement(xt,{to:"free-money"},"Free Money"),u.createElement("hr",null),u.createElement(xt,{to:"users",params:{userId:1/0}},"User with ",u.createElement("i",null,"Infinite")," id"))):null},Bt=function(){var e=Object(ze.b)(),t=Object(d.a)(e,2)[1];return i.a.useEffect((function(){t.changeLanguage("nl"),setTimeout((function(){t.changeLanguage("en")}),2500)}),[t]),null},Vt=function(){return i.a.createElement(u.Suspense,{fallback:"..."},i.a.createElement(bt,null),i.a.createElement(Bt,null),i.a.createElement(Lt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ut=n(63),Jt=n(77),Pt=n(78);Ut.a.use(Jt.a).use(Pt.a).use(ze.a).init({fallbackLng:"en",debug:!0,backend:{loadPath:"".concat("/xstate-sample-kit","/locales/{{lng}}/{{ns}}.json")},interpolation:{escapeValue:!1}});Ut.a;l.a.render(i.a.createElement(Vt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},25:function(e){e.exports=JSON.parse('{"Login":"Login","Reset":"Reset","Logout":"Logout","Cancel":"Cancel","Try again":"Try again","The server responded with code %code":"The server responded with %0: %1","The server has responded with an unknown response.":"The server has responded with an unknown response.","The following error has occurred":"The following error has occurred: %0"}')},66:function(e,t,n){e.exports={content:"Content_content__1kQCU"}},67:function(e){e.exports=JSON.parse('{"Welcome %username":"Welcome %0"}')},70:function(e){e.exports=JSON.parse('{"titleOfShow":"title of show"}')},74:function(e){e.exports=JSON.parse('{"usernameLabel":"Username"}')},75:function(e){e.exports=JSON.parse('{"passwordLabel":"Password"}')},82:function(e,t,n){e.exports=n(106)},87:function(e,t,n){},88:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.75694227.chunk.js.map