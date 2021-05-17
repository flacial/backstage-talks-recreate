import{c as e,a as t,R as s,w as l,r as o,_ as a,P as r,b as n,B as c}from"./vendor.23aaa2a1.js";var i=t({reducer:{scroll:e({name:"scrollCount",initialState:{value:5},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},defaultValue:(e,t)=>{e.value=t}}}).reducer}});const u=()=>s.createElement("header",null,s.createElement("img",{src:"/backstage-talks-recreate/assets/logo.f2fa1b6c.png",alt:"Logo"}),s.createElement("a",{href:"info@backstagetalks.com"},"Contact"));const d=e=>window.matchMedia(`(max-width: ${e}px)`).matches;var m=l((({history:e,scrollCount:t,setScrollCount:l})=>{const[r,n]=o.exports.useState(0),[c,i]=o.exports.useState(null),u=o.exports.useRef(null),m=o.exports.useRef(null),g=o.exports.useRef(null),b=o.exports.useRef(null),f=o.exports.useRef(null),k=o.exports.useRef({});k.current=t;const h=e=>{n(e),l(e)},y=e=>{i(e.deltaY),l((t=>e.deltaY>0?1!==t&&t>0?t-1:1:e.deltaY<0?5!==t&&t<5?t+1:(console.log("e.deltay Y false"),5):void 0))},p=e=>{window.history.pushState("","",`#issue${e}`)},E=(e,t)=>{const s=document.querySelector(`.issue${e}`),l=document.querySelector(".issues-container"),o=()=>{l.style.transition="all 0.7s ease"};if(t)switch(parseInt(e,10)){case 5:l.style.transform="translate3d(0, 0px, 0)",o(),console.log(5);break;case 4:l.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,o(),console.log(4);break;case 3:l.style.transform=`translate3d(0, -${2*s.clientHeight}px, 0)`,o(),console.log(3);break;case 2:l.style.transform=`translate3d(0, -${3*s.clientHeight}px, 0)`,o(),console.log(2);break;case 1:l.style.transform=`translate3d(0, -${4*s.clientHeight}px, 0)`,o(),console.log(1)}else{if(c>0)switch(console.log("Down"),e){case 4:l.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,p(4),o();break;case 3:l.style.transform=`translate3d(0, -${2*s.clientHeight}px, 0)`,p(3),o();break;case 2:l.style.transform=`translate3d(0, -${3*s.clientHeight}px, 0)`,p(2),o();break;case 1:l.style.transform=`translate3d(0, -${4*s.clientHeight}px, 0)`,p(1),o()}if(c<0)switch(console.log("Up"),e){case 5:l.style.transform="translate3d(0, 0px, 0)",o(),p(5);break;case 4:l.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,o(),p(4);break;case 3:l.style.transform=`translate3d(0, ${s.clientHeight-3*s.clientHeight}px, 0)`,o(),p(3);break;case 2:l.style.transform=`translate3d(0, ${s.clientHeight-4*s.clientHeight}px, 0)`,o(),p(2)}}};return o.exports.useEffect((()=>{const e=a.debounce(y,150);if(!d(1e3)){console.log("false media query 1000"),window.addEventListener("wheel",e);const t=document.querySelectorAll(".bookmarks > li");t.forEach((e=>e.addEventListener("click",(e=>{e.preventDefault(),e.target.style.textShadow="-0.8px 0 0px",t.forEach((t=>{t.children[0].hash!==e.target.hash&&(t.children[0].style.textShadow="inherit")})),E(e.target.hash[e.target.hash.length-1],!0),window.history.pushState("","",e.target.hash)}))))}window.addEventListener("resize",a.debounce((()=>{const s=document.querySelector(".issue2"),l=document.querySelector(".issues-container");if(console.log(k.current),d(1e3))l.style.transition="none",l.style.transform="translate3d(0, 0px, 0)",document.querySelector(`.issue${k.current}`).scrollIntoView(),console.log("RESIZE 1",k.current),window.removeEventListener("wheel",e),l.classList.add("disabled-wheel");else{switch(k.current){case 5:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform="translate3d(0, 0px, 0)",console.log(555555);break;case 4:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,console.log(444444);break;case 3:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform=`translate3d(0, -${2*s.clientHeight}px, 0)`,console.log(333333);break;case 2:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform=`translate3d(0, -${3*s.clientHeight}px, 0)`,console.log(222222);break;case 1:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform=`translate3d(0, -${4*s.clientHeight}px, 0)`,console.log(111111)}"disabled-wheel"!==(null==l?void 0:l.classList[0])&&"disabled-wheel"!==(null==l?void 0:l.classList[1])||d(1e3)||(window.addEventListener("wheel",e),l.classList.remove("disabled-wheel")),console.log(l.classList),console.log("RESIZE 2",k.current)}}),200))}),[]),o.exports.useEffect((()=>console.log(t)),[t]),o.exports.useEffect((()=>{if(!d(1e3))switch(t){case 5:document.body.style.background="#00c1b5",E(5),h(5);break;case 4:document.body.style.background="#ff651a",E(4),h(4);break;case 3:document.body.style.background=" #ffbe00",E(3),h(3);break;case 2:document.body.style.background="#1d3fbb",E(2),h(2);break;case 1:document.body.style.background="#e30512",E(1),h(1)}}),[t]),o.exports.useEffect((()=>{switch(e.location.hash){case"#issue5":document.body.style.background="#00c1b5",d(1e3)?(console.log("issue5 media q"),document.querySelector(".issue5").scrollIntoView()):E(5,!0),h(5);break;case"#issue4":document.body.style.background="#ff651a",d(1e3)?(console.log("issue4 media q"),document.querySelector(".issue4").scrollIntoView()):E(4,!0),h(4);break;case"#issue3":document.body.style.background=" #ffbe00",d(1e3)?(console.log("issue3 media q"),document.querySelector(".issue3").scrollIntoView()):E(3,!0),h(3);break;case"#issue2":document.body.style.background="#1d3fbb",d(1e3)?(console.log("issue2 media q"),document.querySelector(".issue2").scrollIntoView()):E(2,!0),h(2);break;case"#issue1":document.body.style.background="#e30512",d(1e3)?(console.log("issue1 media q"),document.querySelector(".issue1").scrollIntoView()):E(1,!0),h(1)}}),[e.location.hash]),s.createElement("footer",null,s.createElement("div",{className:"l-footer-content"},s.createElement("div",{className:"info"},"Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk."),s.createElement("p",{className:"credits"},"© 2021"," ",s.createElement("a",{href:"#"},"Published by studio Milk")),s.createElement("a",{href:"#",className:"policy"},"Privacy Policy")),s.createElement("ul",{className:"bookmarks"},s.createElement("li",null,s.createElement("a",{href:"#issue5",ref:f,onClick:()=>h(5)},"Issue #5")),s.createElement("li",null,s.createElement("a",{href:"#issue4",ref:b,onClick:()=>h(4)},"Issue #4")),s.createElement("li",null,s.createElement("a",{href:"#issue3",ref:g,onClick:()=>h(3)},"Issue #3")),s.createElement("li",null,s.createElement("a",{href:"#issue2",ref:m,onClick:()=>h(2)},"Issue #2")),s.createElement("li",null,s.createElement("a",{href:"#issue1",ref:u,onClick:()=>h(1)},"Issue #1"))))}));const g=(e,t,l,o)=>s.createElement("div",{className:`issue issue${l}`,ref:o},s.createElement("img",{src:t,alt:"Issue"}),s.createElement("ul",{className:"issue-detail"},s.createElement("li",null,e),s.createElement("li",null,s.createElement("a",{href:"#"},"BUY HERE")),s.createElement("li",null,s.createElement("p",null,"or in"," ",s.createElement("a",{href:"#"},"selected stores"))))),b=(e,t,s,l)=>{const o=e.current;console.log(o);const a=o.getBoundingClientRect(),r=a.top,n=a.bottom;return console.log(`Top: ${r}`,`Bottom: ${n}`,`Window: ${window.innerHeight}`),l?r<window.innerHeight&&n>=0&&r<=-220&&r>=-270:r<=350&&r>=-20},f=({scrollCount:e,setScrollCount:t})=>{const l=o.exports.useRef(),r=o.exports.useRef(),n=o.exports.useRef(),c=o.exports.useRef(),i=o.exports.useRef();return o.exports.useEffect((()=>{document.addEventListener("scroll",a.debounce((()=>{(()=>{switch(!0){case b(l):document.body.style.background="#00c1b5",t(5),console.log("worked 5");break;case b(r):document.body.style.background="#ff651a",t(4),console.log("worked 4");break;case b(n):document.body.style.background=" #ffbe00",t(3),console.log("worked 3");break;case b(c):document.body.style.background="#1d3fbb",t(2),console.log("worked 2");break;case b(i):document.body.style.background="#e30512",t(1),console.log("worked 1");break;default:console.log("Nothing")}})()}),200))}),[]),o.exports.useEffect((()=>{console.log(e)}),[e]),s.createElement("div",{className:"issues-container"},g("Issue #5","/backstage-talks-recreate/assets/backstagetalks_cover_issue_5.3c027019.png",5,l),g("Issue #4","/backstage-talks-recreate/assets/backstagetalks_cover_issue_4.845e95df.png",4,r),g("Issue #3","/backstage-talks-recreate/assets/backstagetalks_cover_issue_3.3c4e0885.png",3,n),g("Issue #2","/backstage-talks-recreate/assets/backstagetalks_cover2017.533ea8aa.png",2,c),g("Issue #1","/backstage-talks-recreate/assets/backstagetalks_cover2016_n.21abd7c7.png",1,i))},k=()=>{const[e,t]=o.exports.useState(5),l=e=>{t(e),console.log("app.js: ",e)};return s.createElement(r,{store:i},s.createElement(u,null),s.createElement(f,{scrollCount:e,setScrollCount:l}),s.createElement(m,{scrollCount:e,setScrollCount:l}))};n.render(s.createElement(c,{base:"/backstage-talks-recreate"},s.createElement(s.StrictMode,null,s.createElement(k,null))),document.getElementById("root"));
