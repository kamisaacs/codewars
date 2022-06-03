function howManyDalamtions(number){
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];

    if(number <= 10){
        console.log.apply(dogs[0])
    }else if(number <= 50){
        comsole.log(dogs[1])
    }else if(number <= 101){
        console.log(dogs[3])
    }


}

console.log(howManyDalamtions(83))