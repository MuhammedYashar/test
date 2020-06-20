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
    let numberOpen = 1;
    function payAdding() {
<<<<<<< HEAD
        let payImg = document.querySelector(".partnersPayImg");
        payImg.style.height = 90 + "px";     
=======
        numberOpen++;
        if(numberOpen%2 == 0){
            let payImg = document.querySelector(".partnersPayImg");
        payImg.style.height = 90 + "px";
        payAdd.innerHTML = "-";
        }else {
            let payImg = document.querySelector(".partnersPayImg");
            payImg.style.height = 30 + "px";
            payAdd.innerHTML = "+";
        }
        
        
>>>>>>> 4ac7db081b69f3d4b75863f22a13915a0482193d
    }