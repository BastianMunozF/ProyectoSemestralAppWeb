"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7895],{7895:(_,l,r)=>{r.r(l),r.d(l,{ViajesiniciadosPageModule:()=>U});var u=r(6814),d=r(6223),t=r(9843),s=r(2058),m=r(5861),i=r(5879),p=r(4535),g=r(2296);function h(o,e){if(1&o&&(i.TgZ(0,"ion-item")(1,"p"),i._uU(2),i.qZA(),i._UZ(3,"br"),i.TgZ(4,"p"),i._uU(5),i.qZA()()),2&o){const a=e.$implicit;i.xp6(2),i.hij("Marca: ",a.marca,""),i.xp6(3),i.hij("Modelo: ",a.modelo,"")}}function Z(o,e){if(1&o&&(i.TgZ(0,"ion-item")(1,"ion-label")(2,"strong"),i._uU(3),i.qZA(),i._UZ(4,"br"),i.TgZ(5,"p"),i._uU(6),i.qZA(),i.TgZ(7,"p"),i._uU(8),i.qZA(),i.TgZ(9,"p"),i._uU(10),i.qZA(),i.TgZ(11,"p"),i._uU(12),i.qZA(),i.TgZ(13,"p"),i._uU(14),i.qZA(),i.TgZ(15,"p"),i._uU(16),i.qZA(),i.TgZ(17,"p"),i._uU(18),i.qZA(),i._UZ(19,"br"),i.TgZ(20,"h4"),i._uU(21,"Vehiculo:"),i.qZA(),i.YNc(22,h,6,2,"ion-item",5),i.qZA()()),2&o){const a=e.$implicit,n=i.oxw().$implicit,c=i.oxw();i.xp6(3),i.hij("Pasajero: ",a.nombre,""),i.xp6(3),i.hij("Fecha del Viaje: ",n.f_viaje,""),i.xp6(2),i.hij("Hora de Salida: ",n.hora_salida,""),i.xp6(2),i.hij("Salida: ",n.salida,""),i.xp6(2),i.hij("Destino: ",n.destino,""),i.xp6(2),i.hij("Asientos Ocupados: ",n.cant_asientos,""),i.xp6(2),i.hij("Valor Asiento: ",n.valor_asiento,""),i.xp6(2),i.hij("Estado: ",n.estado,""),i.xp6(4),i.Q6J("ngForOf",c.arregloVehiculo)}}function f(o,e){if(1&o&&(i.TgZ(0,"ion-item")(1,"ion-card")(2,"ion-card-content"),i.YNc(3,Z,23,9,"ion-item",5),i.qZA()()()),2&o){const a=i.oxw();i.xp6(3),i.Q6J("ngForOf",a.arregloUsuario)}}const x=function(){return["/menuprincipalconductor"]},j=function(){return["/rutaconductor"]},b=function(){return["/perfilconductor"]},v=function(){return["/registrarvehiculo"]},A=function(){return["/paginalogin-usuario"]},T=[{path:"",component:(()=>{var o;class e{constructor(n,c){this.database=n,this.alertController=c,this.arregloViajes=[],this.arregloUsuario=[],this.arregloVehiculo=[],this.detallesViaje=[],this.id_conductor=localStorage.getItem("id")}ngOnInit(){}presentarAlerta(n,c){var M=this;return(0,m.Z)(function*(){yield(yield M.alertController.create({header:n,message:c,buttons:["Aceptar"]})).present()})()}}return(o=e).\u0275fac=function(n){return new(n||o)(i.Y36(p.N),i.Y36(t.Br))},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-viajesiniciados"]],decls:24,vars:12,consts:[[3,"translucent"],["color","primary",2,"text-align","center"],[2,"text-align","center"],["color","primary"],["color","primary",1,"ion-text-center",2,"font-weight","800"],[4,"ngFor","ngForOf"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with a open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"]],template:function(n,c){1&n&&(i.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),i._uU(3,"ViaGo"),i.qZA()()(),i.TgZ(4,"ion-content")(5,"ion-card",3)(6,"h2",4),i._uU(7,"Historial de Viajes Aceptados"),i.qZA()(),i.TgZ(8,"ion-list"),i.YNc(9,f,4,1,"ion-item",5),i.qZA()(),i.TgZ(10,"ion-footer")(11,"section",6)(12,"div",7)(13,"div",8)(14,"button",9),i._UZ(15,"ion-icon",10),i.qZA(),i.TgZ(16,"button",11),i._UZ(17,"ion-icon",12),i.qZA(),i.TgZ(18,"button",13),i._UZ(19,"ion-icon",14),i.qZA(),i.TgZ(20,"button",15),i._UZ(21,"ion-icon",16),i.qZA(),i.TgZ(22,"button",17),i._UZ(23,"ion-icon",18),i.qZA()()()()()),2&n&&(i.Q6J("translucent",!0),i.xp6(9),i.Q6J("ngForOf",c.arregloViajes),i.xp6(5),i.Q6J("routerLink",i.DdM(7,x)),i.xp6(2),i.Q6J("routerLink",i.DdM(8,j)),i.xp6(2),i.Q6J("routerLink",i.DdM(9,b)),i.xp6(2),i.Q6J("routerLink",i.DdM(10,v)),i.xp6(2),i.Q6J("routerLink",i.DdM(11,A)))},dependencies:[u.sg,t.PM,t.FN,t.W2,t.fr,t.Gu,t.gu,t.Ie,t.Q$,t.q_,t.wd,t.sr,t.YI,s.rH,g.RK],styles:["#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:#f1f1ec;--ion-border-color:primary}"]}),e})()}];let V=(()=>{var o;class e{}return(o=e).\u0275fac=function(n){return new(n||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[s.Bz.forChild(T),s.Bz]}),e})();var y=r(617),P=r(6385);let U=(()=>{var o;class e{}return(o=e).\u0275fac=function(n){return new(n||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[u.ez,d.u5,t.Pc,V,y.Ps,P.t,g.ot]}),e})()}}]);