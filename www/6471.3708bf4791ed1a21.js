"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6471],{6471:(U,g,u)=>{u.r(g),u.d(g,{PaginaloginUsuarioPageModule:()=>t});var N=u(6814),n=u(6223),i=u(9843),T=u(2058),R=u(5861),r=u(5879),m=u(4535);const h=function(){return["/paginaregistrar-usuario"]},A=[{path:"",component:(()=>{var a;class o{constructor(s,l,E,d){this.fb=s,this.alertController=l,this.router=E,this.database=d,this.correo="",this.contrasena="",this.user="",this.formularioLogin=this.fb.group({correo:new n.NI("",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(30)]),contrasena:new n.NI("",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(30)])})}ngOnInit(){}iniciarSesion(){this.formularioLogin.valid&&this.database.buscarCorreo(this.correo,this.contrasena).then(s=>{if(null!==s){localStorage.setItem("id",s.id),localStorage.setItem("rol",s.id_rol.toString());let l=localStorage.getItem("rol");"1"===l?this.router.navigate(["/menuprincipal"]).then(()=>{this.presentarAlerta("Sesi\xf3n iniciada","La sesi\xf3n ha sido iniciada con \xe9xito.")}):(l="2")?this.router.navigate(["/registrarvehiculo"]).then(()=>{this.presentarAlerta("Sesi\xf3n iniciada","La sesi\xf3n de conductor ha sido iniciada con \xe9xito.")}):this.presentarAlerta("Error al iniciar sesi\xf3n","Los datos ingresados no existen."),this.formularioLogin.reset()}else this.presentarAlerta("Error al iniciar sesi\xf3n","Los datos ingresados no son correctos.")})}presentarAlerta(s,l){var E=this;return(0,R.Z)(function*(){yield(yield E.alertController.create({header:s,message:l,buttons:["Aceptar"]})).present()})()}}return(a=o).\u0275fac=function(s){return new(s||a)(r.Y36(n.qu),r.Y36(i.Br),r.Y36(T.F0),r.Y36(m.N))},a.\u0275cmp=r.Xpm({type:a,selectors:[["app-paginalogin-usuario"]],decls:35,vars:9,consts:[[3,"translucent"],["color","primary",2,"text-align","center"],["color","primary"],[2,"text-align","center"],["src","../../../assets/icon/Viago (2).png","alt","",2,"margin-left","6px"],[3,"formGroup","ngSubmit"],["position","floating"],["type","email","formControlName","correo",3,"ngModel","ngModelChange"],["formControlName","contrasena","type","password",3,"ngModel","ngModelChange"],[2,"display","flex","flex-direction","row","justify-content","space-between","align-items","center"],["type","submit"],["href","/paginarecuperar-usuario",2,"color","white"],["slot","end"],[3,"routerLink"]],template:function(s,l){1&s&&(r.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),r._uU(3,"Bienvenido!"),r.qZA()()(),r.TgZ(4,"ion-content")(5,"ion-card")(6,"ion-card-header",2)(7,"ion-card-title",3),r._uU(8,"Iniciar Sesi\xf3n "),r._UZ(9,"br"),r._uU(10),r.ALo(11,"uppercase"),r.qZA()(),r._UZ(12,"img",4),r.TgZ(13,"ion-card-content")(14,"form",5),r.NdJ("ngSubmit",function(){return l.iniciarSesion()}),r.TgZ(15,"ion-item")(16,"ion-label",6),r._uU(17,"Correo"),r.qZA(),r.TgZ(18,"ion-input",7),r.NdJ("ngModelChange",function(d){return l.correo=d}),r.qZA()(),r.TgZ(19,"ion-item")(20,"ion-label",6),r._uU(21,"Contrase\xf1a"),r.qZA(),r.TgZ(22,"ion-input",8),r.NdJ("ngModelChange",function(d){return l.contrasena=d}),r.qZA()(),r._UZ(23,"br"),r.TgZ(24,"div",9)(25,"ion-button",10),r._uU(26,"Ingresar"),r.qZA(),r.TgZ(27,"ion-button")(28,"a",11),r._uU(29,"Recuperar Usuario"),r.qZA()()()()()()(),r.TgZ(30,"ion-footer")(31,"ion-toolbar",2)(32,"ion-buttons",12)(33,"ion-button",13),r._uU(34,"Registrarse"),r.qZA()()()()),2&s&&(r.Q6J("translucent",!0),r.xp6(10),r.hij(" ",r.lcZ(11,6,l.correo),""),r.xp6(4),r.Q6J("formGroup",l.formularioLogin),r.xp6(4),r.Q6J("ngModel",l.correo),r.xp6(4),r.Q6J("ngModel",l.contrasena),r.xp6(11),r.Q6J("routerLink",r.DdM(8,h)))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,i.YG,i.Sm,i.PM,i.FN,i.Zi,i.Dq,i.W2,i.fr,i.Gu,i.pK,i.Ie,i.Q$,i.wd,i.sr,i.j9,i.YI,T.rH,N.gd],styles:["#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:rgb(241, 241, 236);--ion-border-color:primary}"]}),o})()}];let e=(()=>{var a;class o{}return(a=o).\u0275fac=function(s){return new(s||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[T.Bz.forChild(A),T.Bz]}),o})(),t=(()=>{var a;class o{}return(a=o).\u0275fac=function(s){return new(s||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[N.ez,n.u5,n.UX,i.Pc,e]}),o})()},4535:(U,g,u)=>{u.d(g,{N:()=>m});var N=u(5861),n=u(5619),i=u(5879),T=u(5320),R=u(9843),r=u(2058);let m=(()=>{var h;class L{constructor(e,t,a,o){this.sqlite=e,this.platform=t,this.alertController=a,this.router=o,this.tablaTipo="CREATE TABLE IF NOT EXISTS tipo (id_tipo INTEGER PRIMARY KEY AUTOINCREMENT, descripcion VARCHAR(20));",this.tablaRol="CREATE TABLE IF NOT EXISTS rol (id_rol INTEGER PRIMARY KEY AUTOINCREMENT, nombrerol VARCHAR(10));",this.tablaUsuarios="CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(30) NOT NULL, apellido VARCHAR(30) NOT NULL, correo VARCHAR(30) NOT NULL, fechanacimiento DATE NOT NULL, rut VARCHAR(13) NOT NULL, celular INTEGER NOT NULL, contrasena VARCHAR(30) NOT NULL, id_rol INTEGER NOT NULL, FOREIGN KEY(id_rol) REFERENCES rol(id_rol));",this.tablaPagoUsuario="CREATE TABLE IF NOT EXISTS pago(id_pago INTEGER PRIMARY KEY AUTOINCREMENT, num_tarjeta NUMBER NOT NULL, fecha_caducidad DATE NOT NULL, cvv NUMBER NOT NULL, id INTEGER NOT NULL, FOREIGN KEY(id) REFERENCES usuario(id))",this.tablaVehiculo="CREATE TABLE IF NOT EXISTS vehiculo (id_vehiculo INTEGER PRIMARY KEY AUTOINCREMENT, marca VARCHAR(30) NOT NULL, modelo VARCHAR(30) NOT NULL, anio INTEGER NOT NULL, patente VARCHAR(6) NOT NULL, asientos INTEGER NOT NULL, id_usuario INTEGER NOT NULL, id_tipo INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_tipo) REFERENCES tipo(id_tipo));",this.tablaViajes="CREATE TABLE IF NOT EXISTS viaje (id_viaje INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL, cant_asientos INTEGER NOT NULL, total INTEGER NOT NULL, valor_asiento INTEGER NOT NULL, estado BOOLEAN NOT NULL, id_vehiculo INTEGER NOT NULL, FOREIGN KEY(id_vehiculo) REFERENCES vehiculo(id_vehiculo));",this.tablaViajesUser="CREATE TABLE IF NOT EXISTS viajeuser(id_viajeuser INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL, total INTEGER NOT NULL, id_vehiculo INTEGER, FOREIGN KEY(id_vehiculo) REFERENCES vehiculo(id_vehiculo))",this.tablaDetalle="CREATE TABLE IF NOT EXISTS detalle (id_detalle INTEGER PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER NOT NULL, id_viaje INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_viaje) REFERENCES viaje(id_viaje));",this.registroRol="INSERT INTO rol VALUES (1, 'Usuario'), (2, 'Conductor');",this.registroTipoVehiculo="INSERT INTO tipo VALUES (1, 'Standard'), (2, 'Large'), (3, 'Deluxe')",this.listaUsuario=new n.X([]),this.listaViajeuser=new n.X([]),this.isDBReady=new n.X(!1),this.crearBD()}dbState(){return this.isDBReady.asObservable()}fetchUsuario(){return this.listaUsuario.asObservable()}fetchViajeUser(){return this.listaViajeuser.asObservable()}buscarCorreo(e,t){return this.database.executeSql("SELECT id, id_rol FROM usuario WHERE correo = ? AND contrasena = ?",[e,t]).then(a=>a.rows.length>0?a.rows.item(0):null).catch(a=>(this.presentAlert("Error al buscar usuario:"+a),!1))}buscarDatosUsuario(e){return this.database.executeSql("SELECT * FROM usuario WHERE id = ?",[e]).then(t=>{let a=[];if(t.rows.length>0)for(var o=0;o<t.rows.length;o++)a.push({id:t.rows.item(o).id,nombre:t.rows.item(o).nombre,apellido:t.rows.item(o).apellido,correo:t.rows.item(o).correo,fechanacimiento:t.rows.item(o).fechanacimiento,rut:t.rows.item(o).rut,celular:t.rows.item(o).celular,contrasena:t.rows.item(o).contrasena});return a})}buscarViajeuser(){return this.database.executeSql("SELECT * FROM viajeuser",[]).then(e=>{let t=[];if(e.rows.length>0)for(var a=0;a<e.rows.length;a++)t.push({id_viajeuser:e.rows.item(a).id_viajeuser,f_viaje:e.rows.item(a).f_viaje,hora_salida:e.rows.item(a).hora_salida,salida:e.rows.item(a).salida,destino:e.rows.item(a).destino,total:e.rows.item(a).total});this.listaViajeuser.next(t)})}buscarUsuario(){return this.database.executeSql("SELECT * FROM usuario",[]).then(e=>{let t=[];if(e.rows.length>0)for(var a=0;a<e.rows.length;a++)t.push({id:e.rows.item(a).id,nombre:e.rows.item(a).nombre,apellido:e.rows.item(a).apellido,fechanacimiento:e.rows.item(a).fechanacimiento,correo:e.rows.item(a).correo,rut:e.rows.item(a).rut,celular:e.rows.item(a).celular,contrasena:e.rows.item(a).contrasena});this.listaUsuario.next(t)})}insertarUsuario(e,t,a,o,c,s,l,E){return this.database.executeSql("INSERT INTO usuario(nombre, apellido, correo, fechanacimiento, rut, celular, contrasena, id_rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",[e,t,a,o,c,s,l,E]).then(d=>{d?this.buscarUsuario():this.presentAlert("Error al insertar usuario en la base de datos.")}).catch(d=>{console.error("Error al insertar el usuario.",d)})}tomarViaje(e,t,a,o){return this.database.executeSql("INSERT INTO viajeuser VALUES(f_viaje, hora_salida, salida, destino) VALUES(?, ?, ?, ?)",[e,t,a,o]).then(c=>{c?this.buscarViajeuser():this.presentAlert("Error al insertar viaje en la base de datos.")}).catch(c=>{console.error("Error al insertar el viaje.",c)})}actualizarPerfil(e,t,a,o,c,s,l){return this.database.executeSql("UPDATE usuario SET nombre = ?, apellido = ?, correo = ?, fechanacimiento = ?, rut = ?, celular = ? WHERE id = ?",[e,t,a,o,c,s,l]).then(E=>!!E||(this.presentAlert("Error al actualizar usuario."),null)).catch(E=>{console.error("Error al actualizar usuario en base de datos:",E)})}recuperarBuscar(e,t){return this.database.executeSql("SELECT * FROM usuario WHERE correo = ? AND rut = ?",[e,t]).then(a=>a.rows.length>0?a.rows.item(0):null)}recuperarUsuario(e,t,a){return this.database.executeSql("UPDATE usuario SET contrasena = ? WHERE correo = ? AND rut = ?",[e,t,a]).then(o=>{o?this.buscarUsuario():this.presentAlert("Error al actualizar contrase\xf1a.")}).catch(o=>{console.error("Error al modificar la contrase\xf1a de usuario en la base de datos:",o)})}crearBD(){this.platform.ready().then(()=>{this.sqlite.create({name:"bdviago.bd",location:"default"}).then(e=>{this.database=e,this.crearTablas()}).catch(e=>{this.presentAlert("Error en platform: "+e)})})}crearTablas(){var e=this;return(0,N.Z)(function*(){try{yield e.database.executeSql(e.tablaTipo,[]),yield e.database.executeSql(e.tablaRol,[]),yield e.database.executeSql(e.tablaUsuarios,[]),yield e.database.executeSql(e.tablaVehiculo,[]),yield e.database.executeSql(e.tablaViajes,[]),yield e.database.executeSql(e.tablaDetalle,[]),yield e.database.executeSql(e.tablaViajesUser,[]),yield e.database.executeSql(e.registroRol,[]),yield e.database.executeSql(e.registroTipoVehiculo,[]),e.isDBReady.next(!0)}catch(t){e.presentAlert("Error en Crear Tablas: "+t)}})()}presentAlert(e){var t=this;return(0,N.Z)(function*(){yield(yield t.alertController.create({header:"Error",message:e,buttons:["Aceptar"]})).present()})()}}return(h=L).\u0275fac=function(e){return new(e||h)(i.LFG(T.e),i.LFG(R.t4),i.LFG(R.Br),i.LFG(r.F0))},h.\u0275prov=i.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),L})()}}]);