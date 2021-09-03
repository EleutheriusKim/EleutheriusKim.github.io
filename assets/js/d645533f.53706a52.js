"use strict";(self.webpackChunkeleutherius_blog=self.webpackChunkeleutherius_blog||[]).push([[230],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,k=p["".concat(i,".").concat(d)]||p[d]||s[d]||c;return n?r.createElement(k,a(a({ref:t},m),{},{components:n})):r.createElement(k,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4425:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return u},linkList:function(){return d},metadata:function(){return s},toc:function(){return k}});var r=n(7462),o=n(3366),c=n(7294),a=n(3905);function l(e){var t=e.linkList;return c.createElement(c.Fragment,null,c.createElement("div",null,c.createElement("ul",null,t.map((function(e,t){return c.createElement("li",{key:t},c.createElement("a",{href:e.href,target:"_blank"},e.text||e.href))})))))}var i=["components"],u={slug:"2021-09-01-docker-timezone",title:"docker \ucee8\ud14c\uc774\ub108 \ub0b4\ubd80 timezone",authors:["eleutherius"],tags:["dev","infra","docker","docker-compose"]},m=void 0,s={permalink:"/blog/2021-09-01-docker-timezone",source:"@site/blog/2021/09/01/docker-timezone/index.mdx",title:"docker \ucee8\ud14c\uc774\ub108 \ub0b4\ubd80 timezone",description:"\uac1c\uc694",date:"2021-09-01T00:00:00.000Z",formattedDate:"September 1, 2021",tags:[{label:"dev",permalink:"/blog/tags/dev"},{label:"infra",permalink:"/blog/tags/infra"},{label:"docker",permalink:"/blog/tags/docker"},{label:"docker-compose",permalink:"/blog/tags/docker-compose"}],truncated:!0,authors:[{name:"hwayoung kim",title:"\uc18c\uc8fc\uac19\uc740 \uac1c\ubc1c\uc790",url:"https://github.com/EleutheriusKim",imageURL:"https://avatars1.githubusercontent.com/u/50225173?s=460&v=4",key:"eleutherius"}],nextItem:{title:"package.json \uc5c5\ub370\uc774\ud2b8 \ud655\uc778",permalink:"/blog/2021-08-27-npm-check-updates"}},p={authorsImageUrls:[void 0]},d=[{href:"https://forums.docker.com/t/synchronize-timezone-from-host-to-container/39116"}],k=[{value:"\uac1c\uc694",id:"\uac1c\uc694",children:[]},{value:"\ucee8\ud14c\uc774\ub108 \ub0b4\ubd80 TimeZone \ud655\uc778",id:"\ucee8\ud14c\uc774\ub108-\ub0b4\ubd80-timezone-\ud655\uc778",children:[{value:"docker",id:"docker",children:[]},{value:"docker-compose",id:"docker-compose",children:[]}]},{value:"\ucee8\ud14c\uc774\ub108 \ub0b4\ubd80 TimeZone \uc124\uc815",id:"\ucee8\ud14c\uc774\ub108-\ub0b4\ubd80-timezone-\uc124\uc815",children:[{value:"docker",id:"docker-1",children:[]},{value:"docker-compose",id:"docker-compose-1",children:[]}]}],f={linkList:d,toc:k};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,a.kt)("p",null,"docker \ud639\uc740 docker-compose\ub85c \uc11c\ube44\uc2a4\ub97c \uc124\uce58 \ubc0f \uc6b4\uc601\ud558\ub2e4\ubcf4\uba74 \uc2dc\uac04\uac12\uc774 9\uc2dc\uac04 \ub290\ub9b0 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud574\ub2f9 \uacbd\uc6b0\ub294 docker \ucee8\ud14c\uc774\ub108 \ub0b4\ubd80\uc758 TimeZone\uc774 EST \ud639\uc740 UTC\ub85c \uc124\uc815\ub418\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub54c ntp\ub97c \uc124\uce58\ud558\uc5ec \uc11c\ubc84\uc2dc\uac04\uc744 \ub9de\ucd94\ub824\ud574\ub3c4 \uc801\uc6a9\uc774 \ub418\uc9c0 \uc54a\uace0 \uc11c\ubc84 \uc790\uccb4\uc758 timezone\uc744 \ubcc0\uacbd\ud558\uc5ec \uc9c4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ucee8\ud14c\uc774\ub108-\ub0b4\ubd80-timezone-\ud655\uc778"},"\ucee8\ud14c\uc774\ub108 \ub0b4\ubd80 TimeZone \ud655\uc778"),(0,a.kt)("h3",{id:"docker"},"docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it ${container_name OR ID} /bin/bash\ndate\nls -la /etc/localtime\n")),(0,a.kt)("h3",{id:"docker-compose"},"docker-compose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose exec ${NAME} bash\ndate\nls -la /etc/localtime\n")),(0,a.kt)("h2",{id:"\ucee8\ud14c\uc774\ub108-\ub0b4\ubd80-timezone-\uc124\uc815"},"\ucee8\ud14c\uc774\ub108 \ub0b4\ubd80 TimeZone \uc124\uc815"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ucee8\ud14c\uc774\ub108\uc758 \ub0b4\ubd80 TimeZone\uc744 \uc124\uc815\ud558\uae30 \uc704\ud574\uc11c\ub294 TimeZone \uc815\ubcf4\ub97c \ub9c8\uc6b4\ud2b8\ud558\ub294\uac83\uc73c\ub85c \ud574\uacb0 \ud560 \uc218 \uc788\ub2e4.")),(0,a.kt)("h3",{id:"docker-1"},"docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm -v /usr/share/zoneinfo/Asia/Seoul:/etc/localtime:ro centos bash\n")),(0,a.kt)("h3",{id:"docker-compose-1"},"docker-compose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  centos:\n    container_name: container\n    hostname: container\n    image: centos\n    volumes:\n      - /usr/share/zoneinfo/Asia/Seoul:/etc/localtime:ro # read-only\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Reference"),(0,a.kt)(l,{linkList:d,mdxType:"ReferenceLink"})))}h.isMDXComponent=!0}}]);