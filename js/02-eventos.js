'use strict'



$(document).ready(function () {

    // Mouse Over - MouseDown



    var div = $("#box");
    var input = $("#nom");
    var datos = $("#datos");
    /*
    div.mouseover(function () {

        $(this).css("background", "red");
    });

    div.mouseout(function () {
        $(this).css("background", "yellow")
    });
    */

    function changeRed() {
        $(this).css("background", "red");

    };

    function changeYellow() {
        $(this).css("background", "yellow");


    };

    div.hover(changeRed, changeYellow);


    //Click - DoubleClick

    div.click(function () {
        console.log("Click ...")
    });

    div.dblclick(function () {
        console.log("dblClick ...")
    });


    //Focus - Blur
    input.focus(function () {
        console.log("focus ...");
        $(this).css("border", "5px dashed green");

    });

    input.blur(function () {
        console.log("blur ...");
        $(this).css("border", "2px solid #ccc");
        $("#datos").text($(this).val()).show();

    });

    //Evento mouseDown - Mouse Up
    datos.mousedown(function () {
        $(this).css("border-color", "gray")

    });

    datos.mouseup(function () {
        $(this).css("border-color", "black")

    });


    datos.mousemove(function(){

        $("#sigueme").css("left",event.clientX)
        .css("top",event.clientY)

        console.log(event.clientX);
        console.log(event.clientY);


    });
    console.log(div);

});