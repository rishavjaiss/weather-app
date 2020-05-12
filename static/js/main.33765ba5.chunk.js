(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a(59)},33:function(e,t,a){},34:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),i=a.n(r);a(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(10),o=a(7);a(34);function m(){return Object(n.useEffect)((function(){document.title="Weather App"})),c.a.createElement("div",{className:"navbar"},c.a.createElement("h3",null,"My Weather Application"),c.a.createElement("ul",null,c.a.createElement(l.b,{to:"/"},c.a.createElement("li",null,"Home")),c.a.createElement(l.b,{to:"/MyCities"},c.a.createElement("li",null,"My Cities")),c.a.createElement(l.b,{to:"/About"},c.a.createElement("li",null,"About"))))}var u=a(5),s=a(9),d=a.n(s);a(57);function p(){var e="52fc60ce71a5b4b724a42352692d2d24",t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),m=o[0],s=o[1],p=Object(n.useState)(""),b=Object(u.a)(p,2),h=b[0],E=b[1],f=Object(n.useState)(""),v=Object(u.a)(f,2),y=v[0],w=v[1],k=Object(n.useState)("Kolkata"),j=Object(u.a)(k,2),C=j[0],g=j[1],x=Object(n.useState)(""),F=Object(u.a)(x,2),O=F[0],N=F[1],_=Object(n.useState)(""),A=Object(u.a)(_,2),S=A[0],M=A[1],K=Object(n.useState)("\xb0C"),T=Object(u.a)(K,2),D=T[0],H=T[1];return Object(n.useEffect)((function(){d.a.get("https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=".concat(e)).then((function(e){E(e.data.main.temp),i(e.data.main.temp_max),s(e.data.main.temp_min),w(e.data.weather[0].main),N(e.data.main.feels_like),M(e.data.main.humidity)})),document.title="Weather App"}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("form",null,c.a.createElement("label",null,"Select a city : "),c.a.createElement("select",{id:"choose",onChange:function(t){return function(t){g(t),d.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(e)).then((function(e){E(e.data.main.temp),i(e.data.main.temp_max),s(e.data.main.temp_min),w(e.data.weather[0].main),N(e.data.main.feels_like),M(e.data.main.humidity)}))}(t.target.value)}},c.a.createElement("option",{value:"Kolkata"},"Kolkata"),c.a.createElement("option",{value:"New Delhi"},"New Delhi"),c.a.createElement("option",{value:"Mumbai"},"Mumbai"),c.a.createElement("option",{value:"Bangalore"},"Bangalore"),c.a.createElement("option",{value:"Chennai"},"Chennai"),c.a.createElement("option",{value:"Ahmedabad"},"Ahmedabad"),c.a.createElement("option",{value:"Hyderabad"},"Hyderabad"),c.a.createElement("option",{value:"Pune"},"Pune"))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card"},c.a.createElement("h3",{id:"city"},C),c.a.createElement("h1",{id:"temp"},function(e){var t=0;switch(e){case"\xb0C":t=(h-273).toFixed(0);break;case"K":t=h.toFixed(0);break;case"\xb0F":t=(1.8*(h-273)+32).toFixed(0)}return t}(D),D),c.a.createElement("h5",null,c.a.createElement("i",null,"Feels like : ",function(e){var t;switch(e){case"\xb0C":t=(O-273).toFixed(0);break;case"K":t=O.toFixed(0);break;case"\xb0F":t=(1.8*(O-273)+32).toFixed(0)}return t}(D),D)),c.a.createElement("span",{id:"type"},y),c.a.createElement("span",null,function(e){var t;switch(e){case"\xb0C":t=(r-273).toFixed(0);break;case"K":t=r.toFixed(0);break;case"\xb0F":t=(1.8*(r-273)+32).toFixed(0)}return t}(D),D," / ",function(e){var t=0;switch(e){case"\xb0C":t=(m-273).toFixed(0);break;case"K":t=m.toFixed(0);break;case"\xb0F":t=(1.8*(m-273)+32).toFixed(0)}return t}(D),D),c.a.createElement("p",null,"Humidity : ",S," %"),c.a.createElement("div",{className:"temptype"},c.a.createElement("span",null,"Temperature Type :"),c.a.createElement("button",{id:"c",className:"tempbtn",onClick:function(){return H("\xb0C")}},"\u2103"),c.a.createElement("button",{id:"k",className:"tempbtn",onClick:function(){return H("K")}},"K"),c.a.createElement("button",{id:"f",className:"tempbtn",onClick:function(){return H("\xb0F")}},"\u2109")))),c.a.createElement("div",{className:"addCity"},c.a.createElement("button",{className:"addbtn",onClick:function(e){return function(e){var t=(h-273).toFixed(0);d.a.post("https://weather-app-64739.firebaseio.com/.json",{City:C,Temperature:"".concat(t,"\xb0C")}).then(alert("".concat(C," has been added successfully!")))}()}},"Add ",C," to My Cities")))}a(58);function b(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=function(e){var t=e.target.parentNode.id;d.a.delete("https://weather-app-64739.firebaseio.com/".concat(t,".json")),e.currentTarget.parentNode.remove()};return Object(n.useEffect)((function(){document.title="My Cities",d.a.get("https://weather-app-64739.firebaseio.com/.json").then((function(e){return r(e.data)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"My Cities"),c.a.createElement("div",{className:"box"},c.a.createElement("div",{className:"cityContainer"},function(){var e=[],t=[],n=[];for(var r in a){var l=a[r].City,o=a[r].Temperature,m=r;e.push(l),t.push(o),n.push(m)}return e.map((function(e,a){return c.a.createElement("div",{className:"city",id:n[a],key:a},c.a.createElement("span",null,e),c.a.createElement("span",null,t[a]),c.a.createElement("button",{id:"removebtn",onClick:function(e){return i(e)}},"Remove"))}))}())))}function h(){return Object(n.useEffect)((function(){document.title="About"}),[]),c.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h3",{style:{textAlign:"center"}},"Designed and Developed with \u2764 by"," ",c.a.createElement("a",{style:{color:"blue",textDecoration:"underline"},href:"https://github.com/rishavjaiss/weather-app",target:"blank"},"Rishav")),c.a.createElement("img",{style:{borderRadius:"50%",width:"250px",margin:"auto"},src:"https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/18527848_1325000874252607_3977818397876930436_n.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_oc=AQlAw4HNTRIMsz-o_699tFESdFK0PsvBxUJ-C6tfNTHOUQSc092WUeeZZOy9hTwaYvw&_nc_ht=scontent.fccu3-1.fna&oh=db49e146861ad0d89863f9bd99db3301&oe=5EDF13AC",alt:"Profile Pic"}))}var E=function(){return c.a.createElement(l.a,{basename:"weather-app"},c.a.createElement(m,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0,component:p}),c.a.createElement(o.a,{path:"/MyCities",component:b}),c.a.createElement(o.a,{path:"/About",component:h})))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.33765ba5.chunk.js.map