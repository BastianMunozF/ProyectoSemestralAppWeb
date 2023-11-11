"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1113],{6854:(b,L,a)=>{a.d(L,{I:()=>s,T:()=>f});var v=a(5861),C=a(8177);class s{constructor(u){this.southwest=u.southwest,this.center=u.center,this.northeast=u.northeast}contains(u){var d=this;return(0,v.Z)(function*(){return(yield C.S.mapBoundsContains({bounds:d,point:u})).contains})()}extend(u){var d=this;return(0,v.Z)(function*(){const r=yield C.S.mapBoundsExtend({bounds:d,point:u});return d.southwest=r.bounds.southwest,d.center=r.bounds.center,d.northeast=r.bounds.northeast,d})()}}var f=function(i){return i.Normal="Normal",i.Hybrid="Hybrid",i.Satellite="Satellite",i.Terrain="Terrain",i.None="None",i}(f||{})},8177:(b,L,a)=>{a.d(L,{S:()=>C});const C=(0,a(2726).fo)("CapacitorGoogleMaps",{web:()=>a.e(4059).then(a.bind(a,4059)).then(s=>new s.CapacitorGoogleMapsWeb)});C.addListener("isMapInFocus",s=>{var f;const d=document.elementFromPoint(s.x,s.y),w=(null===(f=null==d?void 0:d.dataset)||void 0===f?void 0:f.internalId)===s.mapId;C.dispatchMapEvent({id:s.mapId,focus:w})})},1113:(b,L,a)=>{a.r(L),a.d(L,{ComenzarviajePageModule:()=>A});var v=a(6814),C=a(6223),s=a(9843),f=a(2058),i=a(5861),u=a(6854),d=a(2726),r=a(8177);class w extends HTMLElement{constructor(){super()}connectedCallback(){if(this.innerHTML="","ios"==d.dV.getPlatform()){this.style.overflow="scroll",this.style["-webkit-overflow-scrolling"]="touch";const e=document.createElement("div");e.style.height="200%",this.appendChild(e)}}}customElements.define("capacitor-google-map",w);class y{constructor(e){this.element=null,this.resizeObserver=null,this.handleScrollEvent=()=>this.updateMapBounds(),this.id=e}static create(e,n){return(0,i.Z)(function*(){const o=new y(e.id);if(!e.element)throw new Error("container element is required");void 0===e.config.androidLiteMode&&(e.config.androidLiteMode=!1),o.element=e.element,o.element.dataset.internalId=e.id;const c=yield y.getElementBounds(e.element);if(e.config.width=c.width,e.config.height=c.height,e.config.x=c.x,e.config.y=c.y,e.config.devicePixelRatio=window.devicePixelRatio,"android"==d.dV.getPlatform()&&o.initScrolling(),d.dV.isNativePlatform()){e.element={};const m=()=>{var h,k;const S=null!==(k=null===(h=o.element)||void 0===h?void 0:h.getBoundingClientRect())&&void 0!==k?k:{};return{x:S.x,y:S.y,width:S.width,height:S.height}},g=()=>{r.S.onDisplay({id:o.id,mapBounds:m()})},P=()=>{r.S.onResize({id:o.id,mapBounds:m()})},p=o.element.closest(".ion-page");"ios"===d.dV.getPlatform()&&p&&(p.addEventListener("ionViewWillEnter",()=>{setTimeout(()=>{g()},100)}),p.addEventListener("ionViewDidEnter",()=>{setTimeout(()=>{g()},100)}));const M={width:c.width,height:c.height,isHidden:!1};o.resizeObserver=new ResizeObserver(()=>{if(null!=o.element){const h=o.element.getBoundingClientRect(),k=0===h.width&&0===h.height;k||(M.isHidden?"ios"===d.dV.getPlatform()&&!p&&g():(M.width!==h.width||M.height!==h.height)&&P()),M.width=h.width,M.height=h.height,M.isHidden=k}}),o.resizeObserver.observe(o.element)}if(yield new Promise((m,g)=>{setTimeout((0,i.Z)(function*(){try{yield r.S.create(e),m(void 0)}catch(P){g(P)}}),200)}),n){const m=yield r.S.addListener("onMapReady",g=>{g.mapId==o.id&&(n(g),m.remove())})}return o})()}static getElementBounds(e){return(0,i.Z)(function*(){return new Promise(n=>{let o=e.getBoundingClientRect();if(0==o.width){let c=0;const m=setInterval(function(){0==o.width&&c<30?(o=e.getBoundingClientRect(),c++):(30==c&&console.warn("Map size could not be determined"),clearInterval(m),n(o))},100)}else n(o)})})()}enableTouch(){var e=this;return(0,i.Z)(function*(){return r.S.enableTouch({id:e.id})})()}disableTouch(){var e=this;return(0,i.Z)(function*(){return r.S.disableTouch({id:e.id})})()}enableClustering(e){var n=this;return(0,i.Z)(function*(){return r.S.enableClustering({id:n.id,minClusterSize:e})})()}disableClustering(){var e=this;return(0,i.Z)(function*(){return r.S.disableClustering({id:e.id})})()}addMarker(e){var n=this;return(0,i.Z)(function*(){return(yield r.S.addMarker({id:n.id,marker:e})).id})()}addMarkers(e){var n=this;return(0,i.Z)(function*(){return(yield r.S.addMarkers({id:n.id,markers:e})).ids})()}removeMarker(e){var n=this;return(0,i.Z)(function*(){return r.S.removeMarker({id:n.id,markerId:e})})()}removeMarkers(e){var n=this;return(0,i.Z)(function*(){return r.S.removeMarkers({id:n.id,markerIds:e})})()}addPolygons(e){var n=this;return(0,i.Z)(function*(){return(yield r.S.addPolygons({id:n.id,polygons:e})).ids})()}addPolylines(e){var n=this;return(0,i.Z)(function*(){return(yield r.S.addPolylines({id:n.id,polylines:e})).ids})()}removePolygons(e){var n=this;return(0,i.Z)(function*(){return r.S.removePolygons({id:n.id,polygonIds:e})})()}addCircles(e){var n=this;return(0,i.Z)(function*(){return(yield r.S.addCircles({id:n.id,circles:e})).ids})()}removeCircles(e){var n=this;return(0,i.Z)(function*(){return r.S.removeCircles({id:n.id,circleIds:e})})()}removePolylines(e){var n=this;return(0,i.Z)(function*(){return r.S.removePolylines({id:n.id,polylineIds:e})})()}destroy(){var e=this;return(0,i.Z)(function*(){var n;return"android"==d.dV.getPlatform()&&e.disableScrolling(),d.dV.isNativePlatform()&&(null===(n=e.resizeObserver)||void 0===n||n.disconnect()),e.removeAllMapListeners(),r.S.destroy({id:e.id})})()}setCamera(e){var n=this;return(0,i.Z)(function*(){return r.S.setCamera({id:n.id,config:e})})()}getMapType(){var e=this;return(0,i.Z)(function*(){const{type:n}=yield r.S.getMapType({id:e.id});return u.T[n]})()}setMapType(e){var n=this;return(0,i.Z)(function*(){return r.S.setMapType({id:n.id,mapType:e})})()}enableIndoorMaps(e){var n=this;return(0,i.Z)(function*(){return r.S.enableIndoorMaps({id:n.id,enabled:e})})()}enableTrafficLayer(e){var n=this;return(0,i.Z)(function*(){return r.S.enableTrafficLayer({id:n.id,enabled:e})})()}enableAccessibilityElements(e){var n=this;return(0,i.Z)(function*(){return r.S.enableAccessibilityElements({id:n.id,enabled:e})})()}enableCurrentLocation(e){var n=this;return(0,i.Z)(function*(){return r.S.enableCurrentLocation({id:n.id,enabled:e})})()}setPadding(e){var n=this;return(0,i.Z)(function*(){return r.S.setPadding({id:n.id,padding:e})})()}getMapBounds(){var e=this;return(0,i.Z)(function*(){return new u.I(yield r.S.getMapBounds({id:e.id}))})()}fitBounds(e,n){var o=this;return(0,i.Z)(function*(){return r.S.fitBounds({id:o.id,bounds:e,padding:n})})()}initScrolling(){const e=document.getElementsByTagName("ion-content");for(let n=0;n<e.length;n++)e[n].scrollEvents=!0;window.addEventListener("ionScroll",this.handleScrollEvent),window.addEventListener("scroll",this.handleScrollEvent),window.addEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.addEventListener("change",()=>{setTimeout(this.updateMapBounds,500)}):window.addEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,500)})}disableScrolling(){window.removeEventListener("ionScroll",this.handleScrollEvent),window.removeEventListener("scroll",this.handleScrollEvent),window.removeEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.removeEventListener("change",()=>{setTimeout(this.updateMapBounds,1e3)}):window.removeEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,1e3)})}updateMapBounds(){if(this.element){const e=this.element.getBoundingClientRect();r.S.onScroll({id:this.id,mapBounds:{x:e.x,y:e.y,width:e.width,height:e.height}})}}setOnCameraIdleListener(e){var n=this;return(0,i.Z)(function*(){n.onCameraIdleListener&&n.onCameraIdleListener.remove(),n.onCameraIdleListener=e?yield r.S.addListener("onCameraIdle",n.generateCallback(e)):void 0})()}setOnBoundsChangedListener(e){var n=this;return(0,i.Z)(function*(){n.onBoundsChangedListener&&n.onBoundsChangedListener.remove(),n.onBoundsChangedListener=e?yield r.S.addListener("onBoundsChanged",n.generateCallback(e)):void 0})()}setOnCameraMoveStartedListener(e){var n=this;return(0,i.Z)(function*(){n.onCameraMoveStartedListener&&n.onCameraMoveStartedListener.remove(),n.onCameraMoveStartedListener=e?yield r.S.addListener("onCameraMoveStarted",n.generateCallback(e)):void 0})()}setOnClusterClickListener(e){var n=this;return(0,i.Z)(function*(){n.onClusterClickListener&&n.onClusterClickListener.remove(),n.onClusterClickListener=e?yield r.S.addListener("onClusterClick",n.generateCallback(e)):void 0})()}setOnClusterInfoWindowClickListener(e){var n=this;return(0,i.Z)(function*(){n.onClusterInfoWindowClickListener&&n.onClusterInfoWindowClickListener.remove(),n.onClusterInfoWindowClickListener=e?yield r.S.addListener("onClusterInfoWindowClick",n.generateCallback(e)):void 0})()}setOnInfoWindowClickListener(e){var n=this;return(0,i.Z)(function*(){n.onInfoWindowClickListener&&n.onInfoWindowClickListener.remove(),n.onInfoWindowClickListener=e?yield r.S.addListener("onInfoWindowClick",n.generateCallback(e)):void 0})()}setOnMapClickListener(e){var n=this;return(0,i.Z)(function*(){n.onMapClickListener&&n.onMapClickListener.remove(),n.onMapClickListener=e?yield r.S.addListener("onMapClick",n.generateCallback(e)):void 0})()}setOnPolygonClickListener(e){var n=this;return(0,i.Z)(function*(){n.onPolygonClickListener&&n.onPolygonClickListener.remove(),n.onPolygonClickListener=e?yield r.S.addListener("onPolygonClick",n.generateCallback(e)):void 0})()}setOnCircleClickListener(e){var n=this;return(0,i.Z)(function*(){n.onCircleClickListener&&n.onCircleClickListener.remove(),n.onCircleClickListener=e?yield r.S.addListener("onCircleClick",n.generateCallback(e)):void 0})()}setOnMarkerClickListener(e){var n=this;return(0,i.Z)(function*(){n.onMarkerClickListener&&n.onMarkerClickListener.remove(),n.onMarkerClickListener=e?yield r.S.addListener("onMarkerClick",n.generateCallback(e)):void 0})()}setOnPolylineClickListener(e){var n=this;return(0,i.Z)(function*(){n.onPolylineClickListener&&n.onPolylineClickListener.remove(),n.onPolylineClickListener=e?yield r.S.addListener("onPolylineClick",n.generateCallback(e)):void 0})()}setOnMarkerDragStartListener(e){var n=this;return(0,i.Z)(function*(){n.onMarkerDragStartListener&&n.onMarkerDragStartListener.remove(),n.onMarkerDragStartListener=e?yield r.S.addListener("onMarkerDragStart",n.generateCallback(e)):void 0})()}setOnMarkerDragListener(e){var n=this;return(0,i.Z)(function*(){n.onMarkerDragListener&&n.onMarkerDragListener.remove(),n.onMarkerDragListener=e?yield r.S.addListener("onMarkerDrag",n.generateCallback(e)):void 0})()}setOnMarkerDragEndListener(e){var n=this;return(0,i.Z)(function*(){n.onMarkerDragEndListener&&n.onMarkerDragEndListener.remove(),n.onMarkerDragEndListener=e?yield r.S.addListener("onMarkerDragEnd",n.generateCallback(e)):void 0})()}setOnMyLocationButtonClickListener(e){var n=this;return(0,i.Z)(function*(){n.onMyLocationButtonClickListener&&n.onMyLocationButtonClickListener.remove(),n.onMyLocationButtonClickListener=e?yield r.S.addListener("onMyLocationButtonClick",n.generateCallback(e)):void 0})()}setOnMyLocationClickListener(e){var n=this;return(0,i.Z)(function*(){n.onMyLocationClickListener&&n.onMyLocationClickListener.remove(),n.onMyLocationClickListener=e?yield r.S.addListener("onMyLocationClick",n.generateCallback(e)):void 0})()}removeAllMapListeners(){var e=this;return(0,i.Z)(function*(){e.onBoundsChangedListener&&(e.onBoundsChangedListener.remove(),e.onBoundsChangedListener=void 0),e.onCameraIdleListener&&(e.onCameraIdleListener.remove(),e.onCameraIdleListener=void 0),e.onCameraMoveStartedListener&&(e.onCameraMoveStartedListener.remove(),e.onCameraMoveStartedListener=void 0),e.onClusterClickListener&&(e.onClusterClickListener.remove(),e.onClusterClickListener=void 0),e.onClusterInfoWindowClickListener&&(e.onClusterInfoWindowClickListener.remove(),e.onClusterInfoWindowClickListener=void 0),e.onInfoWindowClickListener&&(e.onInfoWindowClickListener.remove(),e.onInfoWindowClickListener=void 0),e.onMapClickListener&&(e.onMapClickListener.remove(),e.onMapClickListener=void 0),e.onPolylineClickListener&&(e.onPolylineClickListener.remove(),e.onPolylineClickListener=void 0),e.onMarkerClickListener&&(e.onMarkerClickListener.remove(),e.onMarkerClickListener=void 0),e.onPolygonClickListener&&(e.onPolygonClickListener.remove(),e.onPolygonClickListener=void 0),e.onCircleClickListener&&(e.onCircleClickListener.remove(),e.onCircleClickListener=void 0),e.onMarkerDragStartListener&&(e.onMarkerDragStartListener.remove(),e.onMarkerDragStartListener=void 0),e.onMarkerDragListener&&(e.onMarkerDragListener.remove(),e.onMarkerDragListener=void 0),e.onMarkerDragEndListener&&(e.onMarkerDragEndListener.remove(),e.onMarkerDragEndListener=void 0),e.onMyLocationButtonClickListener&&(e.onMyLocationButtonClickListener.remove(),e.onMyLocationButtonClickListener=void 0),e.onMyLocationClickListener&&(e.onMyLocationClickListener.remove(),e.onMyLocationClickListener=void 0)})()}generateCallback(e){const n=this.id;return o=>{o.mapId==n&&e(o)}}}const E=(0,d.fo)("Geolocation",{web:()=>a.e(579).then(a.bind(a,579)).then(l=>new l.GeolocationWeb)});var I=a(553),t=a(5879),Z=a(2296);const B=["map"],x=function(){return["/tomarviaje"]},D=function(){return["/menuprincipal"]},O=function(){return["/comenzarviaje"]},T=function(){return["/perfilusuario"]},z=function(){return["/paginalogin-usuario"]},W=[{path:"",component:(()=>{var l;class e{createMap(){var o=this;return(0,i.Z)(function*(){let c=yield E.getCurrentPosition();o.newMap=yield y.create({id:"map",element:o.mapRef.nativeElement,apiKey:I.N.apiKey,config:{center:{lat:c.coords.latitude,lng:c.coords.longitude},zoom:8}})})()}constructor(){}ngOnInit(){}}return(l=e).\u0275fac=function(o){return new(o||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-comenzarviaje"]],viewQuery:function(o,c){if(1&o&&t.Gf(B,5),2&o){let m;t.iGM(m=t.CRH())&&(c.mapRef=m.first)}},decls:33,vars:12,consts:[["id","main-content",1,"ion-page"],["color","primary"],[2,"text-align","center"],["slot","start"],[2,"margin-top","20%"],["map",""],[3,"click"],[2,"text-align","center",3,"routerLink"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with a open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"]],template:function(o,c){1&o&&(t.TgZ(0,"ion-content")(1,"div",0)(2,"ion-header")(3,"ion-toolbar",1)(4,"ion-title",2),t._uU(5,"Comenzar viaje"),t.qZA(),t.TgZ(6,"ion-buttons",3),t._UZ(7,"ion-menu-button"),t.qZA()()()(),t.TgZ(8,"ion-card",4)(9,"ion-card-header")(10,"ion-card-title",1),t._uU(11,"Seleccione una ubicaci\xf3n"),t.qZA()(),t._UZ(12,"capacitor-google-map",null,5),t.TgZ(14,"button",6),t.NdJ("click",function(){return c.createMap()}),t._uU(15,"Create Map"),t.qZA(),t.TgZ(16,"ion-item")(17,"ion-button",7),t._uU(18,"Tomar Viajes"),t.qZA()()()(),t.TgZ(19,"ion-footer")(20,"section",8)(21,"div",9)(22,"div",10)(23,"button",11),t._UZ(24,"ion-icon",12),t.qZA(),t.TgZ(25,"button",13),t._UZ(26,"ion-icon",14),t.qZA(),t.TgZ(27,"button",15),t._UZ(28,"ion-icon",16),t.qZA(),t.TgZ(29,"button",17),t._UZ(30,"ion-icon",18),t.qZA(),t.TgZ(31,"button",19),t._UZ(32,"ion-icon",20),t.qZA()()()()()),2&o&&(t.xp6(17),t.Q6J("routerLink",t.DdM(6,x)),t.xp6(6),t.Q6J("routerLink",t.DdM(7,D)),t.xp6(2),t.Q6J("routerLink",t.DdM(8,O)),t.xp6(2),t.Q6J("routerLink",t.DdM(9,T)),t.xp6(2),t.Q6J("routerLink",t.DdM(10,x)),t.xp6(2),t.Q6J("routerLink",t.DdM(11,z)))},dependencies:[s.YG,s.Sm,s.PM,s.Zi,s.Dq,s.W2,s.fr,s.Gu,s.gu,s.Ie,s.fG,s.wd,s.sr,s.YI,f.rH,Z.RK],styles:["#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:rgb(241, 241, 236);--ion-border-color:primary}section[_ngcontent-%COMP%]{display:table}.example-label[_ngcontent-%COMP%]{display:table-cell;font-size:14px;margin-left:8px;min-width:120px}.example-button-row[_ngcontent-%COMP%]{display:table-cell;max-width:600px}.example-button-row[_ngcontent-%COMP%]   .mat-mdc-button-base[_ngcontent-%COMP%]{margin:8px 8px 8px 0}.example-flex-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.example-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:120px}capacitor-google-map[_ngcontent-%COMP%]{display:inline-block;width:275px;height:400px}"]}),e})()}];let j=(()=>{var l;class e{}return(l=e).\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[f.Bz.forChild(W),f.Bz]}),e})();var R=a(1175),_=a(6385);let A=(()=>{var l;class e{}return(l=e).\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[v.ez,C.u5,s.Pc,j,Z.ot,_.t,R.Ps]}),e})()}}]);