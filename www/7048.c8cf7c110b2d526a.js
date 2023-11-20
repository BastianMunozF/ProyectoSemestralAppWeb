"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7048],{5961:(N,R,o)=>{o.d(R,{GW:()=>l,dk:()=>n,oK:()=>d});var d=function(i){return i.Prompt="PROMPT",i.Camera="CAMERA",i.Photos="PHOTOS",i}(d||{}),l=function(i){return i.Rear="REAR",i.Front="FRONT",i}(l||{}),n=function(i){return i.Uri="uri",i.Base64="base64",i.DataUrl="dataUrl",i}(n||{})},8162:(N,R,o)=>{o.d(R,{V1:()=>n,dk:()=>l.dk,oK:()=>l.oK});var d=o(2726),l=o(5961);const n=(0,d.fo)("Camera",{web:()=>o.e(6468).then(o.bind(o,6468)).then(i=>new i.CameraWeb)})},4535:(N,R,o)=>{o.d(R,{N:()=>L});var d=o(5861),l=o(5619),n=o(5879),i=o(5320),m=o(9843),A=o(2058);let L=(()=>{var h;class v{constructor(e,a,t,r){this.sqlite=e,this.platform=a,this.alertController=t,this.router=r,this.tablaTipo="CREATE TABLE IF NOT EXISTS tipo (id_tipo INTEGER PRIMARY KEY AUTOINCREMENT, descripcion VARCHAR(20));",this.tablaRol="CREATE TABLE IF NOT EXISTS rol (id_rol INTEGER PRIMARY KEY AUTOINCREMENT, nombrerol VARCHAR(10));",this.tablaUsuarios="CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(30) NOT NULL, apellido VARCHAR(30) NOT NULL, correo VARCHAR(30) NOT NULL, fechanacimiento DATE NOT NULL, rut VARCHAR(13) NOT NULL, celular INTEGER NOT NULL, contrasena VARCHAR(30) NOT NULL, fotoperfil VARCHAR(100) NOT NULL, id_rol INTEGER NOT NULL, FOREIGN KEY(id_rol) REFERENCES rol(id_rol));",this.tablaVehiculo="CREATE TABLE IF NOT EXISTS vehiculo (id_vehiculo INTEGER PRIMARY KEY AUTOINCREMENT, marca VARCHAR(30) NOT NULL, modelo VARCHAR(30) NOT NULL, anio INTEGER NOT NULL, patente VARCHAR(6) NOT NULL, asientos INTEGER NOT NULL, id_usuario INTEGER NOT NULL, id_tipo INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_tipo) REFERENCES tipo(id_tipo));",this.tablaViajes="CREATE TABLE IF NOT EXISTS viaje (id_viaje INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL, cant_asientos INTEGER NOT NULL, valor_asiento INTEGER NOT NULL, estado VARCHAR(20) NOT NULL, id_usuario INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id));",this.tablaViajesUser="CREATE TABLE IF NOT EXISTS viajeuser(id_viajeuser INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL)",this.tablaDetalle="CREATE TABLE IF NOT EXISTS detalle (id_detalle INTEGER PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER NOT NULL, id_viaje INTEGER NOT NULL, id_vehiculo INTEGER NOT NULL, id_conductor INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_viaje) REFERENCES viaje(id_viaje), FOREIGN KEY(id_vehiculo) REFERENCES vehiculo(id_vehiculo), FOREIGN KEY(id_conductor) REFERENCES usuario(id));",this.registroRol="INSERT INTO rol VALUES (1, 'Usuario'), (2, 'Conductor');",this.registroTipoVehiculo="INSERT INTO tipo VALUES (1, 'Standard'), (2, 'Large'), (3, 'Deluxe')",this.listaUsuario=new l.X([]),this.listaViaje=new l.X([]),this.listaVehiculo=new l.X([]),this.isDBReady=new l.X(!1),this.crearBD()}dbState(){return this.isDBReady.asObservable()}fetchUsuario(){return this.listaUsuario.asObservable()}fetchVehiculo(){return this.listaVehiculo.asObservable()}fetchViaje(){return this.listaViaje.asObservable()}buscarCorreo(e,a){return this.database.executeSql("SELECT id, id_rol FROM usuario WHERE correo = ? AND contrasena = ?",[e,a]).then(t=>t.rows.length>0?t.rows.item(0):null).catch(t=>(this.presentAlert("Error al buscar usuario:"+t),!1))}buscarDatosUsuario(e){return this.database?this.database.executeSql("SELECT * FROM usuario WHERE id = ?",[e]).then(a=>{let t=[];if(a.rows.length>0)for(var r=0;r<a.rows.length;r++)t.push({id:a.rows.item(r).id,nombre:a.rows.item(r).nombre,apellido:a.rows.item(r).apellido,correo:a.rows.item(r).correo,fechanacimiento:a.rows.item(r).fechanacimiento,rut:a.rows.item(r).rut,celular:a.rows.item(r).celular,contrasena:a.rows.item(r).contrasena,fotoperfil:a.rows.item(r).fotoperfil});return t}):(console.error("La base de datos no est\xe1 inicializada."),Promise.resolve([]))}buscarVehiculoUsuario(e){return this.database?this.database.executeSql("SELECT * FROM vehiculo WHERE id_usuario = ?",[e]).then(a=>{let t=[];if(a.rows.length>0)for(var r=0;r<a.rows.length;r++)t.push({id_vehiculo:a.rows.item(r).id_vehiculo,marca:a.rows.item(r).marca,modelo:a.rows.item(r).modelo,anio:a.rows.item(r).anio,patente:a.rows.item(r).patente,asientos:a.rows.item(r).asientos,id_usuario:a.rows.item(r).id_usuario,id_tipo:a.rows.item(r).id_tipo});return t}):(console.error("Error: this.database no est\xe1 definido."),Promise.resolve([]))}buscarViajeUser(e){return this.database?this.database.executeSql("SELECT * FROM viaje WHERE id_usuario = ?",[e]).then(a=>{let t=[];if(a.rows.length>0)for(var r=0;r<a.rows.length;r++)t.push({id_viaje:a.rows.item(r).id_viaje,f_viaje:a.rows.item(r).f_viaje,hora_salida:a.rows.item(r).hora_salida,salida:a.rows.item(r).salida,destino:a.rows.item(r).destino,cant_asientos:a.rows.item(r).cant_asientos,valor_asiento:a.rows.item(r).valor_asiento,estado:a.rows.item(r).estado,id_usuario:a.rows.item(r).id_usuario});return t}):(console.error("Error: this.database no est\xe1 definido o no se ha inicializado correctamente."),Promise.resolve([]))}buscarDetalleUsuario(e){return this.database&&this.database?this.database.executeSql("SELECT * FROM detalle WHERE id_conductor = ?",[e]).then(a=>{let t=[];if(a.rows.length>0)for(var r=0;r<a.rows.length;r++)t.push({id_detalle:a.rows.item(r).id_detalle,id_usuario:a.rows.item(r).id_usuario,id_viaje:a.rows.item(r).id_viaje,id_vehiculo:a.rows.item(r).id_vehiculo,id_conductor:a.rows.item(r).id_conductor});return t}):(console.error("Error: this.database no est\xe1 definido."),Promise.resolve([]))}buscarViaje(){return this.database?this.database.executeSql("SELECT * FROM viaje",[]).then(e=>{let a=[];if(e.rows.length>0)for(var t=0;t<e.rows.length;t++)a.push({id_viaje:e.rows.item(t).id_viaje,f_viaje:e.rows.item(t).f_viaje,hora_salida:e.rows.item(t).hora_salida,salida:e.rows.item(t).salida,destino:e.rows.item(t).destino,cant_asientos:e.rows.item(t).cant_asientos,valor_asiento:e.rows.item(t).valor_asiento,estado:e.rows.item(t).estado,id_usuario:e.rows.item(t).id_usuario});return a}):(console.error("La base de datos no est\xe1 inicializada."),Promise.resolve([]))}buscarDetalle(){return this.database.executeSql("SELECT * FROM detalle",[]).then(e=>{let a=[];if(e.rows.length>0)for(var t=0;t<e.rows.length;t++)a.push({id_detalle:e.rows.item(t).id_detalle,id_usuario:e.rows.item(t).id_usuario,id_viaje:e.rows.item(t).id_viaje,id_vehiculo:e.rows.item(t).id_vehiculo,id_conductor:e.rows.item(t).id_conductor});return a})}buscarUsuario(){return this.database.executeSql("SELECT * FROM usuario",[]).then(e=>{let a=[];if(e.rows.length>0)for(var t=0;t<e.rows.length;t++)a.push({id:e.rows.item(t).id,nombre:e.rows.item(t).nombre,apellido:e.rows.item(t).apellido,fechanacimiento:e.rows.item(t).fechanacimiento,correo:e.rows.item(t).correo,rut:e.rows.item(t).rut,celular:e.rows.item(t).celular,contrasena:e.rows.item(t).contrasena,fotoperfil:e.rows.item(t).fotoperfil});this.listaUsuario.next(a)})}buscarVehiculo(){return this.database.executeSql("SELECT * FROM vehiculo",[]).then(e=>{let a=[];if(e.rows.length>0)for(var t=0;t<e.rows.length;t++)a.push({id_vehiculo:e.rows.item(t).id_vehiculo,marca:e.rows.item(t).marca,modelo:e.rows.item(t).modelo,anio:e.rows.item(t).anio,patente:e.rows.item(t).patente,asientos:e.rows.item(t).asientos,id_usuario:e.rows.item(t).id_usuario,id_tipo:e.rows.item(t).id_tipo});this.listaVehiculo.next(a)})}insertarUsuario(e,a,t,r,u,E,c,s,_){return this.database.executeSql("INSERT INTO usuario(nombre, apellido, correo, fechanacimiento, rut, celular, contrasena, fotoperfil, id_rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",[e,a,t,r,u,E,c,s,_]).then(T=>{T?this.buscarUsuario():this.presentAlert("Error al insertar usuario en la base de datos.")}).catch(T=>{console.error("Error al insertar el usuario.",T)})}insertarVehiculo(e,a,t,r,u,E,c){return this.database.executeSql("INSERT INTO vehiculo(marca, modelo, anio, patente, asientos, id_usuario, id_tipo) VALUES (?, ?, ?, ?, ?, ?, ?)",[e,a,t,r,u,E,c]).then(s=>{s?this.buscarVehiculo():this.presentAlert("Error al insertar veh\xedculo en la base de datos.")}).catch(s=>{console.error("Error al insertar el veh\xedculo.",s)})}insertarRutaC(e,a,t,r,u,E,c,s){return this.database.executeSql("INSERT INTO viaje(f_viaje, hora_salida, salida, destino, cant_asientos, valor_asiento, estado, id_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",[e,a,t,r,u,E,c,s]).then(_=>{_?this.buscarViaje():this.presentAlert("Error al insertar ruta.")}).catch(_=>{console.error("Error al insertar el veh\xedculo:",_)})}insertarViajeAceptado(e,a,t,r){return this.database.executeSql("INSERT INTO detalle(id_usuario, id_viaje, id_vehiculo, id_conductor) VALUES (?, ?, ?, ?)",[e,a,t,r]).then(u=>{u?this.buscarDetalle():this.presentAlert("Error al insertar detalle")})}eliminarViajeUser(e){return this.database.executeSql("DELETE FROM viaje WHERE id_viaje = ?",[e]).then(a=>!!a||(this.presentAlert("Error al eliminar el viaje del usuario."),null)).catch(a=>{console.error("Error al eliminar viaje:",a)})}verificarViaje(e){return this.database.executeSql("SELECT * FROM viaje WHERE id_viaje = ?",[e]).then(a=>!!a||(this.presentAlert("Error al verificar el viaje."),null))}actualizarPerfil(e,a,t,r,u,E,c){return this.database.executeSql("UPDATE usuario SET nombre = ?, apellido = ?, correo = ?, fechanacimiento = ?, rut = ?, celular = ?, contrasena = ? WHERE id = ?",[e,a,t,r,u,E,c]).then(s=>!!s||(this.presentAlert("Error al actualizar usuario."),null)).catch(s=>{console.error("Error al actualizar usuario en base de datos:",s)})}actualizarContrasena(e,a){return this.database.executeSql("UPDATE usuario SET contrasena = ? WHERE id = ?",[e,a]).then(t=>!!t||(this.presentAlert("Error al actualizar contrase\xf1a."),null))}actualizarEstadoViaje(e,a){return this.database.executeSql("UPDATE viaje SET estado = ? WHERE id_usuario = ?",[e,a]).then(t=>!!t||(this.presentAlert("Error al actualizar estado de viaje"),null))}verificarContrasena(e){return this.database.executeSql("SELECT contrasena FROM usuario WHERE id = ?",[e]).then(a=>!!a||null)}recuperarBuscar(e,a){return this.database.executeSql("SELECT * FROM usuario WHERE correo = ? AND rut = ?",[e,a]).then(t=>t.rows.length>0?t.rows.item(0):null)}recuperarUsuario(e,a,t){return this.database.executeSql("UPDATE usuario SET contrasena = ? WHERE correo = ? AND rut = ?",[e,a,t]).then(r=>r?(this.buscarUsuario(),!0):(this.presentAlert("Error al actualizar contrase\xf1a."),null)).catch(r=>{console.error("Error al modificar la contrase\xf1a de usuario en la base de datos:",r)})}crearBD(){this.platform.ready().then(()=>{this.sqlite.create({name:"bdviago.bd",location:"default"}).then(e=>{this.database=e,this.crearTablas()}).catch(e=>{this.presentAlert("Error en platform: "+e)})})}crearTablas(){var e=this;return(0,d.Z)(function*(){try{yield e.database.executeSql(e.tablaTipo,[]),yield e.database.executeSql(e.tablaRol,[]),yield e.database.executeSql(e.tablaUsuarios,[]),yield e.database.executeSql(e.tablaVehiculo,[]),yield e.database.executeSql(e.tablaViajes,[]),yield e.database.executeSql(e.tablaDetalle,[]),yield e.database.executeSql(e.registroRol,[]),yield e.database.executeSql(e.registroTipoVehiculo,[]),e.isDBReady.next(!0)}catch(a){e.presentAlert("Error en Crear Tablas: "+a)}})()}presentAlert(e){var a=this;return(0,d.Z)(function*(){yield(yield a.alertController.create({header:"Error",message:e,buttons:["Aceptar"]})).present()})()}}return(h=v).\u0275fac=function(e){return new(e||h)(n.LFG(i.e),n.LFG(m.t4),n.LFG(m.Br),n.LFG(A.F0))},h.\u0275prov=n.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),v})()}}]);