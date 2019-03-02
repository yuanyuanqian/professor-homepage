$(document).ready(function () {

    function responsive() {
        if ($(window).width() <=1230) {
            console.log('mobile navigation');

            $('#primary-navigation').infinitypush();

            $('body').removeClass('page');
        } else {
            console.log('desktop navigation');

            $('#primary-navigation').infinitypush({
                destroy: true
            });

            $('body').addClass('page');
        }
    }

    function windowResize() {
        $(window).resize(function () {
            responsive();
        });
    }

    responsive();
    windowResize();





});