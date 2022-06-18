/*<------------------- nav started----------------------------->  */ 
const navSlide = ()=>{
    const burger=document.querySelector(".burger");
    const nav=document.querySelector(".nav-links");
    const navLinks=document.querySelectorAll(".nav-links li");

    burger.addEventListener("click" ,()=>{
        nav.classList.toggle ("nav-active");

        navLinks.forEach((links,index)=>{
         if(links.style.animation){
             links.style.animation=""
         }
         else{
            links.style.animation= `navLinksFade 0.5s ease forwards ${index/ 7+ 0.5}s `;
         }
    
        });
        //burger animatiom
        burger.classList.toggle("toggle");
    });
     
}
navSlide();
/*<------------------- nav ended----------------------------->  */ 