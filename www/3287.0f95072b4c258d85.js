"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3287],{3287:(q,x,h)=>{h.r(x),h.d(x,{startInputShims:()=>X});var y=h(5861),M=h(8360),m=h(839),K=h(7484);h(4874),h(6225);const A=new WeakMap,I=(e,t,s,r=0,o=!1)=>{A.has(e)!==s&&(s?H(e,t,r,o):k(e,t))},H=(e,t,s,r=!1)=>{const o=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,r&&(n.disabled=!0),o.appendChild(n),A.set(e,n);const c="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${c}px,${s}px,0) scale(0)`},k=(e,t)=>{const s=A.get(e);s&&(A.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},p="input, textarea, [no-blur], [contenteditable]",U="$ionPaddingTimer",C=(e,t,s)=>{const r=e[U];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},W=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&C(t,0,s)},{once:!0})};let D=0;const T="data-ionic-skip-scroll-assist",V=(e,t,s,r,o,n,a,c=!1)=>{const i=n&&(void 0===a||a.mode===K.a.None),S=function(){var u=(0,y.Z)(function*(){t.hasAttribute(T)?t.removeAttribute(T):J(e,t,s,r,o,i,c)});return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",S,!0),()=>{e.removeEventListener("focusin",S,!0)}},w=e=>{document.activeElement!==e&&(e.setAttribute(T,"true"),e.focus())},J=function(){var e=(0,y.Z)(function*(t,s,r,o,n,a,c=!1){if(!r&&!o)return;const i=((e,t,s)=>{var r;return((e,t,s,r)=>{const o=e.top,n=e.bottom,a=t.top,i=a+15,u=Math.min(t.bottom,r-s)-50-n,v=i-o,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,o-a),P=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,P)),scrollPadding:s,inputSafeY:4-(o-i)}})((null!==(r=e.closest("ion-item,[ion-item]"))&&void 0!==r?r:e).getBoundingClientRect(),t.getBoundingClientRect(),s,e.ownerDocument.defaultView.innerHeight)})(t,r||o,n);if(r&&Math.abs(i.scrollAmount)<4)return w(s),void(a&&null!==r&&(C(r,D),W(s,r,()=>D=0)));if(I(t,s,!0,i.inputSafeY,c),w(s),(0,m.r)(()=>t.click()),a&&r&&(D=i.scrollPadding,C(r,D)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),r&&(yield(0,M.c)(r,0,i.scrollAmount,i.scrollDuration)),I(t,s,!1,i.inputSafeY),w(s),a&&W(s,r,()=>D=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(r){const l=yield(0,M.g)(r);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,r,o,n,a,c){return e.apply(this,arguments)}}(),X=function(){var e=(0,y.Z)(function*(t,s){const r=document,o="ios"===s,n="android"===s,a=t.getNumber("keyboardHeight",290),c=t.getBoolean("scrollAssist",!0),i=t.getBoolean("hideCaretOnScroll",o),S=t.getBoolean("inputBlurring",o),u=t.getBoolean("scrollPadding",!0),v=Array.from(r.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,N=yield K.K.getResizeMode(),P=function(){var f=(0,y.Z)(function*(d){yield new Promise(L=>(0,m.c)(d,L));const O=d.shadowRoot||d,b=O.querySelector("input")||O.querySelector("textarea"),g=(0,M.f)(d),j=g?null:d.closest("ion-footer");if(b){if(g&&i&&!l.has(d)){const L=((e,t,s)=>{if(!s||!t)return()=>{};const r=c=>{(e=>e===e.getRootNode().activeElement)(t)&&I(e,t,c)},o=()=>I(e,t,!1),n=()=>r(!0),a=()=>r(!1);return(0,m.a)(s,"ionScrollStart",n),(0,m.a)(s,"ionScrollEnd",a),t.addEventListener("blur",o),()=>{(0,m.b)(s,"ionScrollStart",n),(0,m.b)(s,"ionScrollEnd",a),t.removeEventListener("blur",o)}})(d,b,g);l.set(d,L)}if("date"!==b.type&&"datetime-local"!==b.type&&(g||j)&&c&&!_.has(d)){const L=V(d,b,g,j,a,u,N,n);_.set(d,L)}}});return function(O){return f.apply(this,arguments)}}();S&&(()=>{let e=!0,t=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",a=>{if(t)return void(t=!1);const c=s.activeElement;if(!c||c.matches(p))return;const i=a.target;i!==c&&(i.matches(p)||i.closest(p)||(e=!1,setTimeout(()=>{e||c.blur()},50)))},!1)})();for(const f of v)P(f);r.addEventListener("ionInputDidLoad",f=>{P(f.detail)}),r.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const d=l.get(f);d&&d(),l.delete(f)}if(c){const d=_.get(f);d&&d(),_.delete(f)}})(f.detail)})});return function(s,r){return e.apply(this,arguments)}}()}}]);