/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// store navbar in js 
const navbar= document.getElementById('navbar__list');
// store sections in js 
const sectionsList = document.querySelectorAll('section');


// build the nav
const navBuilder = ()=>{
    let navUI = "";
    sectionsList.forEach(section =>{
        const sectionId = section.id;
        const sectionDataNav = section.dataset.nav;
        navUI += `<li><a class ='menu__link' href='#${sectionId}'>${sectionDataNav}</a></li>`;
    })

    navbar.innerHTML = navUI;

};
    
// invoke nav builder function 
navBuilder();

// Add class 'active' to section when near top of viewport
// store offset
const offset = (section) =>{
    return Math.floor(section.getBoundingClientRect().top)
}
// remove active section
const removeActive = (section) =>{
    section.classList.remove("your-active-class")
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)"
}
// add active section
const addActive = (condition, section) =>{
    if(condition){
        section.classList.add("your-active-class")
        section.style.cssText = "background-color: #000000d6;"
    }
};
// highlighting the avtive section
const sectionActivaition =() =>{
    sectionsList.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () =>elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(), section)
    });
};
// listen to scrolling
window.addEventListener("scroll", sectionActivaition)
// Scroll to anchor ID 
 const scrolling = () =>{
     const links = document.querySelectorAll(".navbar__menu a");

     links.forEach(link =>{
         link.addEventListener('click', ()=>{
             for(i =0; i<sectionsList; i++){
                 sectionsList[i].addEventListener('click', sectionScroll(link))
             }
         })
     })
 }






