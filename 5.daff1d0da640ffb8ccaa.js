(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"T4z/":function(n,t,o){"use strict";o.r(t);var u=o("CcnG"),r=function(){return function(){}}(),l=o("pMnS"),s=o("srdk"),i=o("/elH"),e=o("XNvU"),a=function(){function n(n,t){this.activateRoute=n,this.postService=t,this.post=null}return n.prototype.ngOnInit=function(){this.setupPost(this.activateRoute.snapshot.params.id)},n.prototype.setupPost=function(n){var t=this;this.postService.getPostById(n).subscribe({next:function(n){t.post=n},error:function(n){console.error(n)}})},n}(),p=o("ZYCi"),c=u.jb({encapsulation:0,styles:[[""]],data:{}});function b(n){return u.yb(0,[(n()(),u.lb(0,0,null,null,1,"app-posts-list-item",[],null,null,null,s.b,s.a)),u.kb(1,114688,null,0,i.a,[u.h],{post:[0,"post"]},null)],function(n,t){n(t,1,0,t.component.post)},null)}function f(n){return u.yb(0,[(n()(),u.lb(0,0,null,null,1,"app-post-page",[],null,null,null,b,c)),u.kb(1,114688,null,0,a,[p.a,e.a],null,null)],function(n,t){n(t,1,0)},null)}var h=u.hb("app-post-page",a,f,{},{},[]),d=o("Ip0R"),v=o("WOP+"),w=o("t/Na"),k=o("OTDs"),y=function(){return function(){}}(),m=o("PCNd");o.d(t,"PostsModuleNgFactory",function(){return P});var P=u.ib(r,[],function(n){return u.qb([u.rb(512,u.j,u.Y,[[8,[l.a,h]],[3,u.j],u.w]),u.rb(4608,d.l,d.k,[u.t,[2,d.s]]),u.rb(4608,v.a,v.a,[]),u.rb(5120,w.a,function(n){return[new k.a(n)]},[v.a]),u.rb(1073742336,d.b,d.b,[]),u.rb(1073742336,p.m,p.m,[[2,p.s],[2,p.k]]),u.rb(1073742336,y,y,[]),u.rb(1073742336,m.a,m.a,[]),u.rb(1073742336,r,r,[]),u.rb(1024,p.i,function(){return[[{path:":id",component:a}]]},[])])})}}]);