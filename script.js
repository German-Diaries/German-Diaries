$(document).ready(() => {
    $(".wrapper").addClass('main-active');
    $(window).scroll(() => {
        if (this.scrollY > 300) {
            $(".main-col2, .main-col3").addClass('main-active');
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // typing animation script
    var typed = new Typed(".typing" , {
        strings: ["It Is the Most Spoken Native Language in Europe.","It Has Great Cultural Inheritance and its Contribution to Knowledge is Priceless.","Excellent Business Opportunities.","Study at Renowned German Universities.","It Is Not as Hard as It Is Made Out to Be."],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });
});