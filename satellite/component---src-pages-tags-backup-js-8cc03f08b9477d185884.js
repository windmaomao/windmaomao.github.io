(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Kvkj:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"a",(function(){return c}));e("q1tI");var r=e("qKvR"),u=function(n){var t=n.title;return Object(r.c)("div",null,Object(r.c)("h1",null,t))},i=function(n){var t=n.site,e=n.children,i=t.title;return Object(r.c)("div",null,Object(r.c)(u,{title:i}),e)},o={on:function(){},currentUser:function(){return null}};"undefined"!=typeof window&&(o=e("lI74"),window.netlifyIdentity=o,o.init()),o.on("init",(function(n){console.log("Init",n)})),o.on("login",(function(n){console.log("Login",n)})),o.on("logout",(function(){console.log("Logout")}));var c=function(){var n=o.currentUser();if(!n)return Object(r.c)("button",{onClick:function(){o.open()}},"Login");var t=n.user_metadata;return Object(r.c)("span",null,t&&Object(r.c)("img",{title:t.full_name,src:t.avatar_url,alt:"profile",width:"24",height:"24"}),"  ",Object(r.c)("button",{onClick:function(){o.logout()}},"Logout"))}},W52E:function(n,t,e){var r=e("BjK0");e("939a")("isFrozen",(function(n){return function(t){return!r(t)||!!n&&n(t)}}))},W5HQ:function(n,t,e){"use strict";e.r(t),e.d(t,"pageQuery",(function(){return i}));e("q1tI");var r=e("Kvkj"),u=e("qKvR");t.default=function(n){var t=n.data,e=t.site.siteMetadata,i=t.allBlogPost.group;return Object(u.c)(r.b,{site:e},Object(u.c)("h1",null,"Tags"),Object(u.c)("ul",null,i.map((function(n){return Object(u.c)("li",{key:n.tag},n.tag," (",n.totalCount,")")}))))};var i="569724239"},bNpn:function(n,t,e){var r=e("BjK0");e("939a")("isExtensible",(function(n){return function(t){return!!r(t)&&(!n||n(t))}}))},nMRu:function(n,t,e){"use strict";var r=e("P8UN"),u=e("DFzH"),i=e("kxs/");r(r.P+r.F*e("96qb")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(n){var t=u(this),e=i(t);return"number"!=typeof e||isFinite(e)?t.toISOString():null}})},nWfQ:function(n,t,e){var r=e("P8UN"),u=e("nsRs"),i=e("nONw"),o=e("1a8y"),c=e("BjK0"),a=e("96qb"),l=e("16Xr"),f=(e("emib").Reflect||{}).construct,s=a((function(){function n(){}return!(f((function(){}),[],n)instanceof n)})),p=!a((function(){f((function(){}))}));r(r.S+r.F*(s||p),"Reflect",{construct:function(n,t){i(n),o(t);var e=arguments.length<3?n:i(arguments[2]);if(p&&!s)return f(n,t,e);if(n==e){switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(n,r))}var a=e.prototype,v=u(c(a)?a:Object.prototype),g=Function.apply.call(n,v,t);return c(g)?g:v}})},"t+fG":function(n,t,e){var r=e("P8UN"),u=e("96qb"),i=e("ap2Z"),o=/"/g,c=function(n,t,e,r){var u=String(i(n)),c="<"+t;return""!==e&&(c+=" "+e+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+u+"</"+t+">"};n.exports=function(n,t){var e={};e[n]=t(c),r(r.P+r.F*u((function(){var t=""[n]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",e)}},y7hu:function(n,t,e){"use strict";e("t+fG")("link",(function(n){return function(t){return n(this,"a","href",t)}}))},zTTH:function(n,t,e){"use strict";var r=e("P8UN"),u=e("Wadk")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(n){return u(this,n,arguments.length>1?arguments[1]:void 0)}}),e("Dq1/")(i)}}]);