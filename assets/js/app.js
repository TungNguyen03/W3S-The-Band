const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

//hiển thị modal mua vé (add class open vào modal)
function showBuyTickets() {
    modal.classList.add('open');
}

//ẩn modal mua vé (bỏ class open)
function hideBuyTicket() {
    modal.classList.remove('open');
}

//duyệt từng button
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener("click", showBuyTickets);
}

//nghe click vào btnClose
modalClose.addEventListener('click', hideBuyTicket);

modal.addEventListener('click', hideBuyTicket);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation(); //dừng nổi bọt
})

// sliders
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slider");
    // var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//mobile header menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = '46px';
    }
}

//auto close menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        //kiểm tra có element liền kề là .subnav
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}