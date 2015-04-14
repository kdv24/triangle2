var triangulator = function(side1, side2, side3) {

    if(side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side1 + side2) {
        return "DAS IST KEIN TRIANGLE!!!";
    }
    else if(side1 === side2 && side2 === side3) {
        return "DAS IST EQUILATERAL TRIANGLE!!!";
    }
    else if((side1 === side2 && side2 !== side3) || (side1 === side3 && side2 !== side3) || (side2 === side3 && side1 !== side3)) {
        return "DAS IST ISOCELES TRIANGLE!!!";
    }
    else if(side1 !== side2 && side2 !== side3) {
        return "DAS IST SCALENE TRIANGLE!!!";
    }
};

$(document).ready(function() {
    $("form#triangulator").submit(function(event) {
        var side_a = parseInt($("input#sidea").val());
        var side_b = parseInt($("input#sideb").val());
        var side_c = parseInt($("input#sidec").val());
        var result = triangulator(side_a, side_b, side_c);

        $(".result").text(result);

        $("#result").show();

        event.preventDefault();
    });
});
