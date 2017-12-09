$(document).ready(function () {
    $('#hide').click(function () {
        $("p").hide(2000);
    });

    $('#show').click(function () {
        $("p").show();
    });

    $('#hide_firstelement').click(function () {
        $("ul li:first-child").hide(1000);
    });

    $('#eraselinks').click(function () {
        $("[href]").hide();
    });

    $('#showlinks').click(function () {
        console.log($("[href]"));
        $("a[target!='_blank']").show();
    });

    $('#hidebutton').click(function () {
        $("p").toggle();
 /*       setTimeout(function () {
            $(":button").show();
        }, 4000);
 */       
    });

    $('#changebackground').click(function(){
        $("tr:odd").css("background-color","blue");
    });

    $('#callback').click(function(){
        //$("p").hide(1000);
        //alert("the paragraph is now hidden");
        $("p").hide("fast",function(){
            alert("the context is now hidden");
        })
    })
})