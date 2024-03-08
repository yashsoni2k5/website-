const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.to("a",{
    stagger:.1,
    y: 10,
    opacity:0,
    duration : 2,
   ease:power3,
})