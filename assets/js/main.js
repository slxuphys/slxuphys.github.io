---

---


document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
          // customised options
          // • auto-render specific keys, e.g.:
          delimiters: [
              {left: '$$', right: '$$', display: true},
              {left: '$', right: '$', display: false},
              {left: '\\(', right: '\\)', display: false},
              {left: '\\[', right: '\\]', display: true}
          ],
          // • rendering keys, e.g.:
          throwOnError : false
        });
       
        document.documentElement.setAttribute('color-theme',theme)
        document.querySelector('#toggle-theme').addEventListener('click',toggleTheme)

        


        let page = document.getElementsByClassName('page-content')[0];
        page.addEventListener('scroll', ()=>{
            if (page.scrollTop>10) {
                let head = document.getElementsByClassName('site-header')[0];
                head.style['background']='rgb(0,0,0)'
                // head.style['position']='static'
            } else {
                let head = document.getElementsByClassName('site-header')[0];
                head.style['background']='rgb(0,0,0,0.6)'
                // head.style['position']='absolute'
            }
        })
    });



    var theme = localStorage.getItem('theme')
    if (!theme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = 'dark'
            // dark mode
        } else {
            theme = 'light'
        }
    }

function toggleTheme() {
    var theme = document.documentElement.getAttribute('color-theme')
    console.log(theme)
    theme = theme=='light'?'dark':'light'
    document.documentElement.setAttribute('color-theme',theme)
    localStorage.setItem('theme',theme)
}


// carousal
document.addEventListener('DOMContentLoaded', ()=>{
    var carousal=document.getElementsByClassName('slideshow-container')

        for (let i = 0; i < carousal.length; i++) {
            showSlides(carousal[i].id,1)
            carousal[i].addEventListener('touchstart',handleTouchStart)
            carousal[i].addEventListener('touchmove',m=>handleTouchMove(carousal[i].id,m))
        }
})




let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
    const firstTouch = (evt.touches || evt.originalEvent.touches)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(id,evt) {
    console.log(evt)
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            plusSlides(id,1); // Swipe left
        } else {
            plusSlides(id,-1); // Swipe right
        }
    }

    xDown = null;
    yDown = null;
}


function plusSlides(id,n) {
    let i;
    let slideIndex=n
    let slides = document.getElementById(id).getElementsByClassName("slide");
    let dots = document.getElementById(id).getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        if (slides[i].style.display=='block'){
            slideIndex = i
        }
        slides[i].style.display = "none";  
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex = slideIndex + n
    if (slideIndex>=slides.length) {
        slideIndex = slideIndex-slides.length
    }
    if (slideIndex<0) {
        slideIndex = slideIndex+slides.length
    }
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
}

function showSlides(id, n) {
    let i;
    let slideIndex=n
    let slides = document.getElementById(id).getElementsByClassName("slide");
    let dots = document.getElementById(id).getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

