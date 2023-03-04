"use strict";(self.webpackChunkeleutherius_blog=self.webpackChunkeleutherius_blog||[]).push([[3438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=i,k=s["".concat(c,".").concat(u)]||s[u]||d[u]||r;return n?l.createElement(k,a(a({ref:t},m),{},{components:n})):l.createElement(k,a({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<r;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1554:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(7294);function i(e){let{linkList:t}=e;return l.createElement(l.Fragment,null,l.createElement("div",null,l.createElement("ul",null,t.map(((e,t)=>l.createElement("li",{key:t},l.createElement("a",{href:e.href,target:"_blank"},e.text||e.href)))))))}},9711:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,linkList:()=>p,metadata:()=>c,toc:()=>m});var l=n(7462),i=(n(7294),n(3905)),r=n(1554);const a={sidebar_position:1},o="LifeCycle",c={unversionedId:"maven/lifecycle",id:"maven/lifecycle",isDocsHomePage:!1,title:"LifeCycle",description:"Clean LifeCycle",source:"@site/docs/maven/1.lifecycle.mdx",sourceDirName:"maven",slug:"/maven/lifecycle",permalink:"/docs/maven/lifecycle",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Code",permalink:"/docs/markdown/Code"},next:{title:"\uc18c\uc18c\ud55c \ub2e8\uc5b4 \uc815\ub9ac",permalink:"/docs/soso_word"}},p=[{href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"}],m=[{value:"Clean LifeCycle",id:"clean-lifecycle",children:[]},{value:"default LifeCycle",id:"default-lifecycle",children:[]},{value:"Site Lifecycle",id:"site-lifecycle",children:[]}],s={linkList:p,toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lifecycle"},"LifeCycle"),(0,i.kt)("h2",{id:"clean-lifecycle"},"Clean LifeCycle"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pre-clean")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"clean")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"post-clean"))),(0,i.kt)("h2",{id:"default-lifecycle"},"default LifeCycle"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"validate")," : \ud504\ub85c\uc81d\ud2b8\uac00 \ube4c\ub4dc\ub97c \uc9c4\ud589 \ud560 \uc218 \uc788\ub294 \uc815\ubcf4\uc5d0 \ub300\ud55c \uc720\ud6a8\uc131 \uac80\uc0ac"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"initialize")," : \ube4c\ub4dc \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654. (properties \uc124\uc815 \ubc0f directories \uc0dd\uc131)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"generate-sources")," : \ucef4\ud30c\uc77c\uc5d0 \ud3ec\ud568\ub418\ub294 \ubaa8\ub4e0 \uc18c\uc2a4\ucf54\ub4dc\ub97c \uc0dd\uc131"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"process-sources")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"generate-resources")," : \ud328\ud0a4\uc9c0\uc5d0 \ud3ec\ud568\ud560 \ub9ac\uc18c\uc2a4\ub97c \uc0dd\uc131"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"process-resources")," : \ub9ac\uc18c\uc2a4\ub97c \ubaa9\uc801\uc9c0 \ub514\ub809\ud1a0\ub9ac\uc5d0 \ubcf5\uc0ac \ubc0f \ucc98\ub9ac\ud558\uc5ec \ud328\ud0a4\uc9d5 \ud560 \uc900\ube44"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"compile")," : \ud504\ub85c\uc81d\ud2b8\uc758 \uc18c\uc2a4\ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"process-classes")," : \ucef4\ud30c\uc77c\ub418\uc5b4 \uc0dd\uc131\ub41c \ud30c\uc77c\ub4e4\uc758 \ud6c4\ucc98\ub9ac. (ex. Java \ud074\ub798\uc2a4\uc5d0\uc11c Bytecode Enhancement)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"generate-test-sources")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"process-test-sources")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"test-compile")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"process-test-classes")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"test")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"prepare-package")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"package")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pre-integration-test")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"integration-test")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"post-integration-test")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"verify")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"install")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"deploy"))),(0,i.kt)("h2",{id:"site-lifecycle"},"Site Lifecycle"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pre-site")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"site")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"post-site")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"site-deploy"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Reference"),(0,i.kt)(r.Z,{linkList:p,mdxType:"ReferenceLink"})))}u.isMDXComponent=!0}}]);