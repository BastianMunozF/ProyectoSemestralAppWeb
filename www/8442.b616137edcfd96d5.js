"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8442],{8442:(L,p,i)=>{i.r(p),i.d(p,{TomarviajePageModule:()=>E});var m=i(6814),d=i(6223),e=i(9843),u=i(2058),f=i(5861),t=i(5879),v=i(4535),g=i(2296);function j(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"ion-item")(1,"ion-card")(2,"ion-card-content")(3,"ion-item")(4,"ion-label")(5,"strong"),t._uU(6),t.ALo(7,"uppercase"),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"p",18),t._uU(10),t.qZA(),t.TgZ(11,"p",18),t._uU(12),t.qZA(),t.TgZ(13,"p",18),t._uU(14),t.qZA(),t.TgZ(15,"p",18),t._uU(16),t.qZA(),t.TgZ(17,"p",18),t._uU(18),t.qZA(),t.TgZ(19,"p",18),t._uU(20),t.qZA(),t._UZ(21,"br"),t.TgZ(22,"ion-button",19),t.NdJ("click",function(){const s=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.aceptarViaje(s.id_viaje,s.id_conductor))}),t._uU(23,"Aceptar Viaje"),t.qZA()()()()()()}if(2&o){const n=r.$implicit;t.xp6(6),t.hij("Destino: ",t.lcZ(7,7,n.destino),""),t.xp6(4),t.hij("Salida: ",n.salida,""),t.xp6(2),t.hij("Hora Salida: ",n.hora_salida,""),t.xp6(2),t.hij("Fecha Salida: ",n.f_viaje,""),t.xp6(2),t.hij("Asientos: ",n.cant_asientos,""),t.xp6(2),t.hij("Estado: ",n.estado,""),t.xp6(2),t.hij("Valor asiento: ",n.valor_asiento,"")}}const Z=function(){return["/menuprincipal"]},b=function(){return["/comenzarviaje"]},x=function(){return["/perfilusuario"]},T=function(){return["/tomarviaje"]},A=function(){return["/paginalogin-usuario"]},y=[{path:"",component:(()=>{var o;class r{constructor(a,c,s){this.alertController=a,this.database=c,this.router=s}ngOnInit(){this.database.buscarViaje().then(a=>{this.arregloViajes=a})}aceptarViaje(a,c){let s=localStorage.getItem("id");this.database.buscarViajeId(a).then(l=>{if(null!==l){this.arregloViajeId=l[0];let h=this.arregloViajeId.cant_asientos-1;h>0?this.database.insertarViajeAceptado(s,c,a).then(V=>{null!==V&&this.database.actualizarEstadoViaje(h,a).then(C=>{C?(this.presentarAlerta("Viaje Aceptado","El viaje seleccionado ha sido confirmado con \xe9xito."),this.router.navigate(["/menuprincipal"])):this.presentarAlerta("Error al aceptar viaje","El viaje no se ha podido confirmar correctamente")})}):this.presentarAlerta("Error al aceptar viaje","El viaje que desea reservar ya no tiene asientos disponibles.")}else this.presentarAlerta("Viaje no Encontrado","El viaje que desea reservar no se encuentra disponible.")})}presentarAlerta(a,c){var s=this;return(0,f.Z)(function*(){yield(yield s.alertController.create({header:a,message:c,buttons:["Aceptar"]})).present()})()}}return(o=r).\u0275fac=function(a){return new(a||o)(t.Y36(e.Br),t.Y36(v.N),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tomarviaje"]],decls:26,vars:11,consts:[["color","primary"],["slot","start"],[2,"text-align","center"],[2,"margin","10px"],[4,"ngFor","ngForOf"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with a open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"],[2,"word-wrap","break-word","white-space","normal"],[3,"click"]],template:function(a,c){1&a&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title",2),t._uU(5,"Agenda"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-card",0)(8,"h2",3),t._uU(9,"Listado de viajes"),t.qZA()(),t.TgZ(10,"ion-list"),t.YNc(11,j,24,9,"ion-item",4),t.qZA()(),t.TgZ(12,"ion-footer")(13,"section",5)(14,"div",6)(15,"div",7)(16,"button",8),t._UZ(17,"ion-icon",9),t.qZA(),t.TgZ(18,"button",10),t._UZ(19,"ion-icon",11),t.qZA(),t.TgZ(20,"button",12),t._UZ(21,"ion-icon",13),t.qZA(),t.TgZ(22,"button",14),t._UZ(23,"ion-icon",15),t.qZA(),t.TgZ(24,"button",16),t._UZ(25,"ion-icon",17),t.qZA()()()()()),2&a&&(t.xp6(11),t.Q6J("ngForOf",c.arregloViajes),t.xp6(5),t.Q6J("routerLink",t.DdM(6,Z)),t.xp6(2),t.Q6J("routerLink",t.DdM(7,b)),t.xp6(2),t.Q6J("routerLink",t.DdM(8,x)),t.xp6(2),t.Q6J("routerLink",t.DdM(9,T)),t.xp6(2),t.Q6J("routerLink",t.DdM(10,A)))},dependencies:[m.sg,e.YG,e.Sm,e.PM,e.FN,e.W2,e.fr,e.Gu,e.gu,e.Ie,e.Q$,e.q_,e.fG,e.wd,e.sr,e.YI,u.rH,g.RK,m.gd],styles:["#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:#f1f1ec;--ion-border-color:primary}"]}),r})()}];let P=(()=>{var o;class r{}return(o=r).\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(y),u.Bz]}),r})();var M=i(617),U=i(6385);let E=(()=>{var o;class r{}return(o=r).\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,d.u5,e.Pc,P,d.UX,M.Ps,U.t,g.ot]}),r})()}}]);