
anime({
    targets:"#landing-arrow, .landing-title",
    opacity: 0,
    duration:0,
})
var landingPageTl = anime.timeline({
    easing: 'easeInOutQuart',
    duration:1200
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
        duration:300,
        begin: function(anim){
            landingPageTl.pause();
        }   
}));
document.querySelector('#landing-arrow').addEventListener('mouseout', () => anime({
    targets: "#landing-arrow",
    translateY: "0px",
    duration:300   
}));

let titles = document.querySelectorAll(".landing-title");
let mainInTl = anime.timeline({
    easing: 'easeInOutQuart',
    autoplay:false
});
mainInTl
.add({
    targets: '.main-container',
    top:"0vh",
    duration:1800
}, 400)
.add({
    targets:'#landing-arrow',
    opacity:["1","0"],
    translateY: ["10px","100px"],
    rotate:["-45deg", "-45deg"],
    duration: 400
},0)
.add({
    targets:titles[0],
    opacity:["1","0"],
    translateX: "300px",
    translateY:["0px", "0px"]
},0)
.add({
    targets:titles[1],
    opacity:["1","0"],
    translateX: "-300px",
    translateY:["0px", "0px"]
},0)
.add({
    targets:".background-image",
    top: "-30vh",
    duration:1800,
    complete:function(a){
        enableScroll();
    }
},400)
.add({
    targets:".background-image",
    duration:0,
    complete:function(a){
        navbarTl.play();
    }
},600)
document.querySelector('#landing-arrow').addEventListener('click', () => mainInTl.play());

/*
    CONTENT ANIMATION!!!
    CONTENT ANIMATION!!!
    CONTENT ANIMATION!!!
    CONTENT ANIMATION!!!
*/ 
let navbarTl = anime.timeline({
    easing: 'easeInOutQuart',
    autoplay:false
})
// .add({
//     targets: ".navbar",
//     translateX: ['50%', '0%'],
//     opacity:[.5,1],
//     duration: 2000,
//     easing: 'easeOutExpo',
// },0)
.add({
    targets:".navbar-brand",
    // translateY: ['100%', '0%'],
    // translateX: [(window.innerWidth > 758 ? "-0%" : "-50%"),(window.innerWidth > 758 ? "-0%" : "-50%")],
    opacity:[0,1],
    duration: 700,
    easing: 'easeInOutCirc'
}, 700)
.add({
    targets: ".navbar-toggler",
    translateY: ['100%', '0%'],
    opacity:[0,1],
    duration: 700,
    easing: 'easeInOutCirc',
}, 850)
.add({
    targets:".menu-nav-elem",
    translateY:["20px", "0px"],
    opacity:["0","1"],
    duration:300,
    delay: anime.stagger(125)
}, 1200)
.add({
    targets:document.querySelectorAll('.menu-nav-elem', '::before'),
    width: ['0%', '80%'],
    easing: 'easeInOutSine',
    duration:500,
    translateY:['0px', '0px'],
    delay: anime.stagger(100)
}, "-=350")
.add({
    targets: '#axe-path',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 3000,
}, 500)
document.querySelector('.logo').addEventListener('click', () => navbarTl.play());

mobileNavbarAnimInTl = anime.timeline({
    easing: 'easeInOutQuart',
    autoplay:false
})
.add({
    targets:".menu-nav-elem",
    translateY:["20px", "0px"],
    translateX:['0%', '0%'],
    opacity:["0","1"],
    duration:200,
    delay: anime.stagger(100)
}, 0);
let navbarTogglerCnt = 0;
document.querySelector('.navbar-toggler').addEventListener('click', () => {
    if(navbarTogglerCnt % 2 == 0){
        mobileNavbarAnimInTl.restart();
        mobileNavbarAnimInTl.play();
    }   
    navbarTogglerCnt++;
});