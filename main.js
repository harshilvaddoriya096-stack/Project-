const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];

window.addEventListener("load",()=>setTimeout(()=>$("#loader").style.opacity="0",250));
setTimeout(()=>{const l=$("#loader");if(l)l.style.display="none"},900);

const nav=$("#mainNav");
window.addEventListener("scroll",()=>{
  nav.classList.toggle("scrolled",scrollY>20);
  $("#backTop").style.display=scrollY>500?"grid":"none";
},{passive:true});

$("#backTop").addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

const revealObserver=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");revealObserver.unobserve(e.target)}})
},{threshold:.12});
$$(".reveal").forEach(e=>revealObserver.observe(e));

const sections=$$("main section[id]");
const navLinks=$$(".nav-link");
const sectionObserver=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting){
   navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id));
  }
 })
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>sectionObserver.observe(s));

$$(".nav-link").forEach(a=>a.addEventListener("click",()=>{
 const menu=$("#navMenu");
 if(menu.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));

const projects=[
 {title:"[YOUR PROJECT 01]",cat:"web",label:"WEB DEVELOPMENT",icon:"fa-laptop-code",desc:"[Replace with a concise, verified project description.]",tags:["HTML","CSS","JavaScript"]},
 {title:"[YOUR PROJECT 02]",cat:"wordpress",label:"WORDPRESS",icon:"fa-wordpress",desc:"[Replace with a concise, verified project description.]",tags:["WordPress","PHP","SEO"]},
 {title:"[YOUR PROJECT 03]",cat:"ecommerce",label:"E-COMMERCE",icon:"fa-cart-shopping",desc:"[Replace with a concise, verified project description.]",tags:["WooCommerce","PHP","MySQL"]},
 {title:"[YOUR PROJECT 04]",cat:"javascript",label:"JAVASCRIPT",icon:"fa-js",desc:"[Replace with a concise, verified project description.]",tags:["JavaScript","API","CSS"]},
 {title:"[YOUR PROJECT 05]",cat:"other",label:"OTHER",icon:"fa-code",desc:"[Replace with a concise, verified project description.]",tags:["C++","DSA"]},
 {title:"[YOUR PROJECT 06]",cat:"web",label:"WEB DEVELOPMENT",icon:"fa-globe",desc:"[Replace with a concise, verified project description.]",tags:["Bootstrap","JavaScript","Responsive"]}
];
function renderProjects(filter="all"){
 const grid=$("#projectGrid");
 grid.innerHTML=projects.filter(p=>filter==="all"||p.cat===filter).map(p=>`
 <div class="col-md-6 col-xl-4 reveal visible"><article class="project-card">
 <div class="project-thumb"><i class="fa-solid ${p.icon}"></i></div><div class="project-body">
 <span class="cat">${p.label}</span><h3>${p.title}</h3><p>${p.desc}</p>
 <div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div>
 <div class="project-links"><a href="#" aria-label="${p.title} live demo">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a><a href="#" aria-label="${p.title} GitHub">GitHub <i class="fa-brands fa-github"></i></a></div>
 </div></article></div>`).join("");
}
renderProjects();
$$(".filter").forEach(btn=>btn.addEventListener("click",()=>{
 $$(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderProjects(btn.dataset.filter);
}));

$("#themeToggle").addEventListener("click",()=>{
 document.documentElement.classList.toggle("light");
 const light=document.documentElement.classList.contains("light");
 $("#themeToggle").innerHTML=`<i class="fa-solid ${light?"fa-moon":"fa-sun"}"></i>`;
 localStorage.setItem("theme",light?"light":"dark");
});
if(localStorage.getItem("theme")==="light"){$("#themeToggle").click()}

const form=$("#contactForm");
form.addEventListener("submit",e=>{
 e.preventDefault();
 if(!form.checkValidity()){form.classList.add("was-validated");$("#formStatus").textContent="Please complete the required fields.";return}
 $("#formStatus").textContent="Demo form validated. Connect this form to your secure backend/email service before publishing.";
 form.reset();form.classList.remove("was-validated");
});
$("#year").textContent=new Date().getFullYear();
