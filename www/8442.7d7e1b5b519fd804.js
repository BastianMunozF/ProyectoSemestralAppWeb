"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8442],{8442:(L,d,r)=>{r.r(d),r.d(d,{TomarviajePageModule:()=>E});var m=r(6814),p=r(6223),e=r(9843),u=r(2058),v=r(5861),o=r(5879),f=r(4535),g=r(2296);function j(t,i){if(1&t){const n=o.EpF();o.TgZ(0,"ion-item")(1,"ion-card")(2,"ion-card-content")(3,"ion-item")(4,"ion-label")(5,"strong"),o._uU(6),o.ALo(7,"uppercase"),o.qZA(),o._UZ(8,"br"),o.TgZ(9,"p",18),o._uU(10),o.qZA(),o.TgZ(11,"p",18),o._uU(12),o.qZA(),o.TgZ(13,"p",18),o._uU(14),o.qZA(),o.TgZ(15,"p",18),o._uU(16),o.qZA(),o.TgZ(17,"p",18),o._uU(18),o.qZA(),o.TgZ(19,"p",18),o._uU(20),o.qZA(),o._UZ(21,"br"),o.TgZ(22,"ion-button",19),o.NdJ("click",function(){const s=o.CHM(n).$implicit,l=o.oxw();return o.KtG(l.aceptarViaje(s.id_viaje,s.id_conductor))}),o._uU(23,"Aceptar Viaje"),o.qZA()()()()()()}if(2&t){const n=i.$implicit;o.xp6(6),o.hij("Destino: ",o.lcZ(7,7,n.destino),""),o.xp6(4),o.hij("Salida: ",n.salida,""),o.xp6(2),o.hij("Hora Salida: ",n.hora_salida,""),o.xp6(2),o.hij("Fecha Salida: ",n.f_viaje,""),o.xp6(2),o.hij("Asientos: ",n.cant_asientos,""),o.xp6(2),o.hij("Estado: ",n.estado,""),o.xp6(2),o.hij("Valor asiento: ",n.valor_asiento,"")}}const Z=function(){return["/menuprincipal"]},b=function(){return["/comenzarviaje"]},x=function(){return["/perfilusuario"]},T=function(){return["/tomarviaje"]},A=function(){return["/paginalogin-usuario"]},y=[{path:"",component:(()=>{var t;class i{constructor(a,c,s){this.alertController=a,this.database=c,this.router=s}ngOnInit(){this.database.buscarViaje().then(a=>{this.arregloViajes=a})}aceptarViaje(a,c){let s=localStorage.getItem("id");this.database.buscarViajeId(a).then(l=>{if(null!==l){this.arregloViajeId=l[0];let h=this.arregloViajeId.cant_asientos-1;h>0?this.database.insertarViajeAceptado(s,c,a).then(C=>{null!==C&&this.database.actualizarEstadoViaje(h,a).then(V=>{V?(this.presentarAlerta("Viaje Aceptado","El viaje seleccionado ha sido confirmado con \xe9xito."),this.router.navigate(["/menuprincipal"])):this.presentarAlerta("Error al aceptar viaje","El viaje no se ha podido confirmar correctamente")})}):this.presentarAlerta("Error al aceptar viaje","El viaje que desea reservar ya no tiene asientos disponibles.")}else this.presentarAlerta("Viaje no Encontrado","El viaje que desea reservar no se encuentra disponible.")})}presentarAlerta(a,c){var s=this;return(0,v.Z)(function*(){yield(yield s.alertController.create({header:a,message:c,buttons:["Aceptar"]})).present()})()}}return(t=i).\u0275fac=function(a){return new(a||t)(o.Y36(e.Br),o.Y36(f.N),o.Y36(u.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-tomarviaje"]],decls:26,vars:11,consts:[["color","primary"],["slot","start"],[2,"text-align","center"],[2,"margin","10px"],[4,"ngFor","ngForOf"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with a open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"],[2,"word-wrap","break-word","white-space","normal"],[3,"click"]],template:function(a,c){1&a&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),o._UZ(3,"ion-menu-button"),o.qZA(),o.TgZ(4,"ion-title",2),o._uU(5,"Agenda"),o.qZA()()(),o.TgZ(6,"ion-content")(7,"ion-card",0)(8,"h2",3),o._uU(9,"Listado de viajes"),o.qZA()(),o.TgZ(10,"ion-list"),o.YNc(11,j,24,9,"ion-item",4),o.qZA()(),o.TgZ(12,"ion-footer")(13,"section",5)(14,"div",6)(15,"div",7)(16,"button",8),o._UZ(17,"ion-icon",9),o.qZA(),o.TgZ(18,"button",10),o._UZ(19,"ion-icon",11),o.qZA(),o.TgZ(20,"button",12),o._UZ(21,"ion-icon",13),o.qZA(),o.TgZ(22,"button",14),o._UZ(23,"ion-icon",15),o.qZA(),o.TgZ(24,"button",16),o._UZ(25,"ion-icon",17),o.qZA()()()()()),2&a&&(o.xp6(11),o.Q6J("ngForOf",c.arregloViajes),o.xp6(5),o.Q6J("routerLink",o.DdM(6,Z)),o.xp6(2),o.Q6J("routerLink",o.DdM(7,b)),o.xp6(2),o.Q6J("routerLink",o.DdM(8,x)),o.xp6(2),o.Q6J("routerLink",o.DdM(9,T)),o.xp6(2),o.Q6J("routerLink",o.DdM(10,A)))},dependencies:[m.sg,e.YG,e.Sm,e.PM,e.FN,e.W2,e.fr,e.Gu,e.gu,e.Ie,e.Q$,e.q_,e.fG,e.wd,e.sr,e.YI,u.rH,g.RK,m.gd],styles:["#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:rgb(241, 241, 236);--ion-border-color:primary}ion-card[_ngcontent-%COMP%]{--ion-border-color:rgb(141, 38, 38)}"]}),i})()}];let P=(()=>{var t;class i{}return(t=i).\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.Bz.forChild(y),u.Bz]}),i})();var M=r(617),U=r(6385);let E=(()=>{var t;class i{}return(t=i).\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[m.ez,p.u5,e.Pc,P,p.UX,M.Ps,U.t,g.ot]}),i})()}}]);