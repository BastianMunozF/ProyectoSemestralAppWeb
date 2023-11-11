"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7216],{7216:(I,m,n)=>{n.r(m),n.d(m,{RegistrarvehiculoPageModule:()=>q});var d=n(6814),e=n(6223),t=n(9843),s=n(2058),h=n(5861),o=n(5879),Z=n(4535),g=n(2296);const f=function(){return["/menuprincipalconductor"]},v=function(){return["/rutaconductor"]},b=function(){return["/perfilconductor"]},A=function(){return["/registrarvehiculo"]},x=function(){return["/paginalogin-usuario"]},y=[{path:"",component:(()=>{var r;class a{constructor(i,l,c,p){this.formBuilder=i,this.database=l,this.router=c,this.alertController=p,this.formularioVehiculo=this.formBuilder.group({marca:new e.NI("",[e.kI.required]),modelo:new e.NI("",[e.kI.required]),annio:new e.NI("",[e.kI.required]),patente:new e.NI("",[e.kI.required]),cant_asientos:new e.NI("",[e.kI.required]),id_tipo:new e.NI("",[e.kI.required])})}ngOnInit(){}guardarVehiculo(){if(this.formularioVehiculo.valid){let i=this.formularioVehiculo.value,l=localStorage.getItem("id");this.database.insertarVehiculo(i.marca,i.modelo,i.annio,i.patente,i.cant_asientos,l,i.id_tipo).then(c=>{null!==c?(localStorage.setItem("id_vehiculo",this.vehiculo.id_vehiculo.toString()),console.log("Veh\xedculo registrado exitosamente."),this.presentarAlerta("Vehiculo Registrado","Su veh\xedculo ha sido registrado con \xe9xito."),this.router.navigate(["/menuprincipalconductor"]),this.formularioVehiculo.reset()):(console.log("Error al registrar Veh\xedculo"),this.presentarAlerta("Error al registrar","Rellene el formulario correctamente."))})}else this.presentarAlerta("Error al registrar","Rellene el formulario correctamente.")}presentarAlerta(i,l){var c=this;return(0,h.Z)(function*(){yield(yield c.alertController.create({header:i,message:l,buttons:["Aceptar"]})).present()})()}}return(r=a).\u0275fac=function(i){return new(i||r)(o.Y36(e.qu),o.Y36(Z.N),o.Y36(s.F0),o.Y36(t.Br))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-registrarvehiculo"]],decls:57,vars:12,consts:[[3,"translucent"],["color","primary"],["collapse","condense","color","primary"],["size","large"],[3,"formGroup","ngSubmit"],["position","floating","required",""],["formControlName","marca","type","text"],["formControlName","modelo","type","text"],["formControlName","annio","type","number"],["formControlName","patente","type","text"],["formControlName","cant_asientos","type","number"],["for","id_tipo"],["name","id_tipo","id","id_tipo","formControlName","id_tipo"],["value","1"],["value","2"],["value","3"],["type","submit"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with a open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"]],template:function(i,l){1&i&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),o._uU(3,"Registrar Vehiculo"),o.qZA()()(),o.TgZ(4,"ion-content")(5,"ion-card")(6,"ion-card-header",2)(7,"ion-card-title",3),o._uU(8,"Ingrese Veh\xedculo"),o.qZA()(),o.TgZ(9,"ion-card-content")(10,"form",4),o.NdJ("ngSubmit",function(){return l.guardarVehiculo()}),o.TgZ(11,"ion-item")(12,"ion-label",5),o._uU(13,"Marca:"),o.qZA(),o._UZ(14,"ion-input",6),o.qZA(),o.TgZ(15,"ion-item")(16,"ion-label",5),o._uU(17,"Modelo:"),o.qZA(),o._UZ(18,"ion-input",7),o.qZA(),o.TgZ(19,"ion-item")(20,"ion-label",5),o._uU(21,"A\xf1o:"),o.qZA(),o._UZ(22,"ion-input",8),o.qZA(),o.TgZ(23,"ion-item")(24,"ion-label",5),o._uU(25,"Patente:"),o.qZA(),o._UZ(26,"ion-input",9),o.qZA(),o.TgZ(27,"ion-item")(28,"ion-label",5),o._uU(29,"Asientos:"),o.qZA(),o._UZ(30,"ion-input",10),o.qZA(),o.TgZ(31,"ion-item")(32,"ion-label",11),o._uU(33,"Tipo de Veh\xedculo"),o.qZA(),o.TgZ(34,"select",12)(35,"option",13),o._uU(36,"Standard"),o.qZA(),o.TgZ(37,"option",14),o._uU(38,"Large"),o.qZA(),o.TgZ(39,"option",15),o._uU(40,"Deluxe"),o.qZA()()(),o.TgZ(41,"ion-button",16),o._uU(42,"Registrar"),o.qZA()()()()(),o.TgZ(43,"ion-footer")(44,"section",17)(45,"div",18)(46,"div",19)(47,"button",20),o._UZ(48,"ion-icon",21),o.qZA(),o.TgZ(49,"button",22),o._UZ(50,"ion-icon",23),o.qZA(),o.TgZ(51,"button",24),o._UZ(52,"ion-icon",25),o.qZA(),o.TgZ(53,"button",26),o._UZ(54,"ion-icon",27),o.qZA(),o.TgZ(55,"button",28),o._UZ(56,"ion-icon",29),o.qZA()()()()()),2&i&&(o.Q6J("translucent",!0),o.xp6(10),o.Q6J("formGroup",l.formularioVehiculo),o.xp6(37),o.Q6J("routerLink",o.DdM(7,f)),o.xp6(2),o.Q6J("routerLink",o.DdM(8,v)),o.xp6(2),o.Q6J("routerLink",o.DdM(9,b)),o.xp6(2),o.Q6J("routerLink",o.DdM(10,A)),o.xp6(2),o.Q6J("routerLink",o.DdM(11,x)))},dependencies:[e._Y,e.YN,e.Kr,e.EJ,e.JJ,e.JL,t.YG,t.PM,t.FN,t.Zi,t.Dq,t.W2,t.fr,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.wd,t.sr,t.as,t.j9,t.YI,s.rH,e.sg,e.u,g.RK]}),a})()}];let U=(()=>{var r;class a{}return(r=a).\u0275fac=function(i){return new(i||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[s.Bz.forChild(y),s.Bz]}),a})();var R=n(1175),T=n(6385);let q=(()=>{var r;class a{}return(r=a).\u0275fac=function(i){return new(i||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[d.ez,e.u5,t.Pc,U,e.UX,R.Ps,T.t,g.ot]}),a})()}}]);