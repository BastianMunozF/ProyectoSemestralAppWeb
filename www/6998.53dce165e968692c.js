"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6998],{6998:(M,h,c)=>{c.r(h),c.d(h,{EditarperfilconductorPageModule:()=>w});var f=c(6814),r=c(6223),a=c(9843),p=c(2058),Z=c(7791),g=c(8162),o=c(5879),x=c(4535),b=c(2296);function A(i,u){if(1&i){const l=o.EpF();o.TgZ(0,"div",42),o.NdJ("click",function(){o.CHM(l);const t=o.oxw(2);return o.KtG(t.takePicture())}),o._UZ(1,"img",43),o.qZA()}if(2&i){const l=o.oxw().$implicit;o.xp6(1),o.Q6J("src",l.fotoperfil,o.LSH)}}const U=function(){return["/perfilconductor"]};function v(i,u){if(1&i){const l=o.EpF();o.TgZ(0,"ion-card")(1,"ion-card-title")(2,"ion-item",16)(3,"ion-label",17),o._uU(4,"Editar Perfil"),o.qZA()()(),o.TgZ(5,"ion-card-content")(6,"form",18),o.NdJ("ngSubmit",function(){o.CHM(l);const t=o.oxw();return o.KtG(t.actualizarUsuario())}),o.TgZ(7,"ion-label",19),o._uU(8,"Toca la foto para actualizar"),o.qZA(),o.YNc(9,A,2,1,"div",20),o.TgZ(10,"ion-item")(11,"ion-label",21),o._uU(12,"Nombre:"),o.qZA(),o._UZ(13,"ion-input",22),o.qZA(),o.TgZ(14,"ion-item")(15,"ion-label",21),o._uU(16,"Apellido:"),o.qZA(),o._UZ(17,"ion-input",23),o.qZA(),o.TgZ(18,"ion-item")(19,"ion-label",21),o._uU(20,"Correo:"),o.qZA(),o._UZ(21,"ion-input",24),o.qZA(),o.TgZ(22,"ion-item")(23,"ion-label",21),o._uU(24,"Fecha Nacimiento:"),o.qZA(),o._UZ(25,"ion-input",25),o.qZA(),o.TgZ(26,"ion-item")(27,"ion-label",21),o._uU(28,"Rut:"),o.qZA(),o._UZ(29,"ion-input",26),o.qZA(),o.TgZ(30,"ion-item")(31,"ion-label",21),o._uU(32,"Celular:"),o.qZA(),o._UZ(33,"ion-input",27),o.qZA(),o.TgZ(34,"ion-item")(35,"h3"),o._uU(36,"Veh\xedculo"),o.qZA(),o.TgZ(37,"ion-label",21),o._uU(38,"Marca:"),o.qZA(),o._UZ(39,"ion-input",28),o.qZA(),o.TgZ(40,"ion-item")(41,"ion-label",21),o._uU(42,"Modelo:"),o.qZA(),o._UZ(43,"ion-input",29),o.qZA(),o.TgZ(44,"ion-item")(45,"ion-label",21),o._uU(46,"A\xf1o:"),o.qZA(),o._UZ(47,"ion-input",30),o.qZA(),o.TgZ(48,"ion-item")(49,"ion-label",21),o._uU(50,"Patente:"),o.qZA(),o._UZ(51,"ion-input",31),o.qZA(),o.TgZ(52,"ion-item")(53,"ion-label"),o._uU(54,"Cantidad de Asientos:"),o.qZA(),o.TgZ(55,"select",32)(56,"option",33),o._uU(57,"1"),o.qZA(),o.TgZ(58,"option",34),o._uU(59,"2"),o.qZA(),o.TgZ(60,"option",35),o._uU(61,"3"),o.qZA(),o.TgZ(62,"option",36),o._uU(63,"4"),o.qZA(),o.TgZ(64,"option",37),o._uU(65,"5"),o.qZA(),o.TgZ(66,"option",38),o._uU(67,"6"),o.qZA()()(),o.TgZ(68,"div",39)(69,"ion-button",40),o._uU(70,"Perfil Usuario"),o.qZA(),o.TgZ(71,"ion-button",41),o._uU(72,"Guardar"),o.qZA()()()()()}if(2&i){const l=u.$implicit,e=o.oxw();o.xp6(6),o.Q6J("formGroup",e.formularioActualizar),o.xp6(3),o.Q6J("ngIf",l.fotoperfil),o.xp6(20),o.Q6J("readonly",!0),o.xp6(40),o.Q6J("routerLink",o.DdM(4,U))}}const y=function(){return["/menuprincipalconductor"]},T=function(){return["/rutaconductor"]},_=function(){return["/registrarvehiculo"]},P=function(){return["/paginalogin-usuario"]},E=[{path:"",component:(()=>{var i;class u{constructor(e,t,n,m){var s=this;this.database=e,this.fb=t,this.router=n,this.alertController=m,this.arregloUsuario=[{id_usuario:"",nombre:"",apellido:"",correo:"",fechanacimiento:"",rut:"",celular:"",contrasena:"",fotoperfil:""}],this.takePicture=(0,Z.Z)(function*(){try{const d=yield g.V1.getPhoto({quality:90,allowEditing:!1,resultType:g.dk.DataUrl,source:g.oK.Prompt});d&&d.dataUrl?(s.image=d,s.fotoPerfil=d.dataUrl):(console.error("La imagen capturada es indefinida o no tiene dataUrl."),s.fotoPerfil="")}catch(d){console.error("Error al tomar la foto:",d),s.fotoPerfil=""}}),this.formularioActualizar=this.fb.group({nombre:new r.NI(""),apellido:new r.NI(""),correo:new r.NI(""),fechanacimiento:new r.NI(""),rut:new r.NI(""),celular:new r.NI(""),marca:new r.NI(""),modelo:new r.NI(""),anio:new r.NI(""),patente:new r.NI(""),asientos:new r.NI("")})}ngOnInit(){let e=localStorage.getItem("id");this.database.buscarDatosUsuario(e).then(t=>{t&&(this.usuario=t[0],this.arregloUsuario=t,this.database.buscarVehiculoUsuario(e).then(n=>{null!==n&&(this.vehiculo=n[0],this.inicializarFormulario())}))})}ionViewWillEnter(){const e=localStorage.getItem("id");this.database.buscarDatosUsuario(e).then(t=>{null!==t&&(this.usuario=t[0],this.database.buscarVehiculoUsuario(e).then(n=>{null!==n&&(this.vehiculo=n[0],this.inicializarFormulario())}))})}inicializarFormulario(){this.usuario&&this.vehiculo&&this.formularioActualizar.patchValue({nombre:this.usuario.nombre||"",apellido:this.usuario.apellido||"",correo:this.usuario.correo||"",fechanacimiento:this.usuario.fechanacimiento||"",rut:this.usuario.rut||"",celular:this.usuario.celular||"",marca:this.vehiculo.marca||"",modelo:this.vehiculo.modelo||"",anio:this.vehiculo.anio||"",patente:this.vehiculo.patente||"",asientos:this.vehiculo.asientos||""})}onFileChange(e){const t=e.target.files[0];if(t){const n=new FileReader;n.onload=m=>{this.fotoPerfil=m.target.result},n.readAsDataURL(t)}else this.fotoPerfil=""}actualizarUsuario(){if(this.formularioActualizar.valid){var e;let t=this.formularioActualizar.value,n=localStorage.getItem("id"),m=this.fotoPerfil||(null===(e=this.usuario)||void 0===e?void 0:e.fotoperfil);this.database.actualizarPerfil(t.nombre,t.apellido,t.correo,t.fechanacimiento,t.rut,t.celular,m,n).then(s=>{null!==s?this.database.actualizarVehiculo(t.marca,t.modelo,t.anio,t.patente,t.asientos,n).then(d=>{null!==d&&(console.log("Datos actualizados correctamente."),this.presentarAlerta("Datos actualizados","Sus datos han sido actualizados con \xe9xito."),this.router.navigate(["/perfilconductor"]))}):(console.log("Error al actualizar datos"),this.presentarAlerta("Error al actualizar datos","Rellene el formulario correctamente."))}).catch(s=>{console.error("Error en base de datos al actualizar datos: ",s)})}else this.presentarAlerta("Error en formulario","Rellene el formulario correctamente.")}presentarAlerta(e,t){var n=this;return(0,Z.Z)(function*(){yield(yield n.alertController.create({header:e,message:t,buttons:["Aceptar"]})).present()})()}}return(i=u).\u0275fac=function(e){return new(e||i)(o.Y36(x.N),o.Y36(r.qu),o.Y36(p.F0),o.Y36(a.Br))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-editarperfilconductor"]],decls:29,vars:11,consts:[["color","primary",2,"text-align","center"],[4,"ngFor","ngForOf"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three-dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],[1,"button-text"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with an open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"],["color","primary"],[2,"text-align","center","font-weight","800"],[3,"formGroup","ngSubmit"],["position","stacked"],["style","margin-left: 15px;","class","profile-picture",3,"click",4,"ngIf"],["position","floating"],["formControlName","nombre","type","text"],["formControlName","apellido","type","text"],["formControlName","correo","type","email"],["formControlName","fechanacimiento","type","date"],["formControlName","rut","type","text",3,"readonly"],["formControlName","celular","type","number"],["formControlName","marca","type","text"],["formControlName","modelo","type","text"],["formControlName","anio","type","number"],["formControlName","patente","type","text"],["name","asientos","id","asientos","formControlName","asientos"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],[2,"display","flex","flex-direction","row","justify-content","space-between","align-items","center"],["color","primary",3,"routerLink"],["color","primary","type","submit"],[1,"profile-picture",2,"margin-left","15px",3,"click"],["alt","Foto de perfil",3,"src"]],template:function(e,t){1&e&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),o._uU(3,"ViaGo"),o.qZA()()(),o.TgZ(4,"ion-content"),o.YNc(5,v,73,5,"ion-card",1),o.qZA(),o.TgZ(6,"section",2)(7,"div",3)(8,"div",4)(9,"button",5),o._UZ(10,"ion-icon",6),o.TgZ(11,"span",7),o._uU(12,"Inicio"),o.qZA()(),o.TgZ(13,"button",8),o._UZ(14,"ion-icon",9),o.TgZ(15,"span",7),o._uU(16,"Viaje"),o.qZA()(),o.TgZ(17,"button",10),o._UZ(18,"ion-icon",11),o.TgZ(19,"span",7),o._uU(20,"Perfil"),o.qZA()(),o.TgZ(21,"button",12),o._UZ(22,"ion-icon",13),o.TgZ(23,"span",7),o._uU(24,"Auto"),o.qZA()(),o.TgZ(25,"button",14),o._UZ(26,"ion-icon",15),o.TgZ(27,"span",7),o._uU(28,"Cierre"),o.qZA()()()()()),2&e&&(o.xp6(5),o.Q6J("ngForOf",t.arregloUsuario),o.xp6(4),o.Q6J("routerLink",o.DdM(6,y)),o.xp6(4),o.Q6J("routerLink",o.DdM(7,T)),o.xp6(4),o.Q6J("routerLink",o.DdM(8,U)),o.xp6(4),o.Q6J("routerLink",o.DdM(9,_)),o.xp6(4),o.Q6J("routerLink",o.DdM(10,P)))},dependencies:[f.sg,f.O5,r._Y,r.YN,r.Kr,r.EJ,r.JJ,r.JL,r.sg,r.u,a.YG,a.PM,a.FN,a.Dq,a.W2,a.Gu,a.gu,a.pK,a.Ie,a.Q$,a.wd,a.sr,a.as,a.j9,a.YI,p.rH,b.RK],styles:['@charset "UTF-8";#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:#f1f1ec;--ion-border-color:primary}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:80px;height:80px;overflow:hidden;border-radius:50%;border:2px solid #fff}.profile-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:50%}.button-text[_ngcontent-%COMP%]{font-size:8px;margin-top:1px;display:block;text-align:center;color:#469597}']}),u})()}];let C=(()=>{var i;class u{}return(i=u).\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[p.Bz.forChild(E),p.Bz]}),u})();var q=c(617),N=c(6385);let w=(()=>{var i;class u{}return(i=u).\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[f.ez,r.u5,r.UX,a.Pc,C,q.Ps,N.t,b.ot]}),u})()}}]);