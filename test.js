test("10 euros should be 10.70 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');

 
    const dollars = fromEuroToDollar(10);

    
    const expected = 10 * 1.07; 
    
    
     expect(fromEuroToDollar(10)).toBe(10.70);
});

test("10 dollars should be 1674.55 yen", function() {
   
    const { fromDollarToYen } = require('./app.js');

   
    const yen = fromDollarToYen(10);

    
    const expected = 10*1.07*156.5; 
    
    
     expect(fromDollarToYen(10)).toBe(1674.55); 
});

test("1000 yen should be 5.56", function() {
    
    const { fromYenToPound } = require('./app.js');

    
    const pound = fromYenToPound(1000);

    
    const expected = (1000/156.5)*0.87; 
    
    
     expect(fromYenToPound(1000)).toBe(5.56); 
});