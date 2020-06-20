    let slide_index = 1;  
    displaySlides(slide_index); 
    
        setInterval(nextSl,4000);
    
    
    function nextSl() {
        slide_index++;
        console.log(slide_index);
        let numberSl = slide_index; 
        displaySlides(numberSl);
    }
    function nextSlide(n) {  
        displaySlides(slide_index += n);  
    }  

    function currentSlide(n) {  
        displaySlides(slide_index = n);  
    }  

    function displaySlides(n) {  
        let i;  
        let slides = document.getElementsByClassName("showSlide");  
        if (n > slides.length) { slide_index = 1 }  
        if (n < 1) { slide_index = slides.length }  
        for (i = 0; i < slides.length; i++) {  
            slides[i].style.display = "none";  
        }  
        slides[slide_index - 1].style.display = "block";  
    }  

    let payAdd = document.getElementById("payAdd");
    payAdd.addEventListener("click", payAdding);

    function payAdding() {
        let payImg = document.querySelector(".partnersPayImg");
        payImg.style.height = 90 + "px";
        
    }