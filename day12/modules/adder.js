/*
function multiplier(num1, num2){
    return num1 * num2;
};
export function adder(num1, num2){
    return num1 + multiplier(num1, num2);
};
*/

function multiplier(num1, num2){
    return num1 * num2;
};
function adder(num1, num2){
    return num1 + multiplier(num1, num2);
};
 
/*
//named export
export { adder as add};
*/

/*
//default export
export default adder;
*/

export default adder;
export {multiplier};    
