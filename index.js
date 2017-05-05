var person = new Person("Boss", "Meyer");
person.first    //-> "Justin"
person.last     //-> "Meyer"
person.fullName //-> "Justin Meyer"

person.on("fullName", function(ev, newVal, oldVal){
    newVal //-> "Ramiya Meyer"
    oldVal //-> "Justin Meyer"
});

person.first = "Ramiya"
