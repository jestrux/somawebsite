(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],p=0,d=[];p<i.length;p++)s=i[p],o[s]&&d.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"52e2":function(e,t,n){"use strict";var r=n("69e9"),o=n.n(r);o.a},"53bc":function(e,t,n){"use strict";var r=n("fe9c"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r,o,a=n("a026"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"bcImageWrapper"}},[n("label",[e._v("\n        Source:\n         \n\n        "),null===e.src?n("div",[e.imageUploadUrl&&e.imageUploadUrl.length?n("button",{class:{active:0===e.source},on:{click:function(t){e.source=0}}},[n("svg",{attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}})]),e._v("\n                Upload\n            ")]):e._e(),n("button",{class:{active:1===e.source},on:{click:function(t){e.source=1}}},[n("svg",{attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}})]),e._v("\n                Link\n            ")]),e.unsplashClientId&&e.unsplashClientId.length?n("button",{class:{active:2===e.source},on:{click:function(t){e.source=2}}},[n("svg",{attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M18 13v7H4V6h5.02c.05-.71.22-1.38.48-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5l-2-2zm-1.5 5h-11l2.75-3.53 1.96 2.36 2.75-3.54zm2.8-9.11c.44-.7.7-1.51.7-2.39C20 4.01 17.99 2 15.5 2S11 4.01 11 6.5s2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21 13.42 22.42 12 19.3 8.89zM15.5 9C14.12 9 13 7.88 13 6.5S14.12 4 15.5 4 18 5.12 18 6.5 16.88 9 15.5 9z"}})]),e._v("\n                Search\n            ")]):e._e()]):e._e(),null!==e.src?n("button",{on:{click:function(t){e.src=null}}},[e._v("Change\n        ")]):e._e()]),null===e.src?n("div",[1===e.source?n("input",{attrs:{type:"text",placeholder:"Enter image link and press enter"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.src=t.target.value}}}):e.unsplashClientId&&e.unsplashClientId.length&&2===e.source?n("unsplash-search",{attrs:{"client-id":e.unsplashClientId,"per-page":"6"},model:{value:e.src,callback:function(t){e.src=t},expression:"src"}}):0===e.source&&e.imageUploadUrl&&e.imageUploadUrl.length?n("file-uploader",{attrs:{"image-upload-url":e.imageUploadUrl},model:{value:e.src,callback:function(t){e.src=t},expression:"src"}}):e._e()],1):e._e(),n("div",{attrs:{id:"imageWrapper"}},[null!==e.src?n("img",{attrs:{src:e.src,alt:""}}):e._e()])])},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"fileUploader"}},[e.src?n("img",{attrs:{src:e.src,alt:"",width:"100%"}}):n("div",{attrs:{id:"audioDrop"}}),e.uploading?n("div",{attrs:{id:"loader"}},[n("span"),e._v("\n    Uploading... "+e._s(e.progress)+"%\n  ")]):e._e()])},c=[],u=(n("7f7f"),n("1743")),p=n("bc3a"),d=n.n(p),f="";function g(e,t){r=new u["a"],f=t,e.addEventListener("dragover",h,!1),e.addEventListener("dragleave",h,!1),e.addEventListener("drop",v,!1)}function h(e){e.stopPropagation(),e.preventDefault(),"dragover"==e.type?e.target.classList.add("hover"):e.target.classList.remove("hover")}function v(e){e.stopPropagation(),e.preventDefault(),h(e);var t=e.target.files||e.dataTransfer.files;if(t&&t.length){var n=t[0];if(-1!=n.type.indexOf("image")){var o=new FileReader;o.onload=function(e){r.emit("loaded",n,e.target.result),m(n)},o.readAsDataURL(n)}else r.emit("nonimage",n.name)}}function m(e){var t={headers:{"content-type":"multipart/form-data"},onUploadProgress:function(e){var t=e.loaded/e.total*100;console.log(t),r.emit("progress",t)}},n=new FormData;n.append("photo",e),d.a.post(f,n,t).then(function(e){console.log(e)}).catch(function(e){console.log(e),r.emit("complete",!1)})}var _={props:{imageUploadUrl:String,location:String},data:function(){return{uploading:!1,progress:0,src:""}},mounted:function(){o=this,g(this.$el,this.imageUploadUrl),console.log(this.imageUploadUrl),r.once("loaded",function(e,t){o.src=t,o.uploading=!0}),r.once("progressed",function(e){console.log("Progress changed: ",e),o.progress=e}),r.once("complete",function(e,t){o.uploading=!1,console.log("Completed successfully: ",e),e&&o.$emit("input",t)})},methods:{}},y=_,b=(n("52e2"),n("2877")),U=Object(b["a"])(y,l,c,!1,null,"00f6248c",null);U.options.__file="FileUploader.vue";var k=U.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wrapper"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Enter keywords and press enter"},domProps:{value:e.query},on:{keydown:function(t){e.typing=!0},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.searchUnsplash(t.target.value)},input:function(t){t.target.composing||(e.query=t.target.value)}}}),e.fetched&&e.results.length>e.perPage?n("div",{attrs:{id:"movers"}},[n("button",{class:{clickable:e.page>1},on:{click:function(t){e.page=e.page-1}}},[e._v("Prev")]),e._v("\n     \n    "),n("button",{class:{clickable:e.results.length>e.page*e.perPage},on:{click:function(t){e.page=e.page+1}}},[e._v("Next")])]):e._e(),e.fetched&&e.results.length?n("div",{attrs:{id:"results"}},e._l(e.results,function(t,r){return r>=(e.page-1)*e.perPage&&r<e.page*e.perPage?n("img",{key:r,style:{background:t.color},attrs:{src:t.urls.small,alt:""},on:{click:function(n){e.selectImage(t.urls.full)}}}):e._e()})):e._e(),!e.typing&&(e.fetching||e.fetch_error||e.fetched&&!e.results.length)?n("div",{attrs:{id:"emptyMessage"}},[e.fetching?n("span",[e._v("\n      Fetching images....\n    ")]):e.fetch_error?n("span",{staticStyle:{color:"#dd5555"}},[e._v("\n      An error occured fetching images, check your network connection and try again.\n    ")]):e.results.length?e._e():n("span",[e._v("\n      No results found for "),n("strong",[e._v(e._s(e.query))])])]):e._e()])},x=[],P=(n("a916"),{props:{perPage:{type:String,default:10},clientId:String},data:function(){return{fetching:!1,fetched:!1,fetch_error:!1,query:"",page:1,results:[],typing:!1}},mounted:function(){this},methods:{searchUnsplash:function(e){var t=this;this.fetching=!0,this.fetched=!1,this.fetch_error=!1,this.results=[],this.page=1,this.typing=!1,d.a.get("https://api.unsplash.com/search/photos",{params:{query:e,perPage:30,client_id:this.clientId}}).then(function(e){var n=e.data.results.map(function(e){var t=e.color,n=e.description,r=e.urls,o=e.user;return{color:t,description:n,urls:r,user:o}});t.fetched=!0,t.results=n,t.fetching=!1,console.log("Api result",n)}).catch(function(e){t.fetched=!0,t.fetching=!1,t.fetch_error=!0,console.log("Api error",e)})},selectImage:function(e){this.$emit("input",e)}}}),S=P,C=(n("5930"),Object(b["a"])(S,w,x,!1,null,"9f960634",null));C.options.__file="UnsplashSearch.vue";var M=C.exports,O={props:{imageUploadUrl:String,unsplashClientId:String},mounted:function(){this.source=this.imageUploadUrl&&this.imageUploadUrl.length?0:1},data:function(){return{src:null,source:1}},components:{FileUploader:k,UnsplashSearch:M}},I=O,j=(n("53bc"),Object(b["a"])(I,s,i,!1,null,"448b1e23",null));j.options.__file="BCImageField.vue";var z=j.exports;window._=n("2ef0"),window.axios=n("bc3a"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",a["a"].config.productionTip=!1,a["a"].component("blog-creator",z),new a["a"]({el:"#app"})},5930:function(e,t,n){"use strict";var r=n("6284"),o=n.n(r);o.a},6284:function(e,t,n){},"69e9":function(e,t,n){},fe9c:function(e,t,n){}});
//# sourceMappingURL=app.js.map