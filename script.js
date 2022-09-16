$(document).ready(function(){
    $(".upercase").click(function(){
        $("#texto").addClass("upercase");
        $("#texto").removeClass("lowercase");
        $("#texto").removeClass("capitalize");
    });
});

$(document).ready(function(){
    $(".lowercase").click(function(){
        $("#texto").removeClass("upercase");
        $("#texto").removeClass("capitalize");
        $("#texto").addClass("lowercase");
    });
});

$(document).ready(function(){
    $(".capitalize").click(function(){
        $("#texto").removeClass("upercase");
        $("#texto").removeClass("lowercase");
        $("#texto").addClass("capitalize");
    });
});

$(document).ready(function(){
    $(".link1").click(function(){
        $(".link1").addClass("active");
        $(".link2").removeClass("active");
        $(".link3").removeClass("active");
    });
});

$(document).ready(function(){
    $(".link2").click(function(){
        $(".link1").removeClass("active");
        $(".link2").addClass("active");
        $(".link3").removeClass("active");
    });
});

$(document).ready(function(){
    $(".link3").click(function(){
        $(".link1").removeClass("active");
        $(".link2").removeClass("active");
        $(".link3").addClass("active");
    });
});