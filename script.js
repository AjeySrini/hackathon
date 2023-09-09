

const scrollToTopButton = document.getElementById('scrollToTopBtn');

// Show the button when the user scrolls down 300px
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
});

const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;
let mode =true;

themeToggleBtn.addEventListener('click', () => {
    // Toggle between light and dark theme classes on the body element
    console.log(themeToggleBtn);
    body.classList.toggle('light-theme');
   
if(mode){
    themeToggleBtn.innerText="Light";
    mode=false;
}else {
    themeToggleBtn.innerText="Dark";
    mode=true;
}
    body.classList.toggle('dark-theme');

});


 