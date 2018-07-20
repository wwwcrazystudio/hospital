
$(function() {

    $("#js-main-slider").slick({
        fade: true,
        prevArrow: '.main-slider-content__control--prev',
        nextArrow: '.main-slider-content__control--next',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
    });


    $(".burger").on('click', function () {

        $(this).toggleClass('burger--close');

        $(".off-canvas").toggleClass('is-active');

        $(".page-header").toggleClass('is-active');

        if ( $(this).closest('.page-header').hasClass('is-sticky') ) {

            $(".page-header").addClass('is-active');

        }


    });

    $('[data-scroll-to]').on('click', function (event) {

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $(".page-header").outerHeight()
        }, 'slow');

        event.preventDefault();

    });


    $('[data-scroll-adv]').on('click', function (event) {

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top + 10
        }, 'slow');

        event.preventDefault();

    });


    $("#js-testimonials-slider").slick({
        prevArrow:'.testimonials-slider__arrow--prev',
        nextArrow:'.testimonials-slider__arrow--next',
        vertical: true,
        dots: true,
        customPaging : function(slider, i) {
            return '<a href="javascript:void(0);" class="testimonials-slider__dot"></a>';
        },
        appendDots:'.testimonials-slider__dots',
    });


    $("#js-robot-slider").slick({
        dots: true,
        arrows: false,
        customPaging : function(slider, i) {
            return '<a href="javascript:void(0);" class="robot-slider__dot"></a>';
        },
    });


    $(".faq-tab__toggler").on('click', function () {

        $(this).next('.faq-tab__content').slideToggle('fast');

        $(this).toggleClass('is-active');

    });


    autosize($('textarea'));

    $(".off-canvas__list li").on('click', function () {

        $(this).addClass('is-active').siblings().removeClass('is-active');

        $('.burger').removeClass('burger--close');

        $(".off-canvas").removeClass('is-active');

        $(".page-header").removeClass('is-active');

    });


    $(".action-tabs-list a").on('click', function () {

        var index = $(this).index();

        $(this).addClass('is-active').siblings().removeClass('is-active');

        $(".action-tabs-content__item").eq(index).addClass('is-active').siblings().removeClass('is-active');

    });

    stickyHeader ();

    function stickyHeader () {

        var mainSliderHeight = $('.main-slider').outerHeight(),
            header = $(".page-header"),
            headerHeight = header.outerHeight();

        $(window).on('scroll', function () {

            if ( $(this).scrollTop() > mainSliderHeight ) {

                header.addClass('is-sticky').addClass('is-active');
                $(".off-canvas").addClass('is-sticky');

            }

            else{
                $(".page-header").removeClass('is-sticky').removeClass('is-active');
                $(".off-canvas").removeClass('is-sticky');
            }

        });

    };


    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
                $('.error-text').hide();

            }, 1000);
        });
        return false;
    });


    $('.contacts-form__label--checkbox').find(':checkbox').on('change', function(){

        if( $(this).prop('checked') ) {

            $(this).closest('.contacts-form').find('.contacts-form__submit').attr('type', 'submit');

        }
        else{

            $(this).closest('.contacts-form').find('.contacts-form__submit').attr('type', 'button');

        }

    });


    $('.contacts-form__submit[type="button"]').on('click', function () {

        $(this).closest('.contacts-form').find('.contacts-form__label--checkbox').find('.error-text').show();

    });


    $("#video").removeAttr('controls');


});
