function bannerHeightInit(){
    // alert("Hi");
    var header = $('.header-row');
    var winHeight = $(window).innerHeight();

    header.css({
        'height': winHeight
    });
    $('.overlay').css({
        'width':'100%',
        'height':winHeight
    })
}

function testimonialCarouselInit(){
    $('#testimonial-carousel').owlCarousel({
        'items':1,
        'loop':true,
        'autoplay':true,
        'autoplayTimeout':5000
    });
}

function scrollToInnerSection(){
    $('.scrollTo').click(function(e){
        e.preventDefault();
        var getElem = $(this).attr('href');
        if($(getElem).length){ // if the element exists on the page
            var getOffset = $(getElem).offset().top;
            $('html').animate({
                scrollTop:getOffset
            }, 500);
        }
    });
}
function scrollBackToTop(){
    var winHeight = $(window).innerHeight();
    var amountScrolled = winHeight;
    $(window).scroll(function(){
        if($(window).scrollTop() > amountScrolled){
            $('.back-to-top').fadeIn(500);
        }else{
            $('.back-to-top').fadeOut(500);
        }
    });

    $('.back-to-top').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop:0
        }, 500);
    });

}


$(document).ready(function(){
    bannerHeightInit();
    // owlInit();
    testimonialCarouselInit();
    scrollToInnerSection();
    scrollBackToTop();
});

const navSlide = ()=>{

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Show and Hide Menu.
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        // navLinks.forEach((link,index)=>{

        // });
        burger.classList.toggle('toggle');

    });

}
navSlide();