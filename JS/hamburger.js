document.querySelector('.hamburger').addEventListener('click', function() {
    
    document.querySelector('.hamburger').classList.toggle('active');
    let navLinks = document.querySelector('.top-header__flex__nav');
    navLinks.classList.toggle('active');

});