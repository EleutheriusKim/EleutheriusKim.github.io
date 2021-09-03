"use strict";(self.webpackChunkeleutherius_blog=self.webpackChunkeleutherius_blog||[]).push([[2393],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1711:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:1},s=void 0,c={unversionedId:"maven/base",id:"maven/base",isDocsHomePage:!1,title:"base",description:"LifeCycle",source:"@site/docs/maven/1.base.md",sourceDirName:"maven",slug:"/maven/base",permalink:"/docs/maven/base",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"},next:{title:"\uc18c\uc18c\ud55c \ub2e8\uc5b4 \uc815\ub9ac",permalink:"/docs/soso_word"}},p=[{value:"LifeCycle",id:"lifecycle",children:[{value:"prepare-resources",id:"prepare-resources",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"lifecycle"},"LifeCycle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"validate"),(0,a.kt)("li",{parentName:"ol"},"initialize"),(0,a.kt)("li",{parentName:"ol"},"generate-sources")),(0,a.kt)("p",null,"Generate any source code to be included in compilation phase."),(0,a.kt)("p",null,"4\nprocess-sources"),(0,a.kt)("p",null,"Process the source code, for example, filter any value."),(0,a.kt)("p",null,"5\ngenerate-resources"),(0,a.kt)("p",null,"Generate resources to be included in the package."),(0,a.kt)("p",null,"6\nprocess-resources"),(0,a.kt)("p",null,"Copy and process the resources into the destination directory, ready for packaging phase."),(0,a.kt)("p",null,"7\ncompile"),(0,a.kt)("p",null,"Compile the source code of the project."),(0,a.kt)("p",null,"8\nprocess-classes"),(0,a.kt)("p",null,"Post-process the generated files from compilation, for example to do bytecode enhancement/optimization on Java classes."),(0,a.kt)("p",null,"9\ngenerate-test-sources"),(0,a.kt)("p",null,"Generate any test source code to be included in compilation phase."),(0,a.kt)("p",null,"10\nprocess-test-sources"),(0,a.kt)("p",null,"Process the test source code, for example, filter any values."),(0,a.kt)("p",null,"11\ntest-compile"),(0,a.kt)("p",null,"Compile the test source code into the test destination directory."),(0,a.kt)("p",null,"12\nprocess-test-classes"),(0,a.kt)("p",null,"Process the generated files from test code file compilation."),(0,a.kt)("p",null,"13\ntest"),(0,a.kt)("p",null,"Run tests using a suitable unit testing framework (Junit is one)."),(0,a.kt)("p",null,"14\nprepare-package"),(0,a.kt)("p",null,"Perform any operations necessary to prepare a package before the actual packaging."),(0,a.kt)("p",null,"15\npackage"),(0,a.kt)("p",null,"Take the compiled code and package it in its distributable format, such as a JAR, WAR, or EAR file."),(0,a.kt)("p",null,"16\npre-integration-test"),(0,a.kt)("p",null,"Perform actions required before integration tests are executed. For example, setting up the required environment."),(0,a.kt)("p",null,"17\nintegration-test"),(0,a.kt)("p",null,"Process and deploy the package if necessary into an environment where integration tests can be run."),(0,a.kt)("p",null,"18\npost-integration-test"),(0,a.kt)("p",null,"Perform actions required after integration tests have been executed. For example, cleaning up the environment."),(0,a.kt)("p",null,"19\nverify"),(0,a.kt)("p",null,"Run any check-ups to verify the package is valid and meets quality criteria."),(0,a.kt)("p",null,"20\ninstall"),(0,a.kt)("p",null,"Install the package into the local repository, which can be used as a dependency in other projects locally."),(0,a.kt)("p",null,"21\ndeploy"),(0,a.kt)("p",null,"Copies the final package to the remote repository for sharing with other developers and projects."),(0,a.kt)("h3",{id:"prepare-resources"},"prepare-resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"resources\ub97c copy \ud558\ub294 \ub2e8\uacc4")))}d.isMDXComponent=!0}}]);