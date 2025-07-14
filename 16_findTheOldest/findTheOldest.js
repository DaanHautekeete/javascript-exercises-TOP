const findTheOldest = function(people) {
    let oldestPerson;
    let leeftijd;

    //Array maken van object
    let arrayPeople = Array.from(people);

    //standaardwaarde voor oudste persoon instellen
    oldestPerson = arrayPeople[0];
    console.log(oldestPerson);

    //alle personen overlopen
    arrayPeople.map((person) => {
        //controleren of persoon al overleden is
        if(person.yearOfDeath == undefined) {
            const datumVandaag = new Date();
            leeftijd = datumVandaag.getFullYear() - person.yearOfBirth;
            person.yearOfDeath = datumVandaag.getFullYear();
        }
        else {
            //leeftijd berekenen
            leeftijd = person.yearOfDeath - person.yearOfBirth;
        }
        console.log(leeftijd);

        //controleren of persoon ouder is dan oudste persoon
        if(leeftijd > (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)) {
            oldestPerson = person;
        }

    });

    console.log(oldestPerson);
    return oldestPerson;
};

    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

findTheOldest(people);


// Do not edit below this line
module.exports = findTheOldest;
