'use strict';$(document).ready(function(){setup(),$('.navbar-burger').click(function(){$('#burger').toggleClass('is-active'),$('#navbar').toggleClass('is-active')})});function setup(){new Vue({el:'body',data:{root:'https://windmaomao.github.io/',resources:[],source:'',style:'whitey',index:'resume/profile-frontend',md:'',toc:!0,single:!1,admin:!1,sidebar:!0,compiled:''},filters:{formatId:function formatId(a){return a?a.split('-').join(' '):''}},watch:{source:function source(){this.compiled=marked(this.source,{sanitize:!0,smartypants:!0}),this.$nextTick(function(){Prism.highlightAll(),$('#toc').toc({selectors:'h2,h3'}),$('#burger').removeClass('is-active'),$('#navbar').removeClass('is-active')})}},methods:{scrollTop:function scrollTop(){$('html, body').animate({scrollTop:0},'slow')},reset:function reset(){this.style='github',this.changeStyle()},loadMd:function loadMd(a){var b=this,c=this.root+a+'.md';$.get(c,function(a){b.source=a}),$('html, body').animate({scrollTop:0},'slow')},loadIndex:function loadIndex(){this.loadMd(this.index)},changeStyle:function changeStyle(){var a=this.root+'style/',b=document.getElementById('style');b&&(b.href=a+this.style+'.css'),localStorage.setItem('qp-style',this.style)},toggleSidebar:function toggleSidebar(){this.sidebar=!this.sidebar},getParams:function getParams(){var a={};window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(b,c,d){a[c]=d}),this.style=a.st||this.style,this.md=a.md||this.md,this.single=a.single||this.single,this.admin=a.ad||!1,this.sidebar=!a.nt&&this.sidebar}},created:function created(){this.blogs=['index','power-of-loss','identity-debt','sustainable-prototyping','protection-from-loss','perfect-google-map','middle-ground','reusable-form','helping-others','law-of-winning','reusable-components','angular-on-windows','tiny-upscaling','build-new-system','dynamic-static-approach','container-to-rescue','being-dependent','active-management','floating-pot'],this.books=['index','art-of-war','art-of-war-wisdom','big-shifts-ahead','bonds-unbeaten-path','five-rules-stock-investing','slash-retirement-risk'],this.repos=['angular2-mc-common','angular-mc-common','aof-form','kingslanding','ng-admin-restify','mongoose-restify','event-services','dbvals-audit'],this.financials=['tree-structure','balace-sheet','income-statement','investment'],this.others=['todo','purchase','project','publication','performance','company','recommendation'],this.resources=[{type:'book',title:'Books',items:this.books},{type:'repository',title:'Repos',items:this.repos},{type:'blog',title:'Blogs',items:this.blogs},{type:'finance',title:'Financials',items:this.financials},{type:'other',title:'Others',items:this.others}],this.styles=['academic','dropbox','github','gothic','han','newsprint','pixyll','whitey'],this.style=localStorage.getItem('qp-style')||this.style,this.getParams(),this.changeStyle(),this.loadIndex()}})}
//# sourceMappingURL=app.js.map