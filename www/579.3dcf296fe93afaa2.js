"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[579],{579:(l,s,i)=>{i.r(s),i.d(s,{Geolocation:()=>u,GeolocationWeb:()=>a});var t=i(5861),c=i(2726);class a extends c.Uw{getCurrentPosition(e){return(0,t.Z)(function*(){return new Promise((o,r)=>{navigator.geolocation.getCurrentPosition(n=>{o(n)},n=>{r(n)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))})})()}watchPosition(e,o){return(0,t.Z)(function*(){return`${navigator.geolocation.watchPosition(n=>{o(n)},n=>{o(null,n)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))}`})()}clearWatch(e){return(0,t.Z)(function*(){window.navigator.geolocation.clearWatch(parseInt(e.id,10))})()}checkPermissions(){var e=this;return(0,t.Z)(function*(){if(typeof navigator>"u"||!navigator.permissions)throw e.unavailable("Permissions API not available in this browser");const o=yield window.navigator.permissions.query({name:"geolocation"});return{location:o.state,coarseLocation:o.state}})()}requestPermissions(){var e=this;return(0,t.Z)(function*(){throw e.unimplemented("Not implemented on web.")})()}}const u=new a}}]);