function Human(gender = null){
    this.genderVal = gender;

    this.HumanList = [
        {name:"Ajith",age:40,gender:'male',industry:'film',imgPath:"img/thala1.jpg"},
        {name:"Madona Sebastin", age:"N/A", industry:'film',imgPath:"img/mad1.jpg"},
        {name:"Sai Pallavi", age:"N/A", industry:'film',imgPath:"img/451677-sai-pallavi.jpg"},
        {name:"A R Rahman", age: "50",industry:'music',imgPath:"img/A-R-Rahman1.jpg"}
    ]

    this.maleList = [
                {name:"Ajith",age:40,gender:'male',industry:'film',imgPath:"img/thala1.jpg"},
                {name:"A R Rahman", age: "50",industry:'music',imgPath:"img/A-R-Rahman1.jpg"}
    ]
    this.femaleList = [
        {name:"Madona Sebastin", age:"N/A", industry:'film',imgPath:"img/mad1.jpg"},
        {name:"Madona Sebastin", age:"N/A", industry:'music',imgPath:"img/mad2.jpg"}
    ]

    

    if(gender =='male'){
        this.addMale();
        console.log('male added');

    } else if(gender =='female'){
        this.addFemale();
        console.log('female added');
    }
    else{
        this.addHuman();
        console.log('Human added');
    }
}


Human.prototype.addHuman = function() {
    var humanSelected = this.HumanList[getRandomArbitrary(1,4)-1];
    document.body.innerHTML = "<div>Name: "+humanSelected.name+" Age:"+ humanSelected.age +" </div><div><img src='"+humanSelected.imgPath+"'></div>";

}

Human.prototype.addMale = function(){
    var humanSelected = this.maleList[getRandomArbitrary(1,2)-1];
    document.body.innerHTML = "<div>Name: "+humanSelected.name+" Age:"+ humanSelected.age +" </div><div><img src='"+humanSelected.imgPath+"'></div>";
}
Human.prototype.addFemale = function(){
    var humanSelected = this.femaleList[getRandomArbitrary(1,2)-1];
    document.body.innerHTML = "<div>Name: "+humanSelected.name+" Age:"+ humanSelected.age +" </div><div><img src='"+humanSelected.imgPath+"'></div>";
}

Human.prototype.gender = function() {
    

}



// inheritance .. please ignore if you are not done with prototype

function Male() {
/*    this.HumanList = [
        {name:"Ajith",age:40,gender:'male',industry:'film',imgPath:"thala1.jpg"},
        {name:"Madona Sebastin", age:"N/A", industry:'film',imgPath:"mad1.jpg"},
        {name:"Madona Sebastin", age:"N/A", industry:'music',imgPath:"mad2.jpg"},
        {name:"A R Rahman", age: "50",industry:'music',imgPath:"A-R-Rahman1.jpg"}
        
    ]*/

    this.addMale();
}

 Male.prototype = new Human('male');



function Female(){
    this.addFemale();
}

 Female.prototype = new Human('female');

//new Male();


function getRandomArbitrary(min, max) {
    return Math.floor((Math.random() * max) + min);
}