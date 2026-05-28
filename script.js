document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".card", {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out"
    });
});