(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{2176:function(t,e,n){"use strict";n.r(e);var o=n(149),i=n.n(o),o=n(16),a=n.n(o),s=n(2195),c=n(2196),h=(n(151),n(859)),r=n(20),p=n(17),o=n(2210),l=n(2211),d=n(2132),u=n(2206);function m(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}o={data:function(){return this.themes=r.a,{visible:!1,comp:{name:"",ext:{},ccid:"",children:{}},baseData:{disName:"",size:[442,246],angle:0,opacity:1},size:{},theme:r.a[0],option:{},optionDes:{},source:{},sourceDes:{},actions:{},actionsDes:{},assets:{},data:[],tween:d.b,cid:"cid1001",resource:{jspaths:["",""],csspaths:["",""],otherpaths:[]}}},computed:{viewProps:function(){return f({cid:this.cid,option:this.option,data:this.data,theme:this.theme,assets:this.assets,tween:this.tween,resource:this.resource},this.size)},panelProps:function(){var t,e,n,o=this.comp.ccid,o=o&&this.comp.children[o];return f(f({},o?(t=(n=this.getPanelConfig(o.name)).optionDes,e=n.actionsDes,n=n.sourceDes,{option:o.option,source:o.source,actions:o.actions,optionDes:t,sourceDes:n,actionsDes:e,children:{disName:o.disName,name:o.name}}):{option:this.option,source:this.source,actions:this.actions,optionDes:this.optionDes,sourceDes:this.sourceDes,actionsDes:this.actionsDes}),{},{viewCompName:this.comp.name,baseData:this.baseData,theme:this.theme,ext:this.comp.ext,cid:this.cid,data:this.data,resource:this.resource})},showPanel:function(){return this.option},bgStyle:function(){return{background:this.theme.pageBackground}},compBgStyle:function(){return{opacity:this.baseData.opacity,transform:"rotate(".concat(this.baseData.angle,"deg)"),background:-1<this.comp.name.toLowerCase().indexOf("help")?"transparent":Object(p.i)(this.theme.background,.3)}}},components:{AnHeader:o.a,AnovPanel:l.a},mixins:[u.a],mounted:function(){this.initApp(),this.getCompName(),this.init()},methods:{changePanelState:function(){this.visible=!this.visible},init:function(){this.getComponent(this.comp.name)},initApp:function(){window.app={$emit:null,$on:null,$off:null,eventType:{setGlobalVar:"",showComponent:"",hideComponent:""},theme:{},components:{},globalVars:{},getElementByCid:function(t){},getComponentByCid:function(t){}}},childViewProps:function(t){var e=this.comp.children[t.cid],n=e.option,e=e.source,e=e&&(null==(e=e[e.type])?void 0:e.data);return{option:n,data:e="object"!=i()(e)?JSON.parse(e):e,cid:t.cid}},getCompName:function(){this.comp.name=this.$route.params.id||"AnSingleLine",this.getComponentExt()},getDefaultTheme:function(){var e=this;this.themes.some(function(t){if(t.default)return e.theme=t,!0})},handleAddComponent:function(t){var e=this.getPanelConfig(t.name),n=e.option,o=e.actions,i=e.source,a=e.data,e=e.optionDes;Object(h.b)({theme:this.theme,option:n,optionDes:e}),this.$set(this.comp.children,t.cid,f(f({},t),{},{option:n,actions:o,source:i,data:a}))},handleLoadPanel:function(){this.comp.ccid=0<arguments.length&&void 0!==arguments[0]&&arguments[0]?(1<arguments.length?arguments[1]:void 0).cid:null},handleSyncResource:function(t,e){switch(t){case"jspaths":Object(c.b)(e);break;case"csspaths":Object(c.a)(e)}},getPanelConfig:function(t){var e=this.$anov[t];if(e)return f(f({},e.getData()),e.getDataDes());console.warn("组件".concat(t,"不存在"))},getComponent:function(t){var t=this.getPanelConfig(t),e=t.option,n=t.actions,o=t.source,i=t.data,a=t.optionDes,s=t.sourceDes,t=t.actionsDes;e&&(this.size={},this.data=i,this.optionDes=a,this.sourceDes=s,this.actionsDes=t,this.option=e,this.source=o,this.actions=n||[],Object(h.b)({theme:this.theme,option:this.option,optionDes:this.optionDes}),this.getBaseData(),app.components[this.cid]={option:this.option,data:this.data})},getBaseData:function(){var e=this;setTimeout(function(){var t=e.$refs.comp;e.baseData.size=[t.width,t.height],e.baseData.opacity=1,e.baseData.angle=0})},changeName:function(t){this.baseData.disName=t},onChangeTheme:function(t){var e,n=this;this.theme=t,window.app&&(app.theme=t),Object(h.a)({theme:this.theme,option:this.option,optionDes:this.optionDes}),Object.keys(this.comp.children).forEach(function(t){e=n.comp.children[t];t=n.getPanelConfig(e.name).optionDes;Object(h.a)({theme:n.theme,option:e.option,optionDes:t})})},reset:function(){this.option={},this.optionDes={},this.source={},this.actions={},this.actionsDes={},this.data=[],this.comp.ccid="",this.comp.children={}},onChangeAnimation:function(t){this.tween=t},handleSetData:function(t){this.data=t,app.components[this.cid].data=t},handleGetData:function(){var e=this,t=this.source.api.url;t?Object(s.a)(t).then(function(t){200==t.status?e.source.api.data=t.data:e.source.api.data={error:!0,message:t.data.message}}).catch(function(t){e.source.api.data={error:!0,message:t.message}}):this.source.api.data=""},handleAddLog:function(t){this.$refs.panel.addLog(t)},handleDelLog:function(t){this.$refs.panel.delLog(t)}},watch:{$route:function(){this.getCompName(),this.reset(),this.getComponent(this.comp.name)},"baseData.size":function(t){this.size={width:t[0],height:t[1]}}}},n(2223),l=n(8),u=Object(l.a)(o,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticStyle:{overflow:"hidden"}},[o("an-header",{attrs:{catalog:[]},on:{changeTheme:n.onChangeTheme}}),o("a-icon",{staticClass:"op-btn",style:{right:n.visible?"320px":"0",color:n.theme.groups[0]},attrs:{type:n.visible?"menu-unfold":"menu-fold"},on:{click:n.changePanelState}}),o("div",{staticClass:"content"},[o("div",{ref:"anView",staticClass:"view",style:Object.assign({},n.bgStyle)},[o("div",{style:Object.assign({},n.compBgStyle)},[o(n.comp.name,n._b({ref:"comp",tag:"component",on:{handleAddLog:n.handleAddLog}},"component",n.viewProps,!1),n._l(n.option.children,function(t,e){return o(t.name,n._b({key:e,tag:"component"},"component",n.childViewProps(t),!1))}),1)],1)]),n.showPanel?o("anov-panel",n._b({ref:"panel",staticClass:"panel",style:{width:n.visible?"320px":"0"},on:{handleSetData:n.handleSetData,handleGetData:n.handleGetData,handleLoadPanel:n.handleLoadPanel,handleAddComponent:n.handleAddComponent,handleSyncResource:n.handleSyncResource,handleDelLog:n.handleDelLog}},"anov-panel",n.panelProps,!1)):n._e()],1)],1)},[],!1,null,"67f0eb8a",null);e.default=u.exports},2194:function(t,e,n){(t.exports=n(44)(!1)).push([t.i,".op-btn[data-v-67f0eb8a] {\n  top: 42px;\n  right: 2px;\n  color: #6f7683;\n  font-weight: bold;\n  font-size: 22px;\n  position: absolute;\n  z-index: 2;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.content[data-v-67f0eb8a] {\n  display: flex;\n  flex: 1 1 auto;\n  height: calc(100vh - 40px);\n  position: relative;\n}\n.content .panel[data-v-67f0eb8a] {\n  background: #282c34;\n  flex: 0 1 auto;\n  width: 0;\n  overflow-y: auto;\n  transition: all 0.3s;\n}\n.content .panel-open[data-v-67f0eb8a] {\n  width: 320px;\n}\n.content .view[data-v-67f0eb8a] {\n  flex: 1 1 auto;\n  position: relative;\n  padding: 20px;\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content .view > div[data-v-67f0eb8a] {\n  position: absolute;\n  padding: 20px 14px;\n}\n",""])},2208:function(e,t,n){var o=n(2194),i=("string"==typeof o&&(o=[[e.i,o,""]]),{hmr:!0}),a=(i.transform=void 0,i.insertInto=void 0,n(45)(o,i));o.locals&&(e.exports=o.locals),e.hot.accept(2194,function(){var t=n(2194);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(t,e){var n,o=0;for(n in t){if(!e||t[n]!==e[n])return!1;o++}for(n in e)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},2223:function(t,e,n){"use strict";n(2208)}}]);