"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7177],{7177:(fr,f,c)=>{c.r(f),c.d(f,{PaginaregistrarUsuarioPageModule:()=>_r});var d=c(6814),l=c(95),s=c(9843),E=c(4017),_=c(5861),r=c(9468),T=c(5619),R=c(5320);let U=(()=>{var e;class a{constructor(i,o,n){this.sqlite=i,this.platform=o,this.alertController=n,this.tablaTipo="CREATE TABLE IF NOT EXISTS tipo (id_tipo INTEGER PRIMARY KEY AUTOINCREMENT, descripcion VARCHAR(20));",this.tablaRol="CREATE TABLE IF NOT EXISTS rol (id_rol INTEGER PRIMARY KEY AUTOINCREMENT, nombrerol VARCHAR(10));",this.tablaUsuarios="CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(30) NOT NULL, apellido VARCHAR(30) NOT NULL, correo VARCHAR(30) NOT NULL, fechanacimiento DATE NOT NULL, rut VARCHAR(13) NOT NULL, celular INTEGER NOT NULL, contrasena VARCHAR(30) NOT NULL, id_rol INTEGER NOT NULL, FOREIGN KEY(id_rol) REFERENCES rol(id_rol));",this.tablaVehiculo="CREATE TABLE IF NOT EXISTS vehiculo (id_vehiculo INTEGER PRIMARY KEY AUTOINCREMENT, marca VARCHAR(30) NOT NULL, modelo VARCHAR(30) NOT NULL, anio INTEGER NOT NULL, patente VARCHAR(6) NOT NULL, asientos INTEGER NOT NULL, id_usuario INTEGER NOT NULL, id_tipo INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_tipo) REFERENCES tipo(id_tipo));",this.tablaViajes="CREATE TABLE IF NOT EXISTS viaje (id_viaje INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL, cant_asientos INTEGER NOT NULL, total INTEGER NOT NULL, valor_asiento INTEGER NOT NULL, estado BOOLEAN NOT NULL, id_vehiculo INTEGER NOT NULL, FOREIGN KEY(id_vehiculo) REFERENCES vehiculo(id_vehiculo));",this.tablaDetalle="CREATE TABLE IF NOT EXISTS detalle (id_detalle INTEGER PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER NOT NULL, id_viaje INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_viaje) REFERENCES viaje(id_viaje));",this.tablaConductor="CREATE TABLE IF NOT EXISTS conductor(id_conductor INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(30) NOT NULL, apellido VARCHAR(30) NOT NULL, edad NUMBER NOT NULL, correo VARCHAR(30) NOT NULL, rut VARCHAR(13) NOT NULL, fechanacimiento DATE NOT NULL, celular NUMBER NOT NULL, contrasena VARCHAR(30) NOT NULL);",this.registroRol="INSERT INTO rol(nombrerol) VALUES(Conductor); INSERT INTO rol(nombrerol) VALUES(Usuario);",this.listaUsuario=new T.X([]),this.isDBReady=new T.X(!1),this.crearBD()}dbState(){return this.isDBReady.asObservable()}fetchUsuario(){return this.listaUsuario.asObservable()}buscarUsuario(){return this.database.executeSql("SELECT * FROM usuarios",[]).then(i=>{let o=[];if(i.rows.length>0)for(var n=0;n<i.rows.length;n++)o.push({id:i.rows.item(n).id,nombre:i.rows.item(n).nombre,apellido:i.rows.item(n).apellido,fechanacimiento:i.rows.item(n).fechanacimiento,correo:i.rows.item(n).correo,rut:i.rows.item(n).rut,celular:i.rows.item(n).celular,contrasena:i.rows.item(n).contrasena});this.listaUsuario.next(o)})}insertarUsuario(i,o,n,u,g,p,m){return this.database.executeSql("INSERT INTO usuario(nombre, apellido, correo, fechanacimiento, rut, celular, contrasena) VALUES (?, ?, ?, ?, ?, ?, ?)",[i,o,n,u,g,p,m]).then(N=>{this.buscarUsuario()}).catch(N=>{console.error("Error al insertar el usuario.",N)})}crearBD(){this.platform.ready().then(()=>{this.sqlite.create({name:"bdviago.bd",location:"default"}).then(i=>{this.database=i,this.crearTablas()}).catch(i=>{this.presentAlert("Error en platform: "+i)})})}crearTablas(){var i=this;return(0,_.Z)(function*(){try{yield i.database.executeSql(i.tablaTipo,[]),yield i.database.executeSql(i.tablaRol,[]),yield i.database.executeSql(i.tablaUsuarios,[]),yield i.database.executeSql(i.tablaVehiculo,[]),yield i.database.executeSql(i.tablaViajes,[]),yield i.database.executeSql(i.tablaDetalle,[]),yield i.database.executeSql(i.registroRol,[]),i.isDBReady.next(!0)}catch(o){i.presentAlert("Error en Crear Tablas: "+o)}})()}presentAlert(i){var o=this;return(0,_.Z)(function*(){yield(yield o.alertController.create({header:"Error",message:i,buttons:["Aceptar"]})).present()})()}}return(e=a).\u0275fac=function(i){return new(i||e)(r.LFG(R.e),r.LFG(s.t4),r.LFG(s.Br))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),a})();function A(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo es obligatorio."),r.qZA())}function I(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo 3 car\xe1cteres."),r.qZA())}function Z(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xe1ximo 30 car\xe1cteres."),r.qZA())}function P(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo NO requiere car\xe1cteres especiales ni n\xfameros."),r.qZA())}function h(e,a){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,A,2,0,"p",14),r.YNc(2,I,2,0,"p",14),r.YNc(3,Z,2,0,"p",14),r.YNc(4,P,2,0,"p",14),r.qZA()),2&e){const t=r.oxw();let i,o,n,u;r.xp6(1),r.Q6J("ngIf",null==(i=t.formularioRegistro.get("nombre"))||null==i.errors?null:i.errors.required),r.xp6(1),r.Q6J("ngIf",null==(o=t.formularioRegistro.get("nombre"))||null==o.errors?null:o.errors.minlength),r.xp6(1),r.Q6J("ngIf",null==(n=t.formularioRegistro.get("nombre"))||null==n.errors?null:n.errors.maxlength),r.xp6(1),r.Q6J("ngIf",null==(u=t.formularioRegistro.get("nombre"))||null==u.errors?null:u.errors.pattern)}}function x(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo es obligatorio."),r.qZA())}function v(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo 3 car\xe1cteres."),r.qZA())}function q(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xe1ximo 30 car\xe1cteres."),r.qZA())}function L(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo NO requiere car\xe1cteres especiales."),r.qZA())}function b(e,a){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,x,2,0,"p",14),r.YNc(2,v,2,0,"p",14),r.YNc(3,q,2,0,"p",14),r.YNc(4,L,2,0,"p",14),r.qZA()),2&e){const t=r.oxw();let i,o,n,u;r.xp6(1),r.Q6J("ngIf",null==(i=t.formularioRegistro.get("apellido"))||null==i.errors?null:i.errors.required),r.xp6(1),r.Q6J("ngIf",null==(o=t.formularioRegistro.get("apellido"))||null==o.errors?null:o.errors.minlength),r.xp6(1),r.Q6J("ngIf",null==(n=t.formularioRegistro.get("apellido"))||null==n.errors?null:n.errors.maxlength),r.xp6(1),r.Q6J("ngIf",null==(u=t.formularioRegistro.get("apellido"))||null==u.errors?null:u.errors.pattern)}}function O(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo es obligatorio."),r.qZA())}function Y(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo debe tener estructura de correo electr\xf3nico."),r.qZA())}function C(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo 10 car\xe1cteres."),r.qZA())}function y(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xe1ximo 50 car\xe1cteres."),r.qZA())}function J(e,a){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,O,2,0,"p",14),r.YNc(2,Y,2,0,"p",14),r.YNc(3,C,2,0,"p",14),r.YNc(4,y,2,0,"p",14),r.qZA()),2&e){const t=r.oxw();let i,o,n,u;r.xp6(1),r.Q6J("ngIf",null==(i=t.formularioRegistro.get("correo"))||null==i.errors?null:i.errors.required),r.xp6(1),r.Q6J("ngIf",null==(o=t.formularioRegistro.get("correo"))||null==o.errors?null:o.errors.email),r.xp6(1),r.Q6J("ngIf",null==(n=t.formularioRegistro.get("correo"))||null==n.errors?null:n.errors.minlength),r.xp6(1),r.Q6J("ngIf",null==(u=t.formularioRegistro.get("correo"))||null==u.errors?null:u.errors.maxlength)}}function w(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo es obligatorio."),r.qZA())}function Q(e,a){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,w,2,0,"p",14),r.qZA()),2&e){const t=r.oxw();let i;r.xp6(1),r.Q6J("ngIf",null==(i=t.formularioRegistro.get("correo"))||null==i.errors?null:i.errors.required)}}function S(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo es obligatorio."),r.qZA())}function F(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo 12 car\xe1cteres."),r.qZA())}function G(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xe1ximo 14 car\xe1cteres."),r.qZA())}function D(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere s\xf3lo n\xfameros."),r.qZA())}function k(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere puntos y gui\xf3n."),r.qZA())}function M(e,a){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,S,2,0,"p",14),r.YNc(2,F,2,0,"p",14),r.YNc(3,G,2,0,"p",14),r.YNc(4,D,2,0,"p",14),r.YNc(5,k,2,0,"p",14),r.qZA()),2&e){const t=r.oxw();let i,o,n,u,g;r.xp6(1),r.Q6J("ngIf",null==(i=t.formularioRegistro.get("rut"))||null==i.errors?null:i.errors.required),r.xp6(1),r.Q6J("ngIf",null==(o=t.formularioRegistro.get("rut"))||null==o.errors?null:o.errors.minlength),r.xp6(1),r.Q6J("ngIf",null==(n=t.formularioRegistro.get("rut"))||null==n.errors?null:n.errors.maxlength),r.xp6(1),r.Q6J("ngIf",null==(u=t.formularioRegistro.get("rut"))||null==u.errors?null:u.errors.pattern),r.xp6(1),r.Q6J("ngIf",null==(g=t.formularioRegistro.get("rut"))||null==g.errors?null:g.errors.pattern)}}function V(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo es obligatorio."),r.qZA())}function B(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo 9 car\xe1cteres."),r.qZA())}function H(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xe1ximo 9 car\xe1cteres."),r.qZA())}function K(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo NO requiere letras ni car\xe1cteres especiales."),r.qZA())}function j(e,a){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,V,2,0,"p",14),r.YNc(2,B,2,0,"p",14),r.YNc(3,H,2,0,"p",14),r.YNc(4,K,2,0,"p",14),r.qZA()),2&e){const t=r.oxw();let i,o,n,u;r.xp6(1),r.Q6J("ngIf",null==(i=t.formularioRegistro.get("celular"))||null==i.errors?null:i.errors.required),r.xp6(1),r.Q6J("ngIf",null==(o=t.formularioRegistro.get("celular"))||null==o.errors?null:o.errors.minlength),r.xp6(1),r.Q6J("ngIf",null==(n=t.formularioRegistro.get("celular"))||null==n.errors?null:n.errors.maxlength),r.xp6(1),r.Q6J("ngIf",null==(u=t.formularioRegistro.get("celular"))||null==u.errors?null:u.errors.pattern)}}function X(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo es obligatorio."),r.qZA())}function z(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo 10 car\xe1cteres."),r.qZA())}function $(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xe1ximo 30 car\xe1cteres."),r.qZA())}function W(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo una may\xfascula."),r.qZA())}function rr(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo una min\xfascula."),r.qZA())}function er(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo un n\xfamero."),r.qZA())}function ir(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo un car\xe1cter especial."),r.qZA())}function or(e,a){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,X,2,0,"p",14),r.YNc(2,z,2,0,"p",14),r.YNc(3,$,2,0,"p",14),r.YNc(4,W,2,0,"p",14),r.YNc(5,rr,2,0,"p",14),r.YNc(6,er,2,0,"p",14),r.YNc(7,ir,2,0,"p",14),r.qZA()),2&e){const t=r.oxw();let i,o,n,u,g,p,m;r.xp6(1),r.Q6J("ngIf",null==(i=t.formularioRegistro.get("password"))||null==i.errors?null:i.errors.required),r.xp6(1),r.Q6J("ngIf",null==(o=t.formularioRegistro.get("password"))||null==o.errors?null:o.errors.minlength),r.xp6(1),r.Q6J("ngIf",null==(n=t.formularioRegistro.get("password"))||null==n.errors?null:n.errors.maxlength),r.xp6(1),r.Q6J("ngIf",null==(u=t.formularioRegistro.get("password"))||null==u.errors?null:u.errors.pattern),r.xp6(1),r.Q6J("ngIf",null==(g=t.formularioRegistro.get("password"))||null==g.errors?null:g.errors.pattern),r.xp6(1),r.Q6J("ngIf",null==(p=t.formularioRegistro.get("password"))||null==p.errors?null:p.errors.pattern),r.xp6(1),r.Q6J("ngIf",null==(m=t.formularioRegistro.get("password"))||null==m.errors?null:m.errors.pattern)}}function ar(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo es obligatorio."),r.qZA())}function tr(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo 10 car\xe1cteres."),r.qZA())}function nr(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xe1ximo 30 car\xe1cteres."),r.qZA())}function lr(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo una may\xfascula."),r.qZA())}function ur(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo una min\xfascula."),r.qZA())}function sr(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo un n\xfamero."),r.qZA())}function gr(e,a){1&e&&(r.TgZ(0,"p",15),r._uU(1,"Este campo requiere m\xednimo un car\xe1cter especial."),r.qZA())}function cr(e,a){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,ar,2,0,"p",14),r.YNc(2,tr,2,0,"p",14),r.YNc(3,nr,2,0,"p",14),r.YNc(4,lr,2,0,"p",14),r.YNc(5,ur,2,0,"p",14),r.YNc(6,sr,2,0,"p",14),r.YNc(7,gr,2,0,"p",14),r.qZA()),2&e){const t=r.oxw();let i,o,n,u,g,p,m;r.xp6(1),r.Q6J("ngIf",null==(i=t.formularioRegistro.get("confirmacionPassword"))||null==i.errors?null:i.errors.required),r.xp6(1),r.Q6J("ngIf",null==(o=t.formularioRegistro.get("confirmacionPassword"))||null==o.errors?null:o.errors.minlength),r.xp6(1),r.Q6J("ngIf",null==(n=t.formularioRegistro.get("confirmacionPassword"))||null==n.errors?null:n.errors.maxlength),r.xp6(1),r.Q6J("ngIf",null==(u=t.formularioRegistro.get("confirmacionPassword"))||null==u.errors?null:u.errors.pattern),r.xp6(1),r.Q6J("ngIf",null==(g=t.formularioRegistro.get("confirmacionPassword"))||null==g.errors?null:g.errors.pattern),r.xp6(1),r.Q6J("ngIf",null==(p=t.formularioRegistro.get("confirmacionPassword"))||null==p.errors?null:p.errors.pattern),r.xp6(1),r.Q6J("ngIf",null==(m=t.formularioRegistro.get("confirmacionPassword"))||null==m.errors?null:m.errors.pattern)}}const pr=[{path:"",component:(()=>{var e;class a{constructor(i,o,n){this.fb=i,this.alertController=o,this.database=n,this.formularioRegistro=this.fb.group({nombre:new l.NI("",[l.kI.required,l.kI.minLength(3),l.kI.maxLength(30),l.kI.pattern("[a-zA-Z]*")]),apellido:new l.NI("",[l.kI.required,l.kI.minLength(3),l.kI.maxLength(30),l.kI.pattern("[a-zA-Z\xf1\xd1]*")]),rut:new l.NI("",[l.kI.required,l.kI.minLength(12),l.kI.maxLength(13),l.kI.pattern("[0-9K.-]*")]),fechanacimiento:new l.NI("",[l.kI.required]),correo:new l.NI("",[l.kI.required,l.kI.minLength(10),l.kI.maxLength(50),l.kI.email]),celular:new l.NI("",[l.kI.required,l.kI.minLength(9),l.kI.maxLength(9),l.kI.pattern("[0-9]*")]),password:new l.NI("",[l.kI.required,l.kI.minLength(10),l.kI.maxLength(50),l.kI.pattern("[a-zA-Z0-9@#$%^&*.,]*")]),confirmacionPassword:new l.NI("",[l.kI.required,l.kI.minLength(10),l.kI.maxLength(50),l.kI.pattern("[a-zA-Z0-9.,@#$%^&*.,]*")])})}ngOnInit(){}guardarUsuario(){if(this.formularioRegistro.valid){let i=this.formularioRegistro.value;this.database.crearBD(),this.database.insertarUsuario(i.nombre,i.apellido,i.correo,i.fechanacimiento,i.rut,i.celular,i.contrasena).then(o=>{console.log("Usuario registrado correctamente."),this.formularioRegistro.reset()}).catch(o=>{console.error("Error al insertar el usuario.",o)})}else this.presentarAlerta("Error","Rellene el formulario correctamente.")}presentarAlerta(i,o){var n=this;return(0,_.Z)(function*(){yield(yield n.alertController.create({header:i,message:o,buttons:["Aceptar"]})).present()})()}}return(e=a).\u0275fac=function(i){return new(i||e)(r.Y36(l.qu),r.Y36(s.Br),r.Y36(U))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-paginaregistrar-usuario"]],decls:56,vars:9,consts:[["color","primary"],["slot","start"],[3,"formGroup","keyup.enter"],["position","floating","required",""],["formControlName","nombre","id","nombre"],[4,"ngIf"],["position","floating"],["formControlName","apellido","type","text"],["formControlName","correo","type","text"],["formControlName","fechanacimiento","type","date"],["formControlName","rut","type","text"],["formControlName","celular","type","number"],["formControlName","password","type","password"],["formControlName","confirmacionPassword","type","password"],["color","danger",4,"ngIf"],["color","danger"]],template:function(i,o){1&i&&(r.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),r._UZ(3,"ion-back-button"),r.qZA(),r.TgZ(4,"ion-title"),r._uU(5,"Registrate"),r.qZA()()(),r.TgZ(6,"ion-content")(7,"ion-card")(8,"ion-card-header",0)(9,"ion-card-title"),r._uU(10,"Registro:"),r.qZA()(),r.TgZ(11,"ion-card-content")(12,"form",2),r.NdJ("keyup.enter",function(){return o.guardarUsuario()}),r.TgZ(13,"ion-item")(14,"ion-label",3),r._uU(15,"Nombre:"),r.qZA(),r._UZ(16,"ion-input",4),r.qZA(),r.YNc(17,h,5,4,"div",5),r.TgZ(18,"ion-item")(19,"ion-label",6),r._uU(20,"Apellido:"),r.qZA(),r._UZ(21,"ion-input",7),r.qZA(),r.YNc(22,b,5,4,"div",5),r.TgZ(23,"ion-item")(24,"ion-label",6),r._uU(25,"Correo:"),r.qZA(),r._UZ(26,"ion-input",8),r.qZA(),r.YNc(27,J,5,4,"div",5),r.TgZ(28,"ion-item")(29,"ion-label",6),r._uU(30,"Fecha de Nacimiento:"),r.qZA(),r._UZ(31,"ion-input",9),r.qZA(),r.YNc(32,Q,2,1,"div",5),r.TgZ(33,"ion-item")(34,"ion-label",6),r._uU(35,"Rut:"),r.qZA(),r._UZ(36,"ion-input",10),r.qZA(),r.YNc(37,M,6,5,"div",5),r.TgZ(38,"ion-item")(39,"ion-label",6),r._uU(40,"Celular:"),r.qZA(),r._UZ(41,"ion-input",11),r.qZA(),r.YNc(42,j,5,4,"div",5),r.TgZ(43,"ion-item")(44,"ion-label",6),r._uU(45,"Contrase\xf1a:"),r.qZA(),r._UZ(46,"ion-input",12),r.qZA(),r.YNc(47,or,8,7,"div",5),r.TgZ(48,"ion-item")(49,"ion-label",6),r._uU(50,"Confirmar contrase\xf1a:"),r.qZA(),r._UZ(51,"ion-input",13),r.qZA(),r.YNc(52,cr,8,7,"div",5),r._UZ(53,"br"),r.TgZ(54,"ion-button"),r._uU(55,"Registrarse"),r.qZA()()()()()),2&i&&(r.xp6(12),r.Q6J("formGroup",o.formularioRegistro),r.xp6(5),r.Q6J("ngIf",o.formularioRegistro.invalid&&(o.formularioRegistro.dirty||o.formularioRegistro.touched)),r.xp6(5),r.Q6J("ngIf",o.formularioRegistro.invalid&&(o.formularioRegistro.dirty||o.formularioRegistro.touched)),r.xp6(5),r.Q6J("ngIf",o.formularioRegistro.invalid&&(o.formularioRegistro.dirty||o.formularioRegistro.touched)),r.xp6(5),r.Q6J("ngIf",o.formularioRegistro.invalid&&(o.formularioRegistro.dirty||o.formularioRegistro.touched)),r.xp6(5),r.Q6J("ngIf",o.formularioRegistro.invalid&&(o.formularioRegistro.dirty||o.formularioRegistro.touched)),r.xp6(5),r.Q6J("ngIf",o.formularioRegistro.invalid&&(o.formularioRegistro.dirty||o.formularioRegistro.touched)),r.xp6(5),r.Q6J("ngIf",o.formularioRegistro.invalid&&(o.formularioRegistro.dirty||o.formularioRegistro.touched)),r.xp6(5),r.Q6J("ngIf",o.formularioRegistro.invalid&&(o.formularioRegistro.dirty||o.formularioRegistro.touched)))},dependencies:[d.O5,l._Y,l.JJ,l.JL,l.sg,l.u,s.oU,s.YG,s.Sm,s.PM,s.FN,s.Zi,s.Dq,s.W2,s.Gu,s.pK,s.Ie,s.Q$,s.wd,s.sr,s.as,s.j9,s.cs],styles:["#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:rgb(241, 241, 236);--ion-border-color:primary}"]}),a})()}];let mr=(()=>{var e;class a{}return(e=a).\u0275fac=function(i){return new(i||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[E.Bz.forChild(pr),E.Bz]}),a})(),_r=(()=>{var e;class a{}return(e=a).\u0275fac=function(i){return new(i||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[d.ez,l.u5,l.UX,s.Pc,mr]}),a})()}}]);