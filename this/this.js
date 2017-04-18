function mouldFunction() {
    this.toPrint = "hello world ";
  this.func2 = function(){

    console.log('function 2 executed this = %o',this);

  }

}

mouldFunction.prototype.func1 = function(){
    console.log("this object  = %O",this);
    anonymous();
    anonymousWithThis.apply(this);
    anonymousWithThis.call(this);
}

mouldFunction.prototype.withInterval = function(){
    setInterval(function(){
        console.log(this.toPrint);

    },1000);
/*    setInterval(()=>{
        console.log(this.toPrint);
    },1000);*/
}

function anonymous(){
    console.log("from anonymous fucntion this = %O",this);
}

function anonymousWithThis(){
    console.log("anonymousWithThis this = %O",this);
}

var product = new mouldFunction();
product.func1();
product.func2();
//product.withInterval();







