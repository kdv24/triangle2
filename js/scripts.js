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
                                 alert("Nice try buddy!");
                                 return "DAS IST KEIN TRIANGLE!!!";
                             }
                             else if(this.side1 === this.side2 &&  this.side2 === this.side3) {
                                 $("ul.equilaterals").append("<li><span class = 'equilateral'>" + this.side1 + " ," + this.side2+ " ," +this.side3 + "</span></li>" );
                                 return "DAS IST EQUILATERAL TRIANGLE!!!";
                             }
                             else if((this.side1 === this.side2 && this.side2 !== this.side3) || (this.side1 === this.side3 && this.side2 !== this.side3) || (this.side2 === this.side3 && this.side1 !== this.side3)) {
                                 $("ul.isosceles").append("<li><span class = 'isoscele'>" + this.side1 + " ," + this.side2+ " ," +this.side3 + "</span></li>" );
                                 return "DAS IST ISOCELES TRIANGLE!!!";
                             }
                             else if(this.side1 !== this.side2 && this.side2 !== this.side3) {
                                 $("ul.scalenes").append("<li><span class = 'scalene'>" + this.side1 + " ," + this.side2+ " ," +this.side3 + "</span></li>" );
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
