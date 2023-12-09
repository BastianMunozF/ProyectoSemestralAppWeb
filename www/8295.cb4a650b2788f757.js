"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8295],{8295:(H,v,i)=>{i.r(v),i.d(v,{MenuprincipalPageModule:()=>K});var P=i(6814),A=i(6223),c=i(9843),d=i(2058),f=i(7791),U=i(7838),p=i(6825),n=i(5879),g=i(9862),C=i(9360),y=i(8251),T=i(2737),z=i(5592),I=i(4352),L=i(671);var D=i(4829);let S=(()=>{var e;class a{constructor(t){this.http=t,this.httpOptions={headers:new g.WM({"Content-Type":"application/json","Access-Control-Allow-Origin":"*"})},this.apiURL="https://api.meteomatics.com/"}getClima(t,o,r){return this.http.get(this.apiURL+t+"/t_2m:C/"+o+","+r+"/json?access_token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2IjoxLCJ1c2VyIjoiZHVvY3VjX211bm96X2Jhc3RpYW4iLCJpc3MiOiJsb2dpbi5tZXRlb21hdGljcy5jb20iLCJleHAiOjE3MDA0MTczOTksInN1YiI6ImFjY2VzcyJ9.szj7Xm8DCXAtqs9bw38VUcBP03wN5gjkaVmdk7fkZs6LcVULZtvMtKZvWzR3L9nzKXkHPKyc-pamPas_dEZEIA").pipe(function F(e=1/0){let a;a=e&&"object"==typeof e?e:{count:e};const{count:l=1/0,delay:t,resetOnSuccess:o=!1}=a;return l<=0?T.y:(0,C.e)((r,s)=>{let u,h=0;const b=()=>{let x=!1;u=r.subscribe((0,y.x)(s,m=>{o&&(h=0),s.next(m)},void 0,m=>{if(h++<l){const M=()=>{u?(u.unsubscribe(),u=null,b()):x=!0};if(null!=t){const W="number"==typeof t?function J(e=0,a,l=I.P){let t=-1;return null!=a&&((0,L.K)(a)?l=a:t=a),new z.y(o=>{let r=function V(e){return e instanceof Date&&!isNaN(e)}(e)?+e-l.now():e;r<0&&(r=0);let s=0;return l.schedule(function(){o.closed||(o.next(s++),0<=t?this.schedule(void 0,t):o.complete())},r)})}(t):(0,D.Xf)(t(m,h)),j=(0,y.x)(s,()=>{j.unsubscribe(),M()},()=>{s.complete()});W.subscribe(j)}else M()}else s.error(m)})),x&&(u.unsubscribe(),u=null,b())};b()})}(3))}}return(e=a).\u0275fac=function(t){return new(t||e)(n.LFG(g.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),a})();var w=i(4535),Z=i(2296);const R=function(){return["/menuprincipal"]},O=function(){return["/tomarviaje"]},B=function(){return["/perfilusuario"]},E=function(){return["/comenzarviaje"]},X=function(){return["/paginalogin-usuario"]},N=[{path:"",component:(()=>{var e;class a{constructor(t,o,r){this.apiservice=t,this.database=o,this.alertController=r,this.dateTime="",this.id_usuario=localStorage.getItem("id")}ngOnInit(){}ionViewWillEnter(){this.obtenerClima(),this.verificarViajeUser()}obtenerClima(){var t=this;return(0,f.Z)(function*(){t.dateTime=(new Date).toISOString();const o=yield U.b.getCurrentPosition();t.apiservice.getClima(t.dateTime,o.coords.latitude,o.coords.longitude).subscribe(r=>{t.clima=r,console.log("Datos del clima:",t.clima)})})()}verificarViajeUser(){var t=this;return(0,f.Z)(function*(){t.database.buscarViaje("Disponible.").then(r=>{t.arregloViajes=r,t.database.verificarViaje(t.arregloViajes.id_viaje).then(s=>{s?console.log("Viaje a\xfan disponible."):t.presentarAlerta("Viaje rechazado","Su viaje ha sido rechazado por el conductor.")})}).catch(r=>{console.log("Error al buscar viajes: ",+r)})})()}presentarAlerta(t,o){var r=this;return(0,f.Z)(function*(){yield(yield r.alertController.create({header:t,message:o,buttons:["Aceptar"]})).present()})()}}return(e=a).\u0275fac=function(t){return new(t||e)(n.Y36(S),n.Y36(w.N),n.Y36(c.Br))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-menuprincipal"]],decls:46,vars:11,consts:[[2,"border","solid 1.5px #469597"],["id","main-content",1,"ion-page"],["color","primary"],[2,"text-align","center"],["slot","start"],["color","primary",2,"margin-left","15px"],[2,"text-align","center","font-size","xx-large"],["name","partly-sunny-sharp"],[2,"display","flex","flex-direction","column","align-items","center","font-size","xx-large"],["color","primary",2,"margin-top","20%"],["color","primary",2,"text-align","center"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1302.0092590469305!2d-70.67890551376183!3d-33.36350127453191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c7025c925e0f%3A0x7f2f6a657c08d14a!2sDuoc%20UC%3A%20Sede%20Plaza%20Norte!5e0!3m2!1ses!2scl!4v1699745994646!5m2!1ses!2scl","width","400","height","300","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border-radius","10px"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three-dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],[1,"button-text"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with an open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"]],template:function(t,o){1&t&&(n.TgZ(0,"ion-content",0)(1,"div",1)(2,"ion-header")(3,"ion-toolbar",2)(4,"ion-title",3),n._uU(5,"\xa1Bienvenidos Usuarios!"),n.qZA(),n.TgZ(6,"ion-buttons",4),n._UZ(7,"ion-menu-button"),n.qZA()()()(),n._UZ(8,"br")(9,"br")(10,"br"),n.TgZ(11,"ion-card",5)(12,"ion-card-content")(13,"ion-card-title",6),n._uU(14,"Clima Parcial "),n._UZ(15,"ion-icon",7),n.qZA(),n.TgZ(16,"ion-label",8),n._uU(17),n.qZA()()(),n.TgZ(18,"ion-card",9)(19,"ion-card")(20,"ion-card-title",10),n._uU(21,"Puntos de Partida"),n.qZA(),n._UZ(22,"iframe",11),n.qZA()()(),n.TgZ(23,"section",12)(24,"div",13)(25,"div",14)(26,"button",15),n._UZ(27,"ion-icon",16),n.TgZ(28,"span",17),n._uU(29,"Inicio"),n.qZA()(),n.TgZ(30,"button",18),n._UZ(31,"ion-icon",19),n.TgZ(32,"span",17),n._uU(33,"Viaje"),n.qZA()(),n.TgZ(34,"button",20),n._UZ(35,"ion-icon",21),n.TgZ(36,"span",17),n._uU(37,"Perfil"),n.qZA()(),n.TgZ(38,"button",22),n._UZ(39,"ion-icon",23),n.TgZ(40,"span",17),n._uU(41,"Auto"),n.qZA()(),n.TgZ(42,"button",24),n._UZ(43,"ion-icon",25),n.TgZ(44,"span",17),n._uU(45,"Cierre"),n.qZA()()()()()),2&t&&(n.xp6(17),n.hij("",null==o.clima||null==o.clima.data[0]||null==o.clima.data[0].coordinates[0]||null==o.clima.data[0].coordinates[0].dates[0]?null:o.clima.data[0].coordinates[0].dates[0].value,"\xb0C"),n.xp6(9),n.Q6J("routerLink",n.DdM(6,R)),n.xp6(4),n.Q6J("routerLink",n.DdM(7,O)),n.xp6(4),n.Q6J("routerLink",n.DdM(8,B)),n.xp6(4),n.Q6J("routerLink",n.DdM(9,E)),n.xp6(4),n.Q6J("routerLink",n.DdM(10,X)))},dependencies:[c.Sm,c.PM,c.FN,c.Dq,c.W2,c.Gu,c.gu,c.Q$,c.fG,c.wd,c.sr,c.YI,d.rH,Z.RK],styles:['@charset "UTF-8";#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:#f1f1ec;--ion-border-color:primary}.button-text[_ngcontent-%COMP%]{font-size:8px;margin-top:1px;display:block;text-align:center;color:#469597}'],data:{animation:[(0,p.X$)("fade",[(0,p.eR)("void => *",[(0,p.oB)({opacity:0}),(0,p.jt)(500,(0,p.oB)({opacity:1}))])])]}}),a})()}];let Y=(()=>{var e;class a{}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.Bz.forChild(N),d.Bz]}),a})();var G=i(617),Q=i(6385);let K=(()=>{var e;class a{}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[P.ez,A.u5,c.Pc,Y,G.Ps,Q.t,Z.ot,g.JF]}),a})()}}]);