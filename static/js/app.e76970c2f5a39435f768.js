webpackJsonp([1],[,,function(t,e,a){"use strict";var n=a(24),r=a.n(n),i=a(70),s=a.n(i),o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"monster",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];r()(this,t),this.name=e,this.position=a,this.skins=n,this.potrait=e?"/static/assets/potraits/"+this.getPotraitPath()+"_potrait.png":"gold"===a?"/static/assets/potraits/gold_potrait.png":"black"===a?"/static/assets/potraits/black_potrait.png":"white"===a?"/static/assets/potraits/white_potrait.png":"/static/assets/potraits/logo.jpg"}return s()(t,[{key:"getPotraitPath",value:function(){return this.name.toLocaleLowerCase().split(" ").join("_")}}]),t}();e.a=o},function(t,e,a){"use strict";var n=a(24),r=a.n(n),i=function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";r()(this,t),this.character=e,this.level=a,this.note=n};e.a=i},,,,,,,,function(t,e,a){"use strict";e.a={data:function(){return{clipped:!0,drawer:!1,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"},{icon:"bubble_chart",title:"Inspire 2"},{icon:"bubble_chart",title:"Inspire 3"}],miniVariant:!0,right:!0,rightDrawer:!1,title:"Wonderland Trial"}},name:"App"}},function(t,e,a){"use strict";var n=a(1),r=a.n(n),i=a(19),s=a(64);e.a={name:"TrialGroupView",components:{GroupCard:s.a},data:function(){return{newGroupName:""}},computed:r()({},Object(i.b)({trialGroups:"trialGroups/groups"})),mounted:function(){this.$store.dispatch("init")},methods:{onAddClicked:function(){this.newGroupName?(this.$store.dispatch(this.$store.ACTIONS.TRIAL_GROUP.ADD_GROUP,{name:this.newGroupName}),this.newGroupName=""):this.$refs.groupNameTextField.focus()}}}},,,,,,,,function(t,e,a){"use strict";e.a={name:"GroupCard",props:["value"]}},function(t,e,a){"use strict";var n=a(22);a(2),a(3);e.a={name:"GroupView",components:{TeamMemberPicker:n.a},props:["id","value"],data:function(){return{Actions:this.$store.ACTIONS.TRIAL_GROUP,trialName:""}},computed:{data:function(){var t=this.$store.getters[this.Actions.GET_GROUP](this.id);return t||{name:""}}},watch:{trials:function(t){}},methods:{onAddTrialClicked:function(){this.$store.dispatch(this.Actions.ADD_TRIAL,{id:this.id,trialName:this.trialName})},onTeamChanged:function(t,e,a){console.log(t),console.log(e),console.log(a),this.$store.dispatch(this.Actions.MODIFY_TEAM,{groupId:t,trialId:e,team:a})}}}},function(t,e,a){"use strict";function n(t){a(68)}var r=a(23),i=a(77),s=a(0),o=n,c=s(r.a,i.a,!1,o,"data-v-6be83774",null);e.a=c.exports},function(t,e,a){"use strict";var n=a(1),r=a.n(n),i=a(2),s=a(3),o=a(25),c=a(75);e.a={name:"TeamMemberPicker",components:{CharAvatar:o.a,CharPicker:c.a},props:["value","type"],data:function(){return{charList:[new i.a("","",null)],showAction:!1,showPicker:!1,teamMember:new s.a(new i.a("","",null),60,"")}},watch:{value:function(t){this.teamMember=t}},methods:{onHover:function(){this.showAction=!0},onLeave:function(){this.showAction=!1},showCharPicker:function(){this.showPicker=!0},getSelectedChar:function(t){this.teamMember=t,this.$emit("input",r()({},t))}},mounted:function(){this.charList=this.$store.getters[this.$store.ACTIONS.CHARACTER_LIST.GET_LIST](this.type),this.value&&(this.teamMember=this.value)}}},,function(t,e,a){"use strict";var n=a(26),r=a(74),i=a(0),s=i(n.a,r.a,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";e.a={name:"CharAvatar",props:{value:{type:Object,default:{name:"",potrait:""}},size:{type:Number,default:84}}}},function(t,e,a){"use strict";var n=a(1),r=a.n(n),i=a(3),s=a(25);e.a={name:"CharPicker",components:{CharAvatar:s.a},props:["value","characters"],data:function(){return{model:!1,selectedChar:null,level:60,note:""}},watch:{value:function(t){this.model=t},model:function(t){this.$emit("input",t)}},mounted:function(){this.model=this.value},methods:{selectChar:function(){this.model=!1;var t=new i.a(this.selectedChar,this.level,this.note);this.$emit("selected",r()({},t))}}}},function(t,e,a){"use strict";var n=a(22),r=a(2),i=a(3);e.a={components:{TeamMemberPicker:n.a},data:function(){return{mock:new i.a(new r.a("","",null),60,"")}},methods:{}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),r=a(33),i=a(35),s=a(81),o=a.n(s),c=a(82),l=(a.n(c),a(83));n.a.use(o.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,store:l.a,components:{App:r.a},template:"<App/>"})},,,,function(t,e,a){"use strict";var n=a(11),r=a(34),i=a(0),s=i(n.a,r.a,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[a("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),a("v-btn",{attrs:{flat:"",to:"/sandbox"}},[t._v("Sandbox")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[a("v-icon",[t._v("menu")])],1)],1),t._v(" "),a("v-content",[a("router-view")],1),t._v(" "),a("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:"",app:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[a("v-list",[a("v-list-tile",{on:{click:function(e){t.right=!t.right}}},[a("v-list-tile-action",[a("v-icon",[t._v("compare_arrows")])],1),t._v(" "),a("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),a("v-footer",{attrs:{fixed:t.fixed,app:""}},[a("span",[t._v("© 2017")])])],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},function(t,e,a){"use strict";var n=a(6),r=a(36),i=a(37),s=a(67),o=a(79);n.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"TrialGroupPage",component:i.a},{path:"/sandbox",name:"Sandbox",component:o.a},{path:"/groups/:id",props:!0,component:s.a}]})},,function(t,e,a){"use strict";var n=a(12),r=a(66),i=a(0),s=i(n.a,r.a,!1,null,null,null);e.a=s.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";var n=a(20),r=a(65),i=a(0),s=i(n.a,r.a,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("v-btn",{attrs:{flat:"",large:"",to:"/groups/"+t.value.id}},[t._v(t._s(t.value.name))])],1)],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.trialGroups,function(t,e){return a("v-flex",{key:e,attrs:{xs4:""}},[a("group-card",{attrs:{value:t}})],1)}),t._v(" "),a("v-flex",{attrs:{xs4:""}},[a("v-card",[a("v-card-title",[a("v-text-field",{ref:"groupNameTextField",attrs:{label:"Group Name",rules:[function(t){return!!t||"Group name is required!"}]},model:{value:t.newGroupName,callback:function(e){t.newGroupName=e},expression:"newGroupName"}})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{large:"",icon:""},on:{click:t.onAddClicked}},[a("v-icon",{attrs:{large:""}},[t._v("add_circle")])],1)],1)],1)],1)],2)],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},function(t,e,a){"use strict";var n=a(21),r=a(78),i=a(0),s=i(n.a,r.a,!1,null,null,null);e.a=s.exports},function(t,e){},,,,,,function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-avatar",{attrs:{size:t.size},on:{mouseenter:function(e){t.$emit("mouseenter","")}}},[a("img",{attrs:{src:t.value.potrait,alt:t.value.name}})])},r=[],i={render:n,staticRenderFns:r};e.a=i},function(t,e,a){"use strict";var n=a(27),r=a(76),i=a(0),s=i(n.a,r.a,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px",origin:"top center"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[a("v-card",[a("v-card-title",[t._v("Character Picker")]),t._v(" "),a("v-card-text",[a("v-select",{attrs:{label:"Select a character...",items:t.characters,"item-text":"name"},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("char-avatar",{attrs:{size:24},model:{value:e.item,callback:function(a){t.$set(e,"item",a)},expression:"data.item"}}),t._v("\n          "+t._s(e.item.name)+"\n        ")]}},{key:"item",fn:function(e){return[a("char-avatar",{attrs:{size:48},model:{value:e.item,callback:function(a){t.$set(e,"item",a)},expression:"data.item"}}),t._v("\n          "+t._s(e.item.name)+"\n        ")]}}]),model:{value:t.selectedChar,callback:function(e){t.selectedChar=e},expression:"selectedChar"}}),t._v(" "),a("v-text-field",{attrs:{label:"Level"},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}}),t._v(" "),a("v-text-field",{attrs:{label:"Note"},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}})],1),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",flat:""},on:{click:t.selectChar}},[t._v("OK")]),t._v(" "),a("v-btn",{attrs:{flat:""},on:{click:function(e){t.model=!1}}},[t._v("CANCEL")])],1)],1)],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foundation"},[a("char-avatar",{on:{mouseenter:t.onHover},model:{value:t.teamMember.character,callback:function(e){t.$set(t.teamMember,"character",e)},expression:"teamMember.character"}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showAction,expression:"showAction"}],staticClass:"action-container",on:{mouseleave:t.onLeave}},[a("div",[a("v-btn",[t._v("Details")])],1),t._v(" "),a("div",[a("v-btn",{on:{click:t.showCharPicker}},[t._v("Edit")])],1)]),t._v(" "),a("char-picker",{attrs:{characters:t.charList},on:{selected:t.getSelectedChar},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}})],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("v-btn",{attrs:{flat:"",to:"/"}},[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.data.name))])]),t._v(" "),a("v-expansion-panel",t._l(t.data.trials,function(e,n){return a("v-expansion-panel-content",{key:n,attrs:{value:!0}},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("team-member-picker",{attrs:{type:"gold"},on:{input:function(a){t.onTeamChanged(t.data.id,e.id,e.teamMembers)}},model:{value:e.teamMembers.gold,callback:function(a){t.$set(e.teamMembers,"gold",a)},expression:"trial.teamMembers.gold"}}),t._v(" "),a("team-member-picker",{attrs:{type:"black"},on:{input:function(a){t.onTeamChanged(t.data.id,e.id,e.teamMembers)}},model:{value:e.teamMembers.black,callback:function(a){t.$set(e.teamMembers,"black",a)},expression:"trial.teamMembers.black"}}),t._v(" "),a("team-member-picker",{attrs:{type:"white"},on:{input:function(a){t.onTeamChanged(t.data.id,e.id,e.teamMembers)}},model:{value:e.teamMembers.white,callback:function(a){t.$set(e.teamMembers,"white",a)},expression:"trial.teamMembers.white"}}),t._v(" "),a("team-member-picker",{attrs:{type:"advisor"},on:{input:function(a){t.onTeamChanged(t.data.id,e.id,e.teamMembers)}},model:{value:e.teamMembers.advisor,callback:function(a){t.$set(e.teamMembers,"advisor",a)},expression:"trial.teamMembers.advisor"}})],1)])}))],1)]),t._v(" "),a("v-card-actions",[a("v-text-field",{attrs:{label:"Trial Name"},model:{value:t.trialName,callback:function(e){t.trialName=e},expression:"trialName"}}),t._v(" "),a("v-btn",{attrs:{flat:""},on:{click:t.onAddTrialClicked}},[t._v("Add a trial")])],1)],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},function(t,e,a){"use strict";var n=a(28),r=a(80),i=a(0),s=i(n.a,r.a,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("team-member-picker",{attrs:{type:"advisor"},model:{value:t.mock,callback:function(e){t.mock=e},expression:"mock"}})],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},,function(t,e){},function(t,e,a){"use strict";var n=a(1),r=a.n(n),i=a(6),s=a(19),o=a(84),c=a(85),l=a(87);i.a.use(s.a);var u=new s.a.Store({state:{isReady:!1},getters:{isReady:function(t){return t.isReady}},mutations:{setToReady:function(t){t.isReady=!0}},actions:{init:function(t){var e=t.dispatch,a=t.commit;e(o.a.TRIAL_GROUP.INIT).then(function(){a("setToReady")})}},modules:{trialGroups:c.a,characterList:l.a}});u.dispatch("init"),e.a=r()({},u,{ACTIONS:o.a})},function(t,e,a){"use strict";e.a={TRIAL_GROUP:{INIT:"trialGroups/initStore",ADD_GROUP:"trialGroups/addGroup",GET_GROUP:"trialGroups/getGroup",ADD_TRIAL:"trialGroups/addTrial",MODIFY_TEAM:"trialGroups/modifyTeam"},CHARACTER_LIST:{GET_LIST:"characterList/getList"}}},function(t,e,a){"use strict";var n=a(1),r=a.n(n),i=a(86),s=a.n(i),o=a(2),c=a(3),l={namespaced:!0,state:{groups:[],idCounter:0},getters:{groups:function(t){return t.groups},getGroup:function(t){return function(e){return r()({},t.groups.find(function(t){return t.id==e}))}}},mutations:{initStore:function(t,e){e&&(t.groups=e.groups,t.idCounter=e.idCounter)},addGroup:function(t,e){t.groups.push(r()({},e,{id:++t.idCounter,trials:[]}))},addTrial:function(t,e){var a=e.group,n=e.trialName;a.trials.push({title:n,id:++t.idCounter,teamMembers:{gold:new c.a(new o.a("","",null),60,""),black:new c.a(new o.a("","",null),60,""),white:new c.a(new o.a("","",null),60,""),advisor:new c.a(new o.a("","",null),60,"")}})},modifyTeam:function(t,e){var a=e.trial,n=e.team;a.teamMembers=n}},actions:{initStore:function(t){var e=t.commit;s.a.getItem("trialGroups").then(function(t){e("initStore",t)})},addGroup:function(t,e){var a=t.state;(0,t.commit)("addGroup",e),s.a.setItem("trialGroups",a)},addTrial:function(t,e){var a=t.state,n=t.commit,r=e.id,i=e.trialName;n("addTrial",{group:a.groups.find(function(t){return t.id==r}),trialName:i}),s.a.setItem("trialGroups",a)},modifyTeam:function(t,e){var a=t.state,n=t.commit,r=e.groupId,i=e.trialId,o=e.team;n("modifyTeam",{trial:a.groups.find(function(t){return t.id==r}).trials.find(function(t){return t.id==i}),team:o}),s.a.setItem("trialGroups",a)}}};e.a=l},,function(t,e,a){"use strict";var n=a(88),r={namespaced:!0,state:{list:n.a},getters:{getList:function(t){return function(e){return t.list[e]}}}};e.a=r},function(t,e,a){"use strict";var n=a(2);e.a={gold:[new n.a("Crushfang","gold"),new n.a("Dylan","gold")],black:[new n.a("Fatima","black"),new n.a("Ned","black")],white:[new n.a("Angelia","white"),new n.a("Aosta","white")],advisor:[new n.a("Crushfang","gold"),new n.a("Dylan","gold"),new n.a("Fatima","black"),new n.a("Ned","black"),new n.a("Angelia","white"),new n.a("Aosta","white")],monster:[new n.a("monster 1","monster"),new n.a("monster 2","monster")]}}],[29]);
//# sourceMappingURL=app.e76970c2f5a39435f768.js.map