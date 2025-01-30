let e=new IntersectionObserver(function(e){e.forEach(e=>{e.isIntersecting&&e.target.classList.add("element-show")})},{threshold:[.3]});for(let t of document.querySelectorAll(".element-animation"))e.observe(t);
//# sourceMappingURL=index.82c75cb6.js.map
