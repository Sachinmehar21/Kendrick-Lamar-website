var tl = gsap.timeline()

tl.from("#nav H2,H3",{
    y:-50,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.3,
})

tl.from("h1",{
    x:-100,
    opacity:0,
    stagger:0.3,
    duration:0.7,
})

tl.from("img",{
    opacity:0,
    stagger:0.5,
    rotate:30,
    x:+200,
})

tl.from("footer h2",{ 
    y:50,
    opacity:0,
    duration:1,
    stagger:0.3,
},"-=4.5")