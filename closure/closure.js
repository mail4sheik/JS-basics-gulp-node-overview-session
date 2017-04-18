function outerFunction (){
    var outerVariable = " hi";

    innerFunction();
    function innerFunction(){
        var innerVariable = "hello";
        //outerVariable of parent is accessable because "innerFunction" is under closure of "outerfunction"

        console.log("outer variable = "+outerVariable);
    }
}


outerFunction();
//innerFunction();