"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6876],{6876:(R,b,s)=>{s.r(b),s.d(b,{ViajesreservadosPageModule:()=>O});var v=s(6814),x=s(6223),n=s(9843),d=s(2058),j=s(5861),e=s(5879),U=s(4535),Z=s(2296);function V(i,r){if(1&i){const a=e.EpF();e.TgZ(0,"ion-item-sliding")(1,"ion-card")(2,"ion-card-content")(3,"ion-item")(4,"ion-label")(5,"strong"),e._uU(6,"Conductor:"),e.qZA(),e._uU(7),e.qZA()(),e.TgZ(8,"ion-item")(9,"ion-label"),e._uU(10),e.qZA()(),e.TgZ(11,"ion-item")(12,"ion-label"),e._uU(13),e.qZA()(),e.TgZ(14,"ion-item")(15,"ion-label")(16,"strong"),e._uU(17,"Viaje:"),e.qZA()()(),e.TgZ(18,"ion-item")(19,"ion-label"),e._uU(20),e.qZA()(),e.TgZ(21,"ion-item")(22,"ion-label"),e._uU(23),e.qZA()(),e.TgZ(24,"ion-item")(25,"ion-label"),e._uU(26),e.qZA()(),e.TgZ(27,"ion-item")(28,"ion-label"),e._uU(29),e.qZA()(),e.TgZ(30,"ion-item")(31,"ion-label"),e._uU(32),e.qZA()(),e.TgZ(33,"ion-item")(34,"ion-label"),e._uU(35),e.qZA()(),e._UZ(36,"br"),e.TgZ(37,"ion-item")(38,"ion-label")(39,"strong"),e._uU(40,"Veh\xedculo"),e.qZA()()(),e.TgZ(41,"ion-item")(42,"ion-label"),e._uU(43),e.qZA()(),e.TgZ(44,"ion-item")(45,"ion-label"),e._uU(46),e.qZA()(),e.TgZ(47,"ion-item")(48,"ion-label"),e._uU(49),e.qZA()(),e.TgZ(50,"ion-button",20),e.NdJ("click",function(){e.CHM(a);const t=e.oxw(2).$implicit,l=e.oxw(2);return e.KtG(l.cancelarReserva(t))}),e._uU(51,"Cancelar Reserva"),e.qZA()()()()}if(2&i){const a=r.$implicit,o=e.oxw().$implicit,t=e.oxw().$implicit;e.xp6(7),e.AsE(" ",o.nombre," ",o.apellido," "),e.xp6(3),e.hij("Celular: ",o.celular,""),e.xp6(3),e.hij("Correo: ",o.correo,""),e.xp6(7),e.hij("Fecha del Viaje: ",t.f_viaje,""),e.xp6(3),e.hij("Hora de Salida: ",t.hora_salida,""),e.xp6(3),e.hij("Salida: ",t.salida,""),e.xp6(3),e.hij("Destino: ",t.destino,""),e.xp6(3),e.hij("Asientos disponibles: ",t.cant_asientos,""),e.xp6(3),e.hij("Estado: ",t.estado,""),e.xp6(8),e.hij("Marca: ",a.marca,""),e.xp6(3),e.hij("Modelo: ",a.modelo,""),e.xp6(3),e.hij("Patente: ",a.patente,"")}}function T(i,r){if(1&i&&(e.TgZ(0,"ion-item-sliding"),e.YNc(1,V,52,13,"ion-item-sliding",5),e.qZA()),2&i){const a=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",a.arregloVehiculo)}}function A(i,r){if(1&i&&(e.TgZ(0,"ion-item-sliding"),e.YNc(1,T,2,1,"ion-item-sliding",5),e.qZA()),2&i){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.arregloUsuario)}}function P(i,r){if(1&i&&(e.TgZ(0,"ion-item-sliding"),e.YNc(1,A,2,1,"ion-item-sliding",5),e.qZA()),2&i){const a=e.oxw();e.xp6(1),e.Q6J("ngForOf",a.arregloViajes)}}const y=function(){return["/menuprincipal"]},M=function(){return["/tomarviaje"]},C=function(){return["/perfilusuario"]},q=function(){return["/comenzarviaje"]},D=function(){return["/paginalogin-usuario"]},E=[{path:"",component:(()=>{var i;class r{constructor(o,t){this.database=o,this.alertController=t,this.arregloDetalle=[{id_detalle:"",id_usuario:"",id_viaje:""}],this.arregloUsuario=[{id:"",nombre:"",apellido:"",correo:"",fechanacimiento:"",rut:"",celular:"",contrasena:"",fotoperfil:""}],this.arregloVehiculo=[{id_vehiculo:"",marca:"",modelo:"",anio:"",patente:"",asientos:"",id_usuario:"",id_tipo:""}],this.arregloViajes=[{id_viaje:"",f_viaje:"",hora_salida:"",salida:"",destino:"",cant_asientos:"",valor_asiento:"",estado:"",id_usuario:""}]}ngOnInit(){let o=localStorage.getItem("id");this.database.buscarDetalleUser(o).then(l=>{l.length>0?this.database.fetchDetalleUser().subscribe(c=>{if(c.length>0){console.log("Detalle: ",c),this.arregloDetalle=c,this.arregloViajes=[],this.arregloUsuario=[],this.arregloVehiculo=[];for(let m=0;m<c.length;m++)this.database.buscarViajeReservado(c[m].id_viaje,"Disponible.").then(h=>{h.length>0&&this.database.fetchViajeReservado().subscribe(u=>{u.length>0&&(console.log("Viajes: ",u),this.arregloViajes.push(...u),this.database.buscarDatosConductor(u[0].id_usuario).then(p=>{p.length>0&&this.database.fetchConductor().subscribe(g=>{g.length>0&&(console.log("Usuario: ",g),this.arregloUsuario=g,this.database.buscarVehiculoUsuario(g[0].id).then(_=>{_.length>0&&this.database.fetchVehiculoUser().subscribe(f=>{f.length>0&&(console.log("Vehiculo: ",f),this.arregloVehiculo=f)})}).catch(_=>{console.log("Error en Buscar Veh\xedculo Usuario: ",_)}))})}).catch(p=>{console.log("Error en Buscar Datos Usuario: ",p)}))})}).catch(h=>{console.log("Error en Buscar Viaje Reservado: ",h)})}else this.presentarAlerta("Error al cargar viajes","Usted a\xfan no tiene viajes reservados.")}):this.presentarAlerta("Error al cargar viajes","Usted a\xfan no tiene viajes reservados.")}).catch(l=>{console.log("Error en Buscar Detalle User: ",l)})}cancelarReserva(o){let t=localStorage.getItem("id");this.database.cancelarReservaUser(t,o.id_viaje).then(l=>{if(l){this.presentarAlerta("Reserva cancelada","Su reserva ha sido cancelada.");const c=this.arregloViajes.indexOf(o);-1!==c&&this.arregloViajes.splice(c,1)}else this.presentarAlerta("Error al cancelar reserva","No se ha podido cancelar su reserva.")})}presentarAlerta(o,t){var l=this;return(0,j.Z)(function*(){yield(yield l.alertController.create({header:o,message:t,buttons:["Aceptar"]})).present()})()}}return(i=r).\u0275fac=function(o){return new(o||i)(e.Y36(U.N),e.Y36(n.Br))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-viajesreservados"]],decls:36,vars:12,consts:[[3,"translucent"],["color","primary",2,"text-align","center"],[2,"text-align","center"],["collapse","condense"],["color","primary",1,"ion-text-center"],[4,"ngFor","ngForOf"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three-dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],[1,"button-text"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with an open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"],[3,"click"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),e._uU(3,"ViaGo"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"ion-header",3)(6,"ion-toolbar")(7,"ion-title"),e._uU(8,"Viajes Reservados"),e.qZA()()(),e.TgZ(9,"h2",4),e._uU(10,"Sus viajes"),e.qZA(),e.TgZ(11,"ion-list"),e.YNc(12,P,2,1,"ion-item-sliding",5),e.qZA()(),e.TgZ(13,"section",6)(14,"div",7)(15,"div",8)(16,"button",9),e._UZ(17,"ion-icon",10),e.TgZ(18,"span",11),e._uU(19,"Inicio"),e.qZA()(),e.TgZ(20,"button",12),e._UZ(21,"ion-icon",13),e.TgZ(22,"span",11),e._uU(23,"Viaje"),e.qZA()(),e.TgZ(24,"button",14),e._UZ(25,"ion-icon",15),e.TgZ(26,"span",11),e._uU(27,"Perfil"),e.qZA()(),e.TgZ(28,"button",16),e._UZ(29,"ion-icon",17),e.TgZ(30,"span",11),e._uU(31,"Auto"),e.qZA()(),e.TgZ(32,"button",18),e._UZ(33,"ion-icon",19),e.TgZ(34,"span",11),e._uU(35,"Cierre"),e.qZA()()()()()),2&o&&(e.Q6J("translucent",!0),e.xp6(12),e.Q6J("ngForOf",t.arregloDetalle),e.xp6(4),e.Q6J("routerLink",e.DdM(7,y)),e.xp6(4),e.Q6J("routerLink",e.DdM(8,M)),e.xp6(4),e.Q6J("routerLink",e.DdM(9,C)),e.xp6(4),e.Q6J("routerLink",e.DdM(10,q)),e.xp6(4),e.Q6J("routerLink",e.DdM(11,D)))},dependencies:[v.sg,n.YG,n.PM,n.FN,n.W2,n.Gu,n.gu,n.Ie,n.td,n.Q$,n.q_,n.wd,n.sr,n.YI,d.rH,Z.RK],styles:['@charset "UTF-8";#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:#f1f1ec;--ion-border-color:primary}.button-text[_ngcontent-%COMP%]{font-size:8px;margin-top:1px;display:block;text-align:center;color:#469597}']}),r})()}];let w=(()=>{var i;class r{}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(E),d.Bz]}),r})();var F=s(617),J=s(6385);let O=(()=>{var i;class r{}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[v.ez,x.u5,n.Pc,w,F.Ps,J.t,Z.ot]}),r})()}}]);