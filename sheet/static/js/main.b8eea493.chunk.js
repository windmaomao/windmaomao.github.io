(this.webpackJsonpsheet=this.webpackJsonpsheet||[]).push([[0],{14:function(e,n,t){e.exports=t(21)},21:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(9),c=t.n(o),i=t(3),l=0,u=function(e){return{createSheet:function(n){var t=new Array(n).fill(null),r=t.map((function(n){return e()})),a={onAnswer:function(e,n){t[e]=n}},o=function(e){return null!==t[e]},c=function(e){var n=r[e].answer;return"".concat(n)===t[e]},i={touched:o,checked:c,stats:function(){return r.reduce((function(e,n,t){return o(t)&&(e.answered++,c(t)&&e.correct++),e}),{correct:0,answered:0,total:n})}};return{sheetId:++l,questions:r,answers:t,handlers:a,utils:i}}}},s=function(e){return Math.floor(Math.random()*e)},f=function(e){var n=e.max,t=e.operator;return{gen:function(){var e,r,a=[s(n),s(n)],o=a[0],c=a[1];switch(t){case"-":o<c&&(r=o,o=c,c=r),e=o-c;break;case"x":e=o*c;break;default:e=o+c}return{first:o,second:c,answer:e,operator:t}}}},d=t(2),m=t(1);function v(){var e=Object(d.a)(["\n  position: fixed;\n  top: 20%;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  button {\n    border: none;\n    font-size: 16px;\n    padding: 0.2rem;\n    margin: 0.1rem 0;\n    cursor: pointer;\n    font-size: 22px;\n  }  \n"]);return v=function(){return e},e}var p=m.a.div(v()),b=[{label:"+",gen:f({max:12,operator:"+"}).gen},{label:"-",gen:f({max:12,operator:"-"}).gen},{label:"+",gen:f({max:20,operator:"+"}).gen},{label:"-",gen:f({max:20,operator:"-"}).gen}],g=function(e){var n=e.onSelect,t=function(e){return function(){var t=u(e).createSheet(100);n(t)}};return a.a.createElement(p,null,b.map((function(e){return a.a.createElement("button",{onClick:t(e.gen)},e.label)})))},h={fontFamily:"'Walter Turncoat', cursive"};function w(){var e=Object(d.a)(["\n  background-color: ",";\n  font-family: ",";\n  font-size: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: ",";\n  margin: 1rem 1rem;\n  padding: 1rem;\n\n  input {\n    background-color: ",";\n    font-family: ",";\n    font-size: ",";\n    border-left: none;\n    border-right: none;\n    border-bottom: none;\n    border-top: 2px solid ",";\n    box-sizing: border-box;\n    text-align: right;\n    width: 100%;\n    line-height: 1.8;\n    color: ",";\n    outline: 0;\n  }\n\n  .index {\n    float: left;\n    font-size: 11px;\n    text-align: left;\n  }\n"]);return w=function(){return e},e}var x=h.fontFamily,E=function(e){return e.error?"red":"black"},y=function(e){return e.active?"#f2f2f2":"white"},k=m.a.div(w(),y,x,"2.5rem","9.5rem",y,x,"2.5rem",E,E),j=[8,9,37,39],O=function(e){var n=e.i,t=e.onAnswer,o=e.first,c=e.second,i=e.operator,l=e.active,u=e.error,s=e.onFocus,f=Object(r.useRef)(null);Object(r.useEffect)((function(){if(l){var e=f.current;e&&(e.focus(),e.scrollIntoView({block:"center"}))}}),[l]);return a.a.createElement("div",null,a.a.createElement("div",{className:"index"},n+1,")"),a.a.createElement(k,{active:l,error:u},a.a.createElement("div",null,o),a.a.createElement("div",null,i," \xa0\xa0",c),a.a.createElement("div",null,a.a.createElement("input",{ref:f,onKeyDown:function(e){console.log(e.keyCode),13!==e.keyCode&&32!==e.keyCode||t(e.target.value),e.keyCode>=48&&e.keyCode<=57||j.indexOf(e.keyCode)<0&&e.preventDefault()},onFocus:s}))))};function S(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return S=function(){return e},e}var C=m.a.div(S()),z=function(e){var n=e.questions,t=e.handlers,o=e.utils,c=e.onStats,l=Object(r.useState)(0),u=Object(i.a)(l,2),s=u[0],f=u[1],d=t.onAnswer,m=o.touched,v=o.checked,p=function(e){return function(){f(e)}},b=function(e){return function(n){d(e,n),c(o.stats()),f(e+1)}},g=function(e){return!!m(e)&&!v(e)};return a.a.createElement(C,null,n.map((function(e,n){return a.a.createElement(O,{i:n,key:n,onFocus:p(n),active:n===s,first:e.first,second:e.second,operator:e.operator,answer:e.answer,onAnswer:b(n),error:g(n)})})))};function F(){var e=Object(d.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: black;\n  color: white;\n  padding: 1rem;\n  font-size: 1.25rem;\n  & > div {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    .error {\n      color: coral;\n    }\n  }\n"]);return F=function(){return e},e}var A=m.a.div(F()),I=function(e){var n=e.total,t=e.correct,r=e.answered;return a.a.createElement(A,null,a.a.createElement("div",null,a.a.createElement("div",null,"Total: \xa0 ",n),a.a.createElement("div",null,"Correct: \xa0 ",t),a.a.createElement("div",null,"Error: \xa0",a.a.createElement("span",{className:"error"},r-t))))},q=t(5),M=t(13),D=function(){var e=Object(r.useState)(0),n=Object(M.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){setInterval((function(){a((function(e){return e+1}))}),1e3)}),[]),t};function J(){var e=Object(q.a)(["\n  position: fixed;\n  right: 1rem;\n  bottom: 1rem;\n  opacity: 0.4;\n"]);return J=function(){return e},e}var N=m.a.div(J()),T=function(){var e=D();return a.a.createElement(N,null,e)};function B(){var e=Object(q.a)(["\n  font-family: ",";\n  padding: 0 5rem;\n"]);return B=function(){return e},e}var K=m.a.div(B(),h.fontFamily),R=f({max:10,operator:"+"}).gen,V=function(){var e=Object(r.useState)(u(R).createSheet(100)),n=Object(i.a)(e,2),t=n[0],o=n[1],c=t.sheetId,l=t.questions,s=t.answers,f=t.handlers,d=t.utils,m=Object(r.useState)(d.stats()),v=Object(i.a)(m,2),p=v[0],b=v[1],h=p.total,w=p.correct,x=p.answered;return a.a.createElement(K,null,a.a.createElement("h1",null,"\xa0"),a.a.createElement(g,{onSelect:function(e){o(e),b(e.utils.stats())}}),a.a.createElement(I,{total:h,correct:w,answered:x}),a.a.createElement(z,{key:c,questions:l,answers:s,handlers:f,utils:d,onStats:b}),a.a.createElement(T,null))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(V,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b8eea493.chunk.js.map