document.addEventListener('DOMContentLoaded',()=>{
    const title = document.getElementById("title");

    gsap.set(title, {
      visibility: hidden,
    });

    gsap.from(title, {
        autoAlpha: 0,
        y: -50,
        duration: 2,
        delay: 0.2,
    })

})
