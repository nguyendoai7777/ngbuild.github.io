(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{bXtv:function(r,a,n){"use strict";n.r(a),n.d(a,"ProductsModuleNgFactory",function(){return W});var e=n("8Y7J");class t{}var s=n("pMnS"),l=n("SVse"),i=n("UhP/"),o=n("8LU1"),u=n("quSY"),b=n("xgIS"),m=n("pLZG");class c{constructor(r){this._elementRef=r}}const p=Object(i.w)(c,"primary"),d=new e.q("mat-progress-bar-location",{providedIn:"root",factory:function(){const r=Object(e.U)(l.d),a=r?r.location:null;return{getPathname:()=>a?a.pathname+a.search:""}}});let g=0;class f extends p{constructor(r,a,n,t){super(r),this._elementRef=r,this._ngZone=a,this._animationMode=n,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new e.n,this._animationEndSubscription=u.a.EMPTY,this.mode="determinate",this.progressbarId="mat-progress-bar-"+g++;const s=t?t.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${s}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===n}get value(){return this._value}set value(r){this._value=h(Object(o.c)(r)||0)}get bufferValue(){return this._bufferValue}set bufferValue(r){this._bufferValue=h(r||0)}_primaryTransform(){return{transform:`scale3d(${this.value/100}, 1, 1)`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scale3d(${this.bufferValue/100}, 1, 1)`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const r=this._primaryValueBar.nativeElement;this._animationEndSubscription=Object(b.a)(r,"transitionend").pipe(Object(m.a)(a=>a.target===r)).subscribe(()=>{"determinate"!==this.mode&&"buffer"!==this.mode||this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}function h(r,a=0,n=100){return Math.max(a,Math.min(n,r))}class y{}var v=n("9gLZ"),w=n("YEUz"),k=n("omvX"),_=e.ub({encapsulation:2,styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],data:{}});function S(r){return e.Vb(2,[e.Ob(671088640,1,{_primaryValueBar:0}),(r()(),e.wb(1,0,null,null,4,":svg:svg",[["class","mat-progress-bar-background mat-progress-bar-element"],["focusable","false"],["height","4"],["width","100%"]],null,null,null,null,null)),(r()(),e.wb(2,0,null,null,2,":svg:defs",[],null,null,null,null,null)),(r()(),e.wb(3,0,null,null,1,":svg:pattern",[["height","4"],["patternUnits","userSpaceOnUse"],["width","8"],["x","4"],["y","0"]],[[8,"id",0]],null,null,null,null)),(r()(),e.wb(4,0,null,null,0,":svg:circle",[["cx","2"],["cy","2"],["r","2"]],null,null,null,null,null)),(r()(),e.wb(5,0,null,null,0,":svg:rect",[["height","100%"],["width","100%"]],[[1,"fill",0]],null,null,null,null)),(r()(),e.wb(6,0,null,null,1,"div",[["class","mat-progress-bar-buffer mat-progress-bar-element"]],null,null,null,null,null)),e.vb(7,278528,null,0,l.o,[e.l,e.t,e.E],{ngStyle:[0,"ngStyle"]},null),(r()(),e.wb(8,0,[[1,0],["primaryValueBar",1]],null,1,"div",[["class","mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null)),e.vb(9,278528,null,0,l.o,[e.l,e.t,e.E],{ngStyle:[0,"ngStyle"]},null),(r()(),e.wb(10,0,null,null,0,"div",[["class","mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null))],function(r,a){var n=a.component;r(a,7,0,n._bufferTransform()),r(a,9,0,n._primaryTransform())},function(r,a){var n=a.component;r(a,3,0,n.progressbarId),r(a,5,0,n._rectangleFillValue)})}var X=n("qFu+"),x=n("zBoC"),V=n("cXWR");class H{constructor(r,a,n){this.loaderService=r,this.productsService=a,this.store=n,this.exception=!1}ngOnInit(){var r;this.side$=this.store.select("toggle"),null===(r=this.side$)||void 0===r||r.subscribe(r=>this.toggleSidebar=r),this.productsService.fetchDumpData().subscribe(r=>{this.data=r},r=>{this.exception=!!r})}ngOnDestroy(){this.productsService.fetchDumpData().subscribe().unsubscribe()}ngOnChanges(r){var a;null===(a=this.side$)||void 0===a||a.subscribe(r=>this.toggleSidebar=r)}}var z=n("lrtW"),I=n("IheW");let j=(()=>{class r{constructor(r){this.http=r}fetchDumpData(){return this.http.get("https://600a35cf778d1a001779374a.mockapi.io/products/products_list",{observe:"response"})}}return r.\u0275prov=e.Wb({factory:function(){return new r(e.Xb(I.c))},token:r,providedIn:"root"}),r})();var q=n("tqRt"),O=e.ub({encapsulation:0,styles:[[""]],data:{}});function E(r){return e.Vb(0,[(r()(),e.wb(0,0,null,null,2,"div",[["class","loading-indicator-bar"]],null,null,null,null,null)),(r()(),e.wb(1,0,null,null,1,"mat-progress-bar",[["aria-valuemax","100"],["aria-valuemin","0"],["class","mat-progress-bar"],["mode","indeterminate"],["role","progressbar"]],[[1,"aria-valuenow",0],[1,"mode",0],[2,"_mat-animation-noopable",null]],null,null,S,_)),e.vb(2,4374528,null,0,f,[e.l,e.z,[2,k.a],[2,d]],{mode:[0,"mode"]},null)],function(r,a){r(a,2,0,"indeterminate")},function(r,a){r(a,1,0,"indeterminate"===e.Jb(a,2).mode||"query"===e.Jb(a,2).mode?null:e.Jb(a,2).value,e.Jb(a,2).mode,e.Jb(a,2)._isNoopAnimation)})}function J(r){return e.Vb(0,[(r()(),e.wb(0,0,null,null,1,"div",[],null,null,null,null,null)),(r()(),e.Sb(-1,null,["Something went wrong!!!"]))],null,null)}function D(r){return e.Vb(0,[(r()(),e.fb(16777216,null,null,2,null,E)),e.vb(1,16384,null,0,l.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null),e.Kb(131072,l.b,[e.h]),(r()(),e.wb(3,0,null,null,9,"div",[["class","d-flex before-content-template"]],null,null,null,null,null)),(r()(),e.wb(4,0,null,null,2,"sidebar",[],null,null,null,X.b,X.a)),e.vb(5,278528,null,0,l.j,[e.s,e.t,e.l,e.E],{ngClass:[0,"ngClass"]},null),e.vb(6,114688,null,0,x.a,[V.a],null,null),(r()(),e.wb(7,0,null,null,5,"div",[["class","main-body-content"],["style","overflow-y: hidden"]],null,null,null,null,null)),(r()(),e.wb(8,0,null,null,2,"pre",[["class","fancy-scrollbar"]],null,null,null,null,null)),(r()(),e.Sb(9,null,["",""])),e.Kb(0,l.f,[]),(r()(),e.fb(16777216,null,null,1,null,J)),e.vb(12,16384,null,0,l.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],function(r,a){var n=a.component;r(a,1,0,e.Tb(a,1,0,e.Jb(a,2).transform(n.loaderService.isLoading))),r(a,5,0,n.toggleSidebar?"sidebar-show":"sidebar-hide"),r(a,6,0),r(a,12,0,n.exception)},function(r,a){var n=a.component;r(a,9,0,e.Tb(a,9,0,e.Jb(a,10).transform(n.data)))})}function M(r){return e.Vb(0,[(r()(),e.wb(0,0,null,null,1,"products",[],null,null,null,D,O)),e.vb(1,770048,null,0,H,[z.a,j,q.l],null,null)],function(r,a){r(a,1,0)},null)}var T=e.sb("products",H,M,{},{},[]),P=n("iInd");const Y={num:3};class Z{}var $=n("SCoL");class A{}var U=n("Dxy4"),C=n("Tj54"),L=n("bXsj"),N=n("zWxg"),W=e.tb(t,[],function(r){return e.Gb([e.Hb(512,e.j,e.Y,[[8,[s.a,T]],[3,e.j],e.x]),e.Hb(4608,l.n,l.m,[e.u]),e.Hb(1073742336,l.c,l.c,[]),e.Hb(1073742336,P.o,P.o,[[2,P.t],[2,P.l]]),e.Hb(1073742336,Z,Z,[]),e.Hb(1073742336,v.a,v.a,[]),e.Hb(1073742336,i.j,i.j,[w.e,[2,i.c],l.d]),e.Hb(1073742336,A,A,[]),e.Hb(1073742336,$.b,$.b,[]),e.Hb(1073742336,i.s,i.s,[]),e.Hb(1073742336,U.c,U.c,[]),e.Hb(1073742336,y,y,[]),e.Hb(1073742336,C.c,C.c,[]),e.Hb(1073742336,L.a,L.a,[]),e.Hb(1073742336,N.a,N.a,[]),e.Hb(1073742336,t,t,[]),e.Hb(1024,P.j,function(){return[[{path:"",component:H,data:Y}]]},[])])})}}]);