(this.webpackJsonpsheet=this.webpackJsonpsheet||[]).push([[0],{12:function(e,n,t){e.exports=t(19)},19:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=t(3),l=0,u=function(e){return{createSheet:function(n){var t=new Array(n).fill(null),r=t.map((function(n){return e()})),a={onAnswer:function(e,n){t[e]=n}},o=function(e){return null!==t[e]},i=function(e){var n=r[e].answer;return"".concat(n)===t[e]},c={touched:o,checked:i,stats:function(){return r.reduce((function(e,n,t){return o(t)&&(e.answered++,i(t)&&e.correct++),e}),{correct:0,answered:0,total:n})}};return{sheetId:++l,questions:r,answers:t,handlers:a,utils:c}}}},s=Math.floor,f=Math.random,d=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return s(f()*(e-n+1))+n},m=function(e,n){return{first:e,second:n,answer:e+n,operator:"+"}},p=function(e,n){if(e<n){var t=e;e=n,n=t}return{first:e,second:n,answer:e-n,operator:"-"}},v=function(e){var n=e.min,t=e.max,r=e.operator;return console.log(n),function(){var e,a=d(t,n),o=d(t,n);switch(r){case"+-":e=d(2)?m(a,o):p(a,o);break;case"x":e=function(e,n){return{first:e,second:n,answer:e*n,operator:"x"}}(a,o);break;case"-":e=p(a,o);break;case"+":default:e=m(a,o)}return e}},b=t(1),x=t(2);function g(){var e=Object(b.a)(["\n  position: fixed;\n  top: 20%;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  button {\n    border: none;\n    font-size: 16px;\n    padding: 0.2rem;\n    margin: 0.1rem 0;\n    cursor: pointer;\n    font-size: 22px;\n  }  \n"]);return g=function(){return e},e}var w=x.a.div(g()),h=[{label:"1x",gen:v({max:6,operator:"x",min:2})},{label:"2+",gen:v({max:20,operator:"+",min:5})},{label:"2-",gen:v({max:20,operator:"-",min:5})},{label:"2x",gen:v({max:10,operator:"x",min:2})},{label:"3+-",gen:v({max:30,operator:"+-",min:5})},{label:"4+-",gen:v({max:40,operator:"+-",min:6})},{label:"5+-",gen:v({max:50,operator:"+-",min:8})},{label:"8+-",gen:v({max:80,operator:"+-",min:8})},{label:"9+-",gen:v({max:120,operator:"+-",min:14})},{label:"10+-",gen:v({max:180,operator:"+-",min:16})},{label:"11+-",gen:v({max:250,operator:"+-",min:26})},{label:"12+-",gen:v({max:800,operator:"+-",min:26})}],E=function(e){var n=e.onSelect,t=function(e){return function(){var t=u(e).createSheet(100);n(t)}};return a.a.createElement(w,null,h.map((function(e){return a.a.createElement("button",{key:e.label,onClick:t(e.gen)},e.label)})))},y={fontFamily:"'Walter Turncoat', cursive"};function k(){var e=Object(b.a)(["\n  background-color: ",";\n  font-family: ",";\n  font-size: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: ",";\n  margin: 1rem 1rem;\n  padding: 1rem;\n\n  input {\n    background-color: ",";\n    font-family: ",";\n    font-size: ",";\n    border-left: none;\n    border-right: none;\n    border-bottom: none;\n    border-top: 2px solid ",";\n    box-sizing: border-box;\n    text-align: right;\n    width: 100%;\n    line-height: 1.8;\n    color: ",";\n    outline: 0;\n  }\n\n  .index {\n    float: left;\n    font-size: 11px;\n    text-align: left;\n  }\n"]);return k=function(){return e},e}var j=y.fontFamily,O=function(e){return e.error?"red":"black"},S=function(e){return e.active?"#f2f2f2":"white"},C=x.a.div(k(),S,j,"2.5rem","9.5rem",S,j,"2.5rem",O,O),z=[32],F=function(e){var n=e.i,t=e.onAnswer,o=e.first,i=e.second,c=e.operator,l=e.active,u=e.error,s=e.onFocus,f=e.onPrevNext,d=Object(r.useRef)(null);Object(r.useEffect)((function(){if(l){var e=d.current;e&&(e.focus(),e.scrollIntoView({block:"center"}))}}),[l]);return a.a.createElement("div",null,a.a.createElement("div",{className:"index"},n+1,")"),a.a.createElement(C,{active:l,error:u},a.a.createElement("div",null,o),a.a.createElement("div",null,c," \xa0",i),a.a.createElement("div",null,a.a.createElement("input",{ref:d,inputMode:"numeric",onKeyDown:function(e){13!==e.keyCode?e.keyCode>=48&&e.keyCode<=57||(37!==e.keyCode?39!==e.keyCode?z.indexOf(e.keyCode)>=0&&e.preventDefault():f(1):f(-1)):t(e.target.value)},onFocus:s,onBlur:function(e){t(e.target.value)}}))))};function A(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return A=function(){return e},e}var I=x.a.div(A()),q=function(e){var n=e.questions,t=e.handlers,o=e.utils,i=e.onStats,l=Object(r.useState)(0),u=Object(c.a)(l,2),s=u[0],f=u[1],d=t.onAnswer,m=o.touched,p=o.checked,v=function(e){return function(){f(e)}},b=function(e){return function(n){d(e,n),i(o.stats()),f(e+1)}},x=function(e){return!!m(e)&&!p(e)},g=function(e){var n=s+e;n<0&&(n=0),f(n)};return a.a.createElement(I,null,n.map((function(e,n){return a.a.createElement(F,{i:n,key:n,onFocus:v(n),active:n===s,first:e.first,second:e.second,operator:e.operator,answer:e.answer,onAnswer:b(n),error:x(n),onPrevNext:g})})))};function M(){var e=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: black;\n  color: white;\n  padding: 1rem;\n  font-size: 1.25rem;\n  & > div {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    .error {\n      color: coral;\n    }\n  }\n"]);return M=function(){return e},e}var N=x.a.div(M()),B=function(e){var n=e.total,t=e.correct,r=e.answered;return a.a.createElement(N,null,a.a.createElement("div",null,a.a.createElement("div",null,"Total: \xa0 ",n),a.a.createElement("div",null,"Correct: \xa0 ",t),a.a.createElement("div",null,"Error: \xa0",a.a.createElement("span",{className:"error"},r-t))))},D=function(){var e=Object(r.useState)(0),n=Object(c.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){setInterval((function(){a((function(e){return e+1}))}),1e3)}),[]),t};function J(){var e=Object(b.a)(["\n  position: fixed;\n  right: 1rem;\n  bottom: 1rem;\n  opacity: 0.4;\n"]);return J=function(){return e},e}var P=x.a.div(J()),T=function(){var e=D();return a.a.createElement(P,null,e)};function K(){var e=Object(b.a)(["\n  font-family: ",";\n  padding: 0 5rem;\n"]);return K=function(){return e},e}var R=x.a.div(K(),y.fontFamily),V=v({max:10,operator:"+"}),W=function(){var e=Object(r.useState)(u(V).createSheet(100)),n=Object(c.a)(e,2),t=n[0],o=n[1],i=t.sheetId,l=t.questions,s=t.answers,f=t.handlers,d=t.utils,m=Object(r.useState)(d.stats()),p=Object(c.a)(m,2),v=p[0],b=p[1],x=v.total,g=v.correct,w=v.answered;return a.a.createElement(R,null,a.a.createElement("h1",null,"\xa0"),a.a.createElement(E,{onSelect:function(e){o(e),b(e.utils.stats())}}),a.a.createElement(B,{total:x,correct:g,answered:w}),a.a.createElement(q,{key:i,questions:l,answers:s,handlers:f,utils:d,onStats:b}),a.a.createElement(T,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(W,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5ad27fbe.chunk.js.map