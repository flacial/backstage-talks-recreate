import{c as e,a as t,R as s,w as a,r,_ as l,P as c,b as n,B as o}from"./vendor.23aaa2a1.js";var i=t({reducer:{scroll:e({name:"scrollCount",initialState:{value:5},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},defaultValue:(e,t)=>{e.value=t}}}).reducer}});const u=()=>s.createElement("header",null,s.createElement("img",{width:"260",height:"30",src:"/backstage-talks-recreate/assets/logo.2af4a377.webp",alt:"Logo"}),s.createElement("a",{className:"contact-link",href:"#"},"Contact"));const d=e=>window.matchMedia(`(max-width: ${e}px)`).matches;var m=a((({history:e,scrollCount:t,setScrollCount:a})=>{const[c,n]=r.exports.useState(null),o=r.exports.useRef(null),i=r.exports.useRef(null),u=r.exports.useRef(null),m=r.exports.useRef(null),b=r.exports.useRef(null),k=document.querySelectorAll(".bookmarks > li"),f=r.exports.useRef({});f.current=t;const y=e=>{a(e)},h=e=>{n(e.deltaY),a((t=>e.deltaY>0?1!==t&&t>0?t-1:1:e.deltaY<0?5!==t&&t<5?t+1:5:void 0))},g=e=>{window.history.pushState("","",`#issue${e}`)},w=e=>{k.forEach((t=>{t.children[0].hash[t.children[0].hash.length-1]!==`${e}`?t.children[0].style.textShadow="inherit":t.children[0].style.textShadow="-0.8px 0 0"}))},p=(e,t)=>{const s=document.querySelector(`.issue${e}`),a=document.querySelector(".issues-container"),r=()=>{a.style.transition="all 0.7s ease"};if(t)switch(parseInt(e,10)){case 5:a.style.transform="translate3d(0, 0px, 0)",r(),w(5);break;case 4:w(4),a.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,r();break;case 3:w(3),a.style.transform=`translate3d(0, -${2*s.clientHeight}px, 0)`,r();break;case 2:w(2),a.style.transform=`translate3d(0, -${3*s.clientHeight}px, 0)`,r();break;case 1:w(1),a.style.transform=`translate3d(0, -${4*s.clientHeight}px, 0)`,r()}else{if(c>0)switch(e){case 5:a.style.transform="translate3d(0, 0, 0)",g(5),r(),w(5);break;case 4:a.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,g(4),r(),w(4);break;case 3:a.style.transform=`translate3d(0, -${2*s.clientHeight}px, 0)`,g(3),r(),w(3);break;case 2:a.style.transform=`translate3d(0, -${3*s.clientHeight}px, 0)`,g(2),r(),w(2);break;case 1:a.style.transform=`translate3d(0, -${4*s.clientHeight}px, 0)`,g(1),r(),w(1)}if(c<0)switch(e){case 5:a.style.transform="translate3d(0, 0, 0)",r(),w(5),g(5);break;case 4:a.style.transform=`translate3d(0, -${s.clientHeight}px, 0)`,r(),w(4),g(4);break;case 3:a.style.transform=`translate3d(0, ${s.clientHeight-3*s.clientHeight}px, 0)`,r(),w(3),g(3);break;case 2:a.style.transform=`translate3d(0, ${s.clientHeight-4*s.clientHeight}px, 0)`,r(),w(2),g(2);break;case 1:g(1)}}},E=window.innerWidth;return r.exports.useEffect((()=>{const e=document.querySelector(".issues-container"),s=l.throttle(h,600,{leading:!0,trailing:!1});d(1e3)?e.classList.add("disabled-wheel"):window.addEventListener("wheel",s),window.addEventListener("resize",l.debounce((()=>{const a=document.querySelector(".issue2");if(d(1e3))E!==window.innerWidth&&(e.style.transition="none",e.style.transform="translate3d(0, 0px, 0)",document.querySelector(`.issue${f.current}`).scrollIntoView(),window.removeEventListener("wheel",s),e.classList.add("disabled-wheel"));else{switch(f.current){case 5:document.querySelector(`.issue${t}`).scrollIntoView(),e.style.transform="translate3d(0, 0px, 0)";break;case 4:document.querySelector(`.issue${t}`).scrollIntoView(),e.style.transform=`translate3d(0, -${a.clientHeight}px, 0)`;break;case 3:document.querySelector(`.issue${t}`).scrollIntoView(),e.style.transform=`translate3d(0, -${2*a.clientHeight}px, 0)`;break;case 2:document.querySelector(`.issue${t}`).scrollIntoView(),e.style.transform=`translate3d(0, -${3*a.clientHeight}px, 0)`;break;case 1:document.querySelector(`.issue${t}`).scrollIntoView(),e.style.transform=`translate3d(0, -${4*a.clientHeight}px, 0)`}"disabled-wheel"!==(null==e?void 0:e.classList[0])&&"disabled-wheel"!==(null==e?void 0:e.classList[1])||d(1e3)||(window.addEventListener("wheel",s),e.classList.remove("disabled-wheel"))}}),200))}),[]),r.exports.useEffect((()=>{if(!d(1e3))switch(t){case 5:document.body.style.background="#00c1b5",p(5),y(5);break;case 4:document.body.style.background="#ff651a",p(4),y(4);break;case 3:document.body.style.background=" #ffbe00",p(3),y(3);break;case 2:document.body.style.background="#1d3fbb",p(2),y(2);break;case 1:document.body.style.background="#e30512",p(1),y(1)}}),[t]),r.exports.useEffect((()=>{switch(e.location.hash){case"#issue5":document.body.style.background="#00c1b5",d(1e3)?document.querySelector(".issue5").scrollIntoView():p(5,!0),y(5);break;case"#issue4":document.body.style.background="#ff651a",d(1e3)?document.querySelector(".issue4").scrollIntoView():p(4,!0),y(4);break;case"#issue3":document.body.style.background=" #ffbe00",d(1e3)?document.querySelector(".issue3").scrollIntoView():p(3,!0),y(3);break;case"#issue2":document.body.style.background="#1d3fbb",d(1e3)?document.querySelector(".issue2").scrollIntoView():p(2,!0),y(2);break;case"#issue1":document.body.style.background="#e30512",d(1e3)?document.querySelector(".issue1").scrollIntoView():p(1,!0),y(1)}}),[e.location.hash]),s.createElement("footer",null,s.createElement("div",{className:"l-footer-content"},s.createElement("div",{className:"info"},"Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk."),s.createElement("p",{className:"credits"},"© 2021"," ",s.createElement("a",{href:"#"},"Published by studio Milk")),s.createElement("a",{href:"#",className:"policy"},"Privacy Policy"),s.createElement("a",{className:"contact-link",href:"#"},"Contact")),s.createElement("ul",{className:"bookmarks"},s.createElement("li",null,s.createElement("a",{href:"#issue5",id:"issue5-link",ref:b,onClick:()=>y(5)},"Issue #5")),s.createElement("li",null,s.createElement("a",{href:"#issue4",id:"issue4-link",ref:m,onClick:()=>y(4)},"Issue #4")),s.createElement("li",null,s.createElement("a",{href:"#issue3",id:"issue3-link",ref:u,onClick:()=>y(3)},"Issue #3")),s.createElement("li",null,s.createElement("a",{href:"#issue2",id:"issue2-link",ref:i,onClick:()=>y(2)},"Issue #2")),s.createElement("li",null,s.createElement("a",{href:"#issue1",id:"issue1-link",ref:o,onClick:()=>y(1)},"Issue #1"))))}));const b=(e,t,a,r)=>s.createElement("div",{className:`issue issue${a}`,ref:r},s.createElement("img",{width:"423",height:"536",src:t,alt:"Issue"}),s.createElement("ul",{className:"issue-detail"},s.createElement("li",null,e),s.createElement("li",null,s.createElement("a",{href:"#"},"BUY HERE")),s.createElement("li",null,s.createElement("p",null,"or in"," ",s.createElement("a",{href:"#"},"selected stores"))))),k=({setScrollCount:e})=>{const t=r.exports.useRef(),a=r.exports.useRef(),c=r.exports.useRef(),n=r.exports.useRef(),o=r.exports.useRef(),i=(e,t)=>{const s=e.current||e,a=s.getBoundingClientRect(),r=a.top,l=a.bottom;return t?l>=351&&l<=s.clientHeight:r<=350&&r>=-20};return r.exports.useEffect((()=>{document.addEventListener("scroll",l.debounce((()=>{(()=>{switch(!0){case i(t):document.body.style.background="#00c1b5",e(5);break;case i(a):document.body.style.background="#ff651a",e(4);break;case i(c):document.body.style.background=" #ffbe00",e(3);break;case i(n):document.body.style.background="#1d3fbb",e(2);break;case i(o):case i(document.querySelector(".info")):document.body.style.background="#e30512",e(1)}switch(!0){case i(t,!0):document.body.style.background="#00c1b5";break;case i(a,!0):document.body.style.background="#ff651a";break;case i(c,!0):document.body.style.background=" #ffbe00";break;case i(n,!0):document.body.style.background="#1d3fbb";break;case i(o,!0):case i(document.querySelector(".info"),!0):document.body.style.background="#e30512"}})()}),50))}),[]),s.createElement("div",{className:"issues-container"},b("Issue #5","/backstage-talks-recreate/assets/backstagetalks_cover_issue_5.a49a299d.webp",5,t),b("Issue #4","/backstage-talks-recreate/assets/backstagetalks_cover_issue_4.d1a45359.webp",4,a),b("Issue #3","/backstage-talks-recreate/assets/backstagetalks_cover_issue_3.79869ab0.webp",3,c),b("Issue #2","/backstage-talks-recreate/assets/backstagetalks_cover2017.a7caa100.webp",2,n),b("Issue #1","/backstage-talks-recreate/assets/backstagetalks_cover2016_n.e08fc527.webp",1,o))},f=()=>{const[e,t]=r.exports.useState(5),a=e=>{t(e)};return s.createElement(c,{store:i},s.createElement(u,null),s.createElement(k,{setScrollCount:a}),s.createElement(m,{scrollCount:e,setScrollCount:a}))};n.render(s.createElement(o,{base:"/backstage-talks-recreate"},s.createElement(s.StrictMode,null,s.createElement(f,null))),document.getElementById("root"));