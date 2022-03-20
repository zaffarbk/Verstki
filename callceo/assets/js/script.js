
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        autoHeight:true,
        nav:true
    })
    $( ".owl-prev").html('<i class="fa fa-arrow-right"></i>');
    $( ".owl-next").html('<i class="fa fa-arrow-left"></i>');
});