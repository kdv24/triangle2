$(document).ready(function() {
    $('form#triangulator').submit(function(event) {
        event.preventDefault();

        var inputted_side1 = parseInt($("input#sidea").val());
        var inputted_side2 = parseInt($("input#sideb").val());
        var inputted_side3 = parseInt($("input#sidec").val());
        var triangle = { side1: inputted_side1,
                         side2: inputted_side2,
                         side3: inputted_side3,
                         type: function() {
                             if(this.side1 >= this.side2 + this.side3 || this.side2 >= this.side1 + this.side3 || this.side3 >= this.side1 + this.side2) {
                                 return "DAS IST KEIN TRIANGLE!!!";
                             }
                             else if(this.side1 === this.side2 &&  this.side2 === this.side3) {
                                 return "DAS IST EQUILATERAL TRIANGLE!!!";
                             }
                             else if((this.side1 === this.side2 && this.side2 !== this.side3) || (this.side1 === this.side3 && this.side2 !== this.side3) || (this.side2 === this.side3 && this.side1 !== this.side3)) {
                                 return "DAS IST ISOCELES TRIANGLE!!!";
                             }
                             else if(this.side1 !== this.side2 && this.side2 !== this.side3) {
                                 return "DAS IST SCALENE TRIANGLE!!!";
                             }


    }};

    $(".result").text(triangle.type());

    $("input#sidea").val("");
    $("input#sideb").val("");
    $("input#sidec").val("");


    $("#result").show();
});
});



// $(document).ready(function() {
//     $("form#triangulator").submit(function(event) {
//         var side_a = parseInt($("input#sidea").val());
//         var side_b = parseInt($("input#sideb").val());
//         var side_c = parseInt($("input#sidec").val());
//         var result = triangulator(side_a, side_b, side_c);



        // event.preventDefault();
//     });
// });


// var triangulator = function(side1, side2, side3) {
//
//     if(side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side1 + side2) {
//         return "DAS IST KEIN TRIANGLE!!!";
//     }
//     else if(side1 === side2 &&  side2 === side3) {
//         return "DAS IST EQUILATERAL TRIANGLE!!!";
//     }
//     else if((side1 === side2 && side2 !== side3) || (side1 === side3 && side2 !== side3) || (side2 === side3 && side1 !== side3)) {
//         return "DAS IST ISOCELES TRIANGLE!!!";
//     }
//     else if(side1 !== side2 && side2 !== side3) {
//         return "DAS IST SCALENE TRIANGLE!!!";
//     }
// };
