function Human(){
    this.HumanList = [
        {name:"Ajith",age:40,gender:'male',industry:'film',imgPath:"img/thala1.jpg"},
        {name:"Madona Sebastin", age:"N/A", industry:'film',imgPath:"img/mad1.jpg"},
        {name:"Sai Pallavi", age:"N/A", industry:'film',imgPath:"img/451677-sai-pallavi.jpg"},
        {name:"A R Rahman", age: "50",industry:'music',imgPath:"img/A-R-Rahman1.jpg"}
        
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