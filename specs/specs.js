describe('triangulator', function() {
    it("returns an equilaterial triangle if all the 3 sides are equal", function() {
        expect(triangulator(3, 3, 3)).to.equal("DAS IST EQUILATERAL TRIANGLE!!!");
    });

    it("returns a negative result for input that fails to meet the definition of a triangle: that 1 side cannot be greater than or equal to the other sides combined", function() {
        expect(triangulator(3, 3, 20)).to.equal("DAS IST KEIN TRIANGLE!!!");
    });

    it("returns an isoceles triangle if exactly 2 sides are equal", function() {
        expect(triangulator(2, 2, 3)).to.equal("DAS IST ISOCELES TRIANGLE!!!");
    });
    it ("returns a scalene triangle if no sides are equal", function() {
        expect(triangulator(18, 28, 39)).to.equal("DAS IST SCALENE TRIANGLE!!!");
    });

});
