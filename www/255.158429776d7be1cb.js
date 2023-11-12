"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[255],{255:(q,m,n)=>{n.r(m),n.d(m,{EditarperfilusuarioPageModule:()=>P});var f=n(6814),o=n(6223),h=n(1175),g=n(6385),p=n(2296),a=n(9843),c=n(2058),Z=n(5861),r=n(5879),b=n(4535);const U=function(){return["/modificarcontrasena"]},v=function(){return["/menuprincipal"]},A=function(){return["/comenzarviaje"]},y=function(){return["/perfilusuario"]},x=function(){return["/tomarviaje"]},E=function(){return["/paginalogin-usuario"]},C=[{path:"",component:(()=>{var t;class u{constructor(e,i,l,d){this.router=e,this.database=i,this.fb=l,this.alertController=d,this.nombreU="",this.apellidoU="",this.correoU="",this.rutU="";const T=localStorage.getItem("id");this.database.buscarDatosUsuario(T).then(I=>{this.usuario=I[0],this.nombreU=this.usuario.nombre,this.apellidoU=this.usuario.apellido,this.correoU=this.usuario.correo,this.fechanacimientoU=this.usuario.fechanacimiento,this.rutU=this.usuario.rut,this.celularU=this.usuario.celular}),this.formularioActualizar=this.fb.group({nombre:new o.NI("",[o.kI.required]),apellido:new o.NI("",[o.kI.required]),correo:new o.NI("",[o.kI.required]),fechanacimiento:new o.NI("",[o.kI.required]),rut:new o.NI("",[o.kI.required]),celular:new o.NI("",[o.kI.required])})}ngOnInit(){}actualizarUsuario(){if(this.formularioActualizar.valid){let e=this.formularioActualizar.value,i=localStorage.getItem("id");this.database.actualizarPerfil(e.nombre,e.apellido,e.correo,e.fechanacimiento,e.rut,e.celular,i).then(l=>{null!==l?(console.log("Datos actualizados correctamente."),this.presentarAlerta("Datos actualizados","Sus datos han sido actualizados con \xe9xito."),this.router.navigate(["/perfilusuario"]),this.formularioActualizar.reset()):(console.log("Error al actualizar datos"),this.presentarAlerta("Error al actualizar datos","Rellene el formulario correctamente."))}).catch(l=>{console.error("Error en base de datos al actualizar datos: ",l)})}else this.presentarAlerta("Error en formulario","Rellene el formulario correctamente.")}presentarAlerta(e,i){var l=this;return(0,Z.Z)(function*(){yield(yield l.alertController.create({header:e,message:i,buttons:["Aceptar"]})).present()})()}}return(t=u).\u0275fac=function(e){return new(e||t)(r.Y36(c.F0),r.Y36(b.N),r.Y36(o.qu),r.Y36(a.Br))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-editarperfilusuario"]],decls:49,vars:19,consts:[["color","primary",2,"text-align","center"],[1,"ion-padding"],[1,"ion-text-center"],[3,"formGroup","ngSubmit"],["formControlName","nombre","type","text",3,"value"],["formControlName","apellido","type","text",3,"value"],["formControlName","correo","type","email",3,"value"],["formControlName","fechanacimiento","type","date",3,"value"],["formControlName","rut","type","text","noeditable","",3,"value"],["formControlName","celular","type","number",3,"value"],["color","primary",3,"routerLink"],["color","primary","type","submit"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with a open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"]],template:function(e,i){1&e&&(r.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),r._uU(3,"Editar Perfil"),r.qZA()()(),r.TgZ(4,"ion-content",1)(5,"ion-card",2)(6,"form",3),r.NdJ("ngSubmit",function(){return i.actualizarUsuario()}),r.TgZ(7,"ion-item")(8,"ion-label"),r._uU(9,"Nombre:"),r.qZA(),r._UZ(10,"ion-input",4),r.qZA(),r.TgZ(11,"ion-item")(12,"ion-label"),r._uU(13,"Apellido:"),r.qZA(),r._UZ(14,"ion-input",5),r.qZA(),r.TgZ(15,"ion-item")(16,"ion-label"),r._uU(17,"Correo:"),r.qZA(),r._UZ(18,"ion-input",6),r.qZA(),r.TgZ(19,"ion-item")(20,"ion-label"),r._uU(21,"Fecha Nacimiento:"),r.qZA(),r._UZ(22,"ion-input",7),r.qZA(),r.TgZ(23,"ion-item")(24,"ion-label"),r._uU(25,"Rut:"),r.qZA(),r._UZ(26,"ion-input",8),r.qZA(),r.TgZ(27,"ion-item")(28,"ion-label"),r._uU(29,"Celular:"),r.qZA(),r._UZ(30,"ion-input",9),r.qZA(),r.TgZ(31,"ion-button",10),r._uU(32,"Modificar Contrase\xf1a"),r.qZA(),r.TgZ(33,"ion-button",11),r._uU(34,"Guardar"),r.qZA()()()(),r.TgZ(35,"ion-footer")(36,"section",12)(37,"div",13)(38,"div",14)(39,"button",15),r._UZ(40,"ion-icon",16),r.qZA(),r.TgZ(41,"button",17),r._UZ(42,"ion-icon",18),r.qZA(),r.TgZ(43,"button",19),r._UZ(44,"ion-icon",20),r.qZA(),r.TgZ(45,"button",21),r._UZ(46,"ion-icon",22),r.qZA(),r.TgZ(47,"button",23),r._UZ(48,"ion-icon",24),r.qZA()()()()()),2&e&&(r.xp6(6),r.Q6J("formGroup",i.formularioActualizar),r.xp6(4),r.s9C("value",i.nombreU),r.xp6(4),r.s9C("value",i.apellidoU),r.xp6(4),r.s9C("value",i.correoU),r.xp6(4),r.s9C("value",i.fechanacimientoU),r.xp6(4),r.s9C("value",i.rutU),r.xp6(4),r.s9C("value",i.celularU),r.xp6(1),r.Q6J("routerLink",r.DdM(13,U)),r.xp6(8),r.Q6J("routerLink",r.DdM(14,v)),r.xp6(2),r.Q6J("routerLink",r.DdM(15,A)),r.xp6(2),r.Q6J("routerLink",r.DdM(16,y)),r.xp6(2),r.Q6J("routerLink",r.DdM(17,x)),r.xp6(2),r.Q6J("routerLink",r.DdM(18,E)))},dependencies:[o._Y,o.JJ,o.JL,a.YG,a.PM,a.W2,a.fr,a.Gu,a.gu,a.pK,a.Ie,a.Q$,a.wd,a.sr,a.as,a.j9,a.YI,c.rH,o.sg,o.u,p.RK]}),u})()}];let z=(()=>{var t;class u{}return(t=u).\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[c.Bz.forChild(C),c.Bz]}),u})(),P=(()=>{var t;class u{}return(t=u).\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[f.ez,o.u5,a.Pc,z,o.UX,p.ot,g.t,h.Ps]}),u})()}}]);