"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6876],{6876:(O,b,l)=>{l.r(b),l.d(b,{ViajesreservadosPageModule:()=>J});var f=l(6814),v=l(6223),n=l(9843),g=l(2058),x=l(5861),e=l(5879),j=l(4535),Z=l(2296);function U(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"ion-item-sliding")(1,"ion-card")(2,"ion-card-content")(3,"ion-item")(4,"ion-label"),e._uU(5),e.qZA()(),e.TgZ(6,"ion-item")(7,"ion-label"),e._uU(8),e.qZA()(),e.TgZ(9,"ion-item")(10,"ion-label"),e._uU(11),e.qZA()(),e.TgZ(12,"ion-item")(13,"ion-label")(14,"strong"),e._uU(15,"Conductor:"),e.qZA()(),e.TgZ(16,"ion-label"),e._uU(17),e.qZA()(),e.TgZ(18,"ion-item")(19,"ion-label"),e._uU(20),e.qZA()(),e.TgZ(21,"ion-item")(22,"ion-label"),e._uU(23),e.qZA()(),e.TgZ(24,"ion-item")(25,"ion-label"),e._uU(26),e.qZA()(),e.TgZ(27,"ion-item")(28,"ion-label"),e._uU(29),e.qZA()(),e.TgZ(30,"ion-item")(31,"ion-label"),e._uU(32),e.qZA()(),e.TgZ(33,"ion-item")(34,"ion-label"),e._uU(35),e.qZA()(),e.TgZ(36,"ion-item")(37,"ion-label"),e._uU(38),e.qZA()(),e._UZ(39,"br"),e.TgZ(40,"ion-item")(41,"ion-label")(42,"strong"),e._uU(43,"Veh\xedculo"),e.qZA()()(),e.TgZ(44,"ion-item")(45,"ion-label"),e._uU(46),e.qZA()(),e.TgZ(47,"ion-item")(48,"ion-label"),e._uU(49),e.qZA()(),e.TgZ(50,"ion-button",20),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2).$implicit,s=e.oxw(2);return e.KtG(s.cancelarReserva(a))}),e._uU(51,"Cancelar Reserva"),e.qZA()()()()}if(2&i){const t=r.$implicit,o=e.oxw().$implicit,a=e.oxw().$implicit,s=e.oxw().$implicit;e.xp6(5),e.hij("Detalle id: ",s.id_detalle,""),e.xp6(3),e.hij("Detalles id_usuario: ",s.id_usuario,""),e.xp6(3),e.hij("Detalles id_viaje: ",s.id_viaje,""),e.xp6(6),e.AsE("",o.nombre," ",o.apellido,""),e.xp6(3),e.hij("Fecha del Viaje: ",a.f_viaje,""),e.xp6(3),e.hij("Hora de Salida: ",a.hora_salida,""),e.xp6(3),e.hij("Salida: ",a.salida,""),e.xp6(3),e.hij("Destino: ",a.destino,""),e.xp6(3),e.hij("Asientos disponibles: ",a.cant_asientos,""),e.xp6(3),e.hij("Estado: ",a.estado,""),e.xp6(3),e.hij("Id conductor: ",a.id_usuario,""),e.xp6(8),e.hij("Marca: ",t.marca,""),e.xp6(3),e.hij("Modelo: ",t.modelo,"")}}function T(i,r){if(1&i&&(e.TgZ(0,"ion-item-sliding"),e.YNc(1,U,52,14,"ion-item-sliding",5),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t.arregloVehiculo)}}function A(i,r){if(1&i&&(e.TgZ(0,"ion-item-sliding"),e.YNc(1,T,2,1,"ion-item-sliding",5),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.arregloUsuario)}}function V(i,r){if(1&i&&(e.TgZ(0,"ion-item-sliding"),e.YNc(1,A,2,1,"ion-item-sliding",5),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.arregloViajes)}}const P=function(){return["/menuprincipal"]},y=function(){return["/tomarviaje"]},M=function(){return["/perfilusuario"]},D=function(){return["/comenzarviaje"]},q=function(){return["/paginalogin-usuario"]},E=[{path:"",component:(()=>{var i;class r{constructor(o,a){this.database=o,this.alertController=a,this.arregloDetalle=[{id_detalle:"",id_usuario:"",id_viaje:""}],this.arregloUsuario=[{id:"",nombre:"",apellido:"",correo:"",fechanacimiento:"",rut:"",celular:"",contrasena:"",fotoperfil:""}],this.arregloVehiculo=[{id_vehiculo:"",marca:"",modelo:"",anio:"",patente:"",asientos:"",id_usuario:"",id_tipo:""}],this.arregloViajes=[{id_viaje:"",f_viaje:"",hora_salida:"",salida:"",destino:"",cant_asientos:"",valor_asiento:"",estado:"",id_usuario:""}]}ngOnInit(){let o=localStorage.getItem("id");this.database.buscarDetalleUser(o).then(s=>{s.length>0&&this.database.fetchDetalleUser().subscribe(c=>{c.length>0&&(console.log("Detalle: ",c),this.arregloDetalle=c,this.database.buscarViajeReservado(c[2].id_viaje,"Disponible.").then(m=>{m.length>0&&this.database.fetchViajeReservado().subscribe(u=>{u.length>0&&(console.log("Viajes: ",u),this.arregloViajes=u,this.database.buscarDatosConductor(u[8].id_usuario).then(h=>{h.length>0&&this.database.fetchConductor().subscribe(d=>{d.length>0&&(console.log("Usuario: ",d),this.arregloUsuario=d,this.database.buscarVehiculoUsuario(d[0].id).then(_=>{_.length>0&&this.database.fetchVehiculoUser().subscribe(p=>{p.length>0&&(console.log("Vehiculo: ",p),this.arregloVehiculo=p)})}).catch(_=>{console.log("Error en Buscar Veh\xedculo Usuario: ",_),this.presentarAlerta("Error al cargar datos","Error en funcion buscar veh\xedculo usuario.")}))})}).catch(h=>{console.log("Error en Buscar Datos Usuario: ",h),this.presentarAlerta("Error al cargar datos","Error en funcion buscar datos usuario.")}))})}).catch(m=>{console.log("Error en Buscar Viaje Reservado: ",m)}))})}).catch(s=>{console.log("Error en Buscar Detalle User: ",s)})}cancelarReserva(o){let a=localStorage.getItem("id");this.database.cancelarReservaUser(a,o.id_viaje).then(s=>{if(s){this.presentarAlerta("Reserva cancelada","Su reserva ha sido cancelada.");const c=this.arregloViajes.indexOf(o);-1!==c&&this.arregloViajes.splice(c,1)}else this.presentarAlerta("Error al cancelar reserva","No se ha podido cancelar su reserva.")})}presentarAlerta(o,a){var s=this;return(0,x.Z)(function*(){yield(yield s.alertController.create({header:o,message:a,buttons:["Aceptar"]})).present()})()}}return(i=r).\u0275fac=function(o){return new(o||i)(e.Y36(j.N),e.Y36(n.Br))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-viajesreservados"]],decls:36,vars:12,consts:[[3,"translucent"],["color","primary",2,"text-align","center"],[2,"text-align","center"],["collapse","condense"],["color","primary",1,"ion-text-center"],[4,"ngFor","ngForOf"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three-dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],[1,"button-text"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with an open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"],[3,"click"]],template:function(o,a){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),e._uU(3,"ViaGo"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"ion-header",3)(6,"ion-toolbar")(7,"ion-title"),e._uU(8,"Viajes Reservados"),e.qZA()()(),e.TgZ(9,"h2",4),e._uU(10,"Sus viajes"),e.qZA(),e.TgZ(11,"ion-list"),e.YNc(12,V,2,1,"ion-item-sliding",5),e.qZA()(),e.TgZ(13,"section",6)(14,"div",7)(15,"div",8)(16,"button",9),e._UZ(17,"ion-icon",10),e.TgZ(18,"span",11),e._uU(19,"Inicio"),e.qZA()(),e.TgZ(20,"button",12),e._UZ(21,"ion-icon",13),e.TgZ(22,"span",11),e._uU(23,"Viaje"),e.qZA()(),e.TgZ(24,"button",14),e._UZ(25,"ion-icon",15),e.TgZ(26,"span",11),e._uU(27,"Perfil"),e.qZA()(),e.TgZ(28,"button",16),e._UZ(29,"ion-icon",17),e.TgZ(30,"span",11),e._uU(31,"Auto"),e.qZA()(),e.TgZ(32,"button",18),e._UZ(33,"ion-icon",19),e.TgZ(34,"span",11),e._uU(35,"Cierre"),e.qZA()()()()()),2&o&&(e.Q6J("translucent",!0),e.xp6(12),e.Q6J("ngForOf",a.arregloDetalle),e.xp6(4),e.Q6J("routerLink",e.DdM(7,P)),e.xp6(4),e.Q6J("routerLink",e.DdM(8,y)),e.xp6(4),e.Q6J("routerLink",e.DdM(9,M)),e.xp6(4),e.Q6J("routerLink",e.DdM(10,D)),e.xp6(4),e.Q6J("routerLink",e.DdM(11,q)))},dependencies:[f.sg,n.YG,n.PM,n.FN,n.W2,n.Gu,n.gu,n.Ie,n.td,n.Q$,n.q_,n.wd,n.sr,n.YI,g.rH,Z.RK],styles:['@charset "UTF-8";#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:#f1f1ec;--ion-border-color:primary}.button-text[_ngcontent-%COMP%]{font-size:8px;margin-top:1px;display:block;text-align:center;color:#469597}']}),r})()}];let C=(()=>{var i;class r{}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(E),g.Bz]}),r})();var w=l(617),F=l(6385);let J=(()=>{var i;class r{}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[f.ez,v.u5,n.Pc,C,w.Ps,F.t,Z.ot]}),r})()}}]);