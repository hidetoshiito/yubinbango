var e=[],t;!function(t){var r=function(){function t(t,r){if(void 0===t&&(t=""),this.URL="https://yubinbango.github.io/yubinbango-data/data",this.REGION=[null,"北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"],t){var n=t.replace(/[０-９]/g,function(t){return String.fromCharCode(t.charCodeAt(0)-65248)}),o=n.match(/\d/g),i=o.join(""),e=this.chk7(i);e&&this.getAddr(e,r)}}return t.prototype.chk7=function(t){return 7===t.length?t:void 0},t.prototype.selectAddr=function(e,t){return t[0]&&t[1]?{region_id:t[0],region:this.REGION[t[0]],locality:t[1],street:t[2],extended:t[3]}:void 0},t.prototype.jsonp=function(e,r){window.$yubin=function(t){return r(t)};var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("charset","UTF-8"),t.setAttribute("src",e),document.head.appendChild(t)},t.prototype.getAddr=function(t,n){var o=this,r=t.substr(0,3);this.cachecheck(t,r)?n(this.selectAddr(t,e[r][t])):this.jsonp(this.URL+"/"+r+".js",function(i){e[r]=i,n(o.selectAddr(t,i[t]))})},t.prototype.cachecheck=function(r,t){return e[t]?!0:void 0},t}();t.Core=r}(t||(t={}));var r=["Japan","JP","JPN","JAPAN"],n=["p-region","p-locality","p-street-address","p-extended-address"],t;!function(t){var e=function(){function e(){var t=this;document.addEventListener("DOMContentLoaded",function(){t.hadrloop()},!1)}return e.prototype.hadrloop=function(){var t=this,r=document.querySelectorAll(".h-adr");[].map.call(r,function(r){if(t.countryNameCheck(r)){var n=r.querySelectorAll(".p-postal-code");n[n.length-1].addEventListener("keyup",function(){e.prototype.applyDom(this.parentNode)},!1)}})},e.prototype.countryNameCheck=function(e){var t=e.querySelector(".p-country-name"),n=[t.innerHTML,t.value];return n.some(function(t){return r.indexOf(t)>=0})},e.prototype.applyDom=function(e){var r=this,n=e.querySelectorAll(".p-postal-code");new t.Core(this.reduceVal(n),function(t){return r.setAddr(e,t)})},e.prototype.reduceVal=function(t){return[].map.call(t,function(t){return t.value}).reduce(function(t,e){return t+e})},e.prototype.setAddr=function(t,e){var r=[this.postalFormClear,this.postalFormSet];r.map(function(r){return n.map(function(n){return r(n,t,e)})})},e.prototype.postalFormClear=function(t,e,r){if(r){var n=e.querySelectorAll("."+t);[].map.call(n,function(t){return t.value=""})}},e.prototype.postalFormSet=function(e,n,t){var r={"p-region":t.region,"p-locality":t.locality,"p-street-address":t.street,"p-extended-address":t.extended},o=n.querySelectorAll("."+e);[].map.call(o,function(t){return t.value+=r[e]?r[e]:""})},e}();t.MicroformatDom=e}(t||(t={})),new t.MicroformatDom;
//# sourceMappingURL=./yubinbango.js.map