const titles=[
{name:"Shadow Run",type:"Movie",rating:"8.4",genre:"Action"},
{name:"Neon City",type:"Movie",rating:"8.1",genre:"Thriller"},
{name:"The Last Signal",type:"Movie",rating:"9.0",genre:"Drama"},
{name:"Dark Horizon",type:"Series",rating:"8.7",genre:"Drama"},
{name:"Zero Hour",type:"Series",rating:"8.3",genre:"Action"},
{name:"Midnight Code",type:"Movie",rating:"8.6",genre:"Thriller"},
{name:"Wild Road",type:"Movie",rating:"7.9",genre:"Action"},
{name:"Hidden Truth",type:"Series",rating:"8.8",genre:"Drama"},
{name:"Final Mission",type:"Movie",rating:"8.2",genre:"Action"},
{name:"City Lights",type:"Series",rating:"8.0",genre:"Comedy"},
{name:"Beyond Time",type:"Movie",rating:"8.9",genre:"Drama"},
{name:"Black Room",type:"Series",rating:"8.5",genre:"Thriller"}
];
function card(t){return `<a class="card" href="details.html?title=${encodeURIComponent(t.name)}"><div class="poster">${t.name}</div><div class="card-info"><b>${t.name}</b><br><small>★ ${t.rating} · ${t.type}</small></div></a>`}
function render(id,list){const el=document.getElementById(id);if(el)el.innerHTML=list.map(card).join("")}
render("trending",titles.slice(0,6));render("popular",titles.slice(4,10));render("movies",titles.filter(x=>x.type==="Movie"));render("series",titles.filter(x=>x.type==="Series"));
const input=document.getElementById("searchInput"); if(input){const run=()=>render("results",titles.filter(t=>t.name.toLowerCase().includes(input.value.toLowerCase())));input.addEventListener("input",run);run()}
const details=document.getElementById("details");if(details){const name=new URLSearchParams(location.search).get("title")||"Shadow Run";const t=titles.find(x=>x.name===name)||titles[0];details.innerHTML=`<div class="details-content"><p class="eyebrow">${t.type.toUpperCase()}</p><h1>${t.name}</h1><p>★ ${t.rating} &nbsp; · &nbsp; ${t.genre}</p><p class="muted">A cinematic demo title for the TORTEX TV streaming interface. Add your licensed synopsis, artwork, cast and metadata here.</p><a class="btn" href="watch.html?title=${encodeURIComponent(t.name)}">▶ Watch Now</a><button class="btn ghost" onclick="saveTitle('${t.name.replaceAll("'","\\'")}')">＋ My List</button></div>`}
function saveTitle(name){let a=JSON.parse(localStorage.getItem("tortexList")||"[]");if(!a.includes(name))a.push(name);localStorage.setItem("tortexList",JSON.stringify(a));alert("Added to My List")}
const ml=document.getElementById("mylist");if(ml){const a=JSON.parse(localStorage.getItem("tortexList")||"[]");render("mylist",titles.filter(t=>a.includes(t.name)))}
