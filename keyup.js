// function kee(){
//     document.body.style.background="linear-gradient(pink,purple)"
// }

// function up(){
//     document.body.style.background="radial-gradient(white,blue)"
// }

// function over(){
//     document.body.style.background="radial-gradient(red,blue,yellow)"
// }

// function out(){
//     document.body.style.background="radial-gradient(yellow,orange,pink)"
// }

i=O;
$(document).ready(function(){
    $("input").keypress(function(){
        $("span").text(i+=1);

    });

});

// $(window).on("load",function(){
//     alert("Hiiiiii");

// });

