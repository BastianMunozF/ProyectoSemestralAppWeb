"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9882],{9882:(D,b,r)=>{r.r(b),r.d(b,{ion_action_sheet:()=>_});var u=r(5861),e=r(1688),v=r(6712),k=r(839),d=r(4988),p=r(3567),g=r(2085),o=r(1774);r(7150),r(4874),r(6225),r(9203),r(619);const E=t=>{const n=(0,o.c)(),i=(0,o.c)(),a=(0,o.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i,a])},A=t=>{const n=(0,o.c)(),i=(0,o.c)(),a=(0,o.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([i,a])},O=t=>{const n=(0,o.c)(),i=(0,o.c)(),a=(0,o.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i,a])},P=t=>{const n=(0,o.c)(),i=(0,o.c)(),a=(0,o.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([i,a])},_=class{constructor(t){(0,e.r)(this,t),this.didPresent=(0,e.d)(this,"ionActionSheetDidPresent",7),this.willPresent=(0,e.d)(this,"ionActionSheetWillPresent",7),this.willDismiss=(0,e.d)(this,"ionActionSheetWillDismiss",7),this.didDismiss=(0,e.d)(this,"ionActionSheetDidDismiss",7),this.didPresentShorthand=(0,e.d)(this,"didPresent",7),this.willPresentShorthand=(0,e.d)(this,"willPresent",7),this.willDismissShorthand=(0,e.d)(this,"willDismiss",7),this.didDismissShorthand=(0,e.d)(this,"didDismiss",7),this.delegateController=(0,d.d)(this),this.triggerController=(0,d.e)(),this.presented=!1,this.onBackdropTap=()=>{this.dismiss(void 0,d.B)},this.dispatchCancelHandler=n=>{if((0,d.i)(n.detail.role)){const a=this.getButtons().find(f=>"cancel"===f.role);this.callButtonHandler(a)}},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.buttons=[],this.cssClass=void 0,this.backdropDismiss=!0,this.header=void 0,this.subHeader=void 0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(t,n){!0===t&&!1===n?this.present():!1===t&&!0===n&&this.dismiss()}triggerChanged(){const{trigger:t,el:n,triggerController:i}=this;t&&i.addClickListener(n,t)}present(){var t=this;return(0,u.Z)(function*(){void 0!==t.currentTransition&&(yield t.currentTransition),yield t.delegateController.attachViewToDom(),t.currentTransition=(0,d.f)(t,"actionSheetEnter",E,O),yield t.currentTransition,t.currentTransition=void 0})()}dismiss(t,n){var i=this;return(0,u.Z)(function*(){i.currentTransition=(0,d.g)(i,t,n,"actionSheetLeave",A,P);const a=yield i.currentTransition;return a&&i.delegateController.removeViewFromDom(),a})()}onDidDismiss(){return(0,d.h)(this.el,"ionActionSheetDidDismiss")}onWillDismiss(){return(0,d.h)(this.el,"ionActionSheetWillDismiss")}buttonClick(t){var n=this;return(0,u.Z)(function*(){const i=t.role;return(0,d.i)(i)?n.dismiss(t.data,i):(yield n.callButtonHandler(t))?n.dismiss(t.data,t.role):Promise.resolve()})()}callButtonHandler(t){return(0,u.Z)(function*(){return!(t&&!1===(yield(0,d.s)(t.handler)))})()}getButtons(){return this.buttons.map(t=>"string"==typeof t?{text:t}:t)}connectedCallback(){(0,d.j)(this.el),this.triggerChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.triggerController.removeClickListener()}componentWillLoad(){(0,d.k)(this.el)}componentDidLoad(){const{groupEl:t,wrapperEl:n}=this;!this.gesture&&"ios"===(0,g.b)(this)&&n&&t&&(0,e.e)(()=>{t.scrollHeight>t.clientHeight||(this.gesture=(0,v.c)(n,a=>a.classList.contains("action-sheet-button")),this.gesture.enable(!0))}),!0===this.isOpen&&(0,k.r)(()=>this.present())}render(){const{header:t,htmlAttributes:n,overlayIndex:i}=this,a=(0,g.b)(this),f=this.getButtons(),h=f.find(c=>"cancel"===c.role),M=f.filter(c=>"cancel"!==c.role),C=`action-sheet-${i}-header`;return(0,e.h)(e.H,Object.assign({role:"dialog","aria-modal":"true","aria-labelledby":void 0!==t?C:null,tabindex:"-1"},n,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({[a]:!0},(0,p.g)(this.cssClass)),{"overlay-hidden":!0,"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap}),(0,e.h)("ion-backdrop",{tappable:this.backdropDismiss}),(0,e.h)("div",{tabindex:"0"}),(0,e.h)("div",{class:"action-sheet-wrapper ion-overlay-wrapper",ref:c=>this.wrapperEl=c},(0,e.h)("div",{class:"action-sheet-container"},(0,e.h)("div",{class:"action-sheet-group",ref:c=>this.groupEl=c},void 0!==t&&(0,e.h)("div",{id:C,class:{"action-sheet-title":!0,"action-sheet-has-sub-title":void 0!==this.subHeader}},t,this.subHeader&&(0,e.h)("div",{class:"action-sheet-sub-title"},this.subHeader)),M.map(c=>(0,e.h)("button",Object.assign({},c.htmlAttributes,{type:"button",id:c.id,class:w(c),onClick:()=>this.buttonClick(c)}),(0,e.h)("span",{class:"action-sheet-button-inner"},c.icon&&(0,e.h)("ion-icon",{icon:c.icon,"aria-hidden":"true",lazy:!1,class:"action-sheet-icon"}),c.text),"md"===a&&(0,e.h)("ion-ripple-effect",null)))),h&&(0,e.h)("div",{class:"action-sheet-group action-sheet-group-cancel"},(0,e.h)("button",Object.assign({},h.htmlAttributes,{type:"button",class:w(h),onClick:()=>this.buttonClick(h)}),(0,e.h)("span",{class:"action-sheet-button-inner"},h.icon&&(0,e.h)("ion-icon",{icon:h.icon,"aria-hidden":"true",lazy:!1,class:"action-sheet-icon"}),h.text),"md"===a&&(0,e.h)("ion-ripple-effect",null))))),(0,e.h)("div",{tabindex:"0"}))}get el(){return(0,e.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},w=t=>Object.assign({"action-sheet-button":!0,"ion-activatable":!0,"ion-focusable":!0,[`action-sheet-${t.role}`]:void 0!==t.role},(0,p.g)(t.cssClass));_.style={ios:'.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100vh}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color, #fff));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0)}.action-sheet-container.sc-ion-action-sheet-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:13px;font-weight:400;text-align:center}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:13px;font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:28px;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}',md:'.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100vh}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}.action-sheet-title.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;font-size:16px;text-align:start;contain:strict;overflow:hidden}.action-sheet-icon.sc-ion-action-sheet-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:24px}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}'}},3567:(D,b,r)=>{r.d(b,{c:()=>v,g:()=>d,h:()=>e,o:()=>g});var u=r(5861);const e=(o,s)=>null!==s.closest(o),v=(o,s)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},s):s,d=o=>{const s={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(l=>null!=l).map(l=>l.trim()).filter(l=>""!==l):[])(o).forEach(l=>s[l]=!0),s},p=/^[a-z][a-z0-9+\-.]*:/,g=function(){var o=(0,u.Z)(function*(s,l,x,y){if(null!=s&&"#"!==s[0]&&!p.test(s)){const m=document.querySelector("ion-router");if(m)return null!=l&&l.preventDefault(),m.push(s,x,y)}return!1});return function(l,x,y,m){return o.apply(this,arguments)}}()}}]);