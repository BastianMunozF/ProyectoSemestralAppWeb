"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7048],{5961:(W,U,b)=>{b.d(U,{GW:()=>L,dk:()=>N,oK:()=>u});var u=function(h){return h.Prompt="PROMPT",h.Camera="CAMERA",h.Photos="PHOTOS",h}(u||{}),L=function(h){return h.Rear="REAR",h.Front="FRONT",h}(L||{}),N=function(h){return h.Uri="uri",h.Base64="base64",h.DataUrl="dataUrl",h}(N||{})},8162:(W,U,b)=>{b.d(U,{V1:()=>N,dk:()=>L.dk,oK:()=>L.oK});var u=b(2726),L=b(5961);const N=(0,u.fo)("Camera",{web:()=>b.e(6468).then(b.bind(b,6468)).then(h=>new h.CameraWeb)})},2726:(W,U,b)=>{b.d(U,{Uw:()=>I,fo:()=>d,xz:()=>y});var u=b(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var R=function(a){return a.Unimplemented="UNIMPLEMENTED",a.Unavailable="UNAVAILABLE",a}(R||{});class y extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const r=a=>{var e,t,n,l,o;const E=a.CapacitorCustomPlatform||null,s=a.Capacitor||{},T=s.Plugins=s.Plugins||{},f=a.CapacitorPlatforms,G=(null===(e=null==f?void 0:f.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==E?E.name:(a=>{var e,t;return null!=a&&a.androidBridge?"android":null!==(t=null===(e=null==a?void 0:a.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(a)),le=(null===(t=null==f?void 0:f.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==G()),ue=(null===(n=null==f?void 0:f.currentPlatform)||void 0===n?void 0:n.isPluginAvailable)||(m=>{const v=Z.get(m);return!!(null!=v&&v.platforms.has(G())||Q(m))}),Q=(null===(l=null==f?void 0:f.currentPlatform)||void 0===l?void 0:l.getPluginHeader)||(m=>{var v;return null===(v=s.PluginHeaders)||void 0===v?void 0:v.find(F=>F.name===m)}),Z=new Map,me=(null===(o=null==f?void 0:f.currentPlatform)||void 0===o?void 0:o.registerPlugin)||((m,v={})=>{const F=Z.get(m);if(F)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),F.proxy;const S=G(),V=Q(m);let O;const be=function(){var g=(0,u.Z)(function*(){return!O&&S in v?O=O="function"==typeof v[S]?yield v[S]():v[S]:null!==E&&!O&&"web"in v&&(O=O="function"==typeof v.web?yield v.web():v.web),O});return function(){return g.apply(this,arguments)}}(),q=g=>{let p;const _=(...A)=>{const C=be().then(P=>{const j=((g,p)=>{var _,A;if(!V){if(g)return null===(A=g[p])||void 0===A?void 0:A.bind(g);throw new y(`"${m}" plugin is not implemented on ${S}`,R.Unimplemented)}{const C=null==V?void 0:V.methods.find(P=>p===P.name);if(C)return"promise"===C.rtype?P=>s.nativePromise(m,p.toString(),P):(P,j)=>s.nativeCallback(m,p.toString(),P,j);if(g)return null===(_=g[p])||void 0===_?void 0:_.bind(g)}})(P,g);if(j){const H=j(...A);return p=null==H?void 0:H.remove,H}throw new y(`"${m}.${g}()" is not implemented on ${S}`,R.Unimplemented)});return"addListener"===g&&(C.remove=(0,u.Z)(function*(){return p()})),C};return _.toString=()=>`${g.toString()}() { [capacitor code] }`,Object.defineProperty(_,"name",{value:g,writable:!1,configurable:!1}),_},ee=q("addListener"),te=q("removeListener"),Te=(g,p)=>{const _=ee({eventName:g},p),A=function(){var P=(0,u.Z)(function*(){const j=yield _;te({eventName:g,callbackId:j},p)});return function(){return P.apply(this,arguments)}}(),C=new Promise(P=>_.then(()=>P({remove:A})));return C.remove=(0,u.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield A()}),C},X=new Proxy({},{get(g,p){switch(p){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return V?Te:ee;case"removeListener":return te;default:return q(p)}}});return T[m]=X,Z.set(m,{name:m,proxy:X,platforms:new Set([...Object.keys(v),...V?[S]:[]])}),X});return s.convertFileSrc||(s.convertFileSrc=m=>m),s.getPlatform=G,s.handleError=m=>a.console.error(m),s.isNativePlatform=le,s.isPluginAvailable=ue,s.pluginMethodNoop=(m,v,F)=>Promise.reject(`${F} does not have an implementation of "${v}".`),s.registerPlugin=me,s.Exception=y,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},i=(a=>a.Capacitor=r(a))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),d=i.registerPlugin;class I{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var n=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o);const E=function(){var T=(0,u.Z)(function*(){return n.removeListener(e,t)});return function(){return T.apply(this,arguments)}}(),s=Promise.resolve({remove:E});return Object.defineProperty(s,"remove",{value:(T=(0,u.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield E()}),function(){return T.apply(this,arguments)})}),s;var T}removeAllListeners(){var e=this;return(0,u.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const n=this.listeners[e];n&&n.forEach(l=>l(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:n=>{this.notifyListeners(t,n)}}}unimplemented(e="not implemented"){return new i.Exception(e,R.Unimplemented)}unavailable(e="not available"){return new i.Exception(e,R.Unavailable)}removeListener(e,t){var n=this;return(0,u.Z)(function*(){const l=n.listeners[e];if(!l)return;const o=l.indexOf(t);n.listeners[e].splice(o,1),n.listeners[e].length||n.removeWindowListener(n.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const x=a=>encodeURIComponent(a).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),J=a=>a.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class re extends I{getCookies(){return(0,u.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(n=>{if(n.length<=0)return;let[l,o]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");l=J(l).trim(),o=J(o).trim(),t[l]=o}),t})()}setCookie(e){return(0,u.Z)(function*(){try{const t=x(e.key),n=x(e.value),l=`; expires=${(e.expires||"").replace("expires=","")}`,o=(e.path||"/").replace("path=",""),E=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${l}; path=${o}; ${E};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,u.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,u.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,u.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}d("CapacitorCookies",{web:()=>new re});const ae=function(){var a=(0,u.Z)(function*(e){return new Promise((t,n)=>{const l=new FileReader;l.onload=()=>{const o=l.result;t(o.indexOf(",")>=0?o.split(",")[1]:o)},l.onerror=o=>n(o),l.readAsDataURL(e)})});return function(t){return a.apply(this,arguments)}}();class se extends I{request(e){return(0,u.Z)(function*(){const t=((a,e={})=>{const t=Object.assign({method:a.method||"GET",headers:a.headers},e),l=((a={})=>{const e=Object.keys(a);return Object.keys(a).map(l=>l.toLocaleLowerCase()).reduce((l,o,E)=>(l[o]=a[e[E]],l),{})})(a.headers)["content-type"]||"";if("string"==typeof a.data)t.body=a.data;else if(l.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[E,s]of Object.entries(a.data||{}))o.set(E,s);t.body=o.toString()}else if(l.includes("multipart/form-data")){const o=new FormData;if(a.data instanceof FormData)a.data.forEach((s,T)=>{o.append(T,s)});else for(const s of Object.keys(a.data))o.append(s,a.data[s]);t.body=o;const E=new Headers(t.headers);E.delete("content-type"),t.headers=E}else(l.includes("application/json")||"object"==typeof a.data)&&(t.body=JSON.stringify(a.data));return t})(e,e.webFetchExtra),n=((a,e=!0)=>a?Object.entries(a).reduce((n,l)=>{const[o,E]=l;let s,T;return Array.isArray(E)?(T="",E.forEach(f=>{s=e?encodeURIComponent(f):f,T+=`${o}=${s}&`}),T.slice(0,-1)):(s=e?encodeURIComponent(E):E,T=`${o}=${s}`),`${n}&${T}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),l=n?`${e.url}?${n}`:e.url,o=yield fetch(l,t),E=o.headers.get("content-type")||"";let T,f,{responseType:s="text"}=o.ok?e:{};switch(E.includes("application/json")&&(s="json"),s){case"arraybuffer":case"blob":f=yield o.blob(),T=yield ae(f);break;case"json":T=yield o.json();break;default:T=yield o.text()}const B={};return o.headers.forEach((G,Y)=>{B[Y]=G}),{data:T,headers:B,status:o.status,url:o.url}})()}get(e){var t=this;return(0,u.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,u.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,u.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,u.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,u.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}d("CapacitorHttp",{web:()=>new se})},4535:(W,U,b)=>{b.d(U,{N:()=>k});var u=b(5861),L=b(5619),N=b(5879),h=b(5320),K=b(9843),z=b(2058);let k=(()=>{var R;class y{constructor(r,c,i,d){this.sqlite=r,this.platform=c,this.alertController=i,this.router=d,this.tablaTipo="CREATE TABLE IF NOT EXISTS tipo (id_tipo INTEGER PRIMARY KEY AUTOINCREMENT, descripcion VARCHAR(20));",this.tablaRol="CREATE TABLE IF NOT EXISTS rol (id_rol INTEGER PRIMARY KEY AUTOINCREMENT, nombrerol VARCHAR(10));",this.tablaUsuarios="CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(30) NOT NULL, apellido VARCHAR(30) NOT NULL, correo VARCHAR(30) NOT NULL, fechanacimiento DATE NOT NULL, rut VARCHAR(13) NOT NULL, celular INTEGER NOT NULL, contrasena VARCHAR(30) NOT NULL, id_rol INTEGER NOT NULL, FOREIGN KEY(id_rol) REFERENCES rol(id_rol));",this.tablaPagoUsuario="CREATE TABLE IF NOT EXISTS pago(id_pago INTEGER PRIMARY KEY AUTOINCREMENT, num_tarjeta NUMBER NOT NULL, fecha_caducidad DATE NOT NULL, cvv NUMBER NOT NULL, id INTEGER NOT NULL, FOREIGN KEY(id) REFERENCES usuario(id))",this.tablaVehiculo="CREATE TABLE IF NOT EXISTS vehiculo (id_vehiculo INTEGER PRIMARY KEY AUTOINCREMENT, marca VARCHAR(30) NOT NULL, modelo VARCHAR(30) NOT NULL, anio INTEGER NOT NULL, patente VARCHAR(6) NOT NULL, asientos INTEGER NOT NULL, id_usuario INTEGER NOT NULL, id_tipo INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_tipo) REFERENCES tipo(id_tipo));",this.tablaViajes="CREATE TABLE IF NOT EXISTS viaje (id_viaje INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL, cant_asientos INTEGER NOT NULL, total INTEGER NOT NULL, valor_asiento INTEGER NOT NULL, estado BOOLEAN NOT NULL, id_vehiculo INTEGER NOT NULL, FOREIGN KEY(id_vehiculo) REFERENCES vehiculo(id_vehiculo));",this.tablaViajesUser="CREATE TABLE IF NOT EXISTS viajeuser(id_viajeuser INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL, total INTEGER NOT NULL)",this.tablaDetalle="CREATE TABLE IF NOT EXISTS detalle (id_detalle INTEGER PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER NOT NULL, id_viaje INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_viaje) REFERENCES viaje(id_viaje));",this.registroRol="INSERT INTO rol VALUES (1, 'Usuario'), (2, 'Conductor');",this.registroTipoVehiculo="INSERT INTO tipo VALUES (1, 'Standard'), (2, 'Large'), (3, 'Deluxe')",this.listaUsuario=new L.X([]),this.listaViajeuser=new L.X([]),this.isDBReady=new L.X(!1),this.crearBD()}dbState(){return this.isDBReady.asObservable()}fetchUsuario(){return this.listaUsuario.asObservable()}buscarCorreo(r,c){return this.database.executeSql("SELECT id, id_rol FROM usuario WHERE correo = ? AND contrasena = ?",[r,c]).then(i=>i.rows.length>0?i.rows.item(0):null).catch(i=>(this.presentAlert("Error al buscar usuario:"+i),!1))}buscarDatosUsuario(r){return this.database.executeSql("SELECT * FROM usuario WHERE id = ?",[r]).then(c=>{let i=[];if(c.rows.length>0)for(var d=0;d<c.rows.length;d++)i.push({id:c.rows.item(d).id,nombre:c.rows.item(d).nombre,apellido:c.rows.item(d).apellido,correo:c.rows.item(d).correo,fechanacimiento:c.rows.item(d).fechanacimiento,rut:c.rows.item(d).rut,celular:c.rows.item(d).celular,contrasena:c.rows.item(d).contrasena});return i})}buscarViajeuser(){return this.database.executeSql("SELECT * FROM viajeuser",[]).then(r=>{let c=[];if(r.rows.length>0)for(var i=0;i<r.rows.length;i++)c.push({id_viajeuser:r.rows.item(i).id_viajeuser,f_viaje:r.rows.item(i).f_viaje,hora_salida:r.rows.item(i).hora_salida,salida:r.rows.item(i).salida,destino:r.rows.item(i).destino,total:r.rows.item(i).total});this.listaViajeuser.next(c)})}buscarUsuario(){return this.database.executeSql("SELECT * FROM usuario",[]).then(r=>{let c=[];if(r.rows.length>0)for(var i=0;i<r.rows.length;i++)c.push({id:r.rows.item(i).id,nombre:r.rows.item(i).nombre,apellido:r.rows.item(i).apellido,fechanacimiento:r.rows.item(i).fechanacimiento,correo:r.rows.item(i).correo,rut:r.rows.item(i).rut,celular:r.rows.item(i).celular,contrasena:r.rows.item(i).contrasena});this.listaUsuario.next(c)})}insertarUsuario(r,c,i,d,M,w,I,D){return this.database.executeSql("INSERT INTO usuario(nombre, apellido, correo, fechanacimiento, rut, celular, contrasena, id_rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",[r,c,i,d,M,w,I,D]).then(x=>{x?this.buscarUsuario():this.presentAlert("Error al insertar usuario en la base de datos.")}).catch(x=>{console.error("Error al insertar el usuario.",x)})}tomarViaje(r,c,i,d,M){return this.database.executeSql("INSERT INTO viajeuser VALUES(f_viaje, hora_salida, salida, destino, total) VALUES(?, ?, ?, ?, ?)",[r,c,i,d,M]).then(w=>{w?this.buscarViajeuser():this.presentAlert("Error al insertar viaje en la base de datos.")}).catch(w=>{console.error("Error al insertar el viaje.",w)})}actualizarPerfil(r,c,i,d,M,w,I){return this.database.executeSql("UPDATE usuario SET nombre = ?, apellido = ?, correo = ?, fechanacimiento = ?, rut = ?, celular = ? WHERE id = ?",[r,c,i,d,M,w,I]).then(D=>{D?this.buscarUsuario():this.presentAlert("Error al actualizar usuario.")}).catch(D=>{console.error("Error al actualizar usuario en base de datos:",D)})}recuperarUsuario(r,c,i){return this.database.executeSql("UPDATE usuario SET contrasena = ? WHERE correo = ? AND rut = ?",[r,c,i]).then(d=>{d?this.buscarUsuario():this.presentAlert("Error al actualizar contrase\xf1a.")}).catch(d=>{console.error("Error al modificar la contrase\xf1a de usuario en la base de datos:",d)})}crearBD(){this.platform.ready().then(()=>{this.sqlite.create({name:"bdviago.bd",location:"default"}).then(r=>{this.database=r,this.crearTablas()}).catch(r=>{this.presentAlert("Error en platform: "+r)})})}crearTablas(){var r=this;return(0,u.Z)(function*(){try{yield r.database.executeSql(r.tablaTipo,[]),yield r.database.executeSql(r.tablaRol,[]),yield r.database.executeSql(r.tablaUsuarios,[]),yield r.database.executeSql(r.tablaVehiculo,[]),yield r.database.executeSql(r.tablaViajes,[]),yield r.database.executeSql(r.tablaDetalle,[]),yield r.database.executeSql(r.tablaViajesUser,[]),yield r.database.executeSql(r.registroRol,[]),yield r.database.executeSql(r.registroTipoVehiculo,[]),r.isDBReady.next(!0)}catch(c){r.presentAlert("Error en Crear Tablas: "+c)}})()}presentAlert(r){var c=this;return(0,u.Z)(function*(){yield(yield c.alertController.create({header:"Error",message:r,buttons:["Aceptar"]})).present()})()}}return(R=y).\u0275fac=function(r){return new(r||R)(N.LFG(h.e),N.LFG(K.t4),N.LFG(K.Br),N.LFG(z.F0))},R.\u0275prov=N.Yz7({token:R,factory:R.\u0275fac,providedIn:"root"}),y})()}}]);