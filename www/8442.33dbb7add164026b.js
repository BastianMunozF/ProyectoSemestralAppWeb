"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8442],{8442:(x,p,i)=>{i.r(p),i.d(p,{TomarviajePageModule:()=>j});var g=i(6814),a=i(6223),t=i(9843),d=i(2058),v=i(5861),o=i(5879),A=i(4535),Z=i(2296);const m=function(){return["/menuprincipal"]},T=function(){return["/comenzarviaje"]},q=function(){return["/perfilusuario"]},U=function(){return["/tomarviaje"]},f=function(){return["/paginalogin-usuario"]},h=[{path:"",component:(()=>{var e;class r{constructor(n,l,c,s,C){this.router=n,this.activeRoute=l,this.alertController=c,this.formBuilder=s,this.database=C,this.formularioRuta=this.formBuilder.group({f_viaje:new a.NI("",[a.kI.required]),hora_salida:new a.NI("",[a.kI.required]),salida:new a.NI("",[a.kI.required]),destino:new a.NI("",[a.kI.required]),cant_asientos:new a.NI("",[a.kI.required]),valor_asiento:new a.NI("",[a.kI.required])})}ngOnInit(){}crearRuta(){if(this.formularioRuta.valid){let n=this.formularioRuta.value,l=localStorage.getItem("id"),c=localStorage.getItem("id_vehiculo");this.database.insertarRutaC(n.f_viaje,n.hora_salida,n.salida,n.destino,n.cant_asientos,n.valor_asiento,c,l).then(s=>{null!==s?(console.log("Ruta creada correctamente."),this.presentarAlerta("Ruta creada","El viaje ha sido confirmado correctamente."),this.router.navigate(["/menuprincipal"]),this.formularioRuta.reset()):(console.log("Ruta no confirmada."),this.presentarAlerta("Error al crear ruta","Rellene el formulario correctamente."))}).catch(s=>{console.error("Error al crear la ruta:",s)})}else this.presentarAlerta("Error al crear ruta","Rellene el formulario correctamente.")}presentarAlerta(n,l){var c=this;return(0,v.Z)(function*(){yield(yield c.alertController.create({header:n,message:l,buttons:["Aceptar"]})).present()})()}}return(e=r).\u0275fac=function(n){return new(n||e)(o.Y36(d.F0),o.Y36(d.gz),o.Y36(t.Br),o.Y36(a.qu),o.Y36(A.N))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-tomarviaje"]],decls:149,vars:13,consts:[["color","primary"],["slot","start"],[2,"text-align","center"],[1,"ion-text-center"],[3,"formGroup","ngSubmit"],["formControlName","f_viaje","type","date"],["formControlName","hora_salida","type","time","id","horasalida"],["name","salida","id","salida","formControlName","salida"],["value","plazanorte"],["value","alameda"],["value","pedoralonsodelvalle"],["value","antoniovaras"],["value","ed"],["value","maipu"],["value","melipilla"],["value","plazaoeste"],["value","plazavespucio"],["value","puentealto"],["value","sanbernardo"],["value","sancarlosdeapoquindo"],["value","sanjoaquin"],["name","destino","id","destino","formControlName","destino"],["value","cerrillos"],["value","cerronavia"],["value","conchali"],["value","elbosque"],["value","estacioncentral"],["value","huechuraba"],["value","independencia"],["value","lacisterna"],["value","laflorida"],["value","lagranja"],["value","lapintana"],["value","lareina"],["value","lascondes"],["value","lobarnechea"],["value","loespejo"],["value","loprado"],["value","macul"],["value","nunoa"],["value","pedroaguirrecerda"],["value","penalolen"],["value","providencia"],["value","pudahuel"],["value","quilicura"],["value","colina"],["name","cant_asientos","id","cant_asientos","formControlName","cant_asientos"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["required",""],["name","valor_asiento","id","valor_asiento","formControlName","valor_asiento"],["value","2500"],["value","5000"],["value","7500"],["color","primary","type","submit",2,"margin-right","70px"],["color","primary",3,"routerLink"],[2,"display","flex","justify-content","center","align-items","center"],[1,"example-button-row"],[1,"example-flex-container"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",2,"margin-right","20px",3,"routerLink"],["name","home","color","primary"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",2,"margin-right","20px",3,"routerLink"],["name","location","color","primary"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",2,"margin-right","20px",3,"routerLink"],["name","person","color","primary"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",2,"margin-right","20px",3,"routerLink"],["name","car-sport","color","primary"],["mat-icon-button","","aria-label","Example icon button with a open in new tab icon",2,"margin-right","10px",3,"routerLink"],["name","exit","color","primary"]],template:function(n,l){1&n&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),o._UZ(3,"ion-menu-button"),o.qZA(),o.TgZ(4,"ion-title",2),o._uU(5,"Agenda"),o.qZA()()(),o.TgZ(6,"ion-content")(7,"ion-card",3)(8,"ion-card-title")(9,"ion-item",0)(10,"ion-label"),o._uU(11,"Viaje"),o.qZA()()(),o.TgZ(12,"form",4),o.NdJ("ngSubmit",function(){return l.crearRuta()}),o.TgZ(13,"ion-item")(14,"ion-label"),o._uU(15,"Fecha Viaje:"),o.qZA(),o._UZ(16,"ion-input",5),o.qZA(),o.TgZ(17,"ion-item")(18,"ion-label"),o._uU(19,"Hora Salida:"),o.qZA(),o._UZ(20,"ion-input",6),o.qZA(),o.TgZ(21,"ion-item")(22,"ion-label"),o._uU(23,"Salida:"),o.qZA(),o.TgZ(24,"select",7)(25,"option",8),o._uU(26,"Sede Plaza Norte"),o.qZA(),o.TgZ(27,"option",9),o._uU(28,"Sede Alameda"),o.qZA(),o.TgZ(29,"option",10),o._uU(30,"Sede Pedro Alonso de Valle"),o.qZA(),o.TgZ(31,"option",11),o._uU(32,"Sede Antonio Varas"),o.qZA(),o.TgZ(33,"option",12),o._uU(34,"Sede Educaci\xf3n Continua"),o.qZA(),o.TgZ(35,"option",13),o._uU(36,"Sede Maip\xfa"),o.qZA(),o.TgZ(37,"option",14),o._uU(38,"Sede Melipilla"),o.qZA(),o.TgZ(39,"option",15),o._uU(40,"Sede Plaza Oeste"),o.qZA(),o.TgZ(41,"option",16),o._uU(42,"Sede Plaza Vespucio"),o.qZA(),o.TgZ(43,"option",17),o._uU(44,"Sede Puente Alto"),o.qZA(),o.TgZ(45,"option",18),o._uU(46,"Sede San Bernardo"),o.qZA(),o.TgZ(47,"option",19),o._uU(48,"Sede San Carlos de Apoquindo"),o.qZA(),o.TgZ(49,"option",20),o._uU(50,"Sede San Joaquin"),o.qZA()()(),o.TgZ(51,"ion-item")(52,"ion-label"),o._uU(53,"Destino:"),o.qZA(),o.TgZ(54,"select",21)(55,"option",22),o._uU(56,"Cerrillos"),o.qZA(),o.TgZ(57,"option",23),o._uU(58,"Cerro Navia"),o.qZA(),o.TgZ(59,"option",24),o._uU(60,"Conchal\xed"),o.qZA(),o.TgZ(61,"option",25),o._uU(62,"El Bosque"),o.qZA(),o.TgZ(63,"option",26),o._uU(64,"Estaci\xf3n Central"),o.qZA(),o.TgZ(65,"option",27),o._uU(66,"Huechuraba"),o.qZA(),o.TgZ(67,"option",28),o._uU(68,"Independencia"),o.qZA(),o.TgZ(69,"option",29),o._uU(70,"La Cisterna"),o.qZA(),o.TgZ(71,"option",30),o._uU(72,"La Florida"),o.qZA(),o.TgZ(73,"option",31),o._uU(74,"La Granja"),o.qZA(),o.TgZ(75,"option",32),o._uU(76,"La Pintana"),o.qZA(),o.TgZ(77,"option",33),o._uU(78,"La Reina"),o.qZA(),o.TgZ(79,"option",34),o._uU(80,"Las Condes"),o.qZA(),o.TgZ(81,"option",35),o._uU(82,"Lo Barnechea"),o.qZA(),o.TgZ(83,"option",36),o._uU(84,"Lo Espejo"),o.qZA(),o.TgZ(85,"option",37),o._uU(86,"Lo Prado"),o.qZA(),o.TgZ(87,"option",38),o._uU(88,"Mac\xfal"),o.qZA(),o.TgZ(89,"option",13),o._uU(90,"Maip\xfa"),o.qZA(),o.TgZ(91,"option",39),o._uU(92,"\xd1u\xf1oa"),o.qZA(),o.TgZ(93,"option",40),o._uU(94,"Pedro Aguirre Cerda"),o.qZA(),o.TgZ(95,"option",41),o._uU(96,"Pe\xf1alol\xe9n"),o.qZA(),o.TgZ(97,"option",42),o._uU(98,"Providencia"),o.qZA(),o.TgZ(99,"option",43),o._uU(100,"Pudahuel"),o.qZA(),o.TgZ(101,"option",44),o._uU(102,"Quilicura"),o.qZA(),o.TgZ(103,"option",45),o._uU(104,"Colina"),o.qZA()()(),o.TgZ(105,"ion-item")(106,"ion-label"),o._uU(107,"Cantidad Asientos:"),o.qZA(),o.TgZ(108,"select",46)(109,"option",47),o._uU(110,"1"),o.qZA(),o.TgZ(111,"option",48),o._uU(112,"2"),o.qZA(),o.TgZ(113,"option",49),o._uU(114,"3"),o.qZA(),o.TgZ(115,"option",50),o._uU(116,"4"),o.qZA(),o.TgZ(117,"option",51),o._uU(118,"5"),o.qZA(),o.TgZ(119,"option",52),o._uU(120,"6"),o.qZA()()(),o.TgZ(121,"ion-item")(122,"ion-label",53),o._uU(123,"Valor Asientos:"),o.qZA(),o.TgZ(124,"select",54)(125,"option",55),o._uU(126,"Standard: $2.500"),o.qZA(),o.TgZ(127,"option",56),o._uU(128,"Large: $5.000"),o.qZA(),o.TgZ(129,"option",57),o._uU(130,"Deluxe: $7.500"),o.qZA()()(),o.TgZ(131,"ion-button",58),o._uU(132,"Aceptar"),o.qZA(),o.TgZ(133,"ion-button",59),o._uU(134,"Volver al men\xfa principal"),o.qZA()()()(),o.TgZ(135,"ion-footer")(136,"section",60)(137,"div",61)(138,"div",62)(139,"button",63),o._UZ(140,"ion-icon",64),o.qZA(),o.TgZ(141,"button",65),o._UZ(142,"ion-icon",66),o.qZA(),o.TgZ(143,"button",67),o._UZ(144,"ion-icon",68),o.qZA(),o.TgZ(145,"button",69),o._UZ(146,"ion-icon",70),o.qZA(),o.TgZ(147,"button",71),o._UZ(148,"ion-icon",72),o.qZA()()()()()),2&n&&(o.xp6(12),o.Q6J("formGroup",l.formularioRuta),o.xp6(121),o.Q6J("routerLink",o.DdM(7,m)),o.xp6(6),o.Q6J("routerLink",o.DdM(8,m)),o.xp6(2),o.Q6J("routerLink",o.DdM(9,T)),o.xp6(2),o.Q6J("routerLink",o.DdM(10,q)),o.xp6(2),o.Q6J("routerLink",o.DdM(11,U)),o.xp6(2),o.Q6J("routerLink",o.DdM(12,f)))},dependencies:[a._Y,a.YN,a.Kr,a.EJ,a.JJ,a.JL,t.YG,t.Sm,t.PM,t.Dq,t.W2,t.fr,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.fG,t.wd,t.sr,t.j9,t.YI,d.rH,a.sg,a.u,Z.RK],styles:["#container[_ngcontent-%COMP%]{color:#000;width:95%;border-bottom:5%;border:solid 1.5px #469597}#us[_ngcontent-%COMP%]{margin-left:3%;font-family:calibri;font-size:xx-large}#letra[_ngcontent-%COMP%]{font-family:arial;font-size:medium;font-weight:500}.color[_ngcontent-%COMP%]{color:var(--ion-color-new-shade)}ion-content[_ngcontent-%COMP%]{--ion-background-color:rgb(241, 241, 236);--ion-border-color:primary}ion-card[_ngcontent-%COMP%]{--ion-border-color:rgb(141, 38, 38)}"]}),r})()}];let _=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[d.Bz.forChild(h),d.Bz]}),r})();var b=i(1175),P=i(6385);let j=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[g.ez,a.u5,t.Pc,_,a.UX,b.Ps,P.t,Z.ot]}),r})()}}]);