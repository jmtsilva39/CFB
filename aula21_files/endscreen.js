(function(g){var window=this;var CDa=function(a,b){a.oa("onAutonavCoundownStarted",b)},R4=function(a,b,c){var d=b.Aa();
g.J(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.Lc(c?c:"mqdefault.jpg");var f=b instanceof g.XB&&b.lengthSeconds?g.yD(b.lengthSeconds):null,h=!!e;e=h&&"RD"===(new g.Lz(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.XB?b.wa:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.sm||g.xD("Assistir a $TITLE",{TITLE:b.title}),duration:f,url:b.ki(),is_live:l,is_list:h,is_mix:e,background:c?"background-image: url("+
c+")":""};b instanceof g.XC&&(d.playlist_length=b.getLength());a.update(d)},S4=function(a,b){g.U.call(this,{D:"div",
ca:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},U4=function(a){g.U.call(this,{D:"div",
ca:["ytp-upnext","ytp-player-content"],P:{"aria-label":"{{aria_label}}"},K:[{D:"div",J:"ytp-cued-thumbnail-overlay-image",P:{style:"{{background}}"}},{D:"span",J:"ytp-upnext-top",K:[{D:"span",J:"ytp-upnext-header",V:"Pr\u00f3ximo"},{D:"span",J:"ytp-upnext-title",V:"{{title}}"},{D:"span",J:"ytp-upnext-author",V:"{{author}}"}]},{D:"a",J:"ytp-upnext-autoplay-icon",P:{role:"button",href:"{{url}}","aria-label":"Reproduzir pr\u00f3ximo v\u00eddeo"},K:[{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},K:[{D:"circle",J:"ytp-svg-autoplay-circle",P:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",J:"ytp-svg-autoplay-ring",P:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",J:"ytp-svg-fill",P:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",J:"ytp-upnext-bottom",K:[{D:"span",J:"ytp-upnext-cancel"},{D:"span",J:"ytp-upnext-paused",
V:"Reprodu\u00e7\u00e3o autom\u00e1tica pausada"}]}]});this.api=a;this.cancelButton=null;this.C=this.ba("ytp-svg-autoplay-ring");this.u=this.notification=this.o=this.suggestion=null;this.A=new g.G(this.rp,5E3,this);this.B=0;var b=this.ba("ytp-upnext-cancel");this.cancelButton=new g.U({D:"button",ca:["ytp-upnext-cancel-button","ytp-button"],P:{tabindex:"0","aria-label":"Cancelar reprodu\u00e7\u00e3o autom\u00e1tica"},V:"Cancelar"});g.C(this,this.cancelButton);this.cancelButton.ma("click",this.kJ,this);
this.cancelButton.aa(b);g.C(this,this.A);g.SN(this.api,this.element,this,18788);b=this.ba("ytp-upnext-autoplay-icon");this.L(b,"click",this.cM);this.LB();this.L(a,"autonavvisibility",this.LB);this.L(a,"mdxnowautoplaying",this.zL);this.L(a,"mdxautoplaycanceled",this.AL);this.L(a,"mdxautoplayupnext",this.gE);T4(this)&&(a=(a=g.AN(g.uN(this.api)))?a.tG():null)&&this.gE(a);g.J(this.element,"ytp-upnext-mobile",this.api.O().o)},W4=function(a,b){a.o||(g.mp("a11y-announce","Pr\u00f3ximo "+a.suggestion.title),
a.B=(0,g.M)(),a.o=new g.G(function(){V4(a,b)},25),V4(a,b),CDa(a.api,b||g.O(a.api.O().experiments,"autoplay_time")||1E4));
g.bo(a.element,"ytp-upnext-autoplay-paused")},T4=function(a){return 3===a.api.getPresentingPlayerType()},V4=function(a,b){var c=b||g.O(a.api.O().experiments,"autoplay_time")||1E4,d=Math.min(DDa(a),c);
c=Math.min(d/c,1);a.C.setAttribute("stroke-dashoffset",""+-211*(c+1));1<=c&&!T4(a)?a.select(!0):a.o&&a.o.start()},DDa=function(a){return(0,g.M)()-a.B},Y4=function(a){X4(a);
a.B=(0,g.M)();V4(a);g.I(a.element,"ytp-upnext-autoplay-paused")},X4=function(a){a.o&&(a.o.dispose(),a.o=null)},EDa=function(a){S4.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.o=new g.U({D:"div",J:"ytp-subscribe-card",K:[{D:"img",J:"ytp-author-image",P:{src:b.Ld}},{D:"div",J:"ytp-subscribe-card-right",K:[{D:"div",J:"ytp-author-name",V:b.author},{D:"div",J:"html5-subscribe-button-container"}]}]});g.C(this,this.o);this.o.aa(this.element);this.subscribeButton=new g.fQ("Inscreva-se",null,"Cancelar assinatura",null,!0,!1,b.Ze,b.subscribed,"trailer-endscreen",null,null,a);g.C(this,this.subscribeButton);this.subscribeButton.aa(this.o.ba("html5-subscribe-button-container"));
this.hide()},Z4=function(a){var b=a.O(),c=g.tx||g.Rh?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.o&&e.push("ytp-videowall-show-text");g.U.call(this,{D:"a",ca:e,P:{href:"{{url}}",target:d?b.F:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},K:[{D:"div",J:"ytp-videowall-still-image",P:{style:"{{background}}"}},{D:"span",J:"ytp-videowall-still-info",K:[{D:"span",J:"ytp-videowall-still-info-bg",K:[{D:"span",J:"ytp-videowall-still-info-content",P:c,K:[{D:"span",J:"ytp-videowall-still-info-title",V:"{{title}}"},{D:"span",J:"ytp-videowall-still-info-author",
V:"{{author_and_views}}"},{D:"span",J:"ytp-videowall-still-info-live",V:"Ao vivo"},{D:"span",J:"ytp-videowall-still-info-duration",V:"{{duration}}"}]}]}]},{D:"span",ca:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],K:[{D:"span",J:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",J:"ytp-videowall-still-listlabel-length",K:[" (",{D:"span",V:"{{playlist_length}}"},")"]}]},{D:"span",ca:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],K:[{D:"span",
J:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",J:"ytp-videowall-still-listlabel-length",V:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.o=new g.Cs(this);g.C(this,this.o);this.ma("click",this.onClick);this.ma("keypress",this.A);this.o.L(a,"videodatachange",this.Ma);g.TN(a,this.element,this);this.Ma()},$4=function(a){S4.call(this,a,"videowall-endscreen");
var b=this;this.H=a;this.A=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.I=!1;this.G=null;this.u=new g.kQ(this);g.C(this,this.u);this.F=new g.G(function(){g.I(b.element,"ytp-show-tiles")},0);
g.C(this,this.F);var c=new g.U({D:"button",ca:["ytp-button","ytp-endscreen-previous"],P:{"aria-label":"Anterior"},K:[g.CO()]});g.C(this,c);c.aa(this.element);c.ma("click",this.jI,this);this.table=new g.HD({D:"div",J:"ytp-endscreen-content"});g.C(this,this.table);this.table.aa(this.element);c=new g.U({D:"button",ca:["ytp-button","ytp-endscreen-next"],P:{"aria-label":"Pr\u00f3ximo"},K:[g.DO()]});g.C(this,c);c.aa(this.element);c.ma("click",this.iI,this);this.o=new U4(a);g.C(this,this.o);g.QN(this.player,
this.o.element,4);this.hide()},a5=function(a){return g.RN(a.player)&&a.qy()&&!a.B},FDa=function(a,b){return g.Oc(b.suggestions,function(c){c=g.AD(a.H.O(),c);
g.C(a,c);return c})},b5=function(a){var b=a.jv();
b!==a.I&&(a.I=b,a.player.R("autonavvisibility"))},c5=function(a){g.dO.call(this,a);
this.endScreen=null;this.listeners=new g.Cs(this);g.C(this,this.listeners);this.o=a.O();GDa(a)?this.endScreen=new $4(this.player):this.o.Va?this.endScreen=new EDa(this.player):this.endScreen=new S4(this.player);g.C(this,this.endScreen);g.QN(this.player,this.endScreen.element,4);this.rD();this.listeners.L(a,"videodatachange",this.rD,this);this.listeners.L(a,g.Kz("endscreen"),this.fI,this);this.listeners.L(a,"crx_endscreen",this.gI,this)},GDa=function(a){a=a.O();
return a.Ba&&!a.Va};g.t(S4,g.U);g.k=S4.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.qy=function(){return!1};
g.k.jv=function(){return!1};
g.k.oA=function(){return!1};g.t(U4,g.U);g.k=U4.prototype;g.k.rp=function(){this.notification&&(this.A.stop(),this.qb(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.LB=function(){g.KD(this,g.vN(this.api));g.WN(this.api,this.element,g.vN(this.api))};
g.k.TL=function(){window.focus();this.rp()};
g.k.hide=function(){g.U.prototype.hide.call(this)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.P(this.api.O().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.Aa(),this.rp(),this.notification=new Notification("Pr\u00f3ximo",{body:b.title,icon:b.Lc()}),this.u=this.L(this.notification,"click",this.TL),this.A.start())}X4(this);this.api.nextVideo(!1,a)};
g.k.cM=function(a){!g.Ke(this.cancelButton.element,g.Cp(a))&&g.fP(a,this.api)&&this.select()};
g.k.kJ=function(){g.xN(this.api,!0)};
g.k.zL=function(a){T4(this);this.show();W4(this,a)};
g.k.gE=function(a){T4(this);this.suggestion&&this.suggestion.Aa().videoId===a.Aa().videoId||(this.suggestion=a,R4(this,a,"hqdefault.jpg"))};
g.k.AL=function(){T4(this);X4(this);this.hide()};
g.k.W=function(){X4(this);this.rp();g.U.prototype.W.call(this)};g.t(EDa,S4);g.t(Z4,g.U);Z4.prototype.select=function(){var a=this.suggestion.Aa().videoId,b=this.suggestion.getPlaylistId();(g.dU(this.api.app,a,this.suggestion.tc,b,void 0,this.suggestion.VF||void 0)||this.api.da("web_player_endscreen_double_log_fix_killswitch"))&&g.VN(this.api,this.element)};
Z4.prototype.onClick=function(a){g.fP(a,this.api,this.u,this.suggestion.tc||void 0)&&this.select()};
Z4.prototype.A=function(a){switch(a.keyCode){case 13:case 32:g.Hp(a)||(this.select(),g.Gp(a))}};
Z4.prototype.Ma=function(){var a=this.api.getVideoData(),b=this.api.O();this.u=a.dc?!1:b.u};g.t($4,S4);g.k=$4.prototype;g.k.create=function(){S4.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=FDa(this,a),this.videoData=a);this.Jh();this.u.L(this.player,"appresize",this.Jh);this.u.L(this.player,"onVideoAreaChange",this.Jh);this.u.L(this.player,"videodatachange",this.Ma);this.u.L(this.player,"autonavchange",this.kv);this.u.L(this.player,"autonavcancel",this.hI);a=this.videoData.autonavState;a!==this.G&&this.kv(a);this.u.L(this.element,"transitionend",this.mN)};
g.k.destroy=function(){g.Es(this.u);g.Ve(this.stills);this.stills=[];this.suggestions=null;S4.prototype.destroy.call(this);g.bo(this.element,"ytp-show-tiles");this.F.stop();this.G=this.videoData.autonavState};
g.k.qy=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){S4.prototype.show.call(this);g.bo(this.element,"ytp-show-tiles");this.player.O().o?g.Wn(this.F):this.F.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.xN(this.player,!1);a5(this)?(b5(this),2===this.videoData.autonavState?this.player.O().da("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.o.select(!0):W4(this.o):3===this.videoData.autonavState&&Y4(this.o)):(g.xN(this.player,!0),b5(this))};
g.k.hide=function(){S4.prototype.hide.call(this);Y4(this.o);b5(this)};
g.k.mN=function(a){g.Cp(a)===this.element&&this.Jh()};
g.k.Jh=function(){if(this.suggestions&&this.suggestions.length){g.I(this.element,"ytp-endscreen-paginate");var a=this.H.Yk(!0,this.H.isFullscreen()),b=g.qN(this.H);b&&(b=b.Mc()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var q=b/2,r=e/2,u=b<=f-2&&n>=r*m,w=e<=h-2&&n>=q*m;if((q+1)/r*d/c>c/(q/(r+1)*d)&&w)n-=q*m,e+=2;else if(u)n-=
r*m,b+=2;else if(w)n-=q*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.ei(a,m,n);g.Oh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.o;f=this.suggestions[0];c.suggestion=f;R4(c,f,"hqdefault.jpg");g.J(this.element,"ytp-endscreen-takeover",a5(this));b5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(q=c,r=0,d&&f>=b-2&&h>=
e-2?r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),q=g.$d(q+this.A,l),0!==r){u=this.stills[c];u||(u=new Z4(this.player),this.stills[c]=u,a.appendChild(u.element));w=Math.floor(n*h/e);var y=Math.floor(m*f/b),A=Math.floor(n*(h+r)/e)-w-4,D=Math.floor(m*(f+r)/b)-y-4;g.Wh(u.element,y,w);g.ei(u.element,D,A);g.Oh(u.element,"transitionDelay",(h+f)/20+"s");g.J(u.element,"ytp-videowall-still-mini",1===r);g.J(u.element,"ytp-videowall-still-large",2<r);r=u;q=this.suggestions[q];r.suggestion!==q&&(r.suggestion=
q,u=r.api.O(),w=g.$n(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",R4(r,q,w),g.Vy(u)&&(u=q.ki(),u=g.Jd(u,g.JJ({},"emb_rel_end")),r.na("url",u)),(q=(q=q.tc)&&q.itct)&&g.UN(r.api,r.element,q));c++}g.J(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.He(e.element),g.Ue(e);this.stills.length=c}};
g.k.Ma=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.A=0,this.suggestions=FDa(this,a),this.videoData=a,this.Jh())};
g.k.iI=function(){this.A+=this.stills.length;this.Jh()};
g.k.jI=function(){this.A-=this.stills.length;this.Jh()};
g.k.oA=function(){return!!this.o.o};
g.k.kv=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,X4(this.o),this.La()&&this.Jh()):(this.C=!0,this.La()&&a5(this)&&(2===a?W4(this.o):3===a&&Y4(this.o)))};
g.k.hI=function(a){if(a){for(a=0;a<this.stills.length;a++)g.WN(this.H,this.stills[a].element,!0);this.kv(1)}else this.B=null,this.C=!1;this.Jh()};
g.k.jv=function(){return this.La()&&a5(this)};g.t(c5,g.dO);g.k=c5.prototype;g.k.MA=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!GDa(this.player)||b;var c=a.Ck||g.dz(a.Fa),d=g.VU(this.player.app);a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.LA=function(){return this.endScreen.jv()};
g.k.iH=function(){return this.LA()?this.endScreen.oA():!1};
g.k.W=function(){g.gR(this.player.app,"endscreen",void 0);g.dO.prototype.W.call(this)};
g.k.load=function(){g.dO.prototype.load.call(this);this.endScreen.show()};
g.k.unload=function(){g.dO.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.fI=function(a){this.MA()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.gI=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.rD=function(){g.gR(this.player.app,"endscreen",void 0);var a=this.player.getVideoData();a=new g.Hz(Math.max(1E3*(a.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var b=new g.Hz(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.MN(this.player,[a,b])};g.oO.endscreen=c5;})(_yt_player);
