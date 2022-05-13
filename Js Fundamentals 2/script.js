/*function logger() {
    console.log("aniket mane ");

}
logger();
logger();

function fruitProcessor(mango, oranges) {
    console.log(mango, oranges);
    const juice = `juice of ${mango}mango and ${oranges} orange`
    return juice;
}
const mangoJuice = fruitProcessor(4, 0);
console.log(mangoJuice);
//OR
console.log(fruitProcessor(6, 0));



//FUNCTION DECLARATION
function calAge(birthyear) {
    return 2022 - birthyear;
}
const age1 = calAge(2001);
//FUNCTION EXPRESSION
const calage2 = function (birthyear) {
    return 2022 - birthyear;
}
const age2 = calage2(2005);
console.log(age1, age2);


//ARROW FUNCTION
const calAge3 = birthyear => 2022 - birthyear;
const age3 = calAge3(2001);
console.log(age3);
*/
//CHALLANGE 1*//





/*
//ARRAYS//
const fruits = ['mango', 'apple', 'banana'];
const length = fruits.push('guava');//add element at end and gives lenth too
console.log(fruits);
console.log(length);
fruits.unshift('kiwi');//adds element at start 
console.log(fruits);
//#REMOVE ELEMENT #
fruits.pop();//LAST ELEMENT 
fruits.shift();//first  element
console.log(fruits);
console.log(fruits.indexOf('mango'));//gives index 
console.log(fruits.includes('apple'));//returns a boolean value

////////////////////////////////////////////
//#CODING CHALLLENGE 2

const bills = [125, 555, 44];
const tip = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])]
console.log(bills, tip);
const aniket = {
    firstname: 'aniket',
    lastName: 'mane',
    birthyear: 2001,
    job: 'student',
    friends: ['abc', 'xyz', 'pqr'],
    hasDriversLicense: true,
    calage: function () {
        return 2022 - this.birthyear;//this used to call the object without para meters 
    },
    getSummary: function () {
        return `${this.firstname} is a ${this.calage()} years old ${this.job},and he has  ${this.hasDriversLicense ? 'a' : 'no'}driver license`
    }


};//object**
console.log(aniket);
console.log(aniket.lastName);
console.log(aniket['lastName']);//epressions, use square brackets
const intrestedIn = prompt('what do you want to know about aniket?choose between first name,lastname,age,job and friends')
console.log(aniket[intrestedIn]);
aniket.locaion = 'mumbai';
aniket['country'] = 'india';//add more properties to object 
console.log(aniket);
console.log(aniket.calage());
console.log(aniket.getSummary());

const miller = {
    fullName: 'Mark miller',
    mass: '78',
    height: '1.69',
    calBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;

    }

}
const smith = {
    fullName: 'Jhon Smith',
    mass: '92',
    height: '1.95',
    calBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;

    }

}
miller.calBmi();
smith.calBmi();
console.log(miller.bmi, smith.bmi)
if (miller.bmi > smith.bmi) {
    console.log('Mark Miller has greater bmi');
}
else if (miller.bmi < smith.bmi) {
    console.log('Jhon Smithhas greater bmi');
}
*/
//CHALLENGE //
function calctip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;

    }
    else { return bill * 0.20; }
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calctip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}
console.log(bills, tips, totals);







