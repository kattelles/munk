$(document).ready(function() {
  console.log("hi, hipmunk. please pardon any errors. :)");

    function iglooRight() {
        $("#flake").css('left', -100);
        let width = $( window ).width() + 100;
        let distance = "+=" + `${width}`;
        $("#flake").animate({left: distance}, 8000, "linear", iglooRight);
    }

    iglooRight();
});
