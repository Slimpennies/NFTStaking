(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8797],{54997:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake",function(){return t(54060)}])},81317:function(e,a,t){"use strict";t.d(a,{$0:function(){return i},UA:function(){return n},wL:function(){return o}});let n="0x4aa00C07748feC0d78b0cA0c7918eB64B2251187",o="0x8D3B5877233124793c018eb1D8A5734d897f103B",i="0x460bA12ad5F29cD4cd641B65436029262Aa5aAb8"},54060:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return m}});var n=t(85893),o=t(13610),i=t(61744),s=t(67294),c=t(81317),r=t(99034),l=t.n(r);let d=e=>{let{tokenId:a}=e,{contract:t}=(0,o.cqn)(c.UA,"nft-drop"),{data:i}=(0,o.elG)(t,a);return(0,n.jsx)(n.Fragment,{children:i&&(0,n.jsxs)("div",{className:l().nftBox,children:[i.metadata&&(0,n.jsx)(o.CHu,{metadata:i.metadata,className:l().nftMedia}),(0,n.jsx)("h3",{children:i.metadata.name}),(0,n.jsx)(o.tnh,{action:e=>null==e?void 0:e.call("withdraw",[[i.metadata.id]]),contractAddress:c.$0,children:"Withdraw"})]})})},_=()=>{var e;let a=(0,o.SFn)(),{contract:t}=(0,o.cqn)(c.UA,"nft-drop"),{contract:r}=(0,o.cqn)(c.wL,"token"),{contract:_,isLoading:m}=(0,o.cqn)(c.$0),{data:u}=(0,o.YZw)(t,a),{data:x}=(0,o.mMq)(r,a),[h,f]=(0,s.useState)(),{data:p}=(0,o.doQ)(_,"getStakeInfo",[a]);async function v(e){if(!a)return;let n=await (null==t?void 0:t.isApproved(a,c.$0));n||await (null==t?void 0:t.setApprovalForAll(c.$0,!0)),await (null==_?void 0:_.call("stake",[[e]]))}return((0,s.useEffect)(()=>{_&&a&&e();async function e(){let e=await (null==_?void 0:_.call("getStakeInfo",[a]));f(e[1])}},[a,_]),m)?(0,n.jsx)("div",{children:"Loading"}):(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsx)("h1",{className:l().h1,children:"Stake Your Giraffe NFTs"}),(0,n.jsx)("hr",{className:"".concat(l().divider," ").concat(l().spacerTop)}),a?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{children:"Your Giraffe Tokens"}),(0,n.jsxs)("div",{className:l().tokenGrid,children:[(0,n.jsxs)("div",{className:l().tokenItem,children:[(0,n.jsx)("h3",{className:l().tokenLabel,children:"Claimable Rewards"}),(0,n.jsxs)("p",{className:l().tokenValue,children:[(0,n.jsx)("b",{children:h?i.formatUnits(h,9):"Loading..."})," ",null==x?void 0:x.symbol]})]}),(0,n.jsxs)("div",{className:l().tokenItem,children:[(0,n.jsx)("h3",{className:l().tokenLabel,children:"Current Balance (Your Wallet)"}),(0,n.jsxs)("p",{className:l().tokenValue,children:[(0,n.jsx)("b",{children:null==x?void 0:x.displayValue})," ",null==x?void 0:x.symbol]})]})]}),(0,n.jsx)(o.tnh,{action:e=>e.call("claimRewards"),contractAddress:c.$0,children:"Claim Rewards"}),(0,n.jsx)("hr",{className:"".concat(l().divider," ").concat(l().spacerTop)}),(0,n.jsx)("h2",{children:"Your Staked Giraffe NFTs"}),(0,n.jsx)("div",{className:l().nftBoxGrid,children:p&&(null===(e=p[0])||void 0===e?void 0:e.map(e=>(0,n.jsx)(d,{tokenId:e.toNumber()},e.toString())))}),(0,n.jsx)("hr",{className:"".concat(l().divider," ").concat(l().spacerTop)}),(0,n.jsx)("h2",{children:"Your Unstaked Giraffe NFTs"}),(0,n.jsx)("div",{className:l().nftBoxGrid,children:null==u?void 0:u.map(e=>(0,n.jsxs)("div",{className:l().nftBox,children:[(0,n.jsx)(o.CHu,{metadata:e.metadata,className:l().nftMedia}),(0,n.jsx)("h3",{children:e.metadata.name}),(0,n.jsx)(o.tnh,{contractAddress:c.$0,action:()=>v(e.metadata.id),children:"Stake"})]},e.metadata.id.toString()))})]}):(0,n.jsx)(o.RZ8,{})]})};var m=_},99034:function(e){e.exports={container:"Home_container__bCOhY",h1:"Home_h1__7tdRW",explain:"Home_explain__KljHm",divider:"Home_divider__c4Nl_",smallDivider:"Home_smallDivider__wG_2a",nftBoxGrid:"Home_nftBoxGrid__qFzCk",nftBox:"Home_nftBox__woiq_",optionSelectBox:"Home_optionSelectBox__2Ehnv",selectBoxTitle:"Home_selectBoxTitle__rVZ7Z",selectBoxDescription:"Home_selectBoxDescription__QANhO",tokenGrid:"Home_tokenGrid__vsv91",tokenItem:"Home_tokenItem__HsZqC",tokenLabel:"Home_tokenLabel__X56dZ",tokenValue:"Home_tokenValue__PYZU2",center:"Home_center__4BFgC",spacerTop:"Home_spacerTop__RGZTg",bigSpacerTop:"Home_bigSpacerTop__YrAdY",spacerBottom:"Home_spacerBottom__JmsFH",detailPageHr:"Home_detailPageHr__JnD4B",nftMedia:"Home_nftMedia__0EkUL"}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=54997)}),_N_E=e.O()}]);