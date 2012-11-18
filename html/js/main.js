$(function () {
    var i = 0;
    setInterval(function () {
        $('#kitty').css(
            'transform', 'rotate(' + i + 'deg)'
        );
        i ++;
    }, 10);
});