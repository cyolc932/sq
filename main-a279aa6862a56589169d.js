(()=>{var e,t,a,r,n,i,o={21:(e,t,a)=>{"use strict";a.r(t)},255:(e,t,a)=>{"use strict";a.r(t)},42:(e,t,a)=>{var r={"./dark.css":21,"./global.css":255};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id=42},282:(e,t,a)=>{"use strict";a.d(t,{i:()=>n});var r=a(754),n={cookie:function(e,t,a){if(1==arguments.length){var r=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=r?r[2]:null}var n=e+"="+t+";path=/";if(a){var i=new Date;i.setTime(i.getTime()+a),n+=";expires="+i.toGMTString()}document.cookie=n},htmlEncode:e=>e.replace(/[\u00A0-\u9999<>\&]/g,(e=>"&#"+e.charCodeAt(0)+";")),toQueryString:e=>{if("Object"==n.type(e))for(const t in e)null===e[t]&&(e[t]="");return new URLSearchParams(e).toString()},toQueryJson:e=>Object.fromEntries(new FormData(e)),setFormValue:(e,t)=>{for(const n in t){var a=t[n];a=null===a?"":`${a}`;var r=e.querySelector(`[name="${n}"]`);r&&(r.value=`${a}`)}},setFormDisabled:(e,t,a)=>{var r=(a||"").split(",");e.querySelectorAll("[name]").forEach((e=>{(null==a||r.includes(e.name))&&(e.disabled=t)}))},setElementLoading:(e,t)=>{e.querySelectorAll("sl-button,sl-input,sl-select").forEach((e=>{"SL-BUTTON"==e.nodeName&&"text"!=e.variant?e.loading=t:e.readonly=t}))},buildSelect:(e,t,a)=>{var r=e.map((e=>`<sl-menu-item value="${e.value}">${e.text}</sl-menu-item>`));a&&r.unshift(`<sl-menu-item value="${a.value}">${a.text}</sl-menu-item>`),t.innerHTML=r.join(""),a&&(t.value=a.value)},cssvar:(e,t,a)=>{if(null==a)return getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,a)},type:function(e){return{}.toString.call(e).split(" ")[1].replace("]","")},sleep:e=>new Promise((t=>setTimeout((()=>t()),e||1e3))),error:()=>{throw new Error("Fake Error")},dangerReplace:e=>e.replace(/[^a-zA-Z0-9_]+/g,""),regexDanger:/[^a-zA-Z0-9_]+/,isDanger:e=>n.regexDanger.test(e),regexBigNumber:/":\s*((-?\d{15,50})[,}]|(-?\d{15,50}\.\d{1,4}))/gm,parseBigNumberJSON:e=>{e=e.replace(n.regexBigNumber,(function(e,t){var a=e.includes(".")?"":e.slice(-1);return e=`":"${e.slice(2,-1)}"${a}`}));var t=JSON.parse(e);return console.debug(t),t},arrayDistinct:e=>Array.from(new Set(e)),groupBy:(e,t)=>Array.from(new Set(e.map(t))),byteLength:e=>{var t=0;return Array.from(e).map((function(e){t+=e.charCodeAt(0)>255?2:1})),t},formatByteSize:function(e,t=2,a=1024){if(Math.abs(e)<a)return e+" B";const r=1e3==a?["KB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let n=-1;const i=10**t;do{e/=a,++n}while(Math.round(Math.abs(e)*i)/i>=a&&n<r.length-1);return(1*e.toFixed(t)).toString()+" "+r[n]},formatDateTime:(e,t)=>{switch(n.type(t)){case"String":case"Number":t=new Date(t);break;default:t=new Date}switch(e=e||"yyyy-MM-dd HH:mm:ss"){case"date":e="yyyy-MM-dd";break;case"time":e="HH:mm:ss";break;case"datetime":e="yyyy-MM-dd HH:mm:ss"}return[["yyyy",t.getFullYear()],["MM",t.getMonth()+1],["dd",t.getDate()],["HH",t.getHours()],["mm",t.getMinutes()],["ss",t.getSeconds()],["fff",t.getMilliseconds()]].reduce(((e,t)=>e.replace(t[0],`${t[1]}`.padStart(t[0].length,"0"))),e)},now:()=>n.formatDateTime("datetime"),toast:function(e,t="primary",a="info-circle",r=6e3){const n=Object.assign(document.createElement("sl-alert"),{type:t,closable:!0,duration:r,innerHTML:`<sl-icon name="${a}" slot="icon"></sl-icon><div class="text-break">${e}</div>`});if(document.body.append(n),n.toast)return n.toast()},alert:(e,t,a="50em")=>{null==r.u.domAlert&&(r.u.domAlert=document.createElement("sl-dialog"),document.body.appendChild(r.u.domAlert),r.u.domAlert.addEventListener("click",(function(e){"primary"==e.target.getAttribute("variant")&&r.u.domAlert.hide()}),!1)),r.u.domAlert.label=t||"","full"==a&&(a="98vw"),r.u.domAlert.setAttribute("style",`--width:${a}`),r.u.domAlert.innerHTML='<div></div><sl-button slot="footer" variant="primary">关闭</sl-button>';try{var n=JSON.stringify(JSON.parse(e),null,2),i=document.createElement("pre");i.className="m-0",i.innerText=n,r.u.domAlert.firstElementChild.appendChild(i)}catch(t){r.u.domAlert.firstElementChild.innerHTML=e}r.u.domAlert.show&&r.u.domAlert.show()},confirm:(e,t,a="50em")=>new Promise((n=>{null==r.u.domConfirm&&(r.u.domConfirm=document.createElement("sl-dialog"),r.u.domConfirm.innerHTML='<div class="nr-confirm-message"></div>\n            <sl-button class="nr-confirm-cancel" slot="footer">取消</sl-button>\n            <sl-button class="nr-confirm-ok" slot="footer" variant="primary">确定</sl-button>',document.body.appendChild(r.u.domConfirm)),r.u.domConfirm.label=t||"确认",r.u.domConfirm.setAttribute("style",`--width:${a}`),r.u.domConfirm.querySelector("div.nr-confirm-message").innerHTML=e;var i=function(){r.u.domConfirm.removeEventListener("sl-request-close",i),r.u.domConfirm.hide(),n(!1)};r.u.domConfirm.addEventListener("sl-request-close",i),r.u.domConfirm.querySelector("sl-button.nr-confirm-cancel").onclick=()=>{r.u.domConfirm.hide(),n(!1)},r.u.domConfirm.querySelector("sl-button.nr-confirm-ok").onclick=()=>{r.u.domConfirm.hide(),n(!0)},r.u.domConfirm.show()})),UUID:()=>window.crypto?crypto.randomUUID():URL.createObjectURL(new Blob([])).split("/").pop(),download:function(e,t){var a=document.createElement("a"),r=new Blob([e]);a.download=t,a.href=URL.createObjectURL(r),document.body.appendChild(a),a.click(),URL.revokeObjectURL(r),a.remove()},readFileContent:(e,t="utf-8")=>new Promise(((a,r)=>{const n=new FileReader;n.onloadend=()=>a(n.result),n.onerror=()=>r(),n.readAsText(e,t)})),clipboard:async e=>{if(n.supportClipboard)return null==e?await navigator.clipboard.readText():await navigator.clipboard.writeText(e);if(null!=e){var t=document.createElement("textarea");return t.value=e,t.style.position="fixed",t.style.opacity=0,document.body.appendChild(t),t.select(),window.document.execCommand("Copy"),t.remove(),e}return ndkI18n.lg.unsupported},supportClipboard:window.isSecureContext&&null!=navigator.clipboard}},566:(e,t,a)=>{"use strict";a.d(t,{f:()=>l});var r=a(754),n=a(934),i=a(477),o=a(282),l={init:async()=>{var e=o.i.cookie("nr-theme")||"light";await l.setTheme(e),await l.buildDialogToken(),await l.buildDom(),l.bindEvent();var t=(location.hash.length>1?location.hash:location.pathname).substring(1).split("/");""!=t[0]&&(r.u.markName=t[0]),null!=t[1]&&""!=t[1]&&(r.u.markResp=t[1]),null!=t[2]&&""!=t[2]&&(r.u.markLibs=t[2]);var a=await l.getPackage("localforage");i.n.init(a);var n=await i.n.instanceCache.getItem("local");!0===n&&(r.u.markLocalUsed=n,r.u.domDdMore.querySelector('[data-action="local"]').checked=!0);var s=await i.n.instanceCache.getItem("uuid-token-github");null!=s&&s.length>10&&(r.u.markToken=s,r.u.domDdMore.querySelector('[data-action="token"]').checked=!0);var d=await i.n.instanceCache.getItem("proxy");!0===d&&(r.u.markProxyUsed=d,r.u.domDdMore.querySelector('[data-action="proxy"]').checked=!0),r.u.domLoading.classList.add("d-none"),r.u.domLayout.classList.remove("invisible"),document.body.style.removeProperty("background-color"),document.body.style.removeProperty("color"),await l.load()},load:async()=>{r.u.domBtnRefresh.loading=!0,await l.viewUser(),await l.viewTable(),r.u.domBtnRefresh.loading=!1,await l.runEvent("resize");try{var e=await i.n.instanceUser.getItem(`${r.u.markName}:update-time`);e&&Date.now()-e>6048e5&&(await l.reqUser(r.u.markName,!0),await l.reqLibs(r.u.markName,r.u.markResp,r.u.markLibs,!0))}catch(e){}},getPackage:async e=>{if(!(e in window)){console.debug(`import ${e}`),l.reqStatus();try{switch(e){case"bootstrap":Promise.all([a.e(779),a.e(318)]).then(a.bind(a,318));break;case"marked":window[e]=await a.e(441).then(a.bind(a,441));break;case"localforage":window[e]=await a.e(483).then(a.t.bind(a,483,23));break;case"shoelace":a.e(996).then(a.bind(a,996)),a.e(688).then(a.bind(a,688)),window[e]=await a.e(622).then(a.bind(a,622));break;case"agGrid":Promise.all([a.e(160),a.e(980)]).then(a.bind(a,980)),Promise.all([a.e(594),a.e(477)]).then(a.bind(a,976)),Promise.all([a.e(904),a.e(388)]).then(a.bind(a,388));var t=await a.e(906).then(a.bind(a,906));window.nrGrid=(await Promise.resolve().then(a.bind(a,934))).nrGrid,t.LicenseManager.prototype.outputMissingLicenseKey=e=>{},window[e]=t}}catch(t){l.logError(t,`加载包 ${e} 失败`)}l.reqStatus(!0)}return window[e]},buildDom:async()=>{var e=document.createElement("div");r.u.domLayout=e,e.className="invisible",e.innerHTML='\n<sl-progress-bar class="nr-req-progress invisible" indeterminate style="--height: 3px;"></sl-progress-bar>\n<div class="container-fluid">\n    <div class="row mt-2">\n        <div class="col-auto mb-2">\n            <sl-dropdown class="nr-dd-user">\n                <img class="nr-img-avatar rounded" slot="trigger" style="height:1.9em;width:1.9em;" src="/favicon.ico" >\n                <sl-menu class="d-none"></sl-menu>\n            </sl-dropdown>\n        </div>\n        <div class="col mb-2">\n            <sl-input class="nr-txt-filter w-100" placeholder="Search.. Enter / Ctrl+Q " title="Ctrl + Q Search" size="small"></sl-input>\n        </div>\n        <div class="col-sm-auto">\n            <sl-button class="nr-btn-expand mb-2" size="small" data-action="expand" title="展开折叠">Fold</sl-button>\n            <sl-button class="nr-btn-refresh mb-2" size="small" data-action="refresh" title="刷新缓存">Refresh</sl-button>\n\n            <sl-dropdown class="nr-dd-more">\n                <sl-button class="mb-2" size="small" slot="trigger" caret>More</sl-button>\n                <sl-menu>\n                    <sl-menu-item data-action="theme">主题 Theme</sl-menu-item>\n                    <sl-divider></sl-divider>\n                    <sl-menu-item data-action="local" title="私有化部署 Privatization deployment">本地 Local</sl-menu-item>\n                    <sl-menu-item data-action="token">设置 Token</sl-menu-item>\n                    <sl-menu-item data-action="proxy" title="使用代理 use proxy">代理 Proxy</sl-menu-item>\n                    <sl-menu-item data-action="check" title="检测链接状态 Check link status">检测 Check</sl-menu-item>\n                    <sl-menu-item data-action="clear-cache" title="清理缓存 Clear cache">清理 Cache</sl-menu-item>\n                    <sl-divider></sl-divider>\n                    <sl-menu-item data-action="convert" title="转换浏览器导出的 HTML 书签">转换 Convert</sl-menu-item>\n                    <sl-menu-item data-action="about">关于 About</sl-menu-item>\n                </sl-menu>\n            </sl-dropdown>\n        </div>\n        </div>\n        <div class="nr-grid col-12 mt-1">\n        </div>\n    </div>\n</div>\n',document.body.appendChild(e),l.buildObjNode(document.body,"nr-",r.u)},buildObjNode:(e,t,a)=>{e.querySelectorAll("*").forEach((e=>{if(e.classList.value.startsWith(t)){var r="dom";e.classList[0].substring(3).split("-").forEach((e=>r+=e.substring(0,1).toUpperCase()+e.substring(1))),r in a||(a[r]=e)}}))},bindEvent:()=>{document.body.addEventListener("click",(async function(e){var t=e.target;t.dataset.action?l.bindAction(t.dataset.action,t):t.dataset.href&&window.open(t.dataset.href)})),document.body.addEventListener("keydown",(function(e){e.ctrlKey&&"q"==e.key.toLowerCase()?r.u.domTxtFilter.focus():["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)&&document.activeElement==document.body&&r.u.grid.api.setFocusedCell(0,"libs")})),window.addEventListener("resize",(()=>l.runEvent("resize")))},runEvent:async(e,t)=>{if("resize"===e){var a=r.u.domGrid.getBoundingClientRect().top+15;r.u.domGrid.style.height=`calc(100vh - ${a}px)`}},bindAction:async(e,t)=>{switch(e){case"theme":await l.setTheme(l.isDark()?"light":"dark");break;case"expand":r.u.grid&&(1!=r.u.markExpand?(r.u.grid.api.collapseAll(),r.u.markExpand=!0,r.u.domBtnExpand.innerHTML="Expand"):(r.u.grid.api.expandAll(),r.u.markExpand=!1,r.u.domBtnExpand.innerHTML="Fold"));break;case"token":await r.u.domDialogToken.show();break;case"local":var a=`https://github.com/${r.u.markName}/${r.u.markResp}`,n=`线上 GitHub (<a href="${a}">${a}</a>)`,s=new URL(r.u.markLocalPath,location).href,d=`本地 Local (<a href="${s}">${s}</a>)`,u='<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M448 789.312V0h128v789.312l234.688-234.624L896 640l-384 384-384-384 85.312-85.312L448 789.312z" fill="#373D41"></path></svg>',c=r.u.markLocalUsed?`${d}<div class="my-2">${u}</div>${n}`:`${n}<div class="my-2">${u}</div>${d}`;await o.i.confirm(c,"切换 switch")&&(r.u.markLocalUsed=!r.u.markLocalUsed,await i.n.instanceCache.setItem("local",r.u.markLocalUsed),r.u.domDdMore.querySelector('[data-action="local"]').checked=r.u.markLocalUsed,location.reload());break;case"proxy":r.u.markProxyUsed=!r.u.markProxyUsed,await i.n.instanceCache.setItem("proxy",r.u.markProxyUsed),r.u.domDdMore.querySelector('[data-action="proxy"]').checked=r.u.markProxyUsed;break;case"refresh":var m=await i.n.instanceUser.keys();for(const e of m)e.startsWith(`${r.u.markName}:`)&&await i.n.instanceUser.removeItem(e);await l.load();break;case"convert":await l.buildDialogConvert(),await r.u.domDialogConvert.show();break;case"clear-cache":(await caches.keys()).forEach((e=>caches.delete(e)));break;case"about":o.i.alert('\n<div>Source: <a href="https://github.com/netnr/uuid">https://github.com/netnr/uuid</a></div>\n<div>联系打赏: <a href="https://zme.ink">https://zme.ink</a></div>\n<sl-divider></sl-divider>\n<div>Fork 项目，从浏览器导出书签 HTML，再转换书签为 Markdown，保存到 libs/*.md</div>\n<div class="mt-2">缓存后可离线使用，表格虚拟滚动，流畅支持海量书签</div>\n<sl-divider></sl-divider>\n<div>私有化部署 dist，再把 libs 文件夹拷贝到 dist，更新索引文件 libs/index.json，再启用本地 Local</div>\n',"About 关于");break;case"check":if(r.u.grid)if(r.u.markChecking)r.u.markChecking=!1;else{var h=r.u.grid.api.getSelectedNodes();if(h.length){r.u.grid.api.expandAll(),r.u.markCheckResult.ok=[],r.u.markCheckResult.bad=[],r.u.markChecking=!0,r.u.domDdMore.querySelector('[data-action="check"]').checked=!0;var p=r.u.grid.columnApi.getColumn("ahref");for(const e of h){if(!r.u.markChecking)break;r.u.grid.api.ensureIndexVisible(e.rowIndex),r.u.grid.api.flashCells({rowNodes:[e]});var g=!1,f=await l.reqCheck(e.data.ahref);null==f||0==f.ok?r.u.markCheckResult.bad.push(e.data.ahref):(g=!0,r.u.markCheckResult.ok.push(e.data.ahref)),e.data.acheck=g,r.u.grid.api.applyTransaction({update:[e.data]}),r.u.grid.api.refreshCells({force:!0,columns:[p],rowNodes:[e]})}r.u.markChecking=!1,r.u.domDdMore.querySelector('[data-action="check"]').checked=!1,r.u.markCheckResult.bad.length?o.i.alert(r.u.markCheckResult.bad.join("<br/>"),"检测异常结果"):o.i.toast("链接访问正常")}else o.i.alert("请选择多行")}}},isDark:()=>document.documentElement.classList.contains("sl-theme-dark"),setTheme:async e=>{document.documentElement.classList.remove("sl-theme-light"),document.documentElement.classList.remove("sl-theme-dark"),document.documentElement.classList.add(`sl-theme-${e}`);var t=`${r.u.flagGridTheme}-dark`;document.querySelectorAll("div.nr-grid").forEach((a=>{"dark"==e?(a.classList.remove(r.u.flagGridTheme),a.classList.add(t)):(a.classList.remove(t),a.classList.add(r.u.flagGridTheme))})),await l.runEvent("theme",e),o.i.cookie("nr-theme",e,31536e6)},dialogSuppressHide:e=>{e.addEventListener("sl-request-close",(e=>{"keyboard,overlay".includes(e.detail.source)&&e.preventDefault()}))},logError:(e,t)=>{null!=t&&window.shoelace&&o.i.toast(t),console.debug(`${e}`)},reqStatus:e=>{r.u.domReqProgress&&(e?r.u.markReqCount>0&&r.u.markReqCount--:r.u.markReqCount++,r.u.markReqCount>0?r.u.domReqProgress.classList.remove("invisible"):r.u.domReqProgress.classList.add("invisible"))},reqServer:async(e,t)=>{try{if((t=t||{}).cache="no-cache",null!=r.u.markToken&&r.u.markToken.length>10&&!e.includes("githubusercontent")&&(t.headers=t.headers||{},t.headers.authorization=`token ${r.u.markToken}`),r.u.markProxyUsed&&!r.u.markLocalUsed)e=`${l.getProxy("proxy")}${encodeURIComponent(e)}`;l.reqStatus();var a=await fetch(e,t);if(0==a.ok)throw console.debug(a),l.reqStatus(!0),[401,403,502].includes(a.status)&&o.i.toast("设置 Token"),new Error(`${a.status} ${a.statusText}`);var n=await a.text();return l.reqStatus(!0),n}catch(t){return l.reqStatus(!0),l.logError(t,`请求失败：${e}`),null}},reqHeadersWWW:e=>Object.assign({"content-type":"application/x-www-form-urlencoded"},e),reqCheck:async e=>{try{var t=l.getProxy("check");return await fetch(`${t}${encodeURIComponent(e)}`,{cache:"no-cache"})}catch(t){return l.reqStatus(!0),l.logError(t,`请求失败：${e}`),null}},reqUser:async(e,t)=>{var a=`https://api.github.com/users/${e}`,r=`${e}:${a}`,n=await i.n.instanceUser.getItem(r);return(null==n||t)&&null!=(n=await l.reqServer(a))&&(n=JSON.parse(n),await i.n.instanceUser.setItem(r,n),await i.n.instanceUser.setItem(`${e}:update-time`,Date.now())),n},reqLibs:async(e,t,a,r)=>{var n=`https://api.github.com/repos/${e}/${t}/contents/${a}`,o=`${e}:${n}`,s=await i.n.instanceUser.getItem(o);return(null==s||r)&&null!=(s=await l.reqServer(n))&&(s=JSON.parse(s),await i.n.instanceUser.setItem(o,s)),s},reqRaw:async e=>{var t=`${r.u.markName}:${e}`,a=await i.n.instanceUser.getItem(t);return null==a&&null!=(a=await l.reqServer(e))&&await i.n.instanceUser.setItem(t,a),a},getProxy:function(e){switch(e){case"proxy":var t=r.u.markProxyServer[r.u.markProxyIndex++];return r.u.markProxyIndex==r.u.markProxyServer.length&&(r.u.markProxyIndex=0),t;case"check":t=r.u.markCheckServer[r.u.markCheckIndex++];return r.u.markCheckIndex==r.u.markCheckServer.length&&(r.u.markCheckIndex=0),t}},buildDialogToken:async()=>{if(null==r.u.domDialogToken){let e=document.createElement("sl-dialog");e.label="Token（令牌）",e.innerHTML='\n<div>Refresh after pasting</div>\n<div>Anonymous access is limited (60 per hour)</div>\n<sl-input class="my-3" placeholder="token"></sl-input>\n<div><a target="_blank" href="https://github.com/settings/tokens">https://github.com/settings/tokens</a></div>\n',document.body.appendChild(e),r.u.domDialogToken=e,e.addEventListener("sl-show",(async function(t){t.target==this&&null!=r.u.markToken&&r.u.markToken.length>10&&(e.querySelector("sl-input").value=r.u.markToken)})),e.querySelector("sl-input").addEventListener("input",(async function(e){this.value.length>10?(r.u.markToken=this.value,r.u.domDdMore.querySelector('[data-action="token"]').checked=!0,await i.n.instanceCache.setItem("uuid-token-github",r.u.markToken)):(r.u.markToken=null,r.u.domDdMore.querySelector('[data-action="token"]').checked=!1,await i.n.instanceCache.removeItem("uuid-token-github"))}))}},buildDialogConvert:async()=>{if(null==r.u.domDialogConvert){let e=r.u.domDialogConvert=document.createElement("sl-dialog");e.style="--width:90vw",e.label="Convert HTML bookmarks（转换书签）",e.innerHTML='\n<div class="row mt-3">\n    <div class="col-md-6">\n        <input type="file" class="mb-2 w-100" />\n        <textarea class="w-100 p-3"></textarea>\n    </div>\n    <div class="col-md-6">\n        <div class="nr-card-preview overflow-auto"></div>\n    </div>\n</div>\n',document.body.appendChild(e),e.querySelector(".nr-card-preview").style.height="calc(100vh - 260px)",e.querySelector("input").addEventListener("change",(async function(t){var a=this.files[0];if(a){var r=await o.i.readFileContent(a),n=[],i=document.createElement("div");i.innerHTML=r,n.push("# "+i.querySelector("h1").innerHTML),l.convertHtml(i,n);var s=n.join("\r\n");e.querySelector("textarea").value=s;var d=await l.getPackage("marked");e.querySelector(".nr-card-preview").innerHTML=d.parse(s),this.value=""}})),e.querySelector("textarea").addEventListener("input",(async function(){var t=await l.getPackage("marked");e.querySelector(".nr-card-preview").innerHTML=t.parse(this.value)})),e.addEventListener("sl-show",(async function(t){t.target==this&&(e.querySelector("textarea").style.height="calc(100% - 55px)")}))}},convertHtml:(e,t)=>{for(var a=0;a<e.children.length;a++){var r=e.children[a];switch(r.nodeName){case"H3":t.push(""),t.push("### "+r.innerHTML);break;case"DL":case"P":l.convertHtml(r,t);break;case"DT":if(1==r.children.length){var n=r.querySelector("a");t.push("- ["+n.innerHTML.replace(/`/g,"\\`")+"]("+n.href+")")}else l.convertHtml(r,t)}}},viewUser:async()=>{var e;if(r.u.markLocalUsed){var t=await l.reqServer(r.u.markLocalPath);try{r.u.markLocalJson=JSON.parse(t),e=r.u.markLocalJson.user}catch(e){}}else e=await l.reqUser(r.u.markName);if(e){r.u.domImgAvatar.onerror=function(){r.u.domImgAvatar.src="/favicon.ico",r.u.domImgAvatar.onerror=!1},r.u.domImgAvatar.src=e.avatar_url;var a=r.u.domImgAvatar.nextElementSibling;a.classList.remove("d-none");var n=null==e.name?e.login:`${e.login} (${e.name})`,i=null==e.bio?"":`<sl-menu-item title="bio">${e.bio}</sl-menu-item>`,o=null==e.company?"":`<sl-menu-item title="company">${e.company}</sl-menu-item>`,s=null==e.location?"":`<sl-menu-item title="location">${e.location}</sl-menu-item>`,d=null==e.blog?"":`<sl-menu-item title="blog" data-href="${e.blog}">${e.blog}</sl-menu-item>`;a.innerHTML=`\n<sl-menu-item title="name" data-href="https://github.com/${e.login}">${n}</sl-menu-item>\n${i}\n<sl-divider></sl-divider>\n${o}${s}${d}\n`,document.title=`${e.login} - ${r.u.flagTitle}`}},viewTable:async()=>{var e;if(r.u.markLocalUsed)try{e=r.u.markLocalJson.libs||[]}catch(e){}else e=await l.reqLibs(r.u.markName,r.u.markResp,r.u.markLibs);if(e){var t=await l.getPackage("marked"),a=["H1","H2","H3","H4","H5","H6"],i=[];for(const n of e)if("file"==n.type&&n.name.endsWith(r.u.markSuffix)){var o=n.name.substring(0,n.name.length-r.u.markSuffix.length),s=null;if(n.name.endsWith(r.u.markSuffix)){var d=await l.reqRaw(n.download_url);if(d){var u=document.createElement("div");u.innerHTML=t.parse(d),u.querySelectorAll("*").forEach((e=>{a.includes(e.nodeName)?s=e.innerText:"A"==e.nodeName&&i.push({libs:o,head:s,atext:e.innerText,ahref:e.href,atitle:e.title})}))}}}r.u.markChecking&&await l.bindAction("check");var c=[{field:"libs",headerName:"类别",width:240,filter:!0,filterParams:{buttons:["reset"]},rowGroup:!0,enableRowGroup:!0,cellRenderer:e=>`<span style="margin-left: 2.5em">${e.value}</span>`},{field:"head",headerName:"小组",width:240,filter:!0,filterParams:{buttons:["reset"]},rowGroup:!0,enableRowGroup:!0},{field:"atext",headerName:"名称",width:300,filterParams:{buttons:["reset"]}},{field:"ahref",headerName:"链接",minWidth:300,flex:1,filterParams:{buttons:["reset"]},cellStyle:e=>{if(e.data){if(!0===e.data.acheck)return{color:"var(--sl-color-success-500)"};if(!1===e.data.acheck)return{color:"var(--sl-color-warning-500)"}}}},{field:"atitle",headerName:"备注",width:300,filterParams:{buttons:["reset"]}},n.nrGrid.newColumnLineNumber({headerCheckboxSelection:!1,checkboxSelection:!1})];let m=n.nrGrid.gridOptionsClient({columnDefs:c,groupDisplayType:"groupRows",groupDefaultExpanded:2,rowData:i,onCellKeyDown:function(e){e.data&&"Enter"==e.event.key&&window.open(e.data.ahref)},onRowDoubleClicked:function(e){e.data&&window.open(e.data.ahref)}});n.nrGrid.buildDom(r.u.domGrid),r.u.grid=await n.nrGrid.viewGrid(r.u.domGrid,m),null==r.u.domTxtFilter.getAttribute("data-bind")&&(r.u.domTxtFilter.setAttribute("data-bind",!0),r.u.domTxtFilter.addEventListener("input",(async function(){r.u.grid.api.setQuickFilter(this.value)})),r.u.domTxtFilter.addEventListener("keydown",(async function(e){13==e.keyCode&&r.u.grid.api.setFocusedCell(0,"libs")})))}else r.u.domGrid.innerHTML=r.u.flagFailHtml}}},934:(e,t,a)=>{"use strict";a.r(t),a.d(t,{nrGrid:()=>o});var r=a(754),n=a(566),i=a(282),o={buildDom:e=>{(e=e||document.createElement("div")).innerHTML="",e.classList.add("nr-grid");var t=r.u.flagGridTheme;return n.f.isDark()&&(t+="-dark"),e.classList.add(t),e},viewGrid:async(e,t)=>{var a=await n.f.getPackage("agGrid");return e.innerHTML="",new a.Grid(e,t).gridOptions},newColumnSet:(e,t)=>Object.assign({cellRenderer:e=>{var a=t.filter((t=>t.value==e.value))[0];return a?a.text:e.value},filter:"agSetColumnFilter",filterParams:{buttons:["apply","reset"],values:t.map((e=>e.value)),cellRenderer:e=>{var a=t.filter((t=>t.value==e.value))[0];return a?`${a.text} (${a.value})`:e.value}},cellEditor:"agRichSelectCellEditor",cellEditorParams:{values:t.map((e=>e.value)),cellHeight:r.u.flagGridRowHeight,formatValue:e=>t.filter((t=>t.value==e))[0].text}},e),newColumnDate:e=>Object.assign({filter:"agDateColumnFilter",filterParams:{buttons:["apply","reset"]},width:200,valueFormatter:o.formatterDateTime},e),newColumnNumber:e=>Object.assign({filter:"agNumberColumnFilter",filterParams:{buttons:["apply","reset"]}},e),newColumnLineNumber:e=>Object.assign({field:"#line_number",headerName:"🆔",valueGetter:"node.rowIndex + 1",width:100,maxWidth:180,checkboxSelection:!0,headerCheckboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,sortable:!1,filter:!1,menuTabs:!1},e),newColumnChartBar:e=>Object.assign({cellRenderer:"agSparklineCellRenderer",cellRendererParams:{sparklineOptions:{type:"bar",label:{enabled:!0,color:i.i.cssvar(document.body,"--global-color"),fontSize:12,placement:"insideBase",formatter:e=>`${e.value}%`},paddingOuter:0,padding:{top:0,bottom:0},valueAxisDomain:[0,100],axis:{strokeWidth:0},formatter:e=>{const{yValue:t}=e;var a=t<50?"success":t<80?"warning":"danger";return{fill:i.i.cssvar(document.body,`--sl-color-${a}-300`)}}}}},e),defaultColDef:e=>Object.assign({width:180,minWidth:100,maxWidth:4e3,sortable:!0,resizable:!0,filter:"agTextColumnFilter",filterParams:{buttons:["apply","reset"]},menuTabs:["generalMenuTab","filterMenuTab","columnsMenuTab"]},e),autoGroupColumnDef:e=>Object.assign({width:300,maxWidth:4e3},e),iconGrid:e=>`<span class="ag-icon ag-icon-${e}"></span>`,gridOptions:()=>({localeText:o.localeText,defaultColDef:o.defaultColDef(),autoGroupColumnDef:o.autoGroupColumnDef(),suppressMoveWhenRowDragging:!0,suppressRowClickSelection:!1,suppressFieldDotNotation:!0,enableBrowserTooltips:!0,enableRangeSelection:!0,rowGroupPanelShow:"always",rowSelection:"multiple",columnDefs:[],autoSizePadding:40,headerHeight:r.u.flagGridRowHeight,rowHeight:r.u.flagGridRowHeight,pagination:!0,paginationPageSize:r.u.flagGridPageSize,cacheBlockSize:r.u.flagGridPageSize,animateRows:!0,isRowSelectable:e=>!0!==e.group,onSortChanged:e=>e.api.refreshCells(),onFilterChanged:e=>e.api.refreshCells(),onRowGroupOpened:e=>e.api.refreshCells(),getContextMenuItems:e=>{let t=o.getContainer(e).firstElementChild,a=t.classList.contains("nr-fullscreen");return[{name:"打开链接",icon:o.iconGrid("linked"),disabled:null==e.node.data,action:async function(){e.node.data&&window.open(e.node.data.ahref)}},"separator","copy","copyWithHeaders",{name:"复制文本",icon:o.iconGrid("copy"),action:async function(){var t=e.api.getCellRanges()[0],a=[],r=[];for(let i=t.startRow.rowIndex;i<=t.endRow.rowIndex;i++){var n=e.api.getDisplayedRowAtIndex(i),o=[];t.columns.forEach((t=>{var a=n.data[t.colId];Object.assign(e,{column:t,data:n.data,value:a}),"function"==typeof t.colDef.valueFormatter?a=t.colDef.valueFormatter(e):"function"==typeof t.colDef.cellRenderer&&(a=t.colDef.cellRenderer(e)),o.push(a)})),r.push(n),a.push(o.join("\t"))}await i.i.clipboard(a.join("\r\n")),e.api.flashCells({rowNodes:r,columns:t.columns.map((e=>e.colId))})}},"separator",{name:a?"取消全屏":"全屏显示",icon:o.iconGrid(a?"minimize":"maximize"),action:function(){t.classList.toggle("nr-fullscreen")}},"autoSizeAll","resetColumns","export"]}}),gridOptionsServer:async(e,t,a,l)=>{let s=Object.assign(o.gridOptions(),{rowModelType:"infinite",datasource:{getRows:async e=>{var o={paramsJson:JSON.stringify(e)};Object.assign(o,a);var s=`${r.u.apiHost}${t}?${i.i.toQueryString(o)}`,d=await n.f.reqServer(s);200==d.code?e.successCallback(d.data.RowsThisBlock,d.data.LastRow):(e.failCallback(),l&&await l(d))}}});return s=Object.assign(s,e),s},gridOptionsClient:e=>{let t=Object.assign(o.gridOptions(),{pagination:!1});return t=Object.assign(t,e),t},filterParamsDef:(e,t)=>{switch(e){case"Number":return{filters:[{filter:`ag${e}ColumnFilter`},{filter:"agSetColumnFilter"}]};case"Date":return{filters:[{filter:"agDateColumnFilter",filterParams:{comparator:function(e,t){if(null==t||""==t)return-1;var a=new Date(t);return a=new Date(Number(a.getFullYear()),Number(a.getMonth())-1,Number(a.getDate())),(e=new Date(Number(e.getFullYear()),Number(e.getMonth())-1,Number(e.getDate()))).getTime()==a.getTime()?0:a<e?-1:a>e?1:void 0}}},{filter:"agSetColumnFilter",filterParams:{comparator:(e,t)=>t}}]}}return t},getAllRows:function(e,t=!0){let a=[];return t?e.api.forEachLeafNode((e=>a.push(e.data))):e.api.forEachNode((e=>a.push(e.data))),a},getSelectedOrRangeRow:function(e){var t=e.api.getSelectedRows(),a=e.api.getCellRanges();return t.length>0?t[0]:a.length>0?e.api.getDisplayedRowAtIndex(a[0].startRow.rowIndex).data:void 0},getContainer:e=>e.api.gridOptionsWrapper.eGridDiv,setGridLoading:function(e,t){if(e&&e.api)switch(t){case 1:e.api.hideOverlay();break;case 2:e.api.hideOverlay(),e.api.showNoRowsOverlay();break;default:e.api.showLoadingOverlay()}},formatterDateTime:e=>{if(null!=e.value)return i.i.formatDateTime("datetime",e.value)},localeText:{selectAll:"（全部）",selectAllSearchResults:"（全部搜索结果）",searchOoo:"搜索...",blanks:"（空）",noMatches:"未找到",filterOoo:"搜索...",equals:"等于",notEqual:"不等于",blank:"空",notBlank:"非空",empty:"选择一项",lessThan:"小于",greaterThan:"大于",lessThanOrEqual:"小于等于",greaterThanOrEqual:"大于等于",inRange:"范围",inRangeStart:"开始值",inRangeEnd:"结束值",contains:"包含",notContains:"不包含",startsWith:"开始包含",endsWith:"结尾包含",dateFormatOoo:"yyyy-mm-dd",andCondition:"和",orCondition:"或",applyFilter:"确定",resetFilter:"重置",clearFilter:"清除",cancelFilter:"取消",textFilter:"文本搜索",numberFilter:"数字搜索",dateFilter:"日期搜索",setFilter:"项搜索",columns:"列",filters:"搜索",pivotMode:"枢轴模式",groups:"行组",rowGroupColumnsEmptyMessage:"拖拽列到此处进行分组",values:"值",valueColumnsEmptyMessage:"拖拽到此处合计",pivots:"列标签",pivotColumnsEmptyMessage:"拖拽到此处设置列标签",group:"分组",rowDragRows:"行",loadingOoo:"加载中...",noRowsToShow:"（空）",enabled:"启用",pinColumn:"固定列",pinLeft:"左固定",pinRight:"右固定",noPin:"取消固定",valueAggregation:"合计",autosizeThiscolumn:"当前列大小自适应",autosizeAllColumns:"所有列大小自适应",groupBy:"分组",ungroupBy:"不分组",addToValues:"添加值 ${variable}",removeFromValues:"移除值 ${variable}",addToLabels:"添加到标签 ${variable}",removeFromLabels:"移除标签 ${variable}",resetColumns:"重置列",expandAll:"展开全部",collapseAll:"折叠全部",copy:"复制",ctrlC:"Ctrl+C",copyWithHeaders:"复制（带标题）",copyWithHeaderGroups:"复制（带分组）",paste:"粘贴",ctrlV:"Ctrl+V",export:"导出",csvExport:"CSV 导出",excelExport:"Excel 导出",sum:"求和",min:"最小",max:"最大",none:"无",count:"总数",avg:"平均",filteredRows:"过滤行",selectedRows:"选中",totalRows:"总行",totalAndFilteredRows:"搜索",more:"更多",to:"-",of:"，共",page:"当前",nextPage:"下一页",lastPage:"尾页",firstPage:"首页",previousPage:"上一页",pivotColumnGroupTotals:"总",pivotChartAndPivotMode:"图表枢轴 & 枢轴模式",pivotChart:"图表枢轴",chartRange:"范围图表",columnChart:"柱状图",groupedColumn:"分组",stackedColumn:"堆叠柱形图",normalizedColumn:"100% 堆叠柱形图",barChart:"条形图",groupedBar:"分组",stackedBar:"堆叠柱形图",normalizedBar:"100% 堆叠柱形图",pieChart:"饼形图",pie:"饼图",doughnut:"环形图",line:"线图",xyChart:"散点图及气泡图",scatter:"散点图",bubble:"气泡图",areaChart:"面积图",area:"面积",stackedArea:"叠堆",normalizedArea:"100% 叠堆",histogramChart:"直方图",pivotChartTitle:"图表枢轴",rangeChartTitle:"范围图表",settings:"设置",data:"数据",format:"格式",categories:"类别",defaultCategory:"(无)",series:"系数",xyValues:"X Y 值",paired:"配对模式",axis:"轴",navigator:"导航",color:"颜色",thickness:"坐标宽度",xType:"X Type",automatic:"Automatic",category:"类别",number:"数字",time:"时间",xRotation:"X 旋转",yRotation:"Y 旋转",ticks:"Ticks",width:"宽",height:"高",length:"长",padding:"填充",spacing:"间距",chart:"图表",title:"标题",titlePlaceholder:"图表标题 - 双击编辑",background:"背景",font:"字体",top:"上",right:"右",bottom:"下",left:"左",labels:"标签",size:"大小",minSize:"最小",maxSize:"最大",legend:"指标项",position:"位置",markerSize:"Marker Size",markerStroke:"Marker Stroke",markerPadding:"Marker Padding",itemSpacing:"Item Spacing",itemPaddingX:"Item Padding X",itemPaddingY:"Item Padding Y",layoutHorizontalSpacing:"Horizontal Spacing",layoutVerticalSpacing:"Vertical Spacing",strokeWidth:"线条宽度",offset:"Offset",offsets:"Offsets",tooltips:"显示提示",callout:"Callout",markers:"标点",shadow:"阴影",blur:"发散",xOffset:"X 偏移",yOffset:"Y 偏移",lineWidth:"线条粗细",normal:"正常",bold:"加粗",italic:"斜体",boldItalic:"加粗斜体",predefined:"Predefined",fillOpacity:"填充透明度",strokeOpacity:"线条透明度",histogramBinCount:"Bin count",columnGroup:"柱状",barGroup:"条形",pieGroup:"饼状",lineGroup:"线",scatterGroup:"散点及气泡",areaGroup:"面积",histogramGroup:"直方",groupedColumnTooltip:"Grouped",stackedColumnTooltip:"Stacked",normalizedColumnTooltip:"100% Stacked",groupedBarTooltip:"Grouped",stackedBarTooltip:"Stacked",normalizedBarTooltip:"100% Stacked",pieTooltip:"Pie",doughnutTooltip:"Doughnut",lineTooltip:"Line",groupedAreaTooltip:"Area",stackedAreaTooltip:"Stacked",normalizedAreaTooltip:"100% Stacked",scatterTooltip:"Scatter",bubbleTooltip:"Bubble",histogramTooltip:"Histogram",noDataToChart:"No data available to be charted.",pivotChartRequiresPivotMode:"Pivot Chart requires Pivot Mode enabled.",chartSettingsToolbarTooltip:"Menu",chartLinkToolbarTooltip:"Linked to Grid",chartUnlinkToolbarTooltip:"Unlinked from Grid",chartDownloadToolbarTooltip:"Download Chart"}}},477:(e,t,a)=>{"use strict";a.d(t,{n:()=>r});var r={instanceCache:null,instanceUser:null,init:e=>{r.instanceCache=e.createInstance({name:"nr-cache"}),r.instanceUser=e.createInstance({name:"nr-user"})}}},754:(e,t,a)=>{"use strict";a.d(t,{u:()=>r});var r={markName:"cyolc932",markResp:"sq",markLibs:"libs",markSuffix:".md",markToken:null,markReqCount:0,markLocalUsed:!1,markLocalPath:"/libs/index.json",markLocalJson:null,markCheckServer:["https://netnr.zme.ink/api/v1/Proxy?url="],markCheckIndex:0,markChecking:!1,markCheckResult:{ok:[],bad:[]},markProxyServer:["https://netnr.zme.ink/api/v1/Proxy?url="],markProxyIndex:0,markProxyUsed:!1,flagTitle:"uuid",flagTheme:"light",flagGridTheme:"ag-theme-alpine",flagPanelDefaultHtml:'<sl-spinner class="fs-3 m-3"></sl-spinner>',flagFailHtml:'<sl-button variant="text">加载数据失败</sl-button>',flagGridRowHeight:32,flagGridPageSize:30}}},l={};function s(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={exports:{}};return o[e](a,a.exports,s),a.exports}s.m=o,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(a,r){if(1&r&&(a=this(a)),8&r)return a;if("object"==typeof a&&a){if(4&r&&a.__esModule)return a;if(16&r&&"function"==typeof a.then)return a}var n=Object.create(null);s.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var o=2&r&&a;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((e=>i[e]=()=>a[e]));return i.default=()=>a,s.d(n,i),n},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,a)=>(s.f[a](e,t),t)),[])),s.u=e=>e+"-"+{160:"2e7ce408f0330ec48b98",318:"1f9a67e8161cd8ae362d",388:"0b2990d034fa51c7634c",441:"3fc18c75f844c245c66d",477:"b41039178067bc64514c",483:"28c4be26fe1702a8335f",594:"18692763500cab489d4b",622:"32bd13e04f4b87078aa8",688:"2d30b7f415556bedbb93",779:"acbe346830d74d2ba6d4",904:"b87c248584afe761c418",906:"576007f635a7b8a4a69c",980:"45acb894b1e5c88fee7f",996:"7c0097caaf1e71efa4a8"}[e]+".js",s.miniCssF=e=>e+"-"+{160:"582bf77f1bbdaa119a56",594:"ba1f561166d65b127944",688:"357b548bfe6362f0785b",779:"b066e68521838470a609",904:"b7e142a9a101d56553f0",996:"7c1ff9898fb800ab9760"}[e]+".css",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},r="uuid:",s.l=(e,t,n,i)=>{if(a[e])a[e].push(t);else{var o,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==r+n){o=c;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",r+n),o.src=e),a[e]=[t];var m=(t,r)=>{o.onerror=o.onload=null,clearTimeout(h);var n=a[e];if(delete a[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),t)return t(r)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),l&&document.head.appendChild(o)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="/",n=e=>new Promise(((t,a)=>{var r=s.miniCssF(e),n=s.p+r;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=(o=a[r]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var o;if((n=(o=i[r]).getAttribute("data-href"))===e||n===t)return o}})(r,n))return t();((e,t,a,r,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=a=>{if(i.onerror=i.onload=null,"load"===a.type)r();else{var o=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=l,i.parentNode.removeChild(i),n(s)}},i.href=t,a?a.parentNode.insertBefore(i,a.nextSibling):document.head.appendChild(i)})(e,n,null,t,a)})),i={179:0},s.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{160:1,594:1,688:1,779:1,904:1,996:1}[e]&&t.push(i[e]=n(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{var e={179:0};s.f.j=(t,a)=>{var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(160|594|779|904)$/.test(t))e[t]=0;else{var n=new Promise(((a,n)=>r=e[t]=[a,n]));a.push(r[2]=n);var i=s.p+s.u(t),o=new Error;s.l(i,(a=>{if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,r[1](o)}}),"chunk-"+t,t)}};var t=(t,a)=>{var r,n,[i,o,l]=a,d=0;if(i.some((t=>0!==e[t]))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(l)l(s)}for(t&&t(a);d<i.length;d++)n=i[d],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0},a=self.webpackChunkuuid=self.webpackChunkuuid||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),(()=>{"use strict";var e=s(754),t=s(566),a=s(477),r=s(282);s(42),Object.assign(window,{nrGlobal:t.f,nrVary:e.u,nrStorage:a.n,nrFunction:r.i}),window.addEventListener("DOMContentLoaded",(async function(){this.window.webpackHotUpdateuuid||navigator.serviceWorker.register("/sw.js").then((e=>{console.debug("SW registered: ",e)})).catch((e=>{console.debug("SW registration failed: ",e)})),await Promise.all([t.f.getPackage("shoelace"),t.f.getPackage("bootstrap")]),await t.f.init()}))})()})();