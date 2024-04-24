let tl = gsap.timeline()
tl.from(".line h1",{
    y:150, 
    stagger:.25,
    duration:.6,
    delay:.4 
})
tl.from("#line-part1",{
    opacity:0,
    onStart:function(){
        
let count =0;
setInterval(()=>{
    if(count<100){
        document.querySelector("h5").innerHTML = count++;
    }else{
        document.querySelector("h5").innerHTML = count;
    }

},35)
    },
    
});
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
   opacity:0,
   duration:0.2,
   delay:3.5,
});
tl.from("#page1",{
    delay:.2, 
    y:1200,
    opacity:0,
    duration:.5,
    ease:Power4
})
tl.to("#loader",{
    display: "none",
})
