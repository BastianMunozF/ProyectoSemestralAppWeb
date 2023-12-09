"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7216],{7216:(x,v,i)=>{i.r(v),i.d(v,{RegistrarvehiculoPageModule:()=>q});var b=i(6814),e=i(6223),t=i(9843),l=i(2058),f=i(7791),o=i(5879),d=i(4535),g=i(2296);const m=function(){return["/menuprincipalconductor"]},p=function(){return["/rutaconductor"]},u=function(){return["/perfilconductor"]},A=function(){return["/registrarvehiculo"]},T=function(){return["/paginalogin-usuario"]},U=[{path:"",component:(()=>{var r;class c{constructor(n,a,s,Z){this.formBuilder=n,this.database=a,this.router=s,this.alertController=Z,this.formularioVehiculo=this.formBuilder.group({marca:new e.NI("",[e.kI.required]),modelo:new e.NI("",[e.kI.required]),annio:new e.NI("",[e.kI.required]),patente:new e.NI("",[e.kI.required]),cant_asientos:new e.NI("",[e.kI.required]),id_tipo:new e.NI("",[e.kI.required])})}ngOnInit(){}guardarVehiculo(){if(this.formularioVehiculo.valid){let n=this.formularioVehiculo.value,a=localStorage.getItem("id");this.database.insertarVehiculo(n.marca,n.modelo,n.annio,n.patente,n.cant_asientos,a,n.id_tipo).then(s=>{null!==s?this.database.buscarVehiculoUsuario(a).then(Z=>{Z&&(this.vehiculo=Z[0],localStorage.setItem("id_vehiculo",this.vehiculo.id_vehiculo.toString()),console.log("Veh\xedculo registrado exitosamente."),this.presentarAlerta("Veh\xedculo Registrado","Su veh\xedculo ha sido registrado con \xe9xito."),this.router.navigate(["/menuprincipalconductor"]),this.formularioVehiculo.reset())}):(console.error("Error al registrar Veh\xedculo"),this.presentarAlerta("Error al registrar","Hubo un problema al registrar el veh\xedculo."))}).catch(s=>{console.error("Error en la operaci\xf3n de base de datos:",s),this.presentarAlerta("Error","Hubo un error en la operaci\xf3n de base de datos.")})}else this.presentarAlerta("Error al registrar","Rellene el formulario correctamente.")}presentarAlerta(n,a){var s=this;return(0,f.Z)(function*(){yield(yield s.alertController.create({header:n,message:a,buttons:["Aceptar"]})).present()})()}}return(r=c).\u0275fac=function(n){return new(n||r)(o.Y36(e.qu),o.Y36(d.N),o.Y36(l.F0),o.Y36(t.Br))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-registrarvehiculo"]],decls:78,vars:12,consts:[[3,"translucent"],["color","primary"],[2,"text-align","center"],["collapse","condense","color","primary"],[2,"text-align","center","font-weight","600"],[3,"formGroup","ngSubmit"],["position","floating"],["formControlName","marca","type","text"],["formControlName","modelo","type","text"],["formControlName","annio","type","number"],["formControlName","patente","type","text"],["name","cant_asientos","id","cant_asientos","formControlName","cant_asientos"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["position","floating","for","id_tipo"],["name","id_tipo","id","id_tipo","formControlName","id_tipo"],["type","submit"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three-dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],[1,"button-text"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with an open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"]],template:function(n,a){1&n&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),o._uU(3,"ViaGo"),o.qZA()()(),o.TgZ(4,"ion-content")(5,"ion-card")(6,"ion-card-header",3)(7,"ion-card-title",4),o._uU(8,"Registrar Veh\xedculo"),o.qZA()(),o.TgZ(9,"ion-card-content")(10,"form",5),o.NdJ("ngSubmit",function(){return a.guardarVehiculo()}),o.TgZ(11,"ion-item")(12,"ion-label",6),o._uU(13,"Marca:"),o.qZA(),o._UZ(14,"ion-input",7),o.qZA(),o.TgZ(15,"ion-item")(16,"ion-label",6),o._uU(17,"Modelo:"),o.qZA(),o._UZ(18,"ion-input",8),o.qZA(),o.TgZ(19,"ion-item")(20,"ion-label",6),o._uU(21,"A\xf1o:"),o.qZA(),o._UZ(22,"ion-input",9),o.qZA(),o.TgZ(23,"ion-item")(24,"ion-label",6),o._uU(25,"Patente:"),o.qZA(),o._UZ(26,"ion-input",10),o.qZA(),o.TgZ(27,"ion-item")(28,"ion-label",6),o._uU(29,"Asientos:"),o.qZA(),o.TgZ(30,"select",11)(31,"option",12),o._uU(32,"1"),o.qZA(),o.TgZ(33,"option",13),o._uU(34,"2"),o.qZA(),o.TgZ(35,"option",14),o._uU(36,"3"),o.qZA(),o.TgZ(37,"option",15),o._uU(38,"4"),o.qZA(),o.TgZ(39,"option",16),o._uU(40,"5"),o.qZA(),o.TgZ(41,"option",17),o._uU(42,"6"),o.qZA()()(),o.TgZ(43,"ion-item")(44,"ion-label",18),o._uU(45,"Tipo de Veh\xedculo"),o.qZA(),o.TgZ(46,"select",19)(47,"option",12),o._uU(48,"Standard"),o.qZA(),o.TgZ(49,"option",13),o._uU(50,"Large"),o.qZA(),o.TgZ(51,"option",14),o._uU(52,"Deluxe"),o.qZA()()(),o.TgZ(53,"ion-button",20),o._uU(54,"Registrar"),o.qZA()()()()(),o.TgZ(55,"section",21)(56,"div",22)(57,"div",23)(58,"button",24),o._UZ(59,"ion-icon",25),o.TgZ(60,"span",26),o._uU(61,"Inicio"),o.qZA()(),o.TgZ(62,"button",27),o._UZ(63,"ion-icon",28),o.TgZ(64,"span",26),o._uU(65,"Viaje"),o.qZA()(),o.TgZ(66,"button",29),o._UZ(67,"ion-icon",30),o.TgZ(68,"span",26),o._uU(69,"Perfil"),o.qZA()(),o.TgZ(70,"button",31),o._UZ(71,"ion-icon",32),o.TgZ(72,"span",26),o._uU(73,"Auto"),o.qZA()(),o.TgZ(74,"button",33),o._UZ(75,"ion-icon",34),o.TgZ(76,"span",26),o._uU(77,"Cierre"),o.qZA()()()()()),2&n&&(o.Q6J("translucent",!0),o.xp6(10),o.Q6J("formGroup",a.formularioVehiculo),o.xp6(48),o.Q6J("routerLink",o.DdM(7,m)),o.xp6(4),o.Q6J("routerLink",o.DdM(8,p)),o.xp6(4),o.Q6J("routerLink",o.DdM(9,u)),o.xp6(4),o.Q6J("routerLink",o.DdM(10,A)),o.xp6(4),o.Q6J("routerLink",o.DdM(11,T)))},dependencies:[e._Y,e.YN,e.Kr,e.EJ,e.JJ,e.JL,t.YG,t.PM,t.FN,t.Zi,t.Dq,t.W2,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.wd,t.sr,t.as,t.j9,t.YI,l.rH,e.sg,e.u,g.RK],styles:['@charset "UTF-8";#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:#f1f1ec;--ion-border-color:primary}.button-text[_ngcontent-%COMP%]{font-size:8px;margin-top:1px;display:block;text-align:center;color:#469597}']}),c})()}];let y=(()=>{var r;class c{}return(r=c).\u0275fac=function(n){return new(n||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[l.Bz.forChild(U),l.Bz]}),c})();var _=i(617),P=i(6385);let q=(()=>{var r;class c{}return(r=c).\u0275fac=function(n){return new(n||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[b.ez,e.u5,t.Pc,y,e.UX,_.Ps,P.t,g.ot]}),c})()},7791:(x,v,i)=>{function b(t,l,f,o,d,g,m){try{var p=t[g](m),u=p.value}catch(A){return void f(A)}p.done?l(u):Promise.resolve(u).then(o,d)}function e(t){return function(){var l=this,f=arguments;return new Promise(function(o,d){var g=t.apply(l,f);function m(u){b(g,o,d,m,p,"next",u)}function p(u){b(g,o,d,m,p,"throw",u)}m(void 0)})}}i.d(v,{Z:()=>e})}}]);