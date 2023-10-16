"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5672],{5672:(b,m,c)=>{c.r(m),c.d(m,{RutaconductorPageModule:()=>h});var f=c(6814),v=c(95),o=c(9843),l=c(4017),A=c(5861),n=c(9468);const p=function(){return["/menuprincipalconductor"]},U=function(){return["/mapaclientes"]},y=function(){return["/mapaconductores"]},R=function(){return["/perfilconductor"]},g=function(){return["/sesionconductor"]},x=[{path:"",component:(()=>{var t;class r{constructor(a,d,Z){this.router=a,this.activeRoute=d,this.alertController=Z,this.usuarioR="",this.claveR="",this.variableStorage="",this.activeRoute.queryParams.subscribe(M=>{var s,e,i;null!==(s=this.router.getCurrentNavigation())&&void 0!==s&&s.extras.state&&(this.claveR=null===(e=this.router.getCurrentNavigation())||void 0===e||null===(e=e.extras)||void 0===e||null===(e=e.state)||void 0===e?void 0:e[""],this.usuarioR=null===(i=this.router.getCurrentNavigation())||void 0===i||null===(i=i.extras)||void 0===i||null===(i=i.state)||void 0===i?void 0:i[""])})}ngOnInit(){this.variableStorage=localStorage.getItem("token")}alertaViaje(){var a=this;return(0,A.Z)(function*(){yield(yield a.alertController.create({header:"Viaje Comenzado",message:"El viaje ha sido confirmado.",buttons:["Aceptar"]})).present()})()}}return(t=r).\u0275fac=function(a){return new(a||t)(n.Y36(l.F0),n.Y36(l.gz),n.Y36(o.Br))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-rutaconductor"]],decls:57,vars:16,consts:[["contentId","main-content"],["color","primary"],[1,"ion-padding"],[3,"routerLink"],["name","home","color","primary"],["name","walk","color","primary"],["name","car","color","primary"],["name","person","color","primary"],["name","exit","color","primary"],[3,"fullscreen"],["id","main-content",1,"ion-page"],[2,"align-items","center"],["src","https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d213460.12938323306!2d-70.85240348437333!3d-33.28443370910939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-33.200842099999996!2d-70.6788031!4m5!1s0x9662c7025c925e0f%3A0x7f2f6a657c08d14a!2sduoc%20uc%20plaza%20norte!3m2!1d-33.3634762!2d-70.6782006!5e0!3m2!1ses!2scl!4v1694372187678!5m2!1ses!2scl","width","350","height","350","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0","margin-left","12px","margin-top","12px","margin-bottom","7px"],["color","primary",2,"text-align","center"],["slot","start"],[2,"text-align","center"],[1,"ion-text-center"],["type","text"],["type","date"],["type","number"],["color","primary",2,"margin-right","70px",3,"routerLink","click"],["color","primary",3,"routerLink"]],template:function(a,d){1&a&&(n.TgZ(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar",1)(3,"ion-title"),n._uU(4,"Menu Conductor"),n.qZA()()(),n.TgZ(5,"ion-content",2)(6,"ion-item",3),n._UZ(7,"ion-icon",4),n._uU(8,"Inicio"),n.qZA(),n.TgZ(9,"ion-item",3),n._UZ(10,"ion-icon",5),n._uU(11,"Clientes cercanos"),n.qZA(),n.TgZ(12,"ion-item",3),n._UZ(13,"ion-icon",6),n._uU(14,"Conductores cercanos"),n.qZA(),n.TgZ(15,"ion-item",3),n._UZ(16,"ion-icon",7),n._uU(17,"Perfil"),n.qZA(),n.TgZ(18,"ion-item",3),n._UZ(19,"ion-icon",8),n._uU(20,"Cerrar sesion"),n.qZA()()(),n.TgZ(21,"ion-content",9)(22,"div",10)(23,"ion-card",11),n._UZ(24,"iframe",12),n.qZA(),n.TgZ(25,"ion-header")(26,"ion-toolbar",13)(27,"ion-buttons",14),n._UZ(28,"ion-menu-button"),n.qZA(),n.TgZ(29,"ion-title",15),n._uU(30,"Ruta Conductor"),n.qZA()()(),n.TgZ(31,"ion-content",2)(32,"ion-card",16)(33,"ion-card-title")(34,"ion-item",1)(35,"ion-label"),n._uU(36,"Informaci\xf3n"),n.qZA()()(),n.TgZ(37,"ion-item")(38,"ion-label"),n._uU(39),n.qZA(),n._UZ(40,"ion-input",17),n.qZA(),n.TgZ(41,"ion-item")(42,"ion-label"),n._uU(43,"Fecha: "),n.qZA(),n._UZ(44,"ion-input",18),n.qZA(),n.TgZ(45,"ion-item")(46,"ion-label"),n._uU(47,"Tarifa: "),n.qZA(),n._UZ(48,"ion-input",19),n.qZA(),n.TgZ(49,"ion-item")(50,"ion-label"),n._uU(51,"Destino: "),n.qZA(),n._UZ(52,"ion-input",17),n.qZA(),n.TgZ(53,"ion-button",20),n.NdJ("click",function(){return d.alertaViaje()}),n._uU(54,"Aceptar"),n.qZA(),n.TgZ(55,"ion-button",21),n._uU(56,"Rechazar"),n.qZA()()()()()),2&a&&(n.xp6(6),n.Q6J("routerLink",n.DdM(9,p)),n.xp6(3),n.Q6J("routerLink",n.DdM(10,U)),n.xp6(3),n.Q6J("routerLink",n.DdM(11,y)),n.xp6(3),n.Q6J("routerLink",n.DdM(12,R)),n.xp6(3),n.Q6J("routerLink",n.DdM(13,g)),n.xp6(3),n.Q6J("fullscreen",!0),n.xp6(18),n.hij("Cantidad Pasajeros: ",d.variableStorage,""),n.xp6(14),n.Q6J("routerLink",n.DdM(14,p)),n.xp6(2),n.Q6J("routerLink",n.DdM(15,g)))},dependencies:[o.YG,o.Sm,o.PM,o.Dq,o.W2,o.Gu,o.gu,o.pK,o.Ie,o.Q$,o.z0,o.fG,o.wd,o.sr,o.as,o.j9,o.YI,l.rH]}),r})()}];let T=(()=>{var t;class r{}return(t=r).\u0275fac=function(a){return new(a||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.Bz.forChild(x),l.Bz]}),r})(),h=(()=>{var t;class r{}return(t=r).\u0275fac=function(a){return new(a||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[f.ez,v.u5,o.Pc,T]}),r})()}}]);