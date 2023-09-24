"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[804],{804:(I,g,i)=>{i.r(g),i.d(g,{PaginaregistrarUsuarioPageModule:()=>U});var d=i(6814),e=i(95),o=i(9843),m=i(4017),p=i(5861),r=i(9468);const f=[{path:"",component:(()=>{var a;class s{constructor(t,n){this.fb=t,this.alertController=n,this.formularioRegistro=this.fb.group({nombre:new e.NI("",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(30),e.kI.pattern("[a-zA-Z]*")]),apellido:new e.NI("",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(30),e.kI.pattern("[a-zA-Z]*")]),rut:new e.NI("",[e.kI.required,e.kI.minLength(12),e.kI.maxLength(13),e.kI.pattern("[0-9K.-]*")]),edad:new e.NI("",[e.kI.required,e.kI.minLength(2),e.kI.maxLength(2),e.kI.pattern("[0-9]*")]),correo:new e.NI("",[e.kI.required,e.kI.minLength(10),e.kI.maxLength(30),e.kI.pattern("[a-zA-Z@.#$%]*")]),celular:new e.NI("",[e.kI.required,e.kI.minLength(9),e.kI.maxLength(9),e.kI.pattern("[0-9]*")]),password:new e.NI("",e.kI.required),confirmacionPassword:new e.NI("",e.kI.required)})}ngOnInit(){}guardar(){var t=this;return(0,p.Z)(function*(){var n=t.formularioRegistro.value;if(t.formularioRegistro.invalid)yield(yield t.alertController.create({header:"Datos incompletos",message:"Tienes que llenar todos los datos",buttons:["Aceptar"]})).present();else if(t.formularioRegistro.valid){const c=yield t.alertController.create({header:"Usuario Registrado",message:"Su usuario ha sido registrado exitosamente.",buttons:["Aceptar"]});return localStorage.setItem("usuario",JSON.stringify({nombre:n.nombre,apellido:n.apellido,rut:n.rut,edad:n.edad,correo:n.correo,celular:n.celular,password:n.password})),void(yield c.present())}})()}}return(a=s).\u0275fac=function(t){return new(t||a)(r.Y36(e.qu),r.Y36(o.Br))},a.\u0275cmp=r.Xpm({type:a,selectors:[["app-paginaregistrar-usuario"]],decls:48,vars:1,consts:[["color","primary"],["slot","start"],[3,"formGroup","keyup.enter"],["position","floating"],["formControlName","nombre"],["formControlName","apellido","type","text"],["formControlName","rut","type","text"],["formControlName","edad","type","number"],["formControlName","correo","type","text"],["formControlName","celular","type","number"],["formControlName","password","type","password"],["formControlName","confirmacionPassword","type","password"],[3,"click"]],template:function(t,n){1&t&&(r.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),r._UZ(3,"ion-back-button"),r.qZA(),r.TgZ(4,"ion-title"),r._uU(5,"Registrate"),r.qZA()()(),r.TgZ(6,"ion-content")(7,"ion-card")(8,"ion-card-header",0)(9,"ion-card-title"),r._uU(10,"Registro:"),r.qZA()(),r.TgZ(11,"ion-card-content")(12,"form",2),r.NdJ("keyup.enter",function(){return n.guardar()}),r.TgZ(13,"ion-item")(14,"ion-label",3),r._uU(15,"Nombre:"),r.qZA(),r._UZ(16,"ion-input",4),r.qZA(),r.TgZ(17,"ion-item")(18,"ion-label",3),r._uU(19,"Apellido:"),r.qZA(),r._UZ(20,"ion-input",5),r.qZA(),r.TgZ(21,"ion-item")(22,"ion-label",3),r._uU(23,"Rut:"),r.qZA(),r._UZ(24,"ion-input",6),r.qZA(),r.TgZ(25,"ion-item")(26,"ion-label",3),r._uU(27,"Edad:"),r.qZA(),r._UZ(28,"ion-input",7),r.qZA(),r.TgZ(29,"ion-item")(30,"ion-label",3),r._uU(31,"Correo:"),r.qZA(),r._UZ(32,"ion-input",8),r.qZA(),r.TgZ(33,"ion-item")(34,"ion-label",3),r._uU(35,"Celular:"),r.qZA(),r._UZ(36,"ion-input",9),r.qZA(),r.TgZ(37,"ion-item")(38,"ion-label",3),r._uU(39,"Contrase\xf1a:"),r.qZA(),r._UZ(40,"ion-input",10),r.qZA(),r.TgZ(41,"ion-item")(42,"ion-label",3),r._uU(43,"Confirmar contrase\xf1a:"),r.qZA(),r._UZ(44,"ion-input",11),r.qZA(),r._UZ(45,"br"),r.TgZ(46,"ion-button",12),r.NdJ("click",function(){return n.guardar()}),r._uU(47,"Registrarse"),r.qZA()()()()()),2&t&&(r.xp6(12),r.Q6J("formGroup",n.formularioRegistro))},dependencies:[e._Y,e.JJ,e.JL,e.sg,e.u,o.oU,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.Dq,o.W2,o.Gu,o.pK,o.Ie,o.Q$,o.wd,o.sr,o.as,o.j9,o.cs],styles:["#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:rgb(241, 241, 236);--ion-border-color:primary}"]}),s})()}];let Z=(()=>{var a;class s{}return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[m.Bz.forChild(f),m.Bz]}),s})(),U=(()=>{var a;class s{}return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[d.ez,e.u5,e.UX,o.Pc,Z]}),s})()}}]);