"use strict";(self.webpackChunkeleutherius_blog=self.webpackChunkeleutherius_blog||[]).push([[1359],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=p(r),m=l,y=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3298:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(7462),l=r(3366),a=(r(7294),r(3905)),i=["components"],o={sidebar_position:1},c="LifeCycle",p={unversionedId:"maven/lifecycle",id:"maven/lifecycle",isDocsHomePage:!1,title:"LifeCycle",description:"Clean LifeCycle",source:"@site/docs/maven/1.lifecycle.md",sourceDirName:"maven",slug:"/maven/lifecycle",permalink:"/docs/maven/lifecycle",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"},next:{title:"\uc18c\uc18c\ud55c \ub2e8\uc5b4 \uc815\ub9ac",permalink:"/docs/soso_word"}},s=[{value:"Clean LifeCycle",id:"clean-lifecycle",children:[]},{value:"default LifeCycle",id:"default-lifecycle",children:[]},{value:"Site Lifecycle",id:"site-lifecycle",children:[]}],u={toc:s};function f(e){var t=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lifecycle"},"LifeCycle"),(0,a.kt)("h2",{id:"clean-lifecycle"},"Clean LifeCycle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"pre-clean"),(0,a.kt)("li",{parentName:"ol"},"clean"),(0,a.kt)("li",{parentName:"ol"},"post-clean")),(0,a.kt)("h2",{id:"default-lifecycle"},"default LifeCycle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"validate : \ud504\ub85c\uc81d\ud2b8\uac00 \ube4c\ub4dc\ub97c \uc9c4\ud589 \ud560 \uc218 \uc788\ub294 \uc815\ubcf4\uc5d0 \ub300\ud55c \uc720\ud6a8\uc131 \uac80\uc0ac"),(0,a.kt)("li",{parentName:"ol"},"initialize : \ube4c\ub4dc \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654. (properties \uc124\uc815 \ubc0f directories \uc0dd\uc131)"),(0,a.kt)("li",{parentName:"ol"},"generate-sources"),(0,a.kt)("li",{parentName:"ol"},"process-sources"),(0,a.kt)("li",{parentName:"ol"},"generate-resources"),(0,a.kt)("li",{parentName:"ol"},"process-resources"),(0,a.kt)("li",{parentName:"ol"},"compile"),(0,a.kt)("li",{parentName:"ol"},"process-classes"),(0,a.kt)("li",{parentName:"ol"},"generate-test-sources"),(0,a.kt)("li",{parentName:"ol"},"process-test-sources"),(0,a.kt)("li",{parentName:"ol"},"test-compile"),(0,a.kt)("li",{parentName:"ol"},"process-test-classes"),(0,a.kt)("li",{parentName:"ol"},"test"),(0,a.kt)("li",{parentName:"ol"},"prepare-package"),(0,a.kt)("li",{parentName:"ol"},"package"),(0,a.kt)("li",{parentName:"ol"},"pre-integration-test"),(0,a.kt)("li",{parentName:"ol"},"integration-test"),(0,a.kt)("li",{parentName:"ol"},"post-integration-test"),(0,a.kt)("li",{parentName:"ol"},"verify"),(0,a.kt)("li",{parentName:"ol"},"install"),(0,a.kt)("li",{parentName:"ol"},"deploy")),(0,a.kt)("h2",{id:"site-lifecycle"},"Site Lifecycle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"pre-site"),(0,a.kt)("li",{parentName:"ol"},"site"),(0,a.kt)("li",{parentName:"ol"},"post-site"),(0,a.kt)("li",{parentName:"ol"},"site-deploy")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ucc38\uc870 URL"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"},"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html")))))}f.isMDXComponent=!0}}]);