document.addEventListener('DOMContentLoaded', function() {
    // Word-by-word display script with colors
    const text = "Welcome to Green Business World";
    const words = text.split(" ");
    let i = 0;
    const welcomeTextElement = document.getElementById('welcome-text');
    const colors = ['red', 'green', 'blue', 'orange', 'purple', 'brown']; // Add more colors as needed

    function displayWord() {
        if (i < words.length) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            const coloredWord = `<span style="color:${color};">${words[i]}</span>`;
            welcomeTextElement.innerHTML += (i === 0 ? '' : ' ') + coloredWord;
            i++;
            setTimeout(displayWord, 500); // Adjust time as needed
        }
    }

    displayWord();

    // Slideshow script
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        // Change image every 10 seconds
        setTimeout(showSlides, 10000);
    }

    // Next/previous controls
    function plusSlides(n) {
        showSlidesManual(slideIndex += n);
    }

    function showSlidesManual(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
    }

    // Attach these functions to the prev and next buttons
    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    // Update copyright year
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
