import{c as e,a as t,R as s,w as l,r as o,_ as a,P as n,b as r,B as c}from"./vendor.23aaa2a1.js";var i=t({reducer:{scroll:e({name:"scrollCount",initialState:{value:5},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},defaultValue:(e,t)=>{e.value=t}}}).reducer}});const u=()=>s.createElement("header",null,s.createElement("img",{src:"/backstage-talks-recreate/assets/logo.f2fa1b6c.png",alt:"Logo"}),s.createElement("a",{href:"info@backstagetalks.com"},"Contact"));const d=e=>window.matchMedia(`(max-width: ${e}px)`).matches;var m=l((({history:e,scrollCount:t,setScrollCount:l})=>{const[n,r]=o.exports.useState(0),[c,i]=o.exports.useState(null),u=o.exports.useRef(null),m=o.exports.useRef(null),g=o.exports.useRef(null),b=o.exports.useRef(null),h=o.exports.useRef(null),k=document.querySelectorAll(".bookmarks > li"),f=o.exports.useRef({});f.current=t;const y=e=>{r(e),l(e)},w=e=>{i(e.deltaY),l((t=>e.deltaY>0?1!==t&&t>0?t-1:1:e.deltaY<0?5!==t&&t<5?t+1:(console.log("e.deltay Y false"),5):void 0))},p=e=>{window.history.pushState("","",`#issue${e}`)},E=e=>{k.forEach((t=>{console.log(t.children[0].hash[t.children[0].hash.length-1],`${e}`),t.children[0].hash[t.children[0].hash.length-1]!==`${e}`?t.children[0].style.textShadow="inherit":t.children[0].style.textShadow="-0.8px 0 0"}))},x=(e,t)=>{const s=document.querySelector(`.issue${e}`),l=document.querySelector(".issues-container"),o=()=>{l.style.transition="all 0.7s ease"};if(t)switch(parseInt(e,10)){case 5:l.style.transform="translate3d(0, 0px, 0)",o(),console.log(5);break;case 4:l.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,o(),console.log(4);break;case 3:l.style.transform=`translate3d(0, -${2*s.clientHeight}px, 0)`,o(),console.log(3);break;case 2:l.style.transform=`translate3d(0, -${3*s.clientHeight}px, 0)`,o(),console.log(2);break;case 1:l.style.transform=`translate3d(0, -${4*s.clientHeight}px, 0)`,o(),console.log(1)}else{if(c>0)switch(console.log("Down"),e){case 4:l.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,p(4),o(),E(4);break;case 3:l.style.transform=`translate3d(0, -${2*s.clientHeight}px, 0)`,p(3),o(),E(3);break;case 2:l.style.transform=`translate3d(0, -${3*s.clientHeight}px, 0)`,p(2),o(),E(2);break;case 1:l.style.transform=`translate3d(0, -${4*s.clientHeight}px, 0)`,p(1),o(),E(1)}if(c<0)switch(console.log("Up"),e){case 5:l.style.transform="translate3d(0, 0px, 0)",o(),E(5),p(5);break;case 4:l.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,o(),E(4),p(4);break;case 3:l.style.transform=`translate3d(0, ${s.clientHeight-3*s.clientHeight}px, 0)`,o(),E(3),p(3);break;case 2:l.style.transform=`translate3d(0, ${s.clientHeight-4*s.clientHeight}px, 0)`,o(),E(2),p(2)}}},S=window.innerWidth;return o.exports.useEffect((()=>{const e=a.throttle(w,600,{leading:!0,trailing:!1});d(1e3)||(window.addEventListener("wheel",e),k.forEach((e=>e.addEventListener("click",(e=>{e.preventDefault(),e.target.style.textShadow="-0.8px 0 0",k.forEach((t=>{t.children[0].hash!==e.target.hash&&(t.children[0].style.textShadow="inherit")})),x(e.target.hash[e.target.hash.length-1],!0),window.history.pushState("","",e.target.hash)}))))),window.addEventListener("resize",a.debounce((()=>{const s=document.querySelector(".issue2"),l=document.querySelector(".issues-container");if(console.log(f.current),d(1e3))S!==window.innerWidth&&(l.style.transition="none",l.style.transform="translate3d(0, 0px, 0)",document.querySelector(`.issue${f.current}`).scrollIntoView(),alert("RESIZE 1",f.current),window.removeEventListener("wheel",e),l.classList.add("disabled-wheel"));else{switch(f.current){case 5:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform="translate3d(0, 0px, 0)",console.log(555555);break;case 4:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,console.log(444444);break;case 3:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform=`translate3d(0, -${2*s.clientHeight}px, 0)`,console.log(333333);break;case 2:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform=`translate3d(0, -${3*s.clientHeight}px, 0)`,console.log(222222);break;case 1:document.querySelector(`.issue${t}`).scrollIntoView(),l.style.transform=`translate3d(0, -${4*s.clientHeight}px, 0)`,console.log(111111)}"disabled-wheel"!==(null==l?void 0:l.classList[0])&&"disabled-wheel"!==(null==l?void 0:l.classList[1])||d(1e3)||(window.addEventListener("wheel",e),l.classList.remove("disabled-wheel")),console.log("RESIZE 2",f.current)}}),200))}),[]),o.exports.useEffect((()=>console.log(t)),[t]),o.exports.useEffect((()=>{if(!d(1e3))switch(t){case 5:document.body.style.background="#00c1b5",x(5),y(5);break;case 4:document.body.style.background="#ff651a",x(4),y(4);break;case 3:document.body.style.background=" #ffbe00",x(3),y(3);break;case 2:document.body.style.background="#1d3fbb",x(2),y(2);break;case 1:document.body.style.background="#e30512",x(1),y(1)}}),[t]),o.exports.useEffect((()=>{switch(e.location.hash){case"#issue5":document.body.style.background="#00c1b5",d(1e3)?(console.log("issue5 media q"),document.querySelector(".issue5").scrollIntoView()):x(5,!0),y(5);break;case"#issue4":document.body.style.background="#ff651a",d(1e3)?(console.log("issue4 media q"),document.querySelector(".issue4").scrollIntoView()):x(4,!0),y(4);break;case"#issue3":document.body.style.background=" #ffbe00",d(1e3)?(console.log("issue3 media q"),document.querySelector(".issue3").scrollIntoView()):x(3,!0),y(3);break;case"#issue2":document.body.style.background="#1d3fbb",d(1e3)?(console.log("issue2 media q"),document.querySelector(".issue2").scrollIntoView()):x(2,!0),y(2);break;case"#issue1":document.body.style.background="#e30512",d(1e3)?(console.log("issue1 media q"),document.querySelector(".issue1").scrollIntoView()):x(1,!0),y(1)}}),[e.location.hash]),s.createElement("footer",null,s.createElement("div",{className:"l-footer-content"},s.createElement("div",{className:"info"},"Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk."),s.createElement("p",{className:"credits"},"© 2021"," ",s.createElement("a",{href:"#"},"Published by studio Milk")),s.createElement("a",{href:"#",className:"policy"},"Privacy Policy")),s.createElement("ul",{className:"bookmarks"},s.createElement("li",null,s.createElement("a",{href:"#issue5",id:"issue5-link",ref:h,onClick:()=>y(5)},"Issue #5")),s.createElement("li",null,s.createElement("a",{href:"#issue4",id:"issue4-link",ref:b,onClick:()=>y(4)},"Issue #4")),s.createElement("li",null,s.createElement("a",{href:"#issue3",id:"issue3-link",ref:g,onClick:()=>y(3)},"Issue #3")),s.createElement("li",null,s.createElement("a",{href:"#issue2",id:"issue2-link",ref:m,onClick:()=>y(2)},"Issue #2")),s.createElement("li",null,s.createElement("a",{href:"#issue1",id:"issue1-link",ref:u,onClick:()=>y(1)},"Issue #1"))))}));const g=(e,t,l,o)=>s.createElement("div",{className:`issue issue${l}`,ref:o},s.createElement("img",{src:t,alt:"Issue"}),s.createElement("ul",{className:"issue-detail"},s.createElement("li",null,e),s.createElement("li",null,s.createElement("a",{href:"#"},"BUY HERE")),s.createElement("li",null,s.createElement("p",null,"or in"," ",s.createElement("a",{href:"#"},"selected stores"))))),b=({scrollCount:e,setScrollCount:t})=>{const l=o.exports.useRef(),n=o.exports.useRef(),r=o.exports.useRef(),c=o.exports.useRef(),i=o.exports.useRef(),u=(e,t,s,l)=>{const o=e.current;console.log(o);const a=o.getBoundingClientRect(),n=a.top,r=a.bottom;return console.log(`Top: ${n}`,`Bottom: ${r}`,`Window: ${window.innerHeight}`),l?(console.log(r>=351&&r<=o.clientHeight,"\n",r,o.clientHeight),r>=351&&r<=o.clientHeight):n<=350&&n>=-20};return o.exports.useEffect((()=>{document.addEventListener("scroll",a.debounce((()=>{(()=>{switch(!0){case u(l):document.body.style.background="#00c1b5",t(5),console.log("worked 5");break;case u(n):document.body.style.background="#ff651a",t(4),console.log("worked 4");break;case u(r):document.body.style.background=" #ffbe00",t(3),console.log("worked 3");break;case u(c):document.body.style.background="#1d3fbb",t(2),console.log("worked 2");break;case u(i):document.body.style.background="#e30512",t(1),console.log("worked 1");break;default:console.log("Nothing")}switch(!0){case u(l,0,0,!0):document.body.style.background="#00c1b5",console.log("worked 5 2");break;case u(n,0,0,!0):document.body.style.background="#ff651a",console.log("worked 4 2");break;case u(r,0,0,!0):document.body.style.background=" #ffbe00",console.log("worked 3 2");break;case u(c,0,0,!0):document.body.style.background="#1d3fbb",console.log("worked 2 2");break;case u(i,0,0,!0):document.body.style.background="#e30512",console.log("worked 1 2");break;default:console.log("Nothing")}})()}),100))}),[]),o.exports.useEffect((()=>{console.log(e)}),[e]),s.createElement("div",{className:"issues-container"},g("Issue #5","/backstage-talks-recreate/assets/backstagetalks_cover_issue_5.3c027019.png",5,l),g("Issue #4","/backstage-talks-recreate/assets/backstagetalks_cover_issue_4.845e95df.png",4,n),g("Issue #3","/backstage-talks-recreate/assets/backstagetalks_cover_issue_3.3c4e0885.png",3,r),g("Issue #2","/backstage-talks-recreate/assets/backstagetalks_cover2017.533ea8aa.png",2,c),g("Issue #1","/backstage-talks-recreate/assets/backstagetalks_cover2016_n.21abd7c7.png",1,i))},h=()=>{const[e,t]=o.exports.useState(5),l=e=>{t(e)};return s.createElement(n,{store:i},s.createElement(u,null),s.createElement(b,{scrollCount:e,setScrollCount:l}),s.createElement(m,{scrollCount:e,setScrollCount:l}))};r.render(s.createElement(c,{base:"/backstage-talks-recreate"},s.createElement(s.StrictMode,null,s.createElement(h,null))),document.getElementById("root"));