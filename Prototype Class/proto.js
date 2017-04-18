function Human(){
    this.HumanList = [
        {name:"Ajith",age:40,gender:'male',industry:'film',imgPath:"thala1.jpg"},
        {name:"Madona Sebastin", age:"N/A", industry:'film',imgPath:"mad1.jpg"},
        {name:"Madona Sebastin", age:"N/A", industry:'music',imgPath:"mad2.jpg"},
        {name:"A R Rahman", age: "50",industry:'music',imgPath:"A-R-Rahman1.jpg"}
        
    ]

    this.addHuman();
}


Human.prototype.addHuman = function() {

    var humanSelected = this.HumanList[getRandomArbitrary(1,4)-1];
    document.body.innerHTML = "<div>Name: "+humanSelected.name+" Age:"+ humanSelected.age +" </div><div><img src='"+humanSelected.imgPath+"'></div>";
}


Human.prototype.gender = function() {
    

}


function getRandomArbitrary(min, max) {
    return Math.floor((Math.random() * max) + min);
}