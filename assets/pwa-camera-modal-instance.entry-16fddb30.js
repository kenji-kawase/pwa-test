import{h as f,g as v,r as g,c as p}from"./index-251df35c.js";var d=globalThis&&globalThis.__awaiter||function(s,o,n,r){function i(e){return e instanceof n?e:new n(function(l){l(e)})}return new(n||(n=Promise))(function(e,l){function h(a){try{t(r.next(a))}catch(u){l(u)}}function c(a){try{t(r.throw(a))}catch(u){l(u)}}function t(a){a.done?e(a.value):i(a.value).then(h,c)}t((r=r.apply(s,o||[])).next())})},x=globalThis&&globalThis.__generator||function(s,o){var n={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},r,i,e,l;return l={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function h(t){return function(a){return c([t,a])}}function c(t){if(r)throw new TypeError("Generator is already executing.");for(;l&&(l=0,t[0]&&(n=0)),n;)try{if(r=1,i&&(e=t[0]&2?i.return:t[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,t[1])).done)return e;switch(i=0,e&&(t=[t[0]&2,e.value]),t[0]){case 0:case 1:e=t;break;case 4:return n.label++,{value:t[1],done:!1};case 5:n.label++,i=t[1],t=[0];continue;case 7:t=n.ops.pop(),n.trys.pop();continue;default:if(e=n.trys,!(e=e.length>0&&e[e.length-1])&&(t[0]===6||t[0]===2)){n=0;continue}if(t[0]===3&&(!e||t[1]>e[0]&&t[1]<e[3])){n.label=t[1];break}if(t[0]===6&&n.label<e[1]){n.label=e[1],e=t;break}if(e&&n.label<e[2]){n.label=e[2],n.ops.push(t);break}e[2]&&n.ops.pop(),n.trys.pop();continue}t=o.call(s,n)}catch(a){t=[6,a],i=0}finally{r=e=0}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}},b=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width: 600px){.content{width:100%;height:100%}}",m=function(){function s(o){var n=this;g(this,o),this.onPhoto=p(this,"onPhoto",7),this.noDeviceError=p(this,"noDeviceError",7),this.handlePhoto=function(r){return d(n,void 0,void 0,function(){return x(this,function(i){return this.onPhoto.emit(r),[2]})})},this.handleNoDeviceError=function(r){return d(n,void 0,void 0,function(){return x(this,function(i){return this.noDeviceError.emit(r),[2]})})},this.facingMode="user",this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image"}return s.prototype.handleBackdropClick=function(o){o.target!==this.el&&this.onPhoto.emit(null)},s.prototype.handleComponentClick=function(o){o.stopPropagation()},s.prototype.handleBackdropKeyUp=function(o){o.key==="Escape"&&this.onPhoto.emit(null)},s.prototype.render=function(){var o=this;return f("div",{class:"wrapper",onClick:function(n){return o.handleBackdropClick(n)}},f("div",{class:"content"},f("pwa-camera",{onClick:function(n){return o.handleComponentClick(n)},facingMode:this.facingMode,handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))},Object.defineProperty(s.prototype,"el",{get:function(){return v(this)},enumerable:!1,configurable:!0}),s}();m.style=b;export{m as pwa_camera_modal_instance};
