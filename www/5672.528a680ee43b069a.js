"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5672],{5672:(P,s,r)=>{r.r(s),r.d(s,{RutaconductorPageModule:()=>U});var Z=r(6814),f=r(6223),n=r(9843),u=r(2058),b=r(5861),o=r(5879);const v=function(){return["/menuprincipalconductor"]},x=function(){return["/sesionconductor"]},h=function(){return["/menuprincipal"]},p=function(){return["/comenzarviaje"]},y=function(){return["/tomarviaje"]},A=function(){return["/paginalogin-usuario"]},R=[{path:"",component:(()=>{var t;class c{constructor(a,d,g){this.router=a,this.activeRoute=d,this.alertController=g,this.usuarioR="",this.claveR="",this.variableStorage="",this.activeRoute.queryParams.subscribe(M=>{var m,i,e;null!==(m=this.router.getCurrentNavigation())&&void 0!==m&&m.extras.state&&(this.claveR=null===(i=this.router.getCurrentNavigation())||void 0===i||null===(i=i.extras)||void 0===i||null===(i=i.state)||void 0===i?void 0:i[""],this.usuarioR=null===(e=this.router.getCurrentNavigation())||void 0===e||null===(e=e.extras)||void 0===e||null===(e=e.state)||void 0===e?void 0:e[""])})}ngOnInit(){this.variableStorage=localStorage.getItem("token")}alertaViaje(){var a=this;return(0,b.Z)(function*(){yield(yield a.alertController.create({header:"Viaje Comenzado",message:"El viaje ha sido confirmado.",buttons:["Aceptar"]})).present()})()}}return(t=c).\u0275fac=function(a){return new(a||t)(o.Y36(u.F0),o.Y36(u.gz),o.Y36(n.Br))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-rutaconductor"]],decls:54,vars:16,consts:[["color","primary"],[3,"fullscreen"],["id","main-content",1,"ion-page"],[2,"align-items","center"],["src","https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d213460.12938323306!2d-70.85240348437333!3d-33.28443370910939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-33.200842099999996!2d-70.6788031!4m5!1s0x9662c7025c925e0f%3A0x7f2f6a657c08d14a!2sduoc%20uc%20plaza%20norte!3m2!1d-33.3634762!2d-70.6782006!5e0!3m2!1ses!2scl!4v1694372187678!5m2!1ses!2scl","width","350","height","350","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0","margin-left","12px","margin-top","12px","margin-bottom","7px"],["color","primary",2,"text-align","center"],["slot","start"],[2,"text-align","center"],[1,"ion-padding"],[1,"ion-text-center"],["type","text"],["type","date"],["type","number"],["color","primary",2,"margin-right","70px",3,"routerLink","click"],["color","primary",3,"routerLink"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",3,"routerLink"],["name","home","color","primary"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",3,"routerLink"],["name","walk","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","disabled","","aria-label","Example icon button with a open in new tab icon",3,"routerLink"],["name","exit","color","primary"]],template:function(a,d){1&a&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),o._uU(3,"Menu Conductor"),o.qZA()()(),o.TgZ(4,"ion-content",1)(5,"div",2)(6,"ion-card",3),o._UZ(7,"iframe",4),o.qZA(),o.TgZ(8,"ion-header")(9,"ion-toolbar",5)(10,"ion-buttons",6),o._UZ(11,"ion-menu-button"),o.qZA(),o.TgZ(12,"ion-title",7),o._uU(13,"Ruta Conductor"),o.qZA()()(),o.TgZ(14,"ion-content",8)(15,"ion-card",9)(16,"ion-card-title")(17,"ion-item",0)(18,"ion-label"),o._uU(19,"Informaci\xf3n"),o.qZA()()(),o.TgZ(20,"ion-item")(21,"ion-label"),o._uU(22),o.qZA(),o._UZ(23,"ion-input",10),o.qZA(),o.TgZ(24,"ion-item")(25,"ion-label"),o._uU(26,"Fecha: "),o.qZA(),o._UZ(27,"ion-input",11),o.qZA(),o.TgZ(28,"ion-item")(29,"ion-label"),o._uU(30,"Tarifa: "),o.qZA(),o._UZ(31,"ion-input",12),o.qZA(),o.TgZ(32,"ion-item")(33,"ion-label"),o._uU(34,"Destino: "),o.qZA(),o._UZ(35,"ion-input",10),o.qZA(),o.TgZ(36,"ion-button",13),o.NdJ("click",function(){return d.alertaViaje()}),o._uU(37,"Aceptar"),o.qZA(),o.TgZ(38,"ion-button",14),o._uU(39,"Rechazar"),o.qZA()()()()(),o.TgZ(40,"ion-footer")(41,"section",15)(42,"div",16)(43,"div",17)(44,"button",18),o._UZ(45,"ion-icon",19),o.qZA(),o.TgZ(46,"button",20),o._UZ(47,"ion-icon",21),o.qZA(),o.TgZ(48,"button",22),o._UZ(49,"ion-icon",23),o.qZA(),o.TgZ(50,"button",24),o._UZ(51,"ion-icon",25),o.qZA(),o.TgZ(52,"button",26),o._UZ(53,"ion-icon",27),o.qZA()()()()()),2&a&&(o.xp6(4),o.Q6J("fullscreen",!0),o.xp6(18),o.hij("Cantidad Pasajeros: ",d.variableStorage,""),o.xp6(14),o.Q6J("routerLink",o.DdM(9,v)),o.xp6(2),o.Q6J("routerLink",o.DdM(10,x)),o.xp6(6),o.Q6J("routerLink",o.DdM(11,h)),o.xp6(2),o.Q6J("routerLink",o.DdM(12,p)),o.xp6(2),o.Q6J("routerLink",o.DdM(13,y)),o.xp6(2),o.Q6J("routerLink",o.DdM(14,p)),o.xp6(2),o.Q6J("routerLink",o.DdM(15,A)))},dependencies:[n.YG,n.Sm,n.PM,n.Dq,n.W2,n.fr,n.Gu,n.gu,n.pK,n.Ie,n.Q$,n.fG,n.wd,n.sr,n.as,n.j9,n.YI,u.rH]}),c})()}];let T=(()=>{var t;class c{}return(t=c).\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.Bz.forChild(R),u.Bz]}),c})(),U=(()=>{var t;class c{}return(t=c).\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[Z.ez,f.u5,n.Pc,T]}),c})()}}]);