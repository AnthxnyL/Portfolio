document.querySelector('.hamburger').addEventListener('click', function() {
    
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('open');
    let navLinks = document.querySelector('.top-header__flex__nav');
    navLinks.classList.toggle('active');

});