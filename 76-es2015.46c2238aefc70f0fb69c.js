(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"6mPe":function(e,t,i){"use strict";i.r(t),i.d(t,"SidepanelExamplesModule",function(){return D});var n=i("mN63"),s=i("QcoT"),a=i("fXoL"),o=i("8LU1");const c=["*"];let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Jb({type:e,selectors:[["nx-sidepanel-header"]],ngContentSelectors:c,decls:1,vars:0,template:function(e,t){1&e&&(a.lc(),a.kc(0))},styles:["[_nghost-%COMP%]{display:block;font-size:var(--sidepanel-header-font-size);line-height:var(--sidepanel-header-line-height);font-weight:var(--sidepanel-header-font-weight);letter-spacing:var(--sidepanel-header-letter-spacing)}"],changeDetection:0}),e})();const r=["*"];let l=(()=>{class e{constructor(e,t){this._changeDetectorRef=e,this._elementRef=t,this._opened=!0,this.openedChange=new a.o,this._position="floating",this._appearance="dark"}set opened(e){this._opened=Object(o.b)(e),this._changeDetectorRef.markForCheck()}get opened(){return this._opened}set position(e){this._position=e,this._changeDetectorRef.markForCheck()}get position(){return this._position}set appearance(e){this._appearance=e,this._changeDetectorRef.markForCheck()}get appearance(){return this._appearance}toggle(){this.opened=!this.opened,this.openedChange.emit(this._opened)}open(){this.opened||this.toggle()}close(){this.opened&&this.toggle()}_getContentHeight(){return this._header?this._elementRef.nativeElement.offsetHeight-this._header.nativeElement.offsetHeight:this._elementRef.nativeElement.offsetHeight}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(a.h),a.Pb(a.l))},e.\u0275cmp=a.Jb({type:e,selectors:[["nx-sidepanel"]],contentQueries:function(e,t,i){if(1&e&&a.Ib(i,u,1,a.l),2&e){let e;a.sc(e=a.dc())&&(t._header=e.first)}},hostAttrs:["role","complementary"],hostVars:8,hostBindings:function(e,t){2&e&&a.Hb("is-closed",!t.opened)("is-static","static"===t.position)("is-floating","floating"===t.position)("light","light"===t.appearance)},inputs:{opened:"opened",position:"position",appearance:"appearance"},outputs:{openedChange:"openedChange"},ngContentSelectors:r,decls:1,vars:0,template:function(e,t){1&e&&(a.lc(),a.kc(0))},styles:["[_nghost-%COMP%]{display:block;background:var(--sidepanel-background-color)}.is-floating[_nghost-%COMP%]{position:fixed;right:0;z-index:1;box-shadow:var(--sidepanel-floating-shadow)}[dir=rtl]   .is-floating[_nghost-%COMP%]{right:auto;left:0}.is-static[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;top:0}.is-closed[_nghost-%COMP%]{display:none}.light[_nghost-%COMP%]{background:var(--sidepanel-light-background-color);border-left:1px solid var(--sidepanel-light-border-color)}[dir=rtl]   .light[_nghost-%COMP%]{border-left:unset;border-right:1px solid var(--sidepanel-light-border-color)}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]{border-left:1px solid windowText}[dir=rtl]   [_nghost-%COMP%]{border-left:none;border-right:1px solid windowText}}"],changeDetection:0}),e})();const b=["*"];let p=(()=>{class e{constructor(e){this._sidepanel=e}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(l))},e.\u0275cmp=a.Jb({type:e,selectors:[["nx-sidepanel-content"]],hostVars:2,hostBindings:function(e,t){2&e&&a.Ec("height",t._sidepanel._getContentHeight(),"px")},ngContentSelectors:b,decls:1,vars:0,template:function(e,t){1&e&&(a.lc(),a.kc(0))},styles:["[_nghost-%COMP%]{display:block;overflow-y:auto}"],changeDetection:0}),e})();var d=i("u47x"),m=i("+vaC");const g=["nxSidepanelCloseButton",""];let V=(()=>{class e{constructor(e,t,i){this._sidepanel=e,this._focusMonitor=t,this._elementRef=i,this._focusMonitor.monitor(this._elementRef)}_toggle(){this._sidepanel.toggle()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(l),a.Pb(d.g),a.Pb(a.l))},e.\u0275cmp=a.Jb({type:e,selectors:[["button","nxSidepanelCloseButton",""]],hostBindings:function(e,t){1&e&&a.cc("click",function(){return t._toggle()})},attrs:g,decls:1,vars:0,consts:[["name","close","size","s","aria-hidden","true"]],template:function(e,t){1&e&&a.Qb(0,"nx-icon",0)},directives:[m.a],styles:["[_nghost-%COMP%]{cursor:pointer;background-color:transparent;border:none;outline:none;padding:0;display:flex;align-items:center}[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:var(--sidepanel-close-icon-color)}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:buttonText}}.cdk-keyboard-focused[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),e})();var h=i("gkbm"),U=i("ofXK");let x=(()=>{class e{}return e.\u0275mod=a.Nb({type:e}),e.\u0275inj=a.Mb({factory:function(t){return new(t||e)},imports:[[U.c,n.c,h.b]]}),e})();var J=i("rU6a"),f=i("zB3U"),C=i("V3bl"),v=i("3Pt+"),q=i("AgrE");let y=(()=>{class e{constructor(e,t){this.viewportService=e,this._cdRef=t,this.opened=!1,this.isGreaterThanSmall=!0,this.viewportServiceSubscription=this.viewportService.min(f.b.BREAKPOINT_SMALL).subscribe(e=>{e!==this.isGreaterThanSmall&&(this.isGreaterThanSmall=e,e&&!this.opened?this.opened=!0:!e&&this.opened&&(this.opened=!1),this._cdRef.detectChanges())})}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(f.c),a.Pb(a.h))},e.\u0275cmp=a.Jb({type:e,selectors:[["sidepanel-floating-example"]],decls:69,vars:5,consts:[["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],[1,"example-hint"],["name","arrow-right","size","s"],[1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,t){1&e&&(a.Vb(0,"nx-radio-toggle",0),a.cc("ngModelChange",function(e){return t.opened=e}),a.Vb(1,"nx-radio-toggle-button",1),a.Jc(2,"Open"),a.Ub(),a.Vb(3,"nx-radio-toggle-button",1),a.Jc(4,"Close"),a.Ub(),a.Ub(),a.Vb(5,"p"),a.Jc(6),a.Ub(),a.Vb(7,"p",2),a.Jc(8,"Watch the sidepanel appearing on the right side of the screen "),a.Qb(9,"nx-icon",3),a.Ub(),a.Vb(10,"nx-sidepanel",4),a.cc("openedChange",function(e){return t.opened=e}),a.Vb(11,"nx-sidepanel-header"),a.Vb(12,"div",5),a.Jc(13," Sidepanel "),a.Qb(14,"button",6),a.Ub(),a.Ub(),a.Vb(15,"nx-sidepanel-content"),a.Vb(16,"div",7),a.Vb(17,"p",8),a.Jc(18,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Vb(19,"p"),a.Jc(20,"Aliquam tincidunt mauris eu risus."),a.Ub(),a.Vb(21,"p"),a.Jc(22,"Vestibulum auctor dapibus neque."),a.Ub(),a.Vb(23,"p"),a.Jc(24,"Nunc dignissim risus id metus."),a.Ub(),a.Vb(25,"p"),a.Jc(26,"Cras ornare tristique elit."),a.Ub(),a.Vb(27,"p"),a.Jc(28,"Vivamus vestibulum ntulla nec ante."),a.Ub(),a.Vb(29,"p"),a.Jc(30,"Praesent placerat risus quis eros."),a.Ub(),a.Vb(31,"p"),a.Jc(32,"Fusce pellentesque suscipit nibh."),a.Ub(),a.Vb(33,"p"),a.Jc(34,"Integer vitae libero ac risus egestas placerat."),a.Ub(),a.Vb(35,"p"),a.Jc(36,"Vestibulum commodo felis quis tortor."),a.Ub(),a.Vb(37,"p"),a.Jc(38,"Ut aliquam sollicitudin leo."),a.Ub(),a.Vb(39,"p"),a.Jc(40,"Cras iaculis ultricies nulla."),a.Ub(),a.Vb(41,"p"),a.Jc(42,"Donec quis dui at dolor tempor interdum."),a.Ub(),a.Vb(43,"p"),a.Jc(44,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Vb(45,"p"),a.Jc(46,"Aliquam tincidunt mauris eu risus."),a.Ub(),a.Vb(47,"p"),a.Jc(48,"Vestibulum auctor dapibus neque."),a.Ub(),a.Vb(49,"p"),a.Jc(50,"Nunc dignissim risus id metus."),a.Ub(),a.Vb(51,"p"),a.Jc(52,"Cras ornare tristique elit."),a.Ub(),a.Vb(53,"p"),a.Jc(54,"Vivamus vestibulum ntulla nec ante."),a.Ub(),a.Vb(55,"p"),a.Jc(56,"Praesent placerat risus quis eros."),a.Ub(),a.Vb(57,"p"),a.Jc(58,"Fusce pellentesque suscipit nibh."),a.Ub(),a.Vb(59,"p"),a.Jc(60,"Integer vitae libero ac risus egestas placerat."),a.Ub(),a.Vb(61,"p"),a.Jc(62,"Vestibulum commodo felis quis tortor."),a.Ub(),a.Vb(63,"p"),a.Jc(64,"Ut aliquam sollicitudin leo."),a.Ub(),a.Vb(65,"p"),a.Jc(66,"Cras iaculis ultricies nulla."),a.Ub(),a.Vb(67,"p"),a.Jc(68,"Donec quis dui at dolor tempor interdum."),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e&&(a.mc("ngModel",t.opened),a.Db(1),a.mc("nxValue",!0),a.Db(2),a.mc("nxValue",!1),a.Db(3),a.Lc("Opened: ",t.opened,""),a.Db(4),a.mc("opened",t.opened))},directives:[C.a,v.p,v.s,q.a,m.a,l,u,V,p],styles:[".my-sidepanel[_ngcontent-%COMP%]{top:60px;height:calc(100% - 60px);width:240px}@media only screen and (max-width:785px){.my-sidepanel[_ngcontent-%COMP%]{top:120px;height:calc(100% - 120px)}}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}.example-hint[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{vertical-align:bottom}"]}),e})(),_=(()=>{class e{constructor(){this.opened=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Jb({type:e,selectors:[["sidepanel-static-example"]],decls:75,vars:5,consts:[[1,"content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,t){1&e&&(a.Vb(0,"div",0),a.Vb(1,"nx-radio-toggle",1),a.cc("ngModelChange",function(e){return t.opened=e}),a.Vb(2,"nx-radio-toggle-button",2),a.Jc(3,"Open"),a.Ub(),a.Vb(4,"nx-radio-toggle-button",2),a.Jc(5,"Close"),a.Ub(),a.Ub(),a.Vb(6,"p"),a.Jc(7),a.Ub(),a.Vb(8,"p"),a.Vb(9,"i"),a.Jc(10,"Here is some example content that can be scrolled."),a.Ub(),a.Ub(),a.Vb(11,"p"),a.Vb(12,"i"),a.Jc(13,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Ub(),a.Vb(14,"p"),a.Vb(15,"i"),a.Jc(16,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),a.Ub(),a.Ub(),a.Vb(17,"p"),a.Vb(18,"i"),a.Jc(19,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),a.Ub(),a.Ub(),a.Vb(20,"p"),a.Vb(21,"i"),a.Jc(22,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),a.Ub(),a.Ub(),a.Vb(23,"p"),a.Vb(24,"i"),a.Jc(25,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),a.Ub(),a.Ub(),a.Vb(26,"p"),a.Vb(27,"i"),a.Jc(28,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),a.Ub(),a.Ub(),a.Vb(29,"p"),a.Vb(30,"i"),a.Jc(31,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),a.Ub(),a.Ub(),a.Ub(),a.Vb(32,"nx-sidepanel",3),a.cc("openedChange",function(e){return t.opened=e}),a.Vb(33,"nx-sidepanel-header"),a.Vb(34,"div",4),a.Jc(35," Sidepanel "),a.Qb(36,"button",5),a.Ub(),a.Ub(),a.Vb(37,"nx-sidepanel-content"),a.Vb(38,"div",6),a.Vb(39,"p",7),a.Jc(40,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Vb(41,"p"),a.Jc(42,"Aliquam tincidunt mauris eu risus."),a.Ub(),a.Vb(43,"p"),a.Jc(44,"Vestibulum auctor dapibus neque."),a.Ub(),a.Vb(45,"p"),a.Jc(46,"Nunc dignissim risus id metus."),a.Ub(),a.Vb(47,"p"),a.Jc(48,"Cras ornare tristique elit."),a.Ub(),a.Vb(49,"p"),a.Jc(50,"Vivamus vestibulum ntulla nec ante."),a.Ub(),a.Vb(51,"p"),a.Jc(52,"Praesent placerat risus quis eros."),a.Ub(),a.Vb(53,"p"),a.Jc(54,"Fusce pellentesque suscipit nibh."),a.Ub(),a.Vb(55,"p"),a.Jc(56,"Integer vitae libero ac risus egestas placerat."),a.Ub(),a.Vb(57,"p"),a.Jc(58,"Vestibulum commodo felis quis tortor."),a.Ub(),a.Vb(59,"p"),a.Jc(60,"Ut aliquam sollicitudin leo."),a.Ub(),a.Vb(61,"p"),a.Jc(62,"Cras iaculis ultricies nulla."),a.Ub(),a.Vb(63,"p"),a.Jc(64,"Donec quis dui at dolor tempor interdum."),a.Ub(),a.Vb(65,"p"),a.Jc(66,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Vb(67,"p"),a.Jc(68,"Aliquam tincidunt mauris eu risus."),a.Ub(),a.Vb(69,"p"),a.Jc(70,"Vestibulum auctor dapibus neque."),a.Ub(),a.Vb(71,"p"),a.Jc(72,"Nunc dignissim risus id metus."),a.Ub(),a.Vb(73,"p"),a.Jc(74,"Cras ornare tristique elit."),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e&&(a.Db(1),a.mc("ngModel",t.opened),a.Db(1),a.mc("nxValue",!0),a.Db(2),a.mc("nxValue",!1),a.Db(3),a.Lc("Opened: ",t.opened,""),a.Db(25),a.mc("opened",t.opened))},directives:[C.a,v.p,v.s,q.a,l,u,V,p],styles:["[_nghost-%COMP%]{display:flex;height:400px}.content[_ngcontent-%COMP%]{flex:1;height:100%;overflow-y:auto;padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),e})(),M=(()=>{class e{constructor(){this.opened=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Jb({type:e,selectors:[["sidepanel-light-example"]],decls:75,vars:5,consts:[[1,"content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static","appearance","light",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,t){1&e&&(a.Vb(0,"div",0),a.Vb(1,"nx-radio-toggle",1),a.cc("ngModelChange",function(e){return t.opened=e}),a.Vb(2,"nx-radio-toggle-button",2),a.Jc(3,"Open"),a.Ub(),a.Vb(4,"nx-radio-toggle-button",2),a.Jc(5,"Close"),a.Ub(),a.Ub(),a.Vb(6,"p"),a.Jc(7),a.Ub(),a.Vb(8,"p"),a.Vb(9,"i"),a.Jc(10,"Here is some example content that can be scrolled."),a.Ub(),a.Ub(),a.Vb(11,"p"),a.Vb(12,"i"),a.Jc(13,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Ub(),a.Vb(14,"p"),a.Vb(15,"i"),a.Jc(16,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),a.Ub(),a.Ub(),a.Vb(17,"p"),a.Vb(18,"i"),a.Jc(19,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),a.Ub(),a.Ub(),a.Vb(20,"p"),a.Vb(21,"i"),a.Jc(22,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),a.Ub(),a.Ub(),a.Vb(23,"p"),a.Vb(24,"i"),a.Jc(25,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),a.Ub(),a.Ub(),a.Vb(26,"p"),a.Vb(27,"i"),a.Jc(28,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),a.Ub(),a.Ub(),a.Vb(29,"p"),a.Vb(30,"i"),a.Jc(31,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),a.Ub(),a.Ub(),a.Ub(),a.Vb(32,"nx-sidepanel",3),a.cc("openedChange",function(e){return t.opened=e}),a.Vb(33,"nx-sidepanel-header"),a.Vb(34,"div",4),a.Jc(35," Sidepanel "),a.Qb(36,"button",5),a.Ub(),a.Ub(),a.Vb(37,"nx-sidepanel-content"),a.Vb(38,"div",6),a.Vb(39,"p",7),a.Jc(40,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Vb(41,"p"),a.Jc(42,"Aliquam tincidunt mauris eu risus."),a.Ub(),a.Vb(43,"p"),a.Jc(44,"Vestibulum auctor dapibus neque."),a.Ub(),a.Vb(45,"p"),a.Jc(46,"Nunc dignissim risus id metus."),a.Ub(),a.Vb(47,"p"),a.Jc(48,"Cras ornare tristique elit."),a.Ub(),a.Vb(49,"p"),a.Jc(50,"Vivamus vestibulum ntulla nec ante."),a.Ub(),a.Vb(51,"p"),a.Jc(52,"Praesent placerat risus quis eros."),a.Ub(),a.Vb(53,"p"),a.Jc(54,"Fusce pellentesque suscipit nibh."),a.Ub(),a.Vb(55,"p"),a.Jc(56,"Integer vitae libero ac risus egestas placerat."),a.Ub(),a.Vb(57,"p"),a.Jc(58,"Vestibulum commodo felis quis tortor."),a.Ub(),a.Vb(59,"p"),a.Jc(60,"Ut aliquam sollicitudin leo."),a.Ub(),a.Vb(61,"p"),a.Jc(62,"Cras iaculis ultricies nulla."),a.Ub(),a.Vb(63,"p"),a.Jc(64,"Donec quis dui at dolor tempor interdum."),a.Ub(),a.Vb(65,"p"),a.Jc(66,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Vb(67,"p"),a.Jc(68,"Aliquam tincidunt mauris eu risus."),a.Ub(),a.Vb(69,"p"),a.Jc(70,"Vestibulum auctor dapibus neque."),a.Ub(),a.Vb(71,"p"),a.Jc(72,"Nunc dignissim risus id metus."),a.Ub(),a.Vb(73,"p"),a.Jc(74,"Cras ornare tristique elit."),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e&&(a.Db(1),a.mc("ngModel",t.opened),a.Db(1),a.mc("nxValue",!0),a.Db(2),a.mc("nxValue",!1),a.Db(3),a.Lc("Opened: ",t.opened,""),a.Db(25),a.mc("opened",t.opened))},directives:[C.a,v.p,v.s,q.a,l,u,V,p],styles:["[_nghost-%COMP%]{display:flex;height:400px;background-color:var(--ui-02)}.content[_ngcontent-%COMP%]{flex:1;height:100%;overflow-y:auto;padding:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),e})();var P=i("BYLl"),O=i("Rmhm");let w=(()=>{class e{constructor(){this.opened=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Jb({type:e,selectors:[["sidepanel-with-tabs-example"]],decls:80,vars:5,consts:[[1,"content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],["appearance","expert"],["label","First tab"],["label","Second tab"],["nxCopytext","normal"]],template:function(e,t){1&e&&(a.Vb(0,"div",0),a.Vb(1,"nx-radio-toggle",1),a.cc("ngModelChange",function(e){return t.opened=e}),a.Vb(2,"nx-radio-toggle-button",2),a.Jc(3,"Open"),a.Ub(),a.Vb(4,"nx-radio-toggle-button",2),a.Jc(5,"Close"),a.Ub(),a.Ub(),a.Vb(6,"p"),a.Jc(7),a.Ub(),a.Vb(8,"p"),a.Vb(9,"i"),a.Jc(10,"Here is some example content that can be scrolled."),a.Ub(),a.Ub(),a.Vb(11,"p"),a.Vb(12,"i"),a.Jc(13,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Ub(),a.Vb(14,"p"),a.Vb(15,"i"),a.Jc(16,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),a.Ub(),a.Ub(),a.Vb(17,"p"),a.Vb(18,"i"),a.Jc(19,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),a.Ub(),a.Ub(),a.Vb(20,"p"),a.Vb(21,"i"),a.Jc(22,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),a.Ub(),a.Ub(),a.Vb(23,"p"),a.Vb(24,"i"),a.Jc(25,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),a.Ub(),a.Ub(),a.Vb(26,"p"),a.Vb(27,"i"),a.Jc(28,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),a.Ub(),a.Ub(),a.Vb(29,"p"),a.Vb(30,"i"),a.Jc(31,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),a.Ub(),a.Ub(),a.Ub(),a.Vb(32,"nx-sidepanel",3),a.cc("openedChange",function(e){return t.opened=e}),a.Vb(33,"nx-sidepanel-header"),a.Vb(34,"div",4),a.Jc(35," Sidepanel "),a.Qb(36,"button",5),a.Ub(),a.Ub(),a.Vb(37,"nx-sidepanel-content"),a.Vb(38,"div",6),a.Vb(39,"nx-tab-group",7),a.Vb(40,"nx-tab",8),a.Vb(41,"p"),a.Jc(42,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Vb(43,"p"),a.Jc(44,"Aliquam tincidunt mauris eu risus."),a.Ub(),a.Vb(45,"p"),a.Jc(46,"Vestibulum auctor dapibus neque."),a.Ub(),a.Vb(47,"p"),a.Jc(48,"Nunc dignissim risus id metus."),a.Ub(),a.Vb(49,"p"),a.Jc(50,"Cras ornare tristique elit."),a.Ub(),a.Vb(51,"p"),a.Jc(52,"Vivamus vestibulum ntulla nec ante."),a.Ub(),a.Vb(53,"p"),a.Jc(54,"Praesent placerat risus quis eros."),a.Ub(),a.Vb(55,"p"),a.Jc(56,"Fusce pellentesque suscipit nibh."),a.Ub(),a.Vb(57,"p"),a.Jc(58,"Integer vitae libero ac risus egestas placerat."),a.Ub(),a.Vb(59,"p"),a.Jc(60,"Vestibulum commodo felis quis tortor."),a.Ub(),a.Vb(61,"p"),a.Jc(62,"Ut aliquam sollicitudin leo."),a.Ub(),a.Vb(63,"p"),a.Jc(64,"Cras iaculis ultricies nulla."),a.Ub(),a.Vb(65,"p"),a.Jc(66,"Donec quis dui at dolor tempor interdum."),a.Ub(),a.Vb(67,"p"),a.Jc(68,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Vb(69,"p"),a.Jc(70,"Aliquam tincidunt mauris eu risus."),a.Ub(),a.Vb(71,"p"),a.Jc(72,"Vestibulum auctor dapibus neque."),a.Ub(),a.Vb(73,"p"),a.Jc(74,"Nunc dignissim risus id metus."),a.Ub(),a.Vb(75,"p"),a.Jc(76,"Cras ornare tristique elit."),a.Ub(),a.Ub(),a.Vb(77,"nx-tab",9),a.Vb(78,"p",10),a.Jc(79," Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mo "),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e&&(a.Db(1),a.mc("ngModel",t.opened),a.Db(1),a.mc("nxValue",!0),a.Db(2),a.mc("nxValue",!1),a.Db(3),a.Lc("Opened: ",t.opened,""),a.Db(25),a.mc("opened",t.opened))},directives:[C.a,v.p,v.s,q.a,l,u,V,p,P.a,O.a],styles:["[_nghost-%COMP%]{display:flex;height:400px}.content[_ngcontent-%COMP%]{flex:1;height:100%;overflow-y:auto;padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:384px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}.my-sidepanel[_ngcontent-%COMP%]     nx-tab-header{position:-webkit-sticky;position:sticky;top:0;background:var(--sidepanel-background-color)}"]}),e})(),k=(()=>{class e{constructor(){this.opened=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Jb({type:e,selectors:[["sidepanel-dark-example"]],decls:75,vars:5,consts:[[1,"content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,t){1&e&&(a.Vb(0,"div",0),a.Vb(1,"nx-radio-toggle",1),a.cc("ngModelChange",function(e){return t.opened=e}),a.Vb(2,"nx-radio-toggle-button",2),a.Jc(3,"Open"),a.Ub(),a.Vb(4,"nx-radio-toggle-button",2),a.Jc(5,"Close"),a.Ub(),a.Ub(),a.Vb(6,"p"),a.Jc(7),a.Ub(),a.Vb(8,"p"),a.Vb(9,"i"),a.Jc(10,"Here is some example content that can be scrolled."),a.Ub(),a.Ub(),a.Vb(11,"p"),a.Vb(12,"i"),a.Jc(13,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Ub(),a.Vb(14,"p"),a.Vb(15,"i"),a.Jc(16,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),a.Ub(),a.Ub(),a.Vb(17,"p"),a.Vb(18,"i"),a.Jc(19,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),a.Ub(),a.Ub(),a.Vb(20,"p"),a.Vb(21,"i"),a.Jc(22,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),a.Ub(),a.Ub(),a.Vb(23,"p"),a.Vb(24,"i"),a.Jc(25,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),a.Ub(),a.Ub(),a.Vb(26,"p"),a.Vb(27,"i"),a.Jc(28,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),a.Ub(),a.Ub(),a.Vb(29,"p"),a.Vb(30,"i"),a.Jc(31,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),a.Ub(),a.Ub(),a.Ub(),a.Vb(32,"nx-sidepanel",3),a.cc("openedChange",function(e){return t.opened=e}),a.Vb(33,"nx-sidepanel-header"),a.Vb(34,"div",4),a.Jc(35," Sidepanel "),a.Qb(36,"button",5),a.Ub(),a.Ub(),a.Vb(37,"nx-sidepanel-content"),a.Vb(38,"div",6),a.Vb(39,"p",7),a.Jc(40,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Vb(41,"p"),a.Jc(42,"Aliquam tincidunt mauris eu risus."),a.Ub(),a.Vb(43,"p"),a.Jc(44,"Vestibulum auctor dapibus neque."),a.Ub(),a.Vb(45,"p"),a.Jc(46,"Nunc dignissim risus id metus."),a.Ub(),a.Vb(47,"p"),a.Jc(48,"Cras ornare tristique elit."),a.Ub(),a.Vb(49,"p"),a.Jc(50,"Vivamus vestibulum ntulla nec ante."),a.Ub(),a.Vb(51,"p"),a.Jc(52,"Praesent placerat risus quis eros."),a.Ub(),a.Vb(53,"p"),a.Jc(54,"Fusce pellentesque suscipit nibh."),a.Ub(),a.Vb(55,"p"),a.Jc(56,"Integer vitae libero ac risus egestas placerat."),a.Ub(),a.Vb(57,"p"),a.Jc(58,"Vestibulum commodo felis quis tortor."),a.Ub(),a.Vb(59,"p"),a.Jc(60,"Ut aliquam sollicitudin leo."),a.Ub(),a.Vb(61,"p"),a.Jc(62,"Cras iaculis ultricies nulla."),a.Ub(),a.Vb(63,"p"),a.Jc(64,"Donec quis dui at dolor tempor interdum."),a.Ub(),a.Vb(65,"p"),a.Jc(66,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),a.Ub(),a.Vb(67,"p"),a.Jc(68,"Aliquam tincidunt mauris eu risus."),a.Ub(),a.Vb(69,"p"),a.Jc(70,"Vestibulum auctor dapibus neque."),a.Ub(),a.Vb(71,"p"),a.Jc(72,"Nunc dignissim risus id metus."),a.Ub(),a.Vb(73,"p"),a.Jc(74,"Cras ornare tristique elit."),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e&&(a.Db(1),a.mc("ngModel",t.opened),a.Db(1),a.mc("nxValue",!0),a.Db(2),a.mc("nxValue",!1),a.Db(3),a.Lc("Opened: ",t.opened,""),a.Db(25),a.mc("opened",t.opened))},directives:[C.a,v.p,v.s,q.a,l,u,V,p],styles:["[_nghost-%COMP%]{display:flex;height:400px}.content[_ngcontent-%COMP%]{flex:1;height:100%;overflow-y:auto;padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),e})(),D=(()=>{class e{static components(){return{"sidepanel-floating":y,"sidepanel-static":_,"sidepanel-light":M,"sidepanel-with-tabs":w,"sidepanel-dark":k}}}return e.\u0275mod=a.Nb({type:e}),e.\u0275inj=a.Mb({factory:function(t){return new(t||e)},imports:[[x,s.a,v.k,n.c,J.b]]}),e})()}}]);