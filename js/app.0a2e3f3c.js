(function(){var t={2613:function(t,s,n){"use strict";var e=n(5130),i=n(6768);function a(t,s,n,e,a,o){const r=(0,i.g2)("TopVue"),c=(0,i.g2)("RouterView"),u=(0,i.g2)("FooterVue");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(r),(0,i.Lk)("main",null,[(0,i.bF)(c)]),(0,i.bF)(u)],64)}n(4114);var o=n.p+"img/bootstrap-logo.f67c41a5.svg";const r={class:"navbar bg-body-tertiary"},c=(0,i.Lk)("div",{class:"container"},[(0,i.Lk)("a",{class:"navbar-brand",href:"#"},[(0,i.Lk)("img",{src:o,alt:"Logo",width:"30",height:"24",class:"d-inline-block align-text-top"}),(0,i.eW)(" KVD ")])],-1),u=[c];function l(t,s,n,e,a,o){return(0,i.uX)(),(0,i.CE)("nav",r,u)}var d={name:"TopVue"},p=n(1241);const m=(0,p.A)(d,[["render",l]]);var h=m,k=n(4232);const v={class:"container-fluid footer-wrapp"},f={class:"footer-box"},b={class:"m-0"};function g(t,s,n,e,a,o){const r=(0,i.g2)("FunkVue");return(0,i.uX)(),(0,i.CE)("div",v,[(0,i.Lk)("footer",null,[(0,i.Lk)("div",f,[(0,i.Lk)("p",b,"© Ivan GmbH "+(0,k.v_)(o.currentData),1),(0,i.bF)(r)])])])}function y(t,s,n,e,a,o){return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("a",{onClick:s[0]||(s[0]=t=>o.performTasksWithCare())}),(0,i.eW)(" "+(0,k.v_)(t.message),1)],64)}var L={name:"FunkVue",data(){return{}},methods:{dTask(){return alert(""+("Дата: "+this.firstTask()+" Время: "+this.secondTask()))},handleTasks(){this.firstTask(),this.secondTask()},firstTask(){let t=new Date;return t.getDate()+t.toLocaleString("default",{month:"long"})},secondTask(){let t=new Date;return String(t.getHours())+":"+String(t.getMinutes())},performTasksWithCare(){try{this.firstTask()}catch(t){console.error("Ошибка в firstTask",t)}try{this.secondTask()}catch(t){console.error("Проблема в secondTask",t)}try{this.dTask()}catch(t){console.error("Проблема в dTask",t)}}}};const w=(0,p.A)(L,[["render",y],["__scopeId","data-v-3626b7b8"]]);var F=w,x={name:"FooterVue",components:{FunkVue:F},data(){return{}},computed:{currentData(){var t=new Date;return""+(t.getFullYear()+" "+t.getDate()+" "+t.toLocaleString("default",{month:"long"})+" "+t.getHours()+":"+t.getMinutes())}},methods:{}};const T=(0,p.A)(x,[["render",g]]);var S=T,j={name:"App",components:{TopVue:h,FooterVue:S},methods:{goToCabinet(){this.$router.push("/cabinet")}}};const C=(0,p.A)(j,[["render",a]]);var O=C,E=(n(3829),n(8077),n(1387)),V=n.p+"img/vd.d708d062.jpg";const A=t=>((0,i.Qi)("data-v-6e424c15"),t=t(),(0,i.jt)(),t),P={class:"container"},D={class:"main-content"},_=A((()=>(0,i.Lk)("aside",{class:"sidebar"},[(0,i.Lk)("img",{src:V,class:"img-wrap",alt:"photovd"})],-1))),N={class:"my-section"},I=(0,i.Fv)('<div class="about-me" data-v-6e424c15><h1 class="about-me-name" data-v-6e424c15>Курочкін Володимир Данилович</h1><h2 class="about-me-profession" data-v-6e424c15>(24. 11. 1946 - 24. 11. 2023)</h2><p class="about-me-description" data-v-6e424c15> Володимир Данилович (24. 11. 1946, м. Ленінакан, нині Ґюмрі, Вірменія) – матеріалознавець. Доктор хімічних наук (2009). Закін. Київ. політех. інститут (1971). Від 1967 працює в Інституті проблем матеріалознавства НАНУ (Київ): від 2010 – провідний науковий співробітник Наук. інтереси пов’язані з експерим. дослідж. та матем. моделюванням високотемператур. фіз.-хім. процесів у плазмі газових розрядів і на її границі з електродами, випаро­вування елементів, процесів ва­куум. конденсації бінар. систем. </p></div><div class="my-projects" data-v-6e424c15><h3 class="my-content-title text-uppercase" data-v-6e424c15>Основні праці</h3><ul class="my-projects-list" data-v-6e424c15><li class="my-projects-item" data-v-6e424c15><span class="my-projects-text" data-v-6e424c15><p data-v-6e424c15> Кинетика испарения в приближении теории переходного состояния // Докл. АН УССР. 1985. № 9 (спів­авт.); </p></span></li><li class="my-projects-item" data-v-6e424c15><span class="my-projects-text" data-v-6e424c15><p data-v-6e424c15> Interaction of a Spark Discharge with W–Cu electrodes Alloyed by REE // High Tem­perature Materials and Processes. 2000. Vol. 19, № 6 (спів­авт.); </p></span></li><li class="my-projects-item" data-v-6e424c15><span class="my-projects-text" data-v-6e424c15><p data-v-6e424c15> Особенности образования аргоносодержащих моле­кулярных ионов в криоохладжаемой плазме тлеющего разряда // УХЖ. 2003. Т. 69, № 9; </p></span></li><li class="my-projects-item" data-v-6e424c15><span class="my-projects-text" data-v-6e424c15><p data-v-6e424c15> Мас-спектри жевріючого розряду при мас-спектрометричному аналізі високолегованих сталей // ПорМ. 2008. № 3/4; </p></span></li></ul></div>',2),M={class:"work-experience"},H=A((()=>(0,i.Lk)("h3",{class:"my-content-title text-uppercase"}," Композиції у виконанні Курочка Володимир Данилович ",-1))),W={class:"work-experience-company"},X=A((()=>(0,i.Lk)("h6",null," Усі композиції – це запис живого виконання на електронному піаніно. ",-1))),G=A((()=>(0,i.Lk)("p",{class:"my-work"},"Вересень 2023",-1))),K={class:"row"},R={class:"col-md-6"},z={class:"company-list"},B={class:"my-work-list"},Q=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"}," Schubert-Serenade (F.Liszt) ",-1))),Y={class:"my-work-list"},$=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"},"E.Grieg Nocturne",-1))),q={class:"my-work-list"},J=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"},"E.Grieg Solveig's Song",-1))),U={class:"my-work-list"},Z=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"},"Beethoven Sonata No.8",-1))),tt={class:"my-work-list"},st=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"},"Beethoven Sonata No.14",-1))),nt={class:"my-work-list"},et=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"},"F.Liszt Consolation No.3",-1))),it={class:"my-work-list"},at=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"},"F.Chopin Étude No.13",-1))),ot={class:"col-md-6 d-none"},rt={class:"my-work-list"},ct=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"},"F.Chopin Valse No.7",-1))),ut={class:"my-work-list"},lt=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"}," P.I. Tchaikovsky Autumn Song ",-1))),dt={class:"my-work-list"},pt=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"}," P.I. Tchaikovsky April (Autumn Song) ",-1))),mt={class:"my-work-list"},ht=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"}," P.I. Tchaikovsky November (Autumn Song) ",-1))),kt={class:"my-work-list"},vt=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"}," E.Grieg Solveig's Song (Doo) ",-1))),ft={class:"my-work-list"},bt=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"}," P.I. Tchaikovsky Oktober / piano (Autumn Song) ",-1))),gt={class:"my-work-list"},yt=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"}," S.Rachmaninoff Prelude Op.3, No.2 ",-1))),Lt={class:"my-work-list"},wt=A((()=>(0,i.Lk)("h6",{class:"text-uppercase"},"F.Chopin Prelude No.3",-1)));function Ft(t,s,n,e,a,o){const r=(0,i.g2)("midi-player");return(0,i.uX)(),(0,i.CE)("div",P,[(0,i.Lk)("div",D,[_,(0,i.Lk)("div",N,[I,(0,i.Lk)("div",M,[(0,i.Lk)("div",null,[H,(0,i.Lk)("div",W,[X,G,(0,i.Lk)("div",K,[(0,i.Lk)("div",R,[(0,i.Lk)("ul",z,[(0,i.Lk)("li",B,[Q,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/1.mid"})]),(0,i.Lk)("li",Y,[$,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/2.mid"})]),(0,i.Lk)("li",q,[J,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/3.mid"})]),(0,i.Lk)("li",U,[Z,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/6.mid"})]),(0,i.Lk)("li",tt,[st,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/8.mid"})]),(0,i.Lk)("li",nt,[et,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/9.mid"})]),(0,i.Lk)("li",it,[at,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/10.mid"})])])]),(0,i.Lk)("div",ot,[(0,i.Lk)("ul",null,[(0,i.Lk)("li",rt,[ct,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/11.mid"})]),(0,i.Lk)("li",ut,[lt,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/12.mid"})]),(0,i.Lk)("li",dt,[pt,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/13.mid"})]),(0,i.Lk)("li",mt,[ht,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/14.mid"})]),(0,i.Lk)("li",kt,[vt,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/17.mid"})]),(0,i.Lk)("li",ft,[bt,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/19.mid"})]),(0,i.Lk)("li",gt,[yt,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/20.mid"})]),(0,i.Lk)("li",Lt,[wt,(0,i.bF)(r,{"sound-font":"",src:"https://susaninivan.github.io/midi/21.mid"})])])])])])])])])])])}var xt={name:"HomePage",components:{},data(){return{}},computed:{}};const Tt=(0,p.A)(xt,[["render",Ft],["__scopeId","data-v-6e424c15"]]);var St=Tt;const jt=[{path:"/",component:St}],Ct=(0,E.aE)({history:(0,E.sC)(),routes:jt}),Ot=(0,e.Ef)(O);Ot.use(Ct),Ot.mount("#app")},1351:function(){},5817:function(){},8590:function(){},3857:function(){},4530:function(){},8108:function(){},1234:function(){}},s={};function n(e){var i=s[e];if(void 0!==i)return i.exports;var a=s[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){n.amdO={}}(),function(){var t=[];n.O=function(s,e,i,a){if(!e){var o=1/0;for(l=0;l<t.length;l++){e=t[l][0],i=t[l][1],a=t[l][2];for(var r=!0,c=0;c<e.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](e[c])}))?e.splice(c--,1):(r=!1,a<o&&(o=a));if(r){t.splice(l--,1);var u=i();void 0!==u&&(s=u)}}return s}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[e,i,a]}}(),function(){n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,{a:s}),s}}(),function(){n.d=function(t,s){for(var e in s)n.o(s,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/vd/"}(),function(){var t={524:0};n.O.j=function(s){return 0===t[s]};var s=function(s,e){var i,a,o=e[0],r=e[1],c=e[2],u=0;if(o.some((function(s){return 0!==t[s]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(c)var l=c(n)}for(s&&s(e);u<o.length;u++)a=o[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},e=self["webpackChunkvt"]=self["webpackChunkvt"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=n.O(void 0,[504],(function(){return n(2613)}));e=n.O(e)})();
//# sourceMappingURL=app.0a2e3f3c.js.map