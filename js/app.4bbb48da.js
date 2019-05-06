(function(e){function t(t){for(var i,a,s=t[0],l=t[1],c=t[2],f=0,p=[];f<s.length;f++)a=s[f],r[a]&&p.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2048:function(e,t,n){},"2bd6":function(e,t,n){"use strict";var i=n("2048"),r=n.n(i);r.a},"4acc":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-container"},[n("div",{staticClass:"play-area"}),n("div",{staticClass:"balls"},e._l(e.fBalls,function(e,t){return n("div",{key:t,staticClass:"ball",style:"margin-left: "+e.x+"px; margin-top: "+e.y+"px"})}),0),n("label",{ref:"player",staticClass:"player",attrs:{for:"player-input"}}),n("input",{attrs:{id:"player-input",type:"range",min:"0",max:"1000"},on:{keyup:e.barMove}}),n("div",{staticClass:"result-container"},[n("div",{staticClass:"level",domProps:{textContent:e._s("Level : "+e.level)}}),n("div",{staticClass:"point",domProps:{textContent:e._s("Point : "+e.point)}}),n("div",{staticClass:"time",domProps:{textContent:e._s("Time : "+parseInt(e.time/60)+" : "+e.time%60)}})])])},r=[],o=(n("ac6a"),n("3d20")),a=n.n(o),s={data:function(){return{width:window.innerWidth,height:window.innerHeight,point:0,level:1,time:0,ballTimer:null,gameTimer:null,pPosition:0,pRange:{left:0,right:300,top:window.innerHeight-150},initBalls:[{x:window.innerWidth/2-25,y:0,vecX:-1,vecY:2,alive:!0}],balls:[{x:window.innerWidth/2-25,y:0,vecX:-1,vecY:2,alive:!0}]}},watch:{pPosition:function(){this.pRange.left=(this.width-300)/1e3*this.pPosition,this.pRange.right=this.pRange.left+300,this.$refs["player"].style.marginLeft="".concat(this.pRange.left,"px")},fBalls:function(){var e=this;this.fBalls.length<1&&(clearInterval(this.gameTimer),clearInterval(this.ballTimer),this.balls=this.initBalls,a.a.fire("Your score!","".concat(this.point)).then(function(){a.a.fire("Press button to start").then(function(){e.gameTimer=setInterval(e.timeCount,1e3),e.ballTimer=setInterval(e.ballMove,10)})}))}},computed:{fBalls:function(){return this.balls.filter(function(e){return e.alive})}},mounted:function(){var e=this;a.a.fire("Press button to start").then(function(){e.gameTimer=setInterval(e.timeCount,1e3),e.ballTimer=setInterval(e.ballMove,10)})},methods:{barMove:function(e){"ArrowLeft"===e.key?this.pPosition=this.pPosition-100>-1?this.pPosition-100:0:"ArrowRight"===e.key&&(this.pPosition=this.pPosition+100<1001?this.pPosition+100:1e3)},ballMove:function(){var e=this;this.balls.forEach(function(t){var n=t.x+t.vecX,i=t.y+t.vecY;if((0>n||n+50>e.width)&&(t.vecX*=-1),i<0&&(t.vecY*=-1),t.x<=e.pRange.right&&t.x+50>=e.pRange.left&&i>e.pRange.top){t.vecY*=-1;var r=n-e.pRange.left;r>=250&&(t.vecX*=1+(300-r)/50),r<50&&(t.vecX*=1+r/50)}t.vecX=t.vecX>5*e.level?5*e.level:t.vecX,t.x+=t.vecX,t.y+=t.vecY,t.y>e.pRange.top&&(t.alive=!1)})},timeCount:function(){this.time+=1,parseInt(this.time/60)+1>this.level&&this.balls.forEach(function(e){e.vecX*=1.2,e.vecY*=1.2}),this.level=parseInt(this.time/60)+1,this.point+=10*this.level}}},l=s,c=(n("2bd6"),n("2877")),u=Object(c["a"])(l,i,r,!1,null,"39eea1f3",null);t["default"]=u.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=(n("5c0b"),n("2877")),s={},l=Object(a["a"])(s,r,o,!1,null,null,null),c=l.exports,u=n("8c4f");i["a"].use(u["a"]);var f=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"simpleArkanoid",component:function(){return n("4acc")}}]}),p=n("2f62");i["a"].use(p["a"]);var v=new p["a"].Store({state:{},mutations:{},actions:{}}),h=n("9483");Object(h["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["a"].config.productionTip=!1,new i["a"]({router:f,store:v,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("5e27"),r=n.n(i);r.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.4bbb48da.js.map