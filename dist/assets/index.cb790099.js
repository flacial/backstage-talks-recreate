import{c as e,a as t,R as s,w as l,r as a,_ as o,P as n,b as r,B as c}from"./vendor.23aaa2a1.js";var i=t({reducer:{scroll:e({name:"scrollCount",initialState:{value:5},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},defaultValue:(e,t)=>{e.value=t}}}).reducer}});const u=()=>s.createElement("header",null,s.createElement("img",{src:"/backstage-talks-recreate/assets/logo.f2fa1b6c.png",alt:"Logo"}),s.createElement("a",{href:"info@backstagetalks.com"},"Contact"));const d=e=>window.matchMedia(`(max-width: ${e}px)`).matches;var m=l((({history:e,scrollCount:t,setScrollCount:l})=>{const[n,r]=a.exports.useState(0),[c,i]=a.exports.useState(null),u=a.exports.useRef(null),m=a.exports.useRef(null),g=a.exports.useRef(null),b=a.exports.useRef(null),f=a.exports.useRef(null),y=a.exports.useRef({});y.current=t;const k=e=>{r(e),l(e)},h=e=>{i(e.deltaY),l((t=>e.deltaY>0?1!==t&&t>0?t-1:1:e.deltaY<0?5!==t&&t<5?t+1:(console.log("e.deltay Y false"),5):void 0))},p=e=>{window.history.pushState("","",`#issue${e}`)},E=(e,t)=>{const s=document.querySelector(`.issue${e}`),l=document.querySelector(".issues-container");if(t)switch(parseInt(e,10)){case 5:l.style.transform="translate3d(0, 0px, 0)",l.style.transition="all 0.7s linear",console.log(5);break;case 4:l.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,l.style.transition="all 0.7s linear",console.log(4);break;case 3:l.style.transform=`translate3d(0, -${2*s.clientHeight}px, 0)`,l.style.transition="all 0.7s linear",console.log(3);break;case 2:l.style.transform=`translate3d(0, -${3*s.clientHeight}px, 0)`,l.style.transition="all 0.7s linear",console.log(2);break;case 1:l.style.transform=`translate3d(0, -${4*s.clientHeight}px, 0)`,l.style.transition="all 0.7s linear",console.log(1)}else{if(c>0)switch(console.log("Down"),e){case 4:l.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,p(4),l.style.transition="all 0.7s linear";break;case 3:l.style.transform=`translate3d(0, -${2*s.clientHeight}px, 0)`,p(3),l.style.transition="all 0.7s linear";break;case 2:l.style.transform=`translate3d(0, -${3*s.clientHeight}px, 0)`,p(2),l.style.transition="all 0.7s linear";break;case 1:l.style.transform=`translate3d(0, -${4*s.clientHeight}px, 0)`,p(1),l.style.transition="all 0.7s linear"}if(c<0)switch(console.log("Up"),e){case 5:l.style.transform="translate3d(0, 0px, 0)",l.style.transition="all 0.7s linear",p(5);break;case 4:l.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,l.style.transition="all 0.7s linear",p(4);break;case 3:l.style.transform=`translate3d(0, ${s.clientHeight-3*s.clientHeight}px, 0)`,l.style.transition="all 0.7s linear",p(3);break;case 2:l.style.transform=`translate3d(0, ${s.clientHeight-4*s.clientHeight}px, 0)`,l.style.transition="all 0.7s linear",p(2)}}};return a.exports.useEffect((()=>{const e=o.debounce(h,200);if(!d(1e3)){console.log("false media query 1000"),window.addEventListener("wheel",e);const t=document.querySelectorAll(".bookmarks > li");t.forEach((e=>e.addEventListener("click",(e=>{e.preventDefault(),e.target.style.textShadow="-0.8px 0 0px",t.forEach((t=>{t.children[0].hash!==e.target.hash&&(t.children[0].style.textShadow="inherit")})),E(e.target.hash[e.target.hash.length-1],!0),window.history.pushState("","",e.target.hash)}))))}window.addEventListener("resize",o.debounce((()=>{document.querySelector(".issue4"),document.querySelector(".issue3");const s=document.querySelector(".issue2");document.querySelector(".issue1");const l=document.querySelector(".issues-container");if(console.log(y.current),d(1e3))l.style.transition="none",l.style.transform="translate3d(0, 0px, 0)",document.querySelector(`.issue${y.current}`).scrollIntoView(),console.log("RESIZE 1",y.current),window.removeEventListener("wheel",e),l.classList.add("disabled-wheel");else{switch(y.current){case 5:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform="translate3d(0, 0px, 0)",console.log(555555);break;case 4:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,console.log(444444);break;case 3:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform=`translate3d(0, -${2*s.clientHeight}px, 0)`,console.log(333333);break;case 2:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform=`translate3d(0, -${3*s.clientHeight}px, 0)`,console.log(222222);break;case 1:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform=`translate3d(0, -${4*s.clientHeight}px, 0)`,console.log(111111)}"disabled-wheel"!==(null==l?void 0:l.classList[0])&&"disabled-wheel"!==(null==l?void 0:l.classList[1])||d(1e3)||(window.addEventListener("wheel",e),l.classList.remove("disabled-wheel")),console.log(l.classList),console.log("RESIZE 2",y.current)}}),200))}),[]),a.exports.useEffect((()=>console.log(t)),[t]),a.exports.useEffect((()=>{if(!d(1e3))switch(t){case 5:document.body.style.background="#00c1b5",E(5),k(5);break;case 4:document.body.style.background="#ff651a",E(4),k(4);break;case 3:document.body.style.background=" #ffbe00",E(3),k(3);break;case 2:document.body.style.background="#1d3fbb",E(2),k(2);break;case 1:document.body.style.background="#e30512",E(1),k(1)}}),[t]),a.exports.useEffect((()=>{switch(e.location.hash){case"#issue5":document.body.style.background="#00c1b5",d(1e3)?(console.log("issue5 media q"),document.querySelector(".issue5").scrollIntoView()):E(5,!0),k(5);break;case"#issue4":document.body.style.background="#ff651a",d(1e3)?(console.log("issue4 media q"),document.querySelector(".issue4").scrollIntoView()):E(4,!0),k(4);break;case"#issue3":document.body.style.background=" #ffbe00",d(1e3)?(console.log("issue3 media q"),document.querySelector(".issue3").scrollIntoView()):E(3,!0),k(3);break;case"#issue2":document.body.style.background="#1d3fbb",d(1e3)?(console.log("issue2 media q"),document.querySelector(".issue2").scrollIntoView()):E(2,!0),k(2);break;case"#issue1":document.body.style.background="#e30512",d(1e3)?(console.log("issue1 media q"),document.querySelector(".issue1").scrollIntoView()):E(1,!0),k(1)}}),[e.location.hash]),s.createElement("footer",null,s.createElement("div",{className:"l-footer-content"},s.createElement("div",{className:"info"},"Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk."),s.createElement("p",{className:"credits"},"© 2021"," ",s.createElement("a",{href:"#"},"Published by studio Milk")),s.createElement("a",{href:"#",className:"policy"},"Privacy Policy")),s.createElement("ul",{className:"bookmarks"},s.createElement("li",null,s.createElement("a",{href:"#issue5",ref:f,onClick:()=>k(5)},"Issue #5")),s.createElement("li",null,s.createElement("a",{href:"#issue4",ref:b,onClick:()=>k(4)},"Issue #4")),s.createElement("li",null,s.createElement("a",{href:"#issue3",ref:g,onClick:()=>k(3)},"Issue #3")),s.createElement("li",null,s.createElement("a",{href:"#issue2",ref:m,onClick:()=>k(2)},"Issue #2")),s.createElement("li",null,s.createElement("a",{href:"#issue1",ref:u,onClick:()=>k(1)},"Issue #1"))))}));const g=(e,t,l,a)=>s.createElement("div",{className:`issue issue${l}`,ref:a},s.createElement("img",{src:t,alt:"Issue"}),s.createElement("ul",{className:"issue-detail"},s.createElement("li",null,e),s.createElement("li",null,s.createElement("a",{href:"#"},"BUY HERE")),s.createElement("li",null,s.createElement("p",null,"or in"," ",s.createElement("a",{href:"#"},"selected stores"))))),b=(e,t,s,l)=>{const a=e.current;console.log(a);const o=a.getBoundingClientRect(),n=o.top,r=o.bottom;return console.log(`Top: ${n}`,`Bottom: ${r}`,`Window: ${window.innerHeight}`),l?n<window.innerHeight&&r>=0&&n<=-220&&n>=-270:n<=350&&n>=-20},f=({scrollCount:e,setScrollCount:t})=>{const l=a.exports.useRef(),n=a.exports.useRef(),r=a.exports.useRef(),c=a.exports.useRef(),i=a.exports.useRef();return a.exports.useEffect((()=>{document.addEventListener("scroll",o.debounce((()=>{(()=>{switch(!0){case b(l):document.body.style.background="#00c1b5",t(5),console.log("worked 5");break;case b(n):document.body.style.background="#ff651a",t(4),console.log("worked 4");break;case b(r):document.body.style.background=" #ffbe00",t(3),console.log("worked 3");break;case b(c):document.body.style.background="#1d3fbb",t(2),console.log("worked 2");break;case b(i):document.body.style.background="#e30512",t(1),console.log("worked 1");break;default:console.log("Nothing")}})()}),200))}),[]),a.exports.useEffect((()=>{console.log(e)}),[e]),s.createElement("div",{className:"issues-container"},g("Issue #5","/backstage-talks-recreate/assets/backstagetalks_cover_issue_5.3c027019.png",5,l),g("Issue #4","/backstage-talks-recreate/assets/backstagetalks_cover_issue_4.845e95df.png",4,n),g("Issue #3","/backstage-talks-recreate/assets/backstagetalks_cover_issue_3.3c4e0885.png",3,r),g("Issue #2","/backstage-talks-recreate/assets/backstagetalks_cover2017.533ea8aa.png",2,c),g("Issue #1","/backstage-talks-recreate/assets/backstagetalks_cover2016_n.21abd7c7.png",1,i))},y=()=>{const[e,t]=a.exports.useState(5),l=e=>{t(e),console.log("app.js: ",e)};return s.createElement(n,{store:i},s.createElement(u,null),s.createElement(f,{scrollCount:e,setScrollCount:l}),s.createElement(m,{scrollCount:e,setScrollCount:l}))};r.render(s.createElement(c,{base:"/backstage-talks-recreate"},s.createElement(s.StrictMode,null,s.createElement(y,null))),document.getElementById("root"));