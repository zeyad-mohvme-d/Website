var menu = $('.menu'),
    overlay = $("#menuOverlay");

$('.menu ul li:first-child').click(function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-open');
    overlay.toggleClass('overlay-visible overlay-hidden');
});

/*$(".btn-floating").click(function() {
    $('.fixed-action-btn').openFAB();
});*/

$(document).ready(function () {
    $('.tooltipped').tooltip({ delay: 50 });
    $('[data-toggle="popover"]').popover();

    $('.pulse-button').on('show.bs.popover', function () {
        //alert('Popover Initiated !');
        // $('#menuOverlay').addClass('overlay-visible').removeClass('overlay-hidden');
    });
    $('.pulse-button').on('hide.bs.popover', function () {
        //alert('Popover Initiated !');
        $('#menuOverlay').addClass('overlay-hidden').removeClass('overlay-visible');
    })
});