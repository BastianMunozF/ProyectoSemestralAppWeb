"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[304],{304:(L,h,l)=>{l.r(h),l.d(h,{PaginarecuperarUsuarioPageModule:()=>e});var R=l(6814),s=l(9843),E=l(2058),m=l(5861),n=l(6223),t=l(5879),A=l(4535);const p=[{path:"",component:(()=>{var r;class a{constructor(i,u,c,T){this.fb=i,this.database=u,this.alertController=c,this.router=T,this.correoU="",this.contrasenaU="",this.formularioRecuperar=this.fb.group({correo:new n.NI("",[n.kI.required]),rut:new n.NI("",[n.kI.required]),contrasena:new n.NI("",[n.kI.required]),confcontrasena:new n.NI("",[n.kI.required])})}recuperarContrasena(){if(this.formularioRecuperar.valid){let i=this.formularioRecuperar.value;this.database.recuperarBuscar(i.correo,i.rut).then(u=>{u?this.database.recuperarUsuario(i.contrasena,i.correo,i.rut).then(c=>{null!==c?(console.log("Contrase\xf1a actualizada correctamente."),this.router.navigate(["/paginalogin-usuario"]).then(()=>{this.presentarAlerta("Contrase\xf1a recuperada","La contrase\xf1a que ha ingresado ha sido actualizada.")}),this.formularioRecuperar.reset()):(console.log("Error al recuperar contrase\xf1a."),this.presentarAlerta("Error al recuperar contrase\xf1a","El correo o rut no corresponden a la cuenta."))}).catch(c=>{console.error("Error en base de datos al recuperar contrase\xf1a: ",c)}):(console.log("Error al recuperar contrase\xf1a."),this.presentarAlerta("Error al recuperar contrase\xf1a","El correo o rut no corresponden a la cuenta."))}).catch(u=>{console.error("Error al recuperar contrase\xf1a:",u)})}}ngOnInit(){}presentarAlerta(i,u){var c=this;return(0,m.Z)(function*(){yield(yield c.alertController.create({header:i,message:u,buttons:["Aceptar"]})).present()})()}}return(r=a).\u0275fac=function(i){return new(i||r)(t.Y36(n.qu),t.Y36(A.N),t.Y36(s.Br),t.Y36(E.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-paginarecuperar-usuario"]],decls:31,vars:1,consts:[["color","primary"],["slot","start"],[3,"formGroup","ngSubmit"],["position","floating"],["type","text","formControlName","correo"],["type","text","formControlName","rut"],["type","password","formControlName","contrasena"],["type","password","formControlName","confcontrasena"],["position","relative","type","submit"]],template:function(i,u){1&i&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-back-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Recuperar Contrase\xf1a"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-card")(8,"ion-card-header",0)(9,"ion-card-title"),t._uU(10,"Ingrese Datos:"),t.qZA()(),t.TgZ(11,"ion-card-content")(12,"form",2),t.NdJ("ngSubmit",function(){return u.recuperarContrasena()}),t.TgZ(13,"ion-item")(14,"ion-label",3),t._uU(15,"Correo Registrado:"),t.qZA(),t._UZ(16,"ion-input",4),t.qZA(),t.TgZ(17,"ion-item")(18,"ion-label",3),t._uU(19,"Rut Asociado a la Cuenta:"),t.qZA(),t._UZ(20,"ion-input",5),t.qZA(),t.TgZ(21,"ion-item")(22,"ion-label",3),t._uU(23,"Nueva Contrase\xf1a:"),t.qZA(),t._UZ(24,"ion-input",6),t.qZA(),t.TgZ(25,"ion-item")(26,"ion-label",3),t._uU(27,"Confirmar Nueva Contrase\xf1a:"),t.qZA(),t._UZ(28,"ion-input",7),t.qZA(),t.TgZ(29,"ion-button",8),t._uU(30,"Confirmar"),t.qZA()()()()()),2&i&&(t.xp6(12),t.Q6J("formGroup",u.formularioRecuperar))},dependencies:[s.oU,s.YG,s.Sm,s.PM,s.FN,s.Zi,s.Dq,s.W2,s.Gu,s.pK,s.Ie,s.Q$,s.wd,s.sr,s.j9,s.cs,n._Y,n.JJ,n.JL,n.sg,n.u],styles:["#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:rgb(241, 241, 236);--ion-border-color:primary}"]}),a})()}];let U=(()=>{var r;class a{}return(r=a).\u0275fac=function(i){return new(i||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[E.Bz.forChild(p),E.Bz]}),a})(),e=(()=>{var r;class a{}return(r=a).\u0275fac=function(i){return new(i||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[R.ez,s.Pc,U,n.u5,n.UX]}),a})()},4535:(L,h,l)=>{l.d(h,{N:()=>A});var R=l(5861),s=l(5619),E=l(5879),m=l(5320),n=l(9843),t=l(2058);let A=(()=>{var d;class p{constructor(e,r,a,o){this.sqlite=e,this.platform=r,this.alertController=a,this.router=o,this.tablaTipo="CREATE TABLE IF NOT EXISTS tipo (id_tipo INTEGER PRIMARY KEY AUTOINCREMENT, descripcion VARCHAR(20));",this.tablaRol="CREATE TABLE IF NOT EXISTS rol (id_rol INTEGER PRIMARY KEY AUTOINCREMENT, nombrerol VARCHAR(10));",this.tablaUsuarios="CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(30) NOT NULL, apellido VARCHAR(30) NOT NULL, correo VARCHAR(30) NOT NULL, fechanacimiento DATE NOT NULL, rut VARCHAR(13) NOT NULL, celular INTEGER NOT NULL, contrasena VARCHAR(30) NOT NULL, id_rol INTEGER NOT NULL, FOREIGN KEY(id_rol) REFERENCES rol(id_rol));",this.tablaPagoUsuario="CREATE TABLE IF NOT EXISTS pago(id_pago INTEGER PRIMARY KEY AUTOINCREMENT, num_tarjeta NUMBER NOT NULL, fecha_caducidad DATE NOT NULL, cvv NUMBER NOT NULL, id INTEGER NOT NULL, FOREIGN KEY(id) REFERENCES usuario(id))",this.tablaVehiculo="CREATE TABLE IF NOT EXISTS vehiculo (id_vehiculo INTEGER PRIMARY KEY AUTOINCREMENT, marca VARCHAR(30) NOT NULL, modelo VARCHAR(30) NOT NULL, anio INTEGER NOT NULL, patente VARCHAR(6) NOT NULL, asientos INTEGER NOT NULL, id_usuario INTEGER NOT NULL, id_tipo INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_tipo) REFERENCES tipo(id_tipo));",this.tablaViajes="CREATE TABLE IF NOT EXISTS viaje (id_viaje INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL, cant_asientos INTEGER NOT NULL, total INTEGER NOT NULL, valor_asiento INTEGER NOT NULL, estado BOOLEAN NOT NULL, id_vehiculo INTEGER NOT NULL, FOREIGN KEY(id_vehiculo) REFERENCES vehiculo(id_vehiculo));",this.tablaViajesUser="CREATE TABLE IF NOT EXISTS viajeuser(id_viajeuser INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL)",this.tablaDetalle="CREATE TABLE IF NOT EXISTS detalle (id_detalle INTEGER PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER NOT NULL, id_viaje INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_viaje) REFERENCES viaje(id_viaje));",this.registroRol="INSERT INTO rol VALUES (1, 'Usuario'), (2, 'Conductor');",this.registroTipoVehiculo="INSERT INTO tipo VALUES (1, 'Standard'), (2, 'Large'), (3, 'Deluxe')",this.listaUsuario=new s.X([]),this.listaViajeuser=new s.X([]),this.isDBReady=new s.X(!1),this.crearBD()}dbState(){return this.isDBReady.asObservable()}fetchUsuario(){return this.listaUsuario.asObservable()}fetchViajeUser(){return this.listaViajeuser.asObservable()}historialUsuario(e){return this.database.executeSql("SELECT * FROM viajeuser WHERE id = ?",[e]).then(r=>{let a=[];if(r.rows.length>0)for(var o=0;o<r.rows.length;o++)a.push({id_viajeuser:r.rows.item(o).id_viajeuser,f_viaje:r.rows.item(o).f_viaje,hora_salida:r.rows.item(o).hora_salida,salida:r.rows.item(o).salida,destino:r.rows.item(o).destino});this.listaViajeuser.next(a)})}buscarCorreo(e,r){return this.database.executeSql("SELECT id, id_rol FROM usuario WHERE correo = ? AND contrasena = ?",[e,r]).then(a=>a.rows.length>0?a.rows.item(0):null).catch(a=>(this.presentAlert("Error al buscar usuario:"+a),!1))}buscarDatosUsuario(e){return this.database.executeSql("SELECT * FROM usuario WHERE id = ?",[e]).then(r=>{let a=[];if(r.rows.length>0)for(var o=0;o<r.rows.length;o++)a.push({id:r.rows.item(o).id,nombre:r.rows.item(o).nombre,apellido:r.rows.item(o).apellido,correo:r.rows.item(o).correo,fechanacimiento:r.rows.item(o).fechanacimiento,rut:r.rows.item(o).rut,celular:r.rows.item(o).celular,contrasena:r.rows.item(o).contrasena});return a})}buscarViajeuser(){return this.database.executeSql("SELECT * FROM viajeuser",[]).then(e=>{let r=[];if(e.rows.length>0)for(var a=0;a<e.rows.length;a++)r.push({id_viajeuser:e.rows.item(a).id_viajeuser,f_viaje:e.rows.item(a).f_viaje,hora_salida:e.rows.item(a).hora_salida,salida:e.rows.item(a).salida,destino:e.rows.item(a).destino});this.listaViajeuser.next(r)})}buscarUsuario(){return this.database.executeSql("SELECT * FROM usuario",[]).then(e=>{let r=[];if(e.rows.length>0)for(var a=0;a<e.rows.length;a++)r.push({id:e.rows.item(a).id,nombre:e.rows.item(a).nombre,apellido:e.rows.item(a).apellido,fechanacimiento:e.rows.item(a).fechanacimiento,correo:e.rows.item(a).correo,rut:e.rows.item(a).rut,celular:e.rows.item(a).celular,contrasena:e.rows.item(a).contrasena});this.listaUsuario.next(r)})}insertarUsuario(e,r,a,o,i,u,c,T){return this.database.executeSql("INSERT INTO usuario(nombre, apellido, correo, fechanacimiento, rut, celular, contrasena, id_rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",[e,r,a,o,i,u,c,T]).then(N=>{N?this.buscarUsuario():this.presentAlert("Error al insertar usuario en la base de datos.")}).catch(N=>{console.error("Error al insertar el usuario.",N)})}tomarViaje(e,r,a,o){return this.database.executeSql("INSERT INTO viajeuser VALUES(f_viaje, hora_salida, salida, destino) VALUES(?, ?, ?, ?)",[e,r,a,o]).then(i=>{i?this.buscarViajeuser():this.presentAlert("Error al insertar viaje en la base de datos.")}).catch(i=>{console.error("Error al insertar el viaje.",i)})}actualizarPerfil(e,r,a,o,i,u,c,T){return this.database.executeSql("UPDATE usuario SET nombre = ?, apellido = ?, correo = ?, fechanacimiento = ?, rut = ?, celular = ?, contrasena = ? WHERE id = ?",[e,r,a,o,i,u,c,T]).then(N=>!!N||(this.presentAlert("Error al actualizar usuario."),null)).catch(N=>{console.error("Error al actualizar usuario en base de datos:",N)})}recuperarBuscar(e,r){return this.database.executeSql("SELECT * FROM usuario WHERE correo = ? AND rut = ?",[e,r]).then(a=>a.rows.length>0?a.rows.item(0):null)}recuperarUsuario(e,r,a){return this.database.executeSql("UPDATE usuario SET contrasena = ? WHERE correo = ? AND rut = ?",[e,r,a]).then(o=>o?(this.buscarUsuario(),!0):(this.presentAlert("Error al actualizar contrase\xf1a."),null)).catch(o=>{console.error("Error al modificar la contrase\xf1a de usuario en la base de datos:",o)})}crearBD(){this.platform.ready().then(()=>{this.sqlite.create({name:"bdviago.bd",location:"default"}).then(e=>{this.database=e,this.crearTablas()}).catch(e=>{this.presentAlert("Error en platform: "+e)})})}crearTablas(){var e=this;return(0,R.Z)(function*(){try{yield e.database.executeSql(e.tablaTipo,[]),yield e.database.executeSql(e.tablaRol,[]),yield e.database.executeSql(e.tablaUsuarios,[]),yield e.database.executeSql(e.tablaVehiculo,[]),yield e.database.executeSql(e.tablaViajes,[]),yield e.database.executeSql(e.tablaDetalle,[]),yield e.database.executeSql(e.tablaViajesUser,[]),yield e.database.executeSql(e.registroRol,[]),yield e.database.executeSql(e.registroTipoVehiculo,[]),e.isDBReady.next(!0)}catch(r){e.presentAlert("Error en Crear Tablas: "+r)}})()}presentAlert(e){var r=this;return(0,R.Z)(function*(){yield(yield r.alertController.create({header:"Error",message:e,buttons:["Aceptar"]})).present()})()}}return(d=p).\u0275fac=function(e){return new(e||d)(E.LFG(m.e),E.LFG(n.t4),E.LFG(n.Br),E.LFG(t.F0))},d.\u0275prov=E.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),p})()}}]);