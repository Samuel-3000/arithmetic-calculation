const add = function(value_1,value_2){
    console.log("---------------------------------π°π³π³")
    console.log(`Value 1 is --------->${value_1}`)
    console.log(`Value 2 is --------->${value_2}`)
    console.log(`Result is therefore ${value_1 + value_2} :)`)
};

const subtract = function(value_1,value_2){
    console.log("--------------------------πππ±πππ°π²π")
    console.log(`Value 1 is --------->${value_1}`)
    console.log(`Value 2 is --------->${value_2}`)
    console.log(`Result is therefore ${value_1 - value_2} :)`)
};

const multiply = function(value_1,value_2){
    console.log("-------------------------πΌππ»ππΈπΏπ»π")
    console.log(`Value 1 is --------->${value_1}`)
    console.log(`Value 2 is --------->${value_2}`)
    console.log(`Result is therefore ${value_1 * value_2} :)`)
};

const divide = function(value_1,value_2){
    console.log("------------------------------π³πΈππΈπ³π΄")
    console.log(`Value 1 is --------->${value_1}`)
    console.log(`Value 2 is --------->${value_2}`)
    console.log(`Result is therefore ${value_1 / value_2} :)`)
};

module.exports = {add, subtract, multiply, divide}