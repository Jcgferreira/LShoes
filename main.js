$(document).ready(function(){
    $('#carousel').slick({
        autoplay: true,
        arrows: false
    })

    $('.displayitens').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    })

    $('#carousel2').slick({
        autoplay: true,
        arrows: false
    })

    $('.menu-hamburguer').click(function(){
        $('.menu').slideToggle();
    })
})