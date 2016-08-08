$(document).ready(function() {

    function iglooRight() {
        $("#flake").css('left', -50);
        let width = $( window ).width();
        let distance = "+=" + `${width}`;
        $("#flake").animate({left: distance}, 8000, "linear", iglooRight);
    }

    iglooRight();
});
