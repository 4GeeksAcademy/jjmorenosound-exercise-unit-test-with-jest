

const fromEuroToDollar = (valueInEuro) => {
   
    let valueInDollar = valueInEuro * 1.07;
    
    return Math.round((valueInDollar + Number.EPSILON) * 100) / 100;
};

const fromDollarToYen = (valueInDollar) => {
   
    let valueInYen = valueInDollar*1.07*156.5;
    
    return Math.round((valueInYen + Number.EPSILON) * 100) / 100;
};
const fromYenToPound = (valueInYen) => {
   
    let valueInPound = (valueInYen/156.5)*0.87;
    
    return Math.round((valueInPound + Number.EPSILON) * 100) / 100;
};





module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}  ;

