import{s as p,a as i}from"./Navbar-BkwJYqkt.js";import{g as e}from"./ScrollTrigger-BTfmaXFB.js";import"./index-ByFxHC81.js";function g(){document.body.style.overflowY="auto",p.paused(!1),document.getElementsByTagName("main")[0].classList.add("main-active"),e.to("body",{backgroundColor:"#0b080c",duration:.5,delay:1});var o=new i.SplitText([".landing-info h3",".landing-intro h2",".landing-intro h1"],{type:"chars,lines",linesClass:"split-line"});e.fromTo(o.chars,{opacity:0,y:80,filter:"blur(5px)"},{opacity:1,duration:1.2,filter:"blur(0px)",ease:"power3.inOut",y:0,stagger:.025,delay:.3});let a={type:"chars,lines",linesClass:"split-h2"};var n=new i.SplitText(".landing-h2-info",a);e.fromTo(n.chars,{opacity:0,y:80,filter:"blur(5px)"},{opacity:1,duration:1.2,filter:"blur(0px)",ease:"power3.inOut",y:0,stagger:.025,delay:.3}),e.fromTo(".landing-info-h2",{opacity:0,y:30},{opacity:1,duration:1.2,ease:"power1.inOut",y:0,delay:.8}),e.fromTo([".header",".icons-section",".nav-fade"],{opacity:0},{opacity:1,duration:1.2,ease:"power1.inOut",delay:.1});var t=new i.SplitText(".landing-h2-info-1",a),r=new i.SplitText(".landing-h2-1",a),s=new i.SplitText(".landing-h2-2",a);l(n,t),l(r,s)}function l(o,a){var n=e.timeline({repeat:-1,repeatDelay:1});const t=4,r=t*2+1;n.fromTo(a.chars,{opacity:0,y:80},{opacity:1,duration:1.2,ease:"power3.inOut",y:0,stagger:.1,delay:t},0).fromTo(o.chars,{y:80},{duration:1.2,ease:"power3.inOut",y:0,stagger:.1,delay:r},1).fromTo(o.chars,{y:0},{y:-80,duration:1.2,ease:"power3.inOut",stagger:.1,delay:t},0).to(a.chars,{y:-80,duration:1.2,ease:"power3.inOut",stagger:.1,delay:r},1)}export{g as initialFX};