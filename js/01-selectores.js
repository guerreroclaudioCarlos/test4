'use strict'

$(document).ready(function () {
    console.log("JQuery y Web Cargados");


    //Selector for ID
    var rojo = $("#rojo");
    
    var amarillo = $("#amarillo");
    var verde = $("#verde");

    rojo.css("background", "red")
        .css("color", "white");

    amarillo.css("background", "yellow")
        .css("color", "white");

    verde.css("background", "green")
        .css("color", "white");

    // Selector for class

    var clase = $(".zebra");

    clase.css("background", "green")
        .css("color", "green");


    var myClss = $(".myClss");
    myClss.click(function () {
        $(this).css("border", "5px dashed black");
        alert("me dio click");
    });


    // Selector for  tag

    var parafo = $("p");

    parafo.click(function () {
        $(this).css("border", "2px dashed green");
    });

    // Selector for Atrribute
    $("[title='Google Peru']").css("background","#ccc");

    // others
    $("p, a").addClass("margen-superior");

    var resaltado = $("#myBox").find(".resaltado");
    console.log(resaltado);
    console.log(parafo);
    console.log(clase);
    console.log(clase[0]);

});
