/*global jQuery:false*/
(function ($) {

    $("#realtime-widget").remove();
    var container = $("<div id='realtime-widget' />").css({
        position: "fixed",
        left: 0,
        bottom: 0,
        "background-color": "#ccc",
        width: "100%",
        "border-top": "solid 2px black"
    }).appendTo(document.body)[0];
    $(document.body).addClass("activityOn");

    var height = 100;

    var widget = $("<iframe id='realtime-widget' src='http://sockets.tiddlyspace.com/index.html' />")
        .appendTo(container);
    $(widget).css({
        position: "relative",
        height: height,
        "z-index": 0,
        width: "100%"
    });

    $("<button>real time</button>").click(function () {
        $(widget).toggle(function () {
            $(document.body).toggleClass("activityOn");
        });
    }).css({
            position: "absolute",
            right: "10px",
            "background": "none",
            "width": 33,
            "height": 19,
            "z-index": 2,
            "text-indent": 999,
            bottom: 0,
            border: "none",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            "background-image": "url(http://following.tiddlyspace.com/SiteIcon)"
        }).appendTo(container);

})(jQuery);
