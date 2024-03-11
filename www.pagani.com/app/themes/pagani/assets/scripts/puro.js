$('.page-template-puro .button--close').click(function(e) {
    e.preventDefault();
    console.log('test')
    Blocks.scrollTo(1, false);
});
$('.page-template-puro .section-puro-discover').click(function(e) {
    e.preventDefault();
    console.log('test')
    Blocks.scrollTo(2, false);
});
$('.page-template-puro .button--close').click(function(e) {
    e.preventDefault();
    console.log('test')
    Blocks.scrollTo(1, false);
});
$('.section-puro-gallery').slick({
    prevArrow: $('.paginator .slider__arrow--prev'),
    nextArrow: $('.paginator .slider__arrow--next')
});

$(".section-puro-gallery").on("beforeChange", function() {
    document.querySelectorAll('.section-puro-gallery-item video').forEach(function(e) {
        e.load();
    })
    $('.section-puro-gallery-item iframe').each(function(el) {
        console.log('stopVideo')
        console.log($(this))
        $(this).attr('src', $(this).attr('src'))

    })



})