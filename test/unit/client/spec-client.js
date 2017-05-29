define(['mainFile', 'chai'], function(mainFile){
    describe("Testing Flight Search Engine", function () {
        it("should check existence of main file, object, init function", function(){
            expect(mainFile).to.exist;
            expect(mainFile.init).to.exist;
            expect($).to.exist;
        });

        it("should check execute main function properly", function () {
            expect(function() {mainFile.init(); return true;}()).to.be.true;
        });
    });
});
