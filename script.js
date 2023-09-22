
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



const timeline=gsap.timeline();

timeline.to("#page1",{
    y:"100vh",
    scale:0.5,
    duration:0
})

timeline.to("#page1",{
    y:"0vh",duration:0.7,delay:1
})

timeline.to("#page1",{
    rotate:-360,
    scale:1,duration:1.2,delay:1
})
