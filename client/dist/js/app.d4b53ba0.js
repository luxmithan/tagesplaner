(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("bc3a"),s=a.n(r),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dense:"",dark:""}},[a("v-col",{attrs:{align:"start",justify:"start"}},[e.isAuth?a("v-btn",{attrs:{text:"",to:"/myGoals"}},[e._v("Meine Ziele")]):e._e(),e.isAuth&&"Lehrperson"===e.role?a("v-btn",{attrs:{text:"",to:"/allGoals"}},[e._v("Alle Ziele")]):e._e()],1),a("v-toolbar-title",[e._v("Tagesplaner")]),a("v-col",{attrs:{align:"right",justify:"right"}},[e.isAuth?e._e():a("v-btn",{attrs:{text:"",to:"/login"}},[e._v("Login")]),e.isAuth?e._e():a("v-btn",{attrs:{text:"",to:"/register"}},[e._v("Registrieren")]),e.isAuth?a("v-btn",{attrs:{text:"",to:"/profile"}},[e._v(e._s(e.username)+"s Profil")]):e._e(),e.isAuth?a("v-btn",{attrs:{text:""},on:{click:e.logout}},[e._v("Logout")]):e._e(),a("v-btn",{attrs:{text:"",href:"https://github.com/luxmithan/tagesplaner",target:"_blank"}},[e._v("Repository "),a("v-icon",[e._v("mdi-open-in-new")])],1)],1)],1),a("v-content",{staticClass:"grey lighten-3"},[a("v-container",{attrs:{"text-center":""}},[a("v-layout",{attrs:{wrap:"","align-center":"","justify-center":""}},[a("router-view")],1)],1)],1)],1)},o=[],l=a("d4ec"),c=a("bee2"),u=a("262e"),d=a("2caf"),p=a("9ab4"),v=a("60a3"),f=function(e){Object(u["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.isAuth=!1,e}return Object(c["a"])(a,[{key:"init",value:function(){if(this.isAuth=this.$store.getters.isLoggedIn,this.isAuth){var e=this.$store.getters.getUser;this.username=e.username,this.role=e.role}}},{key:"logout",value:function(){this.isAuth=!1,this.$store.dispatch("logout"),this.$router.push("/login")}},{key:"mounted",value:function(){this.init()}},{key:"updated",value:function(){this.init()}}]),a}(v["b"]);f=Object(p["a"])([v["a"]],f);var h=f,m=h,g=a("2877"),b=a("6544"),w=a.n(b),y=a("7496"),k=a("40dc"),x=a("8336"),_=a("62ad"),V=a("a523"),D=a("a75b"),R=a("132d"),P=a("a722"),G=a("2a7f"),O=Object(g["a"])(m,i,o,!1,null,null,null),j=O.exports;w()(O,{VApp:y["a"],VAppBar:k["a"],VBtn:x["a"],VCol:_["a"],VContainer:V["a"],VContent:D["a"],VIcon:R["a"],VLayout:P["a"],VToolbarTitle:G["a"]});var C=a("8c4f"),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{width:"80%"}},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-col",[a("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){return e.changeDate(-1)}}},[a("v-icon",[e._v("mdi-arrow-left-bold")])],1)],1),a("v-col",[a("v-toolbar-title",[e._v(e._s(e.dateFormatted))])],1),a("v-col",[e.deviation<0?a("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){return e.changeDate(1)}}},[a("v-icon",[e._v("mdi-arrow-right-bold")])],1):e._e()],1)],1),0===e.deviation?a("div",[a("div",{staticClass:"ma-4 pa-2"},[e.goalForm?a("v-form",{ref:"create",staticClass:"justify-center"},[[a("v-text-field",{attrs:{outlined:"",label:"Ziel",rules:e.goalRules,counter:"30"},model:{value:e.newGoal.goal,callback:function(t){e.$set(e.newGoal,"goal",t)},expression:"newGoal.goal"}}),a("v-textarea",{attrs:{outlined:"",label:"Beschreibung",rules:e.descriptionRules,counter:"2000"},model:{value:e.newGoal.description,callback:function(t){e.$set(e.newGoal,"description",t)},expression:"newGoal.description"}}),a("v-btn",{staticClass:"mr-2",attrs:{color:"error"},on:{click:function(t){e.goalForm=!1}}},[e._v("Schliessen")]),a("v-btn",{attrs:{color:"success"},on:{click:e.validateCreate}},[e._v("Ziel hinzufügen")])]],2):a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.goalForm=!0}}},[e._v("Ziele hinzufügen")])],1),a("v-divider")],1):e._e(),a("v-form",{ref:"update"},[a("v-menu",{attrs:{absolute:"","close-on-content-click":!1,"nudge-width":500,"position-x":350,"position-y":200},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-card",[a("v-list",[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[a("v-text-field",{staticClass:"mt-1",attrs:{outlined:"",label:"Ziel",rules:e.goalRules,counter:"30"},model:{value:e.editedGoal.goal,callback:function(t){e.$set(e.editedGoal,"goal",t)},expression:"editedGoal.goal"}})],1)],1)],1)],1),a("v-divider"),a("v-list",[a("v-list-item",[a("v-list-item-content",[a("v-textarea",{attrs:{outlined:"",overflow:"",label:"Beschreibung",rules:e.descriptionRules,counter:"2000"},model:{value:e.editedGoal.description,callback:function(t){e.$set(e.editedGoal,"description",t)},expression:"editedGoal.description"}})],1)],1)],1),a("v-divider"),a("v-list",[a("v-list-item",[a("v-list-item-content",[a("v-textarea",{attrs:{outlined:"",overflow:"",label:"Was ist gut gelaufen? Warum evtl. nicht fertig geworden?",rules:[e.commentRules],counter:"255"},model:{value:e.editedGoal.comment,callback:function(t){e.$set(e.editedGoal,"comment",t)},expression:"editedGoal.comment"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(t){e.menu=!1}}},[e._v("Abbrechen")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.validateUpdate()}}},[e._v("Speichern")])],1)],1)],1)],1),e.filteredGoals.length?a("v-expansion-panels",{attrs:{multiple:"",focusable:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},e._l(e.filteredGoals,(function(t,n){return a("v-expansion-panel",{key:n},[a("v-divider"),a("v-expansion-panel-header",[a("v-col",{staticClass:"text-center ml-4"},[e._v(e._s(t.goal))])],1),0===e.deviation?a("div",{staticClass:"ma-2"},[t.finished?a("v-btn",{attrs:{outlined:"",color:"success"},on:{click:function(a){return e.finishGoal(t)}}},[a("v-icon",[e._v("mdi-check")])],1):a("v-btn",{attrs:{outlined:"",color:"error"},on:{click:function(a){return e.finishGoal(t)}}},[a("v-icon",[e._v("mdi-close")])],1),a("v-btn",{staticClass:"ml-2 mr-2",attrs:{outlined:"",color:"indigo",dark:""},on:{click:function(a){return e.editGoal(t)}}},[a("v-icon",[e._v("mdi-pencil")])],1),a("v-btn",{staticClass:"mr-2",attrs:{outlined:"",color:"error",dark:""},on:{click:function(a){return e.deleteGoal(t)}}},[a("v-icon",[e._v("mdi-trash-can")])],1)],1):a("div",{staticClass:"ma-2"},[t.finished?a("p",{staticClass:"success--text"},[e._v("Wurde fertig gemacht.")]):a("p",{staticClass:"error--text"},[e._v("Wurde nicht fertig gemacht.")])]),a("v-expansion-panel-content",{on:{click:function(t){e.menu=!1}}},[a("v-divider"),a("div",{staticClass:"ma-3"},[e._v(e._s(t.description))]),t.comment?a("v-alert",{staticClass:"mt-2",attrs:{dense:"",text:"",type:"info",width:"96%"}},[e._v(e._s(t.comment))]):e._e()],1)],1)})),1):e._e(),e.loading?a("v-progress-linear",{staticClass:"pa-1",attrs:{indeterminate:""}}):e._e(),e.filteredGoals.length||e.loading?e._e():a("v-toolbar",[e._v("Keine Einträge gefunden.")])],1)},F=[],T=(a("a4d3"),a("e01a"),a("4de4"),a("c975"),a("a434"),a("96cf"),a("1da1"));a("a15b");function L(e){var t=new Date(e),a=t.getFullYear(),n="".concat(t.getMonth()+1),r="".concat(t.getDate());return n.length<2&&(n="0".concat(n)),r.length<2&&(r="0".concat(r)),[a,n,r].join("-")}var A=function(e){Object(u["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.loading=!0,e.dateFormatted="",e.deviation=0,e.myId=0,e.myGoals=[],e.menu=!1,e.editedIndex=0,e.editedGoal={goal:"",description:"",comment:""},e.goalForm=!1,e.newGoal={goal:"",description:""},e.goalRules=[function(e){return!!e||"Bitte Name des Ziels hinzufügen"},function(e){return e&&e.length<=30||"Der Name des Ziels darf maximal 30 Zeichen lang sein."}],e.descriptionRules=[function(e){return!!e||"Bitte Beschreibung des Ziels hinzufügen"},function(e){return e&&e.length<=2e3||"Die Beschreibung des Ziels darf maximal 2000 Zeichen lang sein."}],e}return Object(c["a"])(a,[{key:"created",value:function(){this.$store.getters.isLoggedIn||this.$router.push("/login"),this.init()}},{key:"commentRules",value:function(){return!(this.editedGoal.comment&&this.editedGoal.comment.length>=255)||"Der Kommentar des Ziels darf maximal 255 Zeichen lang sein."}},{key:"init",value:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.changeDate(0),this.myId=this.$store.getters.getUser.id,e.next=4,s.a.get("/api/goals/".concat(this.myId)).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 4:this.myGoals=e.sent,this.loading=!1,this.newGoal={goal:"",description:"",date:this.dateFormatted,userFK:this.myId};case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"editGoal",value:function(e){var t=this;setTimeout((function(){t.menu=!0}),1),this.editedIndex=this.myGoals.indexOf(e),this.editedGoal={id:e.id,goal:e.goal,description:e.description,comment:e.comment}}},{key:"validateCreate",value:function(){this.$refs.create.validate()&&this.createGoal()}},{key:"validateUpdate",value:function(){this.$refs.update.validate()&&this.updateGoal()}},{key:"createGoal",value:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/api/goals",this.newGoal).then((function(e){return e.data[0]})).catch((function(e){return console.log(e)}));case 2:this.newGoal.id=e.sent,this.myGoals.push(this.newGoal),this.newGoal={goal:"",description:"",date:this.dateFormatted,userFK:this.myId},this.$refs.create.resetValidation();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"updateGoal",value:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s.a.put("/api/goals",this.editedGoal).then((function(e){return e.data})).catch((function(e){return console.log(e)})),Object.assign(this.myGoals[this.editedIndex],this.editedGoal),this.menu=!1;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"deleteGoal",value:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=this.myGoals.indexOf(t),this.myGoals.splice(a,1),s.a.delete("/api/goals/".concat(t.id));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"finishGoal",value:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.finished=t.finished?0:1,s.a.put("/api/goals",{id:t.id,finished:t.finished});case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"changeDate",value:function(e){this.panel=[],this.deviation+=e;var t=new Date,a=t.setDate(t.getDate()+this.deviation);this.dateFormatted=L(a)}},{key:"filteredGoals",get:function(){var e=this,t=this.myGoals;return t=t.filter((function(t){return t.date===e.dateFormatted})),t}}]),a}(v["b"]);A=Object(p["a"])([v["a"]],A);var B=A,I=B,M=a("0798"),Z=a("b0af"),E=a("99d9"),S=a("ce7e"),U=a("cd55"),N=a("49e2"),z=a("c865"),K=a("0393"),W=a("4bd4"),H=a("8860"),J=a("da13"),Y=a("5d23"),q=a("e449"),Q=a("8e36"),X=a("2fa4"),ee=a("8654"),te=a("a844"),ae=a("71d9"),ne=Object(g["a"])(I,$,F,!1,null,null,null),re=ne.exports;w()(ne,{VAlert:M["a"],VBtn:x["a"],VCard:Z["a"],VCardActions:E["a"],VCol:_["a"],VDivider:S["a"],VExpansionPanel:U["a"],VExpansionPanelContent:N["a"],VExpansionPanelHeader:z["a"],VExpansionPanels:K["a"],VForm:W["a"],VIcon:R["a"],VList:H["a"],VListItem:J["a"],VListItemContent:Y["a"],VListItemTitle:Y["b"],VMenu:q["a"],VProgressLinear:Q["a"],VSpacer:X["a"],VTextField:ee["a"],VTextarea:te["a"],VToolbar:ae["a"],VToolbarTitle:G["a"]});var se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{width:"80%"}},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-col",[a("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){return e.changeDate(-1)}}},[a("v-icon",[e._v("mdi-arrow-left-bold")])],1)],1),a("v-col",[a("v-toolbar-title",[e._v(e._s(e.dateFormatted))])],1),a("v-col",[e.deviation<0?a("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){return e.changeDate(1)}}},[a("v-icon",[e._v("mdi-arrow-right-bold")])],1):e._e()],1)],1),a("v-toolbar",[a("v-col",[a("v-text-field",{staticClass:"mr-2",attrs:{outlined:"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Namenssuche"},model:{value:e.searchName,callback:function(t){e.searchName=t},expression:"searchName"}})],1),a("v-col",[a("v-select",{staticClass:"mr-2",attrs:{outlined:"",clearable:"","hide-details":"",items:e.grades,"prepend-inner-icon":"mdi-magnify",label:"Klasse"},model:{value:e.filterGrade,callback:function(t){e.filterGrade=t},expression:"filterGrade"}})],1),a("v-col",[a("v-select",{attrs:{outlined:"",clearable:"","hide-details":"",items:e.status,"prepend-inner-icon":"mdi-magnify",label:"Status"},model:{value:e.filterFinished,callback:function(t){e.filterFinished=t},expression:"filterFinished"}})],1)],1),a("v-divider"),e.filteredGoals.length?a("v-expansion-panels",{attrs:{multiple:"",focusable:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},e._l(e.filteredGoals,(function(t,n){return a("v-expansion-panel",{key:n},[a("v-expansion-panel-header",[a("v-col",[e._v(e._s(t.grade)+" "+e._s(t.userfull)+":")]),a("v-col",[e._v(e._s(t.goal))]),t.finished?a("p",{staticClass:"success--text"},[e._v("Fertig")]):a("p",{staticClass:"error--text"},[e._v("Nicht Fertig")])],1),a("v-expansion-panel-content",{staticClass:"mt-3"},[e._v(" "+e._s(t.description)+" "),t.comment?a("v-alert",{staticClass:"mt-2",attrs:{dense:"",text:"",type:"info",width:"96%"}},[e._v(e._s(t.comment))]):e._e()],1)],1)})),1):e._e(),e.loading?a("v-progress-linear",{staticClass:"pa-1",attrs:{indeterminate:""}}):e._e(),e.filteredGoals.length||e.loading?e._e():a("v-toolbar",[e._v("Keine Einträge gefunden.")])],1)},ie=[],oe=function(e){Object(u["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.loading=!0,e.dateFormatted="",e.deviation=0,e.allGoals=[],e.searchName="",e.filterGrade="",e.filterFinished="",e.grades=["in17","in18","in19"],e.status=["Nicht Fertig","Fertig"],e}return Object(c["a"])(a,[{key:"init",value:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.changeDate(0),e.next=3,s.a.get("/api/goals").then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 3:this.allGoals=e.sent,this.loading=!1;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"changeDate",value:function(e){this.panel=[],this.deviation+=e;var t=new Date,a=t.setDate(t.getDate()+this.deviation);this.dateFormatted=L(a)}},{key:"created",value:function(){"Lehrperson"!==this.$store.getters.getUser.role&&this.$router.push("/myGoals"),this.init()}},{key:"filteredGoals",get:function(){var e=this,t=this.allGoals;return t=t.filter((function(t){return t.date===e.dateFormatted&&t.userfull.toLowerCase().indexOf(e.searchName.toLowerCase())>-1})),this.filterGrade&&(t=t.filter((function(t){return t.grade===e.filterGrade}))),this.filterFinished&&(t=t.filter((function(t){return t.finished===e.status.indexOf(e.filterFinished)}))),t}}]),a}(v["b"]);oe=Object(p["a"])([v["a"]],oe);var le=oe,ce=le,ue=a("b974"),de=Object(g["a"])(ce,se,ie,!1,null,null,null),pe=de.exports;w()(de,{VAlert:M["a"],VBtn:x["a"],VCard:Z["a"],VCol:_["a"],VDivider:S["a"],VExpansionPanel:U["a"],VExpansionPanelContent:N["a"],VExpansionPanelHeader:z["a"],VExpansionPanels:K["a"],VIcon:R["a"],VProgressLinear:Q["a"],VSelect:ue["a"],VTextField:ee["a"],VToolbar:ae["a"],VToolbarTitle:G["a"]});var ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[e._v("Profil")])],1),e._l(e.myProfile,(function(t,n,r){return a("v-row",{key:r,attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"4"}},[a("v-card",{attrs:{tile:"",outlined:""}},[a("v-card-title",[e._v(e._s(n)+":")])],1)],1),a("v-col",{attrs:{cols:"8"}},[a("v-card",{attrs:{tile:"",outlined:""}},[a("v-card-title",[e._v(e._s(t))])],1)],1)],1)})),a("v-divider"),a("v-form",{ref:"form",staticClass:"ma-4"},[a("v-text-field",{attrs:{rules:e.oldPasswordRules,label:"Altes Password","prepend-icon":"mdi-lock",type:"password"},model:{value:e.oldPassword,callback:function(t){e.oldPassword=t},expression:"oldPassword"}}),a("v-text-field",{attrs:{rules:e.newPasswordRules,label:"Neues Passwort","prepend-icon":"mdi-lock-outline",type:"password",counter:"20"},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}}),a("v-text-field",{attrs:{rules:[e.newPasswordRepeatRules],label:"Nochmal neues Passwort","prepend-icon":"mdi-lock-outline",type:"password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.validate(t)}},model:{value:e.newPasswordRepeat,callback:function(t){e.newPasswordRepeat=t},expression:"newPasswordRepeat"}}),e.errorMsg?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(e._s(e.errorMsg))]):e._e(),e.success?a("v-alert",{attrs:{dense:"",outlined:"",type:"success"}},[e._v("Ihr Passwort wurde erfolgreich verändert.")]):e._e()],1),a("v-btn",{staticClass:"ma-4",attrs:{color:"primary"},on:{click:e.validate}},[e._v("Passwort ändern")]),a("v-divider"),a("v-btn",{staticClass:"ma-4",attrs:{color:"error"},on:{click:e.deleteUser}},[e._v("Konto löschen")])],2)],1)},fe=[],he=function(e){Object(u["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.myId="",e.myProfile={Username:"",Vorname:"",Nachname:"",Rolle:""},e.oldPassword="",e.newPassword="",e.newPasswordRepeat="",e.errorMsg="",e.success=!1,e.oldPasswordRules=[function(e){return!!e||"Bitte altes Password eingeben"}],e.newPasswordRules=[function(e){return!!e||"Bitte neues Passwort eingeben"},function(e){return e&&e.length<=20||"Das Passwort darf maximal 20 Zeichen lang sein"},function(e){return e&&e.length>=6||"Das Passwort muss minimal 6 Zeichen lang sein"}],e}return Object(c["a"])(a,[{key:"created",value:function(){this.$store.getters.isLoggedIn||this.$router.push("/login"),this.init()}},{key:"init",value:function(){var e=this.$store.getters.getUser;this.myId=e.id,this.myProfile.Username=e.username,this.myProfile.Vorname=e.firstname,this.myProfile.Nachname=e.lastname,this.myProfile.Rolle=e.role}},{key:"newPasswordRepeatRules",value:function(){return this.newPasswordRepeat?this.newPassword===this.newPasswordRepeat||"Die neuen Passwörter stimmen nicht überein":"Bitte neues Passwort erneut eingeben"}},{key:"validate",value:function(){this.$refs.form.validate()&&this.changePassword()}},{key:"changePassword",value:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{t={id:this.myId,password:this.oldPassword,newPassword:this.newPassword,newPasswordRepeat:this.newPasswordRepeat},s.a.put("/api/users",t).then((function(e){return e.data})),this.$refs.form.reset(),this.success=!0,setTimeout((function(){a.success=!1}),3e3)}catch(n){this.errorMsg=n.response.data.msg,setTimeout((function(){a.errorMsg=!1}),3e3)}case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"deleteUser",value:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.confirm("Sind Sie sicher, dass Sie ihr Konto inklusive alle dazugehörigen Ziele löschen wollen?")&&(s.a.delete("/api/user/delete/".concat(this.myId)),this.$store.dispatch("logout"),this.$router.push("/login"));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),a}(v["b"]);he=Object(p["a"])([v["a"]],he);var me=he,ge=me,be=a("0fd9"),we=Object(g["a"])(ge,ve,fe,!1,null,null,null),ye=we.exports;w()(we,{VAlert:M["a"],VBtn:x["a"],VCard:Z["a"],VCardTitle:E["c"],VCol:_["a"],VDivider:S["a"],VForm:W["a"],VRow:be["a"],VTextField:ee["a"],VToolbar:ae["a"],VToolbarTitle:G["a"]});var ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[e._v("Registrieren")])],1),a("v-card-text",[a("v-form",{ref:"form"},[a("v-text-field",{attrs:{rules:e.usernameRules,label:"Username","prepend-icon":"mdi-account",type:"text",counter:"12"},model:{value:e.signupData.username,callback:function(t){e.$set(e.signupData,"username",t)},expression:"signupData.username"}}),a("v-text-field",{attrs:{rules:e.generalRules,label:"Vorname","prepend-icon":"mdi-account-outline",type:"text"},model:{value:e.signupData.firstname,callback:function(t){e.$set(e.signupData,"firstname",t)},expression:"signupData.firstname"}}),a("v-text-field",{attrs:{rules:e.generalRules,label:"Nachname","prepend-icon":"mdi-account-outline",type:"text"},model:{value:e.signupData.lastname,callback:function(t){e.$set(e.signupData,"lastname",t)},expression:"signupData.lastname"}}),a("v-select",{attrs:{rules:e.generalRules,items:e.roles,label:"Rolle","prepend-icon":"mdi-badge-account-horizontal"},model:{value:e.signupData.role,callback:function(t){e.$set(e.signupData,"role",t)},expression:"signupData.role"}}),"Lernende/r"===e.signupData.role?a("v-select",{attrs:{rules:[e.gradeRules],items:e.grades,label:"Momentane Klasse","prepend-icon":"mdi-badge-account-horizontal"},model:{value:e.signupData.grade,callback:function(t){e.$set(e.signupData,"grade",t)},expression:"signupData.grade"}}):e._e(),"Lehrperson"===e.signupData.role?a("v-text-field",{attrs:{rules:e.generalRules,label:"Masterpasswort","prepend-icon":"mdi-lock-outline",type:"password"},model:{value:e.signupData.masterPassword,callback:function(t){e.$set(e.signupData,"masterPassword",t)},expression:"signupData.masterPassword"}}):e._e(),"Lehrperson"===e.signupData.role?a("p",{staticStyle:{color:"red"}},[e._v(' Falls sie die Webapp testen wollen, ist das Masterpasswort "LehrerSein".')]):e._e(),a("v-text-field",{attrs:{rules:e.passwordRules,label:"Passwort","prepend-icon":"mdi-lock",type:"password",counter:"20"},model:{value:e.signupData.password,callback:function(t){e.$set(e.signupData,"password",t)},expression:"signupData.password"}}),a("v-text-field",{attrs:{rules:[e.passwordRepeatRules],label:"Passwort erneut eingeben","prepend-icon":"mdi-lock",type:"password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.validate(t)}},model:{value:e.signupData.passwordRepeat,callback:function(t){e.$set(e.signupData,"passwordRepeat",t)},expression:"signupData.passwordRepeat"}}),e.errorMsg?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(e._s(e.errorMsg))]):e._e()],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:e.validate}},[e._v("Registrieren")])],1)],1)],1)},xe=[],_e=function(e){Object(u["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.signupData={username:"",firstname:"",lastname:"",role:"",grade:null,masterPassword:null,password:"",passwordRepeat:""},e.errorMsg="",e.roles=["Lernende/r","Lehrperson"],e.grades=["in17","in18","in19"],e.generalRules=[function(e){return!!e||"Bitte Feld ausfüllen"}],e.usernameRules=[function(e){return!!e||"Bitte Feld ausfüllen"},function(e){return e&&e.length<=12||"Der Username darf maximal 12 Zeichen lang sein"},function(e){return e&&e.length>=3||"Der Username muss minimal 3 Zeichen lang sein"}],e.passwordRules=[function(e){return!!e||"Bitte Feld ausfüllen"},function(e){return e&&e.length<=20||"Das Passwort darf maximal 20 Zeichen lang sein"},function(e){return e&&e.length>=6||"Das Passwort muss minimal 6 Zeichen lang sein"}],e}return Object(c["a"])(a,[{key:"created",value:function(){this.$store.getters.isLoggedIn&&this.$router.push("/myGoals")}},{key:"masterRules",value:function(){return!("Lernende/r"!==this.signupData.role&&!this.signupData.masterPassword)||"Bitte Feld ausfüllen"}},{key:"gradeRules",value:function(){return!("Lehrperson"!==this.signupData.role&&!this.signupData.grade)||"Bitte Feld ausfüllen"}},{key:"passwordRepeatRules",value:function(){return this.signupData.passwordRepeat?this.signupData.password===this.signupData.passwordRepeat||"Die Beiden Passwörter stimmen nicht überein":"Bitte Feld ausfüllen"}},{key:"validate",value:function(){this.$refs.form.validate()&&this.signUp()}},{key:"signUp",value:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"Lehrperson"===this.signupData.role&&(this.signupData.grade=null),"Lernende/r"===this.signupData.role&&(this.signupData.masterPassword=null),e.prev=2,e.next=5,s.a.post("/api/users",this.signupData).then((function(e){return e.data}));case 5:t=e.sent,this.errorMsg=t.msg,this.$router.push("/login"),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),this.errorMsg=e.t0.response.data.msg;case 13:case"end":return e.stop()}}),e,this,[[2,10]])})));function t(){return e.apply(this,arguments)}return t}()}]),a}(v["b"]);_e=Object(p["a"])([v["a"]],_e);var Ve=_e,De=Ve,Re=Object(g["a"])(De,ke,xe,!1,null,null,null),Pe=Re.exports;w()(Re,{VAlert:M["a"],VBtn:x["a"],VCard:Z["a"],VCardActions:E["a"],VCardText:E["b"],VCol:_["a"],VForm:W["a"],VSelect:ue["a"],VSpacer:X["a"],VTextField:ee["a"],VToolbar:ae["a"],VToolbarTitle:G["a"]});var Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[e._v("Login")])],1),a("v-card-text",[a("v-form",{ref:"form"},[a("v-text-field",{attrs:{rules:e.generalRules,label:"Username","prepend-icon":"mdi-account"},model:{value:e.loginData.username,callback:function(t){e.$set(e.loginData,"username",t)},expression:"loginData.username"}}),a("v-text-field",{attrs:{rules:e.generalRules,label:"Passwort","prepend-icon":"mdi-lock",type:"password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.validate(t)}},model:{value:e.loginData.password,callback:function(t){e.$set(e.loginData,"password",t)},expression:"loginData.password"}}),e.errorMsg?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(e._s(e.errorMsg))]):e._e()],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:e.validate}},[e._v("Login")])],1)],1)],1)},Oe=[],je=function(e){Object(u["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.loginData={username:"",password:""},e.generalRules=[function(e){return!!e||"Bitte Feld ausfüllen"}],e.errorMsg="",e}return Object(c["a"])(a,[{key:"created",value:function(){this.$store.getters.isLoggedIn&&this.$router.push("/myGoals")}},{key:"validate",value:function(){this.$refs.form.validate()&&this.login()}},{key:"login",value:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/api/users/login",this.loginData).then((function(e){return e.data}));case 3:t=e.sent,a=t.token,n=t.user,this.$store.dispatch("login",{token:a,user:n}),this.$router.push("/myGoals"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.errorMsg=e.t0.response.data.msg;case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}()}]),a}(v["b"]);je=Object(p["a"])([v["a"]],je);var Ce=je,$e=Ce,Fe=Object(g["a"])($e,Ge,Oe,!1,null,null,null),Te=Fe.exports;w()(Fe,{VAlert:M["a"],VBtn:x["a"],VCard:Z["a"],VCardActions:E["a"],VCardText:E["b"],VCol:_["a"],VForm:W["a"],VSpacer:X["a"],VTextField:ee["a"],VToolbar:ae["a"],VToolbarTitle:G["a"]}),n["a"].use(C["a"]);var Le=[{path:"/myGoals",name:"myGoals",component:re},{path:"/allGoals",name:"allGoals",component:pe},{path:"/profile",name:"profile",component:ye},{path:"/register",name:"register",component:Pe},{path:"/login",name:"login",component:Te},{path:"*",name:"other",component:Te}],Ae=new C["a"]({mode:"history",base:"/",routes:Le}),Be=Ae,Ie=a("2f62"),Me=a("0e44");n["a"].use(Ie["a"]);var Ze=function(){return{token:"",user:{}}},Ee=new Ie["a"].Store({strict:!1,plugins:[Object(Me["a"])()],state:Ze(),getters:{isLoggedIn:function(e){return e.token},getUser:function(e){return e.user}},mutations:{setToken:function(e,t){e.token=t},setUser:function(e,t){e.user=t},reset:function(e){Object.assign(e,Ze())}},actions:{login:function(e,t){var a=e.commit,n=t.token,r=t.user;a("setToken",n),a("setUser",r),s.a.defaults.headers.common.Authorization="Bearer ".concat(n)},logout:function(e){var t=e.commit;t("reset",""),s.a.defaults.headers.common.Authorization=""}}}),Se=a("f309");n["a"].use(Se["a"]);var Ue=new Se["a"]({});n["a"].config.productionTip=!1,s.a.defaults.headers.common.Authorization="Bearer ".concat(Ee.state.token),new n["a"]({router:Be,store:Ee,vuetify:Ue,render:function(e){return e(j)}}).$mount("#app")}});
//# sourceMappingURL=app.d4b53ba0.js.map