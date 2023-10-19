"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1113],{6854:(b,v,a)=>{a.d(v,{I:()=>s,T:()=>m});var M=a(5861),C=a(8177);class s{constructor(d){this.southwest=d.southwest,this.center=d.center,this.northeast=d.northeast}contains(d){var u=this;return(0,M.Z)(function*(){return(yield C.S.mapBoundsContains({bounds:u,point:d})).contains})()}extend(d){var u=this;return(0,M.Z)(function*(){const g=yield C.S.mapBoundsExtend({bounds:u,point:d});return u.southwest=g.bounds.southwest,u.center=g.bounds.center,u.northeast=g.bounds.northeast,u})()}}var m=function(t){return t.Normal="Normal",t.Hybrid="Hybrid",t.Satellite="Satellite",t.Terrain="Terrain",t.None="None",t}(m||{})},8177:(b,v,a)=>{a.d(v,{S:()=>C});const C=(0,a(2726).fo)("CapacitorGoogleMaps",{web:()=>a.e(4059).then(a.bind(a,4059)).then(s=>new s.CapacitorGoogleMapsWeb)});C.addListener("isMapInFocus",s=>{var m;const u=document.elementFromPoint(s.x,s.y),r=(null===(m=null==u?void 0:u.dataset)||void 0===m?void 0:m.internalId)===s.mapId;C.dispatchMapEvent({id:s.mapId,focus:r})})},1113:(b,v,a)=>{a.r(v),a.d(v,{ComenzarviajePageModule:()=>A});var M=a(6814),C=a(6223),s=a(9843),m=a(2058),t=a(5861),d=a(2726);const u=(0,d.fo)("Geolocation",{web:()=>a.e(579).then(a.bind(a,579)).then(l=>new l.GeolocationWeb)});var g=a(6854),r=a(8177);class E extends HTMLElement{constructor(){super()}connectedCallback(){if(this.innerHTML="","ios"==d.dV.getPlatform()){this.style.overflow="scroll",this.style["-webkit-overflow-scrolling"]="touch";const e=document.createElement("div");e.style.height="200%",this.appendChild(e)}}}customElements.define("capacitor-google-map",E);class p{constructor(e){this.element=null,this.resizeObserver=null,this.handleScrollEvent=()=>this.updateMapBounds(),this.id=e}static create(e,n){return(0,t.Z)(function*(){const o=new p(e.id);if(!e.element)throw new Error("container element is required");void 0===e.config.androidLiteMode&&(e.config.androidLiteMode=!1),o.element=e.element,o.element.dataset.internalId=e.id;const c=yield p.getElementBounds(e.element);if(e.config.width=c.width,e.config.height=c.height,e.config.x=c.x,e.config.y=c.y,e.config.devicePixelRatio=window.devicePixelRatio,"android"==d.dV.getPlatform()&&o.initScrolling(),d.dV.isNativePlatform()){e.element={};const f=()=>{var h,k;const w=null!==(k=null===(h=o.element)||void 0===h?void 0:h.getBoundingClientRect())&&void 0!==k?k:{};return{x:w.x,y:w.y,width:w.width,height:w.height}},L=()=>{r.S.onDisplay({id:o.id,mapBounds:f()})},P=()=>{r.S.onResize({id:o.id,mapBounds:f()})},S=o.element.closest(".ion-page");"ios"===d.dV.getPlatform()&&S&&(S.addEventListener("ionViewWillEnter",()=>{setTimeout(()=>{L()},100)}),S.addEventListener("ionViewDidEnter",()=>{setTimeout(()=>{L()},100)}));const y={width:c.width,height:c.height,isHidden:!1};o.resizeObserver=new ResizeObserver(()=>{if(null!=o.element){const h=o.element.getBoundingClientRect(),k=0===h.width&&0===h.height;k||(y.isHidden?"ios"===d.dV.getPlatform()&&!S&&L():(y.width!==h.width||y.height!==h.height)&&P()),y.width=h.width,y.height=h.height,y.isHidden=k}}),o.resizeObserver.observe(o.element)}if(yield new Promise((f,L)=>{setTimeout((0,t.Z)(function*(){try{yield r.S.create(e),f(void 0)}catch(P){L(P)}}),200)}),n){const f=yield r.S.addListener("onMapReady",L=>{L.mapId==o.id&&(n(L),f.remove())})}return o})()}static getElementBounds(e){return(0,t.Z)(function*(){return new Promise(n=>{let o=e.getBoundingClientRect();if(0==o.width){let c=0;const f=setInterval(function(){0==o.width&&c<30?(o=e.getBoundingClientRect(),c++):(30==c&&console.warn("Map size could not be determined"),clearInterval(f),n(o))},100)}else n(o)})})()}enableTouch(){var e=this;return(0,t.Z)(function*(){return r.S.enableTouch({id:e.id})})()}disableTouch(){var e=this;return(0,t.Z)(function*(){return r.S.disableTouch({id:e.id})})()}enableClustering(e){var n=this;return(0,t.Z)(function*(){return r.S.enableClustering({id:n.id,minClusterSize:e})})()}disableClustering(){var e=this;return(0,t.Z)(function*(){return r.S.disableClustering({id:e.id})})()}addMarker(e){var n=this;return(0,t.Z)(function*(){return(yield r.S.addMarker({id:n.id,marker:e})).id})()}addMarkers(e){var n=this;return(0,t.Z)(function*(){return(yield r.S.addMarkers({id:n.id,markers:e})).ids})()}removeMarker(e){var n=this;return(0,t.Z)(function*(){return r.S.removeMarker({id:n.id,markerId:e})})()}removeMarkers(e){var n=this;return(0,t.Z)(function*(){return r.S.removeMarkers({id:n.id,markerIds:e})})()}addPolygons(e){var n=this;return(0,t.Z)(function*(){return(yield r.S.addPolygons({id:n.id,polygons:e})).ids})()}addPolylines(e){var n=this;return(0,t.Z)(function*(){return(yield r.S.addPolylines({id:n.id,polylines:e})).ids})()}removePolygons(e){var n=this;return(0,t.Z)(function*(){return r.S.removePolygons({id:n.id,polygonIds:e})})()}addCircles(e){var n=this;return(0,t.Z)(function*(){return(yield r.S.addCircles({id:n.id,circles:e})).ids})()}removeCircles(e){var n=this;return(0,t.Z)(function*(){return r.S.removeCircles({id:n.id,circleIds:e})})()}removePolylines(e){var n=this;return(0,t.Z)(function*(){return r.S.removePolylines({id:n.id,polylineIds:e})})()}destroy(){var e=this;return(0,t.Z)(function*(){var n;return"android"==d.dV.getPlatform()&&e.disableScrolling(),d.dV.isNativePlatform()&&(null===(n=e.resizeObserver)||void 0===n||n.disconnect()),e.removeAllMapListeners(),r.S.destroy({id:e.id})})()}setCamera(e){var n=this;return(0,t.Z)(function*(){return r.S.setCamera({id:n.id,config:e})})()}getMapType(){var e=this;return(0,t.Z)(function*(){const{type:n}=yield r.S.getMapType({id:e.id});return g.T[n]})()}setMapType(e){var n=this;return(0,t.Z)(function*(){return r.S.setMapType({id:n.id,mapType:e})})()}enableIndoorMaps(e){var n=this;return(0,t.Z)(function*(){return r.S.enableIndoorMaps({id:n.id,enabled:e})})()}enableTrafficLayer(e){var n=this;return(0,t.Z)(function*(){return r.S.enableTrafficLayer({id:n.id,enabled:e})})()}enableAccessibilityElements(e){var n=this;return(0,t.Z)(function*(){return r.S.enableAccessibilityElements({id:n.id,enabled:e})})()}enableCurrentLocation(e){var n=this;return(0,t.Z)(function*(){return r.S.enableCurrentLocation({id:n.id,enabled:e})})()}setPadding(e){var n=this;return(0,t.Z)(function*(){return r.S.setPadding({id:n.id,padding:e})})()}getMapBounds(){var e=this;return(0,t.Z)(function*(){return new g.I(yield r.S.getMapBounds({id:e.id}))})()}fitBounds(e,n){var o=this;return(0,t.Z)(function*(){return r.S.fitBounds({id:o.id,bounds:e,padding:n})})()}initScrolling(){const e=document.getElementsByTagName("ion-content");for(let n=0;n<e.length;n++)e[n].scrollEvents=!0;window.addEventListener("ionScroll",this.handleScrollEvent),window.addEventListener("scroll",this.handleScrollEvent),window.addEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.addEventListener("change",()=>{setTimeout(this.updateMapBounds,500)}):window.addEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,500)})}disableScrolling(){window.removeEventListener("ionScroll",this.handleScrollEvent),window.removeEventListener("scroll",this.handleScrollEvent),window.removeEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.removeEventListener("change",()=>{setTimeout(this.updateMapBounds,1e3)}):window.removeEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,1e3)})}updateMapBounds(){if(this.element){const e=this.element.getBoundingClientRect();r.S.onScroll({id:this.id,mapBounds:{x:e.x,y:e.y,width:e.width,height:e.height}})}}setOnCameraIdleListener(e){var n=this;return(0,t.Z)(function*(){n.onCameraIdleListener&&n.onCameraIdleListener.remove(),n.onCameraIdleListener=e?yield r.S.addListener("onCameraIdle",n.generateCallback(e)):void 0})()}setOnBoundsChangedListener(e){var n=this;return(0,t.Z)(function*(){n.onBoundsChangedListener&&n.onBoundsChangedListener.remove(),n.onBoundsChangedListener=e?yield r.S.addListener("onBoundsChanged",n.generateCallback(e)):void 0})()}setOnCameraMoveStartedListener(e){var n=this;return(0,t.Z)(function*(){n.onCameraMoveStartedListener&&n.onCameraMoveStartedListener.remove(),n.onCameraMoveStartedListener=e?yield r.S.addListener("onCameraMoveStarted",n.generateCallback(e)):void 0})()}setOnClusterClickListener(e){var n=this;return(0,t.Z)(function*(){n.onClusterClickListener&&n.onClusterClickListener.remove(),n.onClusterClickListener=e?yield r.S.addListener("onClusterClick",n.generateCallback(e)):void 0})()}setOnClusterInfoWindowClickListener(e){var n=this;return(0,t.Z)(function*(){n.onClusterInfoWindowClickListener&&n.onClusterInfoWindowClickListener.remove(),n.onClusterInfoWindowClickListener=e?yield r.S.addListener("onClusterInfoWindowClick",n.generateCallback(e)):void 0})()}setOnInfoWindowClickListener(e){var n=this;return(0,t.Z)(function*(){n.onInfoWindowClickListener&&n.onInfoWindowClickListener.remove(),n.onInfoWindowClickListener=e?yield r.S.addListener("onInfoWindowClick",n.generateCallback(e)):void 0})()}setOnMapClickListener(e){var n=this;return(0,t.Z)(function*(){n.onMapClickListener&&n.onMapClickListener.remove(),n.onMapClickListener=e?yield r.S.addListener("onMapClick",n.generateCallback(e)):void 0})()}setOnPolygonClickListener(e){var n=this;return(0,t.Z)(function*(){n.onPolygonClickListener&&n.onPolygonClickListener.remove(),n.onPolygonClickListener=e?yield r.S.addListener("onPolygonClick",n.generateCallback(e)):void 0})()}setOnCircleClickListener(e){var n=this;return(0,t.Z)(function*(){n.onCircleClickListener&&n.onCircleClickListener.remove(),n.onCircleClickListener=e?yield r.S.addListener("onCircleClick",n.generateCallback(e)):void 0})()}setOnMarkerClickListener(e){var n=this;return(0,t.Z)(function*(){n.onMarkerClickListener&&n.onMarkerClickListener.remove(),n.onMarkerClickListener=e?yield r.S.addListener("onMarkerClick",n.generateCallback(e)):void 0})()}setOnPolylineClickListener(e){var n=this;return(0,t.Z)(function*(){n.onPolylineClickListener&&n.onPolylineClickListener.remove(),n.onPolylineClickListener=e?yield r.S.addListener("onPolylineClick",n.generateCallback(e)):void 0})()}setOnMarkerDragStartListener(e){var n=this;return(0,t.Z)(function*(){n.onMarkerDragStartListener&&n.onMarkerDragStartListener.remove(),n.onMarkerDragStartListener=e?yield r.S.addListener("onMarkerDragStart",n.generateCallback(e)):void 0})()}setOnMarkerDragListener(e){var n=this;return(0,t.Z)(function*(){n.onMarkerDragListener&&n.onMarkerDragListener.remove(),n.onMarkerDragListener=e?yield r.S.addListener("onMarkerDrag",n.generateCallback(e)):void 0})()}setOnMarkerDragEndListener(e){var n=this;return(0,t.Z)(function*(){n.onMarkerDragEndListener&&n.onMarkerDragEndListener.remove(),n.onMarkerDragEndListener=e?yield r.S.addListener("onMarkerDragEnd",n.generateCallback(e)):void 0})()}setOnMyLocationButtonClickListener(e){var n=this;return(0,t.Z)(function*(){n.onMyLocationButtonClickListener&&n.onMyLocationButtonClickListener.remove(),n.onMyLocationButtonClickListener=e?yield r.S.addListener("onMyLocationButtonClick",n.generateCallback(e)):void 0})()}setOnMyLocationClickListener(e){var n=this;return(0,t.Z)(function*(){n.onMyLocationClickListener&&n.onMyLocationClickListener.remove(),n.onMyLocationClickListener=e?yield r.S.addListener("onMyLocationClick",n.generateCallback(e)):void 0})()}removeAllMapListeners(){var e=this;return(0,t.Z)(function*(){e.onBoundsChangedListener&&(e.onBoundsChangedListener.remove(),e.onBoundsChangedListener=void 0),e.onCameraIdleListener&&(e.onCameraIdleListener.remove(),e.onCameraIdleListener=void 0),e.onCameraMoveStartedListener&&(e.onCameraMoveStartedListener.remove(),e.onCameraMoveStartedListener=void 0),e.onClusterClickListener&&(e.onClusterClickListener.remove(),e.onClusterClickListener=void 0),e.onClusterInfoWindowClickListener&&(e.onClusterInfoWindowClickListener.remove(),e.onClusterInfoWindowClickListener=void 0),e.onInfoWindowClickListener&&(e.onInfoWindowClickListener.remove(),e.onInfoWindowClickListener=void 0),e.onMapClickListener&&(e.onMapClickListener.remove(),e.onMapClickListener=void 0),e.onPolylineClickListener&&(e.onPolylineClickListener.remove(),e.onPolylineClickListener=void 0),e.onMarkerClickListener&&(e.onMarkerClickListener.remove(),e.onMarkerClickListener=void 0),e.onPolygonClickListener&&(e.onPolygonClickListener.remove(),e.onPolygonClickListener=void 0),e.onCircleClickListener&&(e.onCircleClickListener.remove(),e.onCircleClickListener=void 0),e.onMarkerDragStartListener&&(e.onMarkerDragStartListener.remove(),e.onMarkerDragStartListener=void 0),e.onMarkerDragListener&&(e.onMarkerDragListener.remove(),e.onMarkerDragListener=void 0),e.onMarkerDragEndListener&&(e.onMarkerDragEndListener.remove(),e.onMarkerDragEndListener=void 0),e.onMyLocationButtonClickListener&&(e.onMyLocationButtonClickListener.remove(),e.onMyLocationButtonClickListener=void 0),e.onMyLocationClickListener&&(e.onMyLocationClickListener.remove(),e.onMyLocationClickListener=void 0)})()}generateCallback(e){const n=this.id;return o=>{o.mapId==n&&e(o)}}}var i=a(5879),Z=a(2296);const x=["map"],I=function(){return["/pago"]},B=function(){return["/menuprincipal"]},D=function(){return["/comenzarviaje"]},O=function(){return["/perfilusuario"]},T=function(){return["/tomarviaje"]},z=function(){return["/paginalogin-usuario"]},W=[{path:"",component:(()=>{var l;class e{constructor(){}createMap(){var o=this;return(0,t.Z)(function*(){const c=u.getCurrentPosition();o.newMap=yield p.create({id:"map",element:o.mapRef.nativeElement,apiKey:"AIzaSyC0fDW4dwRCQCVVNuKE18IBn-gJYpg3T84",config:{center:{lat:(yield c).coords.latitude,lng:(yield c).coords.longitude},zoom:8}})})()}ngOnInit(){}}return(l=e).\u0275fac=function(o){return new(o||l)},l.\u0275cmp=i.Xpm({type:l,selectors:[["app-comenzarviaje"]],viewQuery:function(o,c){if(1&o&&i.Gf(x,5),2&o){let f;i.iGM(f=i.CRH())&&(c.mapRef=f.first)}},decls:30,vars:12,consts:[["id","main-content",1,"ion-page"],["color","primary"],[2,"text-align","center"],["slot","start"],[2,"margin-top","20%"],["id","map"],[2,"text-align","center",3,"routerLink"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with a open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"]],template:function(o,c){1&o&&(i.TgZ(0,"ion-content")(1,"div",0)(2,"ion-header")(3,"ion-toolbar",1)(4,"ion-title",2),i._uU(5,"Comenzar viaje"),i.qZA(),i.TgZ(6,"ion-buttons",3),i._UZ(7,"ion-menu-button"),i.qZA()()()(),i.TgZ(8,"ion-card",4)(9,"ion-card-header")(10,"ion-card-title",1),i._uU(11,"Seleccione una ubicaci\xf3n"),i.qZA()(),i._UZ(12,"capacitor-google-map",5),i.TgZ(13,"ion-item")(14,"ion-button",6),i._uU(15,"Efectuar Pago"),i.qZA()()()(),i.TgZ(16,"ion-footer")(17,"section",7)(18,"div",8)(19,"div",9)(20,"button",10),i._UZ(21,"ion-icon",11),i.qZA(),i.TgZ(22,"button",12),i._UZ(23,"ion-icon",13),i.qZA(),i.TgZ(24,"button",14),i._UZ(25,"ion-icon",15),i.qZA(),i.TgZ(26,"button",16),i._UZ(27,"ion-icon",17),i.qZA(),i.TgZ(28,"button",18),i._UZ(29,"ion-icon",19),i.qZA()()()()()),2&o&&(i.xp6(14),i.Q6J("routerLink",i.DdM(6,I)),i.xp6(6),i.Q6J("routerLink",i.DdM(7,B)),i.xp6(2),i.Q6J("routerLink",i.DdM(8,D)),i.xp6(2),i.Q6J("routerLink",i.DdM(9,O)),i.xp6(2),i.Q6J("routerLink",i.DdM(10,T)),i.xp6(2),i.Q6J("routerLink",i.DdM(11,z)))},dependencies:[s.YG,s.Sm,s.PM,s.Zi,s.Dq,s.W2,s.fr,s.Gu,s.gu,s.Ie,s.fG,s.wd,s.sr,s.YI,m.rH,Z.RK],styles:["#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:rgb(241, 241, 236);--ion-border-color:primary}section[_ngcontent-%COMP%]{display:table}.example-label[_ngcontent-%COMP%]{display:table-cell;font-size:14px;margin-left:8px;min-width:120px}.example-button-row[_ngcontent-%COMP%]{display:table-cell;max-width:600px}.example-button-row[_ngcontent-%COMP%]   .mat-mdc-button-base[_ngcontent-%COMP%]{margin:8px 8px 8px 0}.example-flex-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.example-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:120px}capacitor-google-map[_ngcontent-%COMP%]{display:inline-block;width:275px;height:400px}"]}),e})()}];let R=(()=>{var l;class e{}return(l=e).\u0275fac=function(o){return new(o||l)},l.\u0275mod=i.oAB({type:l}),l.\u0275inj=i.cJS({imports:[m.Bz.forChild(W),m.Bz]}),e})();var j=a(1175),_=a(6385);let A=(()=>{var l;class e{}return(l=e).\u0275fac=function(o){return new(o||l)},l.\u0275mod=i.oAB({type:l}),l.\u0275inj=i.cJS({imports:[M.ez,C.u5,s.Pc,R,Z.ot,_.t,j.Ps]}),e})()}}]);