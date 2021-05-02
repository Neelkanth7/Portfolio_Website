// gsap.to(".navbar" , {duration:2 , x:300 , backgroundColor : "#560563" , borderRadius : "20%" , border : "5px solid white" ,ease : "elastic" });

function refresh() { location.reload(); }



gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(MotionPathPlugin);


gsap.from(".navbar" , {duration :1 , opacity : 0 , x:150 , delay:0.5, stagger:0.25 })




// Gsap

const words = ["Neelkanth" , "A Developer" , "A Cule ⚽️ "];

let cursor = gsap.to(".cursor" , {opacity : 0 , ease : "power2.inOut" , repeat : -1}) 

let boxTl = gsap.timeline()

boxTl.to('.box' , {duration : 1 , width:"15vw" , delay: 0.5 , ease:"power4.inOut" })
.from(".hi" , {duration : 1 , y : "5vw" , ease : "power3.out" , onComplete : () => {masterTl.play()} })
.to(".box" , {duration :1 , height:"5vw" , ease:"elastic.out"})
.to (".box" , {duration :2 , autoAlpha : 0.5 , yoyo : true , repeat : -1 })

let masterTl = gsap.timeline({repeat : -1}).pause()

words.forEach(word => {
    let tl = gsap.timeline({repeat : 1 , yoyo : true , repeatDelay : 1})
    tl.to(".text" , {duration :1 , text : word})
    masterTl.add(tl)
})

ScrollTrigger.create({
  animation: gsap.fromTo(".abpara", {opacity:0}, {duration:1 ,opacity:1 } ) 
  
  ,
  trigger:".second",
  start :"top bottom",
  
  scrub:true,


})




ScrollTrigger.create({
  animation: gsap.fromTo(".edpara", {xPercent: 100}, {xPercent:-30, duration: 0.5} )
  
  ,
  trigger:".third",
  start :"top bottom",
  
  scrub:true,


})



ScrollTrigger.create({
  animation: gsap.fromTo(".prpara", {xPercent: -100}, {xPercent:30, duration: 0.5} )
  
  ,
  trigger:".fourth",
  start :"top bottom",
  
  scrub:true,


})
// const tl = gsap.timeline();

// tl.to(".second" , {yPercent: -100})
// .to(".third" , {yPercent : -100})
// .to(".fourth" , {yPercent : -100});


// ScrollTrigger.create({
//     animation:tl,
//     trigger:".first",
//     start:"top top",
//    end:"+=3000px bottom",
//     scrub:true,
//     pin:true,
//     pinSpacing:false,
//     markers:true,
// });


// perform layered pinning //


gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top", 
      pin: true, 
      pinSpacing: false 
    });
  });
  
  
//   ScrollTrigger.create({
//     snap: 1 / 4 // snap whole page to the closest section!
//   });
  
  
  

gsap.to("#rect", {
  scrollTrigger:{
    trigger:".first",
    start:"top top",
    end:"center top",
    immediateRender: true,


    scrub:true,
  },
  duration: 1, 
  ease: "none",
  motionPath:{
    path: "#track",
    align: "#track",
    autoRotate: true, //Rotates it according to the curvature of the path
    alignOrigin: [0.5, 0.5]
  }
});
