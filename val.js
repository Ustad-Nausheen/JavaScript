// function show()
// {
//     var sel=$("#dropdown").val()
//     alert(sel);
// }

// $("select").change(show);
// show();



$(document).ready(function(){
    $("button").click(function(){
        // $("ol").append("<li>SQL</li>");
        $("p").clone().appendTo("body");

    });

});