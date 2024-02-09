// console.log("Hello world");

// const h1 = document.querySelector(".heading-primary")
// console.log(h1);
// Set current year
const yearEl = document.querySelector (".year");
const currentYear = new Date().getFullYear();
console.log(currentYear)
yearEl.textContent = currentYear;

// Make mobilr navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("open-nav")
});


// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // scroll back to top
    if (href ==="#")
    window.scrollTo({
  top: 0,
  behavior: "smooth",
   });
// Scroll to other links
   if (href !== "#" && href.startsWith ('#')) {
     const sectionEl = document.querySelector(href);
     sectionEl.scrollIntoView( { behavior: "smooth"});
   }

  //  Close mobile navigation
  if(link.classList.contains('main-nav-link'))
  headerEl.classList.toggle("open-nav");
  });
});

// STICKY Navigation
const heroSectionEl = document.querySelector(".hero-section")
const obs = new IntersectionObserver(function(entries) {
  const ent = entries[0];
  console.log(ent);
  if(ent.isIntersecting === false) 
  document.body.classList.add("sticky");

  if(ent.isIntersecting === true) 
  document.body.classList.remove("sticky");
}, 
{
  root: null,
  threshold: 0,
  rootMargin: '-80px'
});
obs.observe(heroSectionEl);
