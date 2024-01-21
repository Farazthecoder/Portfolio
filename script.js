

let tl = gsap.timeline();

tl.to(".shutter",{
    top:"-100vh",
    duration:3,
    delay:1,
    borderRadius:"20%"
})

tl.from("nav",{
    y:700,
    duration : 2.5,
    opacity:0,
    backgroundColor : "#35c4a5",
    borderRadius : "50%",
    height:"20px",
    width:"20px",
    overflow : "hidden",
    position:"fixed",
    zIndex:111
    // repeat : -1
});

tl.from(".img",{
//    x:700,
   duration:3,
   rotate:360,
   scale:-2,
   opacity:0,
   y:-100,

})

gsap.from(".knowledge",{
    opacity:0,
    duration:3,
    delay:2,
    scale:-1,
    // backgroundColor:"black",
})

gsap.to(".hire",{
    duration:1.5,
    delay:3,
    y:20,
    repeat:-1,
    yoyo:true,
    border:"5px solid #124d3b",
    borderRadius:"100%"
})

// skills section 

gsap.from(".skills h1 ,.first-container",{
    duration:2,
    opacity:0,
    stagger:1,
    y:50,
    scrollTrigger:{
        trigger : "#skills",
        scroller:"body",
        start:"top 70%",
    }
})

// Project Section

gsap.from(".project h1 , .first-box",{
    duration:0.5,
    opacity:0,
    stagger:1,
    y:-50,
    scrollTrigger:{
        trigger : "#projects",
        scroller:"body",
        start:"top 70%",
    }
})

// contact section

gsap.from(".contact h1 , .info-form , .left-container,.mid-container,.right-container",{
    duration:1,
    opacity:0,
    stagger:.5,
    y:-50,
    width:"10px",
    // backgroundColor:"white",
    // borderRadius:"100%",
    scrollTrigger:{
        trigger : "#contact",
        scroller:"body",
        start:"top 70%",
    }
})




