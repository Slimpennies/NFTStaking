(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(42603)}])},93740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=i(38754),o=i(61757),n=o._(i(67294)),s=r._(i(42636)),a=i(97757),l=i(3735),c=i(83341);i(34210);let d=r._(i(57746)),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e){return void 0!==e.default}function m(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,r,o,n,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}})}function h(e){let[t,i]=n.version.split("."),r=parseInt(t,10),o=parseInt(i,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,n.forwardRef)((e,t)=>{let{imgAttributes:i,heightInt:r,widthInt:o,qualityInt:s,className:a,imgStyle:l,blurStyle:c,isLazy:d,fetchPriority:u,fill:f,placeholder:m,loading:g,srcString:_,config:v,unoptimized:w,loader:b,onLoadRef:x,onLoadingCompleteRef:y,setBlurComplete:E,setShowAltText:j,onLoad:k,onError:S,...C}=e;return g=d?"lazy":g,n.default.createElement("img",{...C,...h(u),loading:g,width:o,height:r,decoding:"async","data-nimg":f?"fill":"1",className:a,style:{...l,...c},...i,ref:(0,n.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&p(e,_,m,x,y,E,w))},[_,m,x,y,E,S,w,t]),onLoad:e=>{let t=e.currentTarget;p(t,_,m,x,y,E,w)},onError:e=>{j(!0),"blur"===m&&E(!0),S&&S(e)}})}),_=(0,n.forwardRef)((e,t)=>{var i;let r,o,{src:p,sizes:_,unoptimized:v=!1,priority:w=!1,loading:b,className:x,quality:y,width:E,height:j,fill:k,style:S,onLoad:C,onLoadingComplete:N,placeholder:B="empty",blurDataURL:H,fetchPriority:P,layout:T,objectFit:O,objectPosition:G,lazyBoundary:M,lazyRoot:R,...z}=e,I=(0,n.useContext)(c.ImageConfigContext),D=(0,n.useMemo)(()=>{let e=u||I||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[I]),F=z.loader||d.default;delete z.loader;let A="__next_img_default"in F;if(A){if("custom"===D.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:i,...r}=t;return e(r)}}if(T){"fill"===T&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[T];e&&(S={...S,...e});let t={responsive:"100vw",fill:"100vw"}[T];t&&!_&&(_=t)}let W="",Y=m(E),V=m(j);if("object"==typeof(i=p)&&(f(i)||void 0!==i.src)){let e=f(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(r=e.blurWidth,o=e.blurHeight,H=H||e.blurDataURL,W=e.src,!k){if(Y||V){if(Y&&!V){let t=Y/e.width;V=Math.round(e.height*t)}else if(!Y&&V){let t=V/e.height;Y=Math.round(e.width*t)}}else Y=e.width,V=e.height}}let Z=!w&&("lazy"===b||void 0===b);(!(p="string"==typeof p?p:W)||p.startsWith("data:")||p.startsWith("blob:"))&&(v=!0,Z=!1),D.unoptimized&&(v=!0),A&&p.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(v=!0),w&&(P="high");let[q,L]=(0,n.useState)(!1),[J,U]=(0,n.useState)(!1),X=m(y),K=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:G}:{},J?{}:{color:"transparent"},S),Q="blur"===B&&H&&!q?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:Y,heightInt:V,blurWidth:r,blurHeight:o,blurDataURL:H,objectFit:K.objectFit})+'")'}:{},$=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:s,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let n=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:n,kind:"x"}}(t,o,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,r)=>a({config:t,src:i,quality:n,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:a({config:t,src:i,quality:n,width:l[d]})}}({config:D,src:p,unoptimized:v,width:Y,quality:X,sizes:_,loader:F}),ee=p,et=(0,n.useRef)(C);(0,n.useEffect)(()=>{et.current=C},[C]);let ei=(0,n.useRef)(N);(0,n.useEffect)(()=>{ei.current=N},[N]);let er={isLazy:Z,imgAttributes:$,heightInt:V,widthInt:Y,qualityInt:X,className:x,imgStyle:K,blurStyle:Q,loading:b,config:D,fetchPriority:P,fill:k,unoptimized:v,placeholder:B,loader:F,srcString:ee,onLoadRef:et,onLoadingCompleteRef:ei,setBlurComplete:L,setShowAltText:U,...z};return n.default.createElement(n.default.Fragment,null,n.default.createElement(g,{...er,ref:t}),w?n.default.createElement(s.default,null,n.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imageSrcSet:$.srcSet,imageSizes:$.sizes,crossOrigin:z.crossOrigin,referrerPolicy:z.referrerPolicy,...h(P)})):null)}),v=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},97757:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:s}=e,a=r||t,l=o||i,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+a+" "+l+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&o?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+n+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},57746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},42603:function(e,t,i){"use strict";i.r(t);var r=i(85893),o=i(25675),n=i.n(o),s=i(11163),a=i(99034),l=i.n(a);t.default=()=>{let e=(0,s.useRouter)();return(0,r.jsxs)("div",{className:l().container,children:[(0,r.jsx)("h1",{className:l().h1,children:"Welcome to the Giraffe Ecosystem"}),(0,r.jsxs)("div",{className:l().nftBoxGrid,children:[(0,r.jsxs)("div",{className:l().optionSelectBox,role:"button",onClick:()=>e.push("/mint"),children:[(0,r.jsx)(n(),{src:"/icons/drop.webp",alt:"drop",width:64,height:64}),(0,r.jsx)("h2",{className:l().selectBoxTitle,children:"Mint a new Giraffe NFT"}),(0,r.jsx)("p",{className:l().selectBoxDescription,children:"Mint a Giraffe NFT on the Ethereum Network."})]}),(0,r.jsxs)("div",{className:l().optionSelectBox,role:"button",onClick:()=>e.push("/stake"),children:[(0,r.jsx)(n(),{src:"/icons/token.webp",alt:"token",width:64,height:64}),(0,r.jsx)("h2",{className:l().selectBoxTitle,children:"Stake Your Giraffe NFTs"}),(0,r.jsx)("p",{className:l().selectBoxDescription,children:"Stake your Giraffe NFTs to earn Giraffe token Rewards!"})]})]})]})}},99034:function(e){e.exports={container:"Home_container__bCOhY",h1:"Home_h1__7tdRW",explain:"Home_explain__KljHm",divider:"Home_divider__c4Nl_",smallDivider:"Home_smallDivider__wG_2a",nftBoxGrid:"Home_nftBoxGrid__qFzCk",nftBox:"Home_nftBox__woiq_",optionSelectBox:"Home_optionSelectBox__2Ehnv",selectBoxTitle:"Home_selectBoxTitle__rVZ7Z",selectBoxDescription:"Home_selectBoxDescription__QANhO",tokenGrid:"Home_tokenGrid__vsv91",tokenItem:"Home_tokenItem__HsZqC",tokenLabel:"Home_tokenLabel__X56dZ",tokenValue:"Home_tokenValue__PYZU2",center:"Home_center__4BFgC",spacerTop:"Home_spacerTop__RGZTg",bigSpacerTop:"Home_bigSpacerTop__YrAdY",spacerBottom:"Home_spacerBottom__JmsFH",detailPageHr:"Home_detailPageHr__JnD4B",nftMedia:"Home_nftMedia__0EkUL"}},25675:function(e,t,i){e.exports=i(93740)},11163:function(e,t,i){e.exports=i(96885)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);