(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"08C0":function(e,n,c){"use strict";c.r(n),c.d(n,"ActionExamplesModule",(function(){return p}));var t=c("2kYt"),i=c("0FLW"),o=c("sEIs"),l=c("9FST"),s=c("EM62"),a=c("fNxJ"),r=c("VKQk"),u=c("8A7F");function b(e,n){if(1&e){const e=s.Ub();s.Tb(0,"button",1),s.ac("click",(function(){s.vc(e);const c=n.$implicit;return s.ec().onSelect(c)})),s.Ob(1,"nx-icon",2),s.Jc(2),s.Sb()}if(2&e){const e=n.$implicit,c=s.ec();s.kc("selected",e===c.selectedAction),s.Bb(1),s.kc("name",e.icon),s.Bb(1),s.Lc(" ",e.label,"\n")}}let f=(()=>{class e{constructor(){this.actions=[{icon:"file-text",label:"All Files"},{icon:"calendar",label:"Calendar"},{icon:"mail-o",label:"Email"},{icon:"user-business-o",label:"My Profile"},{icon:"file",label:"Recent Downloads"}]}ngOnInit(){this.selectedAction=this.actions[1]}onSelect(e){this.selectedAction=e}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["nx-action-example"]],decls:1,vars:1,consts:[["nxAction","",3,"selected","click",4,"ngFor","ngForOf"],["nxAction","",3,"selected","click"],["nxActionIcon","",3,"name"]],template:function(e,n){1&e&&s.Hc(0,b,3,3,"button",0),2&e&&s.kc("ngForOf",n.actions)},directives:[t.s,a.a,r.a,u.a],styles:[""]}),e})();function m(e,n){if(1&e&&(s.Tb(0,"button",1),s.Ob(1,"nx-icon",2),s.Jc(2),s.Sb()),2&e){const e=n.$implicit;s.kc("queryParams",e.query),s.Bb(1),s.kc("name",e.icon),s.Bb(1),s.Lc(" ",e.label,"\n")}}let d=(()=>{class e{constructor(){this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-business-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["nx-action-with-router-example"]],decls:1,vars:1,consts:[["nxAction","","routerLink","./","routerLinkActive","is-selected",3,"queryParams",4,"ngFor","ngForOf"],["nxAction","","routerLink","./","routerLinkActive","is-selected",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(e,n){1&e&&s.Hc(0,m,3,3,"button",0),2&e&&s.kc("ngForOf",n.actions)},directives:[t.s,a.a,o.f,o.g,r.a,u.a],styles:[""]}),e})(),p=(()=>{class e{static components(){return{action:f,"action-with-router":d}}}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(n){return new(n||e)},imports:[[l.a,o.i,i.c,t.c]]}),e})()}}]);