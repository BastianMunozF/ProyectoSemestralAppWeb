"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[255],{255:(O,f,i)=>{i.r(f),i.d(f,{EditarperfilusuarioPageModule:()=>L});var v=i(6814),n=i(6223),h=i(1175),A=i(6385),E=i(2296),o=i(9843),m=i(2058),d=i(5861),e=i(5879),g=i(4535);const t=function(){return["/perfilusuario"]},r=function(){return["/menuprincipal"]},a=function(){return["/comenzarviaje"]},l=function(){return["/tomarviaje"]},R=function(){return["/paginalogin-usuario"]},b=[{path:"",component:(()=>{var s;class N{constructor(u,c,p,I){this.router=u,this.database=c,this.fb=p,this.alertController=I,this.nombreU="",this.apellidoU="",this.correoU="",this.rutU="";const C=localStorage.getItem("id");c.buscarDatosUsuario(C).then(M=>{this.usuario=M[0],this.nombreU=this.usuario.nombre,this.apellidoU=this.usuario.apellido,this.correoU=this.usuario.correo,this.fechanacimientoU=this.usuario.fechanacimiento,this.rutU=this.usuario.rut,this.celularU=this.usuario.celular}),this.formularioActualizar=this.fb.group({nombre:new n.NI(""),apellido:new n.NI(""),correo:new n.NI(""),fechanacimiento:new n.NI(""),rut:new n.NI(""),celular:new n.NI("")})}ngOnInit(){}actualizarUsuario(){if(this.formularioActualizar.valid){let u=this.formularioActualizar.value,c=localStorage.getItem("id");this.database.actualizarPerfil(u.nombre,u.apellido,u.correo,u.fechanacimiento,u.rut,u.celular,c).then(p=>{null!==p?(console.log("Datos actualizados correctamente."),this.presentarAlerta("Datos actualizados","Sus datos han sido actualizados con \xe9xito."),this.router.navigate(["/perfilusuario"]),this.formularioActualizar.reset()):(console.log("Error al actualizar datos"),this.presentarAlerta("Error al actualizar datos","Rellene el formulario correctamente."))}).catch(p=>{console.error("Error en base de datos al actualizar datos: ",p)})}}presentarAlerta(u,c){var p=this;return(0,d.Z)(function*(){yield(yield p.alertController.create({header:u,message:c,buttons:["Aceptar"]})).present()})()}}return(s=N).\u0275fac=function(u){return new(u||s)(e.Y36(m.F0),e.Y36(g.N),e.Y36(n.qu),e.Y36(o.Br))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-editarperfilusuario"]],decls:49,vars:19,consts:[["color","primary",2,"text-align","center"],[1,"ion-padding"],[1,"ion-text-center"],[3,"formGroup","ngSubmit"],["formControlName","nombre","type","text",3,"value"],["formControlName","apellido","type","text",3,"value"],["formControlName","correo","type","email",3,"value"],["formControlName","fechanacimiento","type","date",3,"value"],["formControlName","rut","type","text",3,"value"],["formControlName","celular","type","number",3,"value"],["color","primary",3,"routerLink"],["color","primary",3,"click"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",3,"routerLink"],["name","home","color","primary"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",3,"routerLink"],["name","walk","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","disabled","","aria-label","Example icon button with a open in new tab icon",3,"routerLink"],["name","exit","color","primary"]],template:function(u,c){1&u&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),e._uU(3,"Editar Perfil"),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-card",2)(6,"form",3),e.NdJ("ngSubmit",function(){return c.actualizarUsuario()}),e.TgZ(7,"ion-item")(8,"ion-label"),e._uU(9,"Nombre:"),e.qZA(),e._UZ(10,"ion-input",4),e.qZA(),e.TgZ(11,"ion-item")(12,"ion-label"),e._uU(13,"Apellido:"),e.qZA(),e._UZ(14,"ion-input",5),e.qZA(),e.TgZ(15,"ion-item")(16,"ion-label"),e._uU(17,"Correo:"),e.qZA(),e._UZ(18,"ion-input",6),e.qZA(),e.TgZ(19,"ion-item")(20,"ion-label"),e._uU(21,"Fecha Nacimiento:"),e.qZA(),e._UZ(22,"ion-input",7),e.qZA(),e.TgZ(23,"ion-item")(24,"ion-label"),e._uU(25,"Rut:"),e.qZA(),e._UZ(26,"ion-input",8),e.qZA(),e.TgZ(27,"ion-item")(28,"ion-label"),e._uU(29,"Celular:"),e.qZA(),e._UZ(30,"ion-input",9),e.qZA(),e.TgZ(31,"ion-button",10),e._uU(32,"Perfil Usuario"),e.qZA(),e.TgZ(33,"ion-button",11),e.NdJ("click",function(){return c.actualizarUsuario()}),e._uU(34,"Guardar"),e.qZA()()()(),e.TgZ(35,"ion-footer")(36,"section",12)(37,"div",13)(38,"div",14)(39,"button",15),e._UZ(40,"ion-icon",16),e.qZA(),e.TgZ(41,"button",17),e._UZ(42,"ion-icon",18),e.qZA(),e.TgZ(43,"button",19),e._UZ(44,"ion-icon",20),e.qZA(),e.TgZ(45,"button",21),e._UZ(46,"ion-icon",22),e.qZA(),e.TgZ(47,"button",23),e._UZ(48,"ion-icon",24),e.qZA()()()()()),2&u&&(e.xp6(6),e.Q6J("formGroup",c.formularioActualizar),e.xp6(4),e.s9C("value",c.nombreU),e.xp6(4),e.s9C("value",c.apellidoU),e.xp6(4),e.s9C("value",c.correoU),e.xp6(4),e.s9C("value",c.fechanacimientoU),e.xp6(4),e.s9C("value",c.rutU),e.xp6(4),e.s9C("value",c.celularU),e.xp6(1),e.Q6J("routerLink",e.DdM(13,t)),e.xp6(8),e.Q6J("routerLink",e.DdM(14,r)),e.xp6(2),e.Q6J("routerLink",e.DdM(15,a)),e.xp6(2),e.Q6J("routerLink",e.DdM(16,l)),e.xp6(2),e.Q6J("routerLink",e.DdM(17,a)),e.xp6(2),e.Q6J("routerLink",e.DdM(18,R)))},dependencies:[n._Y,n.JJ,n.JL,o.YG,o.PM,o.W2,o.fr,o.Gu,o.gu,o.pK,o.Ie,o.Q$,o.wd,o.sr,o.as,o.j9,o.YI,m.rH,n.sg,n.u,E.RK],styles:["section[_ngcontent-%COMP%]{display:table}.example-label[_ngcontent-%COMP%]{display:table-cell;font-size:14px;margin-left:8px;min-width:120px}.example-button-row[_ngcontent-%COMP%]{display:table-cell;max-width:600px}.example-button-row[_ngcontent-%COMP%]   .mat-mdc-button-base[_ngcontent-%COMP%]{margin:8px 8px 8px 0}.example-flex-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.example-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:120px}"]}),N})()}];let T=(()=>{var s;class N{}return(s=N).\u0275fac=function(u){return new(u||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[m.Bz.forChild(b),m.Bz]}),N})(),L=(()=>{var s;class N{}return(s=N).\u0275fac=function(u){return new(u||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[v.ez,n.u5,o.Pc,T,n.UX,E.ot,A.t,h.Ps]}),N})()},4535:(O,f,i)=>{i.d(f,{N:()=>m});var v=i(5861),n=i(5619),h=i(5879),A=i(5320),E=i(9843),o=i(2058);let m=(()=>{var d;class e{constructor(t,r,a,l){this.sqlite=t,this.platform=r,this.alertController=a,this.router=l,this.tablaTipo="CREATE TABLE IF NOT EXISTS tipo (id_tipo INTEGER PRIMARY KEY AUTOINCREMENT, descripcion VARCHAR(20));",this.tablaRol="CREATE TABLE IF NOT EXISTS rol (id_rol INTEGER PRIMARY KEY AUTOINCREMENT, nombrerol VARCHAR(10));",this.tablaUsuarios="CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(30) NOT NULL, apellido VARCHAR(30) NOT NULL, correo VARCHAR(30) NOT NULL, fechanacimiento DATE NOT NULL, rut VARCHAR(13) NOT NULL, celular INTEGER NOT NULL, contrasena VARCHAR(30) NOT NULL, id_rol INTEGER NOT NULL, FOREIGN KEY(id_rol) REFERENCES rol(id_rol));",this.tablaVehiculo="CREATE TABLE IF NOT EXISTS vehiculo (id_vehiculo INTEGER PRIMARY KEY AUTOINCREMENT, marca VARCHAR(30) NOT NULL, modelo VARCHAR(30) NOT NULL, anio INTEGER NOT NULL, patente VARCHAR(6) NOT NULL, asientos INTEGER NOT NULL, id_usuario INTEGER NOT NULL, id_tipo INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_tipo) REFERENCES tipo(id_tipo));",this.tablaViajes="CREATE TABLE IF NOT EXISTS viaje (id_viaje INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL, cant_asientos INTEGER NOT NULL, total INTEGER NOT NULL, valor_asiento INTEGER NOT NULL, estado BOOLEAN NOT NULL, id_vehiculo INTEGER NOT NULL, FOREIGN KEY(id_vehiculo) REFERENCES vehiculo(id_vehiculo));",this.tablaViajesUser="CREATE TABLE IF NOT EXISTS viajeuser(id_viajeuser INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL, total INTEGER NOT NULL)",this.tablaDetalle="CREATE TABLE IF NOT EXISTS detalle (id_detalle INTEGER PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER NOT NULL, id_viaje INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_viaje) REFERENCES viaje(id_viaje));",this.registroRol="INSERT INTO rol VALUES (1, 'Usuario'), (2, 'Conductor');",this.listaUsuario=new n.X([]),this.isDBReady=new n.X(!1),this.crearBD()}dbState(){return this.isDBReady.asObservable()}fetchUsuario(){return this.listaUsuario.asObservable()}buscarCorreo(t,r){return this.database.executeSql("SELECT id, id_rol FROM usuario WHERE correo = ? AND contrasena = ?",[t,r]).then(a=>a.rows.length>0?a.rows.item(0):null).catch(a=>(this.presentAlert("Error al buscar usuario:"+a),!1))}buscarDatosUsuario(t){return this.database.executeSql("SELECT * FROM usuario WHERE id = ?",[t]).then(r=>{let a=[];if(r.rows.length>0)for(var l=0;l<r.rows.length;l++)a.push({id:r.rows.item(l).id,nombre:r.rows.item(l).nombre,apellido:r.rows.item(l).apellido,correo:r.rows.item(l).correo,fechanacimiento:r.rows.item(l).fechanacimiento,rut:r.rows.item(l).rut,celular:r.rows.item(l).celular,contrasena:r.rows.item(l).contrasena});return a})}buscarUsuario(){return this.database.executeSql("SELECT * FROM usuario",[]).then(t=>{let r=[];if(t.rows.length>0)for(var a=0;a<t.rows.length;a++)r.push({id:t.rows.item(a).id,nombre:t.rows.item(a).nombre,apellido:t.rows.item(a).apellido,fechanacimiento:t.rows.item(a).fechanacimiento,correo:t.rows.item(a).correo,rut:t.rows.item(a).rut,celular:t.rows.item(a).celular,contrasena:t.rows.item(a).contrasena});this.listaUsuario.next(r)})}insertarUsuario(t,r,a,l,R,U,b,T){return this.database.executeSql("INSERT INTO usuario(nombre, apellido, correo, fechanacimiento, rut, celular, contrasena, id_rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",[t,r,a,l,R,U,b,T]).then(L=>{L?this.buscarUsuario():this.presentAlert("Error al insertar usuario en la base de datos.")}).catch(L=>{console.error("Error al insertar el usuario.",L)})}tomarViaje(t,r,a,l,R,U,b,T){return this.database.executeSql("INSERT INTO viaje(f_viaje, hora_salida, salida, destino, cant_asientos, total, valor_asiento, estado")}actualizarPerfil(t,r,a,l,R,U,b){return this.database.executeSql("UPDATE usuario SET nombre = ?, apellido = ?, correo = ?, fechanacimiento = ?, rut = ?, celular = ? WHERE id = ?",[t,r,a,l,R,U,b]).then(T=>{T?this.buscarUsuario():this.presentAlert("Error al actualizar usuario.")}).catch(T=>{console.error("Error al actualizar usuario en base de datos:",T)})}crearBD(){this.platform.ready().then(()=>{this.sqlite.create({name:"bdviago.bd",location:"default"}).then(t=>{this.database=t,this.crearTablas()}).catch(t=>{this.presentAlert("Error en platform: "+t)})})}crearTablas(){var t=this;return(0,v.Z)(function*(){try{yield t.database.executeSql(t.tablaTipo,[]),yield t.database.executeSql(t.tablaRol,[]),yield t.database.executeSql(t.tablaUsuarios,[]),yield t.database.executeSql(t.tablaVehiculo,[]),yield t.database.executeSql(t.tablaViajes,[]),yield t.database.executeSql(t.tablaDetalle,[]),yield t.database.executeSql(t.tablaViajesUser,[]),yield t.database.executeSql(t.registroRol,[]),t.isDBReady.next(!0)}catch(r){t.presentAlert("Error en Crear Tablas: "+r)}})()}presentAlert(t){var r=this;return(0,v.Z)(function*(){yield(yield r.alertController.create({header:"Error",message:t,buttons:["Aceptar"]})).present()})()}}return(d=e).\u0275fac=function(t){return new(t||d)(h.LFG(A.e),h.LFG(E.t4),h.LFG(E.Br),h.LFG(o.F0))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),e})()},6385:(O,f,i)=>{i.d(f,{t:()=>A});var v=i(5879),n=i(3680);let A=(()=>{var E;class o{}return(E=o).\u0275fac=function(d){return new(d||E)},E.\u0275mod=v.oAB({type:E}),E.\u0275inj=v.cJS({imports:[n.BQ,n.BQ]}),o})()}}]);