"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8442],{8442:(A,j,r)=>{r.r(j),r.d(j,{TomarviajePageModule:()=>E});var g=r(6814),f=r(6223),o=r(9843),l=r(2058),h=r(7791),e=r(5879),m=r(4535),u=r(2296);function d(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"ion-item-sliding")(1,"ion-card",20)(2,"ion-card-content")(3,"ion-item")(4,"ion-label")(5,"strong"),e._uU(6),e.ALo(7,"uppercase"),e.qZA(),e._UZ(8,"br"),e.TgZ(9,"p",21),e._uU(10),e.qZA(),e.TgZ(11,"p",21),e._uU(12),e.qZA(),e.TgZ(13,"p",21),e._uU(14),e.qZA(),e.TgZ(15,"p",21),e._uU(16),e.qZA(),e.TgZ(17,"p",21),e._uU(18),e.qZA(),e.TgZ(19,"p",21),e._uU(20),e.qZA(),e._UZ(21,"br"),e.TgZ(22,"ion-button",22),e.NdJ("click",function(){const v=e.CHM(n).$implicit,Z=e.oxw();return e.KtG(Z.aceptarViaje(v))}),e._uU(23,"Aceptar Viaje"),e.qZA()()()()()()}if(2&t){const n=s.$implicit;e.xp6(6),e.hij("Destino: ",e.lcZ(7,7,n.destino),""),e.xp6(4),e.hij("Salida: ",n.salida,""),e.xp6(2),e.hij("Hora Salida: ",n.hora_salida,""),e.xp6(2),e.hij("Fecha Salida: ",n.f_viaje,""),e.xp6(2),e.hij("Asientos: ",n.cant_asientos,""),e.xp6(2),e.hij("Estado: ",n.estado,""),e.xp6(2),e.hij("Valor asiento: ",n.valor_asiento,"")}}const p=function(){return["/viajesreservados"]},c=function(){return["/menuprincipal"]},b=function(){return["/tomarviaje"]},y=function(){return["/perfilusuario"]},U=function(){return["/comenzarviaje"]},P=function(){return["/paginalogin-usuario"]},V=[{path:"",component:(()=>{var t;class s{constructor(a,i){this.alertController=a,this.database=i,this.arregloViajes=[{id_viaje:"",f_viaje:"",hora_salida:"",salida:"",destino:"",cant_asientos:"",valor_asiento:"",estado:"",id_usuario:""}]}ngOnInit(){this.database.buscarViaje("Disponible."),this.database.fetchViaje().subscribe(i=>{i.length>0?(console.log("Viajes: ",i),this.arregloViajes=i):console.log("Datos no encontrados.")})}aceptarViaje(a){console.log("Viaje: ",a);let i=localStorage.getItem("id");this.database.buscarViajeUserAceptado(i,a.id_viaje).then(v=>{if(v.length>0)this.presentarAlerta("Error al reservar viaje","Usted ya ha aceptado este viaje.");else if(parseInt(a.cant_asientos)>0){let Z=parseInt(a.cant_asientos)-1;this.database.insertarViajeAceptado(i,a.id_viaje).then(x=>{x?this.database.actualizarEstadoViaje(Z,a.id_viaje).then(T=>{if(T){this.presentarAlerta("Viaje Confirmado","Su viaje ha sido reservado con \xe9xito.");const _=this.arregloViajes.findIndex(L=>L.id_viaje===a.id_viaje);-1!==_&&this.arregloViajes.splice(_,1)}else this.presentarAlerta("Error al aceptar Viaje","Su viaje no ha podido ser reservado.")}).catch(T=>{this.presentarAlerta("Error aqui.","Funcion Actualizar Estado Viaje."),console.error(T)}):this.presentarAlerta("Error al reservar Viaje","Su viaje no ha podido ser reservado.")}).catch(x=>{this.presentarAlerta("Error aqui.","Funcion Insertar Viaje Aceptado."),console.error(x)})}else this.presentarAlerta("Error al reservar viaje","El viaje que desea reservar no tiene asientos disponibles.")})}presentarAlerta(a,i){var v=this;return(0,h.Z)(function*(){yield(yield v.alertController.create({header:a,message:i,buttons:["Aceptar"]})).present()})()}}return(t=s).\u0275fac=function(a){return new(a||t)(e.Y36(o.Br),e.Y36(m.N))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tomarviaje"]],decls:37,vars:13,consts:[["color","primary"],["slot","start"],[2,"text-align","center"],[2,"margin","10px","text-align","center","font-weight","800"],[4,"ngFor","ngForOf"],[3,"routerLink"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three-dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],[1,"button-text"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with an open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"],[2,"margin-bottom","30px"],[2,"word-wrap","break-word","white-space","normal"],[3,"click"]],template:function(a,i){1&a&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title",2),e._uU(5,"ViaGo"),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-card",0)(8,"h3",3),e._uU(9,"Listado de viajes"),e.qZA()(),e.TgZ(10,"ion-list"),e.YNc(11,d,24,9,"ion-item-sliding",4),e.qZA(),e.TgZ(12,"ion-button",5),e._uU(13,"Ver Viajes Reservados"),e.qZA()(),e.TgZ(14,"section",6)(15,"div",7)(16,"div",8)(17,"button",9),e._UZ(18,"ion-icon",10),e.TgZ(19,"span",11),e._uU(20,"Inicio"),e.qZA()(),e.TgZ(21,"button",12),e._UZ(22,"ion-icon",13),e.TgZ(23,"span",11),e._uU(24,"Viaje"),e.qZA()(),e.TgZ(25,"button",14),e._UZ(26,"ion-icon",15),e.TgZ(27,"span",11),e._uU(28,"Perfil"),e.qZA()(),e.TgZ(29,"button",16),e._UZ(30,"ion-icon",17),e.TgZ(31,"span",11),e._uU(32,"Auto"),e.qZA()(),e.TgZ(33,"button",18),e._UZ(34,"ion-icon",19),e.TgZ(35,"span",11),e._uU(36,"Cierre"),e.qZA()()()()()),2&a&&(e.xp6(11),e.Q6J("ngForOf",i.arregloViajes),e.xp6(1),e.Q6J("routerLink",e.DdM(7,p)),e.xp6(5),e.Q6J("routerLink",e.DdM(8,c)),e.xp6(4),e.Q6J("routerLink",e.DdM(9,b)),e.xp6(4),e.Q6J("routerLink",e.DdM(10,y)),e.xp6(4),e.Q6J("routerLink",e.DdM(11,U)),e.xp6(4),e.Q6J("routerLink",e.DdM(12,P)))},dependencies:[g.sg,o.YG,o.Sm,o.PM,o.FN,o.W2,o.Gu,o.gu,o.Ie,o.td,o.Q$,o.q_,o.fG,o.wd,o.sr,o.YI,l.rH,u.RK,g.gd],styles:['@charset "UTF-8";#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:#f1f1ec;--ion-border-color:primary}.button-text[_ngcontent-%COMP%]{font-size:8px;margin-top:1px;display:block;text-align:center;color:#469597}']}),s})()}];let M=(()=>{var t;class s{}return(t=s).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(V),l.Bz]}),s})();var w=r(617),C=r(6385);let E=(()=>{var t;class s{}return(t=s).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.ez,f.u5,o.Pc,M,f.UX,w.Ps,C.t,u.ot]}),s})()},7791:(A,j,r)=>{function g(o,l,h,e,m,u,d){try{var p=o[u](d),c=p.value}catch(b){return void h(b)}p.done?l(c):Promise.resolve(c).then(e,m)}function f(o){return function(){var l=this,h=arguments;return new Promise(function(e,m){var u=o.apply(l,h);function d(c){g(u,e,m,d,p,"next",c)}function p(c){g(u,e,m,d,p,"throw",c)}d(void 0)})}}r.d(j,{Z:()=>f})}}]);