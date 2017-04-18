function outerFunction (){
 innerFunction(); // innerfunction accessed because it is hoisted


    function innerFunction(){
        console.log('function called from top');
       
    }
}

outerFunction();
hoistingExample();

function hoistingExample(){
"use strict";
var a = 5;

k=5;
console.log("hi");
console.log("a = "+a);
console.log("k = "+k);

var k = 20;

}



//innerFunction();