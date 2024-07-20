// Step 1: Go to the google and search "locomotive scrolltrigger codepen" go to the first website and copy paste .js file

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();


gsap.from("#page1 #box", {
    scale: 0,
    duration: 2,
    delay: 1,
    opacity: 0,
    rotate: 360
})

gsap.from("#page2 #box", {
    scale: 0,
    duration: 2,
    opacity: 0,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "#main",
        markers: true,
        start: "top 80%",
        end: "top 80%",
        scrub: 2,
        pin: true
    }
})