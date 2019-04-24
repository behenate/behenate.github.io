var landingPageTl = anime.timeline({
    easing: 'easeInOutQuart',
    duration:1200,
});

landingPageTl
.add({
    easing: "linear",
    targets:'.background-image',
    filter: ["blur(5px)", "blur(0px)"],
    duration:600,
    delay:300
},0)
.add({
    targets: '.landing-title',
    opacity: [0,1],
    translateY: ["-200px", "0px"],
    delay: anime.stagger(150)
},"+=0")
.add({
    targets: '#landing-arrow',
    easing: 'easeOutQuint',
    opacity:[0,1],
    translateY: ["300px", "0px"],
    rotate:["-45deg", "-45deg"],
    duration: 1200
}, "+=100")
.add({
    targets: '#landing-arrow',
    easing:"easeInOutElastic",
    keyframes: [
        {translateY: ["0px","10px"]},
        {translateY: ["10px","0px"], delay:500}
    ],
    delay:500
});
document.querySelector('#landing-arrow').addEventListener('mouseover', () => anime({
        targets: "#landing-arrow",
        translateY: "10px",
        duration:300   
}));
document.querySelector('#landing-arrow').addEventListener('mouseout', () => anime({
    targets: "#landing-arrow",
    translateY: "0px",
    duration:300   
}));