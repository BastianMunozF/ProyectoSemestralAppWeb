"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5672],{5672:(R,s,i)=>{i.r(s),i.d(s,{RutaconductorPageModule:()=>j});var d=i(6814),n=i(9843),u=i(2058),g=i(5861),t=i(5879),m=i(4535),p=i(2296);function h(o,r){if(1&o&&(t.TgZ(0,"ion-item-sliding")(1,"ion-card")(2,"ion-card-content")(3,"ion-item")(4,"ion-label")(5,"strong"),t._uU(6),t.qZA(),t.TgZ(7,"p",16),t._uU(8),t.qZA(),t.TgZ(9,"p",16),t._uU(10),t.qZA(),t.TgZ(11,"p",16),t._uU(12),t.qZA(),t.TgZ(13,"p",16),t._uU(14),t.qZA(),t.TgZ(15,"p",16),t._uU(16),t.qZA()()(),t.TgZ(17,"ion-item-options")(18,"ion-item-option"),t._uU(19," Aceptar Viaje "),t.qZA()()()()()),2&o){const e=r.$implicit;t.xp6(6),t.Oqu(e.destino),t.xp6(2),t.hij("Salida: ",e.salida,""),t.xp6(2),t.hij("Hora Salida: ",e.hora_salida,""),t.xp6(2),t.hij("Fecha Salida: ",e.f_viaje,""),t.xp6(2),t.hij("Asientos: ",e.cant_asientos,""),t.xp6(2),t.hij("Valor asientos: ",e.valor_asiento,"")}}const x=function(){return["/menuprincipalconductor"]},f=function(){return["/rutaconductor"]},b=function(){return["/perfilconductor"]},Z=function(){return["/registrarvehiculo"]},v=function(){return["/paginalogin-usuario"]},y=[{path:"",component:(()=>{var o;class r{constructor(a,c,l){this.router=a,this.alertController=c,this.database=l,this.usuarioR="",this.claveR="",this.variableStorage="",this.arregloViajes=[{id_viaje:"",f_viaje:"",hora_salida:"",salida:"",destino:"",cant_asientos:"",valor_asiento:"",id_vehiculo:"",id_conductor:""}]}ngOnInit(){this.database.dbState().subscribe(a=>{a&&this.database.fetchViaje().subscribe(c=>{this.arregloViajes=c})})}presentarAlerta(a,c){var l=this;return(0,g.Z)(function*(){yield(yield l.alertController.create({header:a,message:c,buttons:["Aceptar"]})).present()})()}}return(o=r).\u0275fac=function(a){return new(a||o)(t.Y36(u.F0),t.Y36(n.Br),t.Y36(m.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-rutaconductor"]],decls:23,vars:11,consts:[["color","primary"],[2,"text-align","center"],[4,"ngFor","ngForOf"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with a open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"],[2,"word-wrap","break-word","white-space","normal"]],template:function(a,c){1&a&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),t._uU(3,"ViaGo Conductores"),t.qZA()()(),t.TgZ(4,"ion-content")(5,"h2"),t._uU(6,"Listado de viajes"),t.qZA(),t.TgZ(7,"ion-list"),t.YNc(8,h,20,6,"ion-item-sliding",2),t.qZA()(),t.TgZ(9,"ion-footer")(10,"section",3)(11,"div",4)(12,"div",5)(13,"button",6),t._UZ(14,"ion-icon",7),t.qZA(),t.TgZ(15,"button",8),t._UZ(16,"ion-icon",9),t.qZA(),t.TgZ(17,"button",10),t._UZ(18,"ion-icon",11),t.qZA(),t.TgZ(19,"button",12),t._UZ(20,"ion-icon",13),t.qZA(),t.TgZ(21,"button",14),t._UZ(22,"ion-icon",15),t.qZA()()()()()),2&a&&(t.xp6(8),t.Q6J("ngForOf",c.arregloViajes),t.xp6(5),t.Q6J("routerLink",t.DdM(6,x)),t.xp6(2),t.Q6J("routerLink",t.DdM(7,f)),t.xp6(2),t.Q6J("routerLink",t.DdM(8,b)),t.xp6(2),t.Q6J("routerLink",t.DdM(9,Z)),t.xp6(2),t.Q6J("routerLink",t.DdM(10,v)))},dependencies:[d.sg,n.PM,n.FN,n.W2,n.fr,n.Gu,n.gu,n.Ie,n.u8,n.IK,n.td,n.Q$,n.q_,n.wd,n.sr,n.YI,u.rH,p.RK],styles:["section[_ngcontent-%COMP%]{display:table}.example-label[_ngcontent-%COMP%]{display:table-cell;font-size:14px;margin-left:8px;min-width:120px}.example-button-row[_ngcontent-%COMP%]{display:table-cell;max-width:600px}.example-button-row[_ngcontent-%COMP%]   .mat-mdc-button-base[_ngcontent-%COMP%]{margin:8px 8px 8px 0}.example-flex-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.example-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:120px}"]}),r})()}];let P=(()=>{var o;class r{}return(o=r).\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(y),u.Bz]}),r})();var A=i(1175),M=i(6385);let j=(()=>{var o;class r{}return(o=r).\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,n.Pc,P,A.Ps,p.ot,M.t]}),r})()}}]);