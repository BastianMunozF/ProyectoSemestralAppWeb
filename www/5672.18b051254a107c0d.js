"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5672],{5672:(M,m,c)=>{c.r(m),c.d(m,{RutaconductorPageModule:()=>w});var f=c(6814),b=c(6223),t=c(9843),u=c(2058),x=c(5861),n=c(5879);const Z=function(){return["/menuprincipalconductor"]},v=function(){return["/sesionconductor"]},y=function(){return["/menuprincipal"]},p=function(){return["/comenzarviaje"]},h=function(){return["/tomarviaje"]},A=function(){return["/paginalogin-usuario"]},P=[{path:"",component:(()=>{var o;class r{constructor(a,s,g){this.router=a,this.activeRoute=s,this.alertController=g,this.usuarioR="",this.claveR="",this.variableStorage="",this.activeRoute.queryParams.subscribe(U=>{var d,e,i;null!==(d=this.router.getCurrentNavigation())&&void 0!==d&&d.extras.state&&(this.claveR=null===(e=this.router.getCurrentNavigation())||void 0===e||null===(e=e.extras)||void 0===e||null===(e=e.state)||void 0===e?void 0:e[""],this.usuarioR=null===(i=this.router.getCurrentNavigation())||void 0===i||null===(i=i.extras)||void 0===i||null===(i=i.state)||void 0===i?void 0:i[""])})}ngOnInit(){this.variableStorage=localStorage.getItem("token")}alertaViaje(){var a=this;return(0,x.Z)(function*(){yield(yield a.alertController.create({header:"Viaje Comenzado",message:"El viaje ha sido confirmado.",buttons:["Aceptar"]})).present()})()}}return(o=r).\u0275fac=function(a){return new(a||o)(n.Y36(u.F0),n.Y36(u.gz),n.Y36(t.Br))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-rutaconductor"]],decls:54,vars:16,consts:[["color","primary"],[3,"fullscreen"],["id","main-content",1,"ion-page"],[2,"align-items","center"],["src","https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d213460.12938323306!2d-70.85240348437333!3d-33.28443370910939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-33.200842099999996!2d-70.6788031!4m5!1s0x9662c7025c925e0f%3A0x7f2f6a657c08d14a!2sduoc%20uc%20plaza%20norte!3m2!1d-33.3634762!2d-70.6782006!5e0!3m2!1ses!2scl!4v1694372187678!5m2!1ses!2scl","width","350","height","350","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0","margin-left","12px","margin-top","12px","margin-bottom","7px"],["color","primary",2,"text-align","center"],["slot","start"],[2,"text-align","center"],[1,"ion-padding"],[1,"ion-text-center"],["type","text"],["type","date"],["type","number"],["color","primary",2,"margin-right","70px",3,"routerLink","click"],["color","primary",3,"routerLink"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",3,"routerLink"],["name","home","color","primary"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",3,"routerLink"],["name","walk","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","disabled","","aria-label","Example icon button with a open in new tab icon",3,"routerLink"],["name","exit","color","primary"]],template:function(a,s){1&a&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),n._uU(3,"Menu Conductor"),n.qZA()()(),n.TgZ(4,"ion-content",1)(5,"div",2)(6,"ion-card",3),n._UZ(7,"iframe",4),n.qZA(),n.TgZ(8,"ion-header")(9,"ion-toolbar",5)(10,"ion-buttons",6),n._UZ(11,"ion-menu-button"),n.qZA(),n.TgZ(12,"ion-title",7),n._uU(13,"Ruta Conductor"),n.qZA()()(),n.TgZ(14,"ion-content",8)(15,"ion-card",9)(16,"ion-card-title")(17,"ion-item",0)(18,"ion-label"),n._uU(19,"Informaci\xf3n"),n.qZA()()(),n.TgZ(20,"ion-item")(21,"ion-label"),n._uU(22),n.qZA(),n._UZ(23,"ion-input",10),n.qZA(),n.TgZ(24,"ion-item")(25,"ion-label"),n._uU(26,"Fecha: "),n.qZA(),n._UZ(27,"ion-input",11),n.qZA(),n.TgZ(28,"ion-item")(29,"ion-label"),n._uU(30,"Tarifa: "),n.qZA(),n._UZ(31,"ion-input",12),n.qZA(),n.TgZ(32,"ion-item")(33,"ion-label"),n._uU(34,"Destino: "),n.qZA(),n._UZ(35,"ion-input",10),n.qZA(),n.TgZ(36,"ion-button",13),n.NdJ("click",function(){return s.alertaViaje()}),n._uU(37,"Aceptar"),n.qZA(),n.TgZ(38,"ion-button",14),n._uU(39,"Rechazar"),n.qZA()()()()(),n.TgZ(40,"ion-footer")(41,"section",15)(42,"div",16)(43,"div",17)(44,"button",18),n._UZ(45,"ion-icon",19),n.qZA(),n.TgZ(46,"button",20),n._UZ(47,"ion-icon",21),n.qZA(),n.TgZ(48,"button",22),n._UZ(49,"ion-icon",23),n.qZA(),n.TgZ(50,"button",24),n._UZ(51,"ion-icon",25),n.qZA(),n.TgZ(52,"button",26),n._UZ(53,"ion-icon",27),n.qZA()()()()()),2&a&&(n.xp6(4),n.Q6J("fullscreen",!0),n.xp6(18),n.hij("Cantidad Pasajeros: ",s.variableStorage,""),n.xp6(14),n.Q6J("routerLink",n.DdM(9,Z)),n.xp6(2),n.Q6J("routerLink",n.DdM(10,v)),n.xp6(6),n.Q6J("routerLink",n.DdM(11,y)),n.xp6(2),n.Q6J("routerLink",n.DdM(12,p)),n.xp6(2),n.Q6J("routerLink",n.DdM(13,h)),n.xp6(2),n.Q6J("routerLink",n.DdM(14,p)),n.xp6(2),n.Q6J("routerLink",n.DdM(15,A)))},dependencies:[t.YG,t.Sm,t.PM,t.Dq,t.W2,t.fr,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.fG,t.wd,t.sr,t.as,t.j9,t.YI,u.rH],styles:["section[_ngcontent-%COMP%]{display:table}.example-label[_ngcontent-%COMP%]{display:table-cell;font-size:14px;margin-left:8px;min-width:120px}.example-button-row[_ngcontent-%COMP%]{display:table-cell;max-width:600px}.example-button-row[_ngcontent-%COMP%]   .mat-mdc-button-base[_ngcontent-%COMP%]{margin:8px 8px 8px 0}.example-flex-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.example-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:120px}"]}),r})()}];let R=(()=>{var o;class r{}return(o=r).\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.Bz.forChild(P),u.Bz]}),r})(),w=(()=>{var o;class r{}return(o=r).\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[f.ez,b.u5,t.Pc,R]}),r})()}}]);