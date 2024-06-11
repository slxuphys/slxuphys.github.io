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

        var carousal=document.getElementsByClassName('slideshow-container')

        for (let i = 0; i < carousal.length; i++) {
            showSlides(carousal[i].id,1)
        }


        let page = document.getElementsByClassName('page-content')[0];
        page.addEventListener('scroll', ()=>{
            if (page.scrollTop>10) {
                document.getElementsByClassName('site-header')[0].style['background']='rgb(0,0,0)'
            } else {
                document.getElementsByClassName('site-header')[0].style['background']='rgb(0,0,0,0.6)'
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



function plusSlides(id, n) {
    showSlides(id,slideIndex += n);
}

function currentSlide(id,n) {
    showSlides(id,slideIndex = n);
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

