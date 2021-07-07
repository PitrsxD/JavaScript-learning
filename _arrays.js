/*"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"*/

/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here
rainbow.splice(2,1,"Yellow","Green"); // will add
rainbow.push("Purple"); //will add
rainbow.pop() //will delete
rainbow.length()
console.log(rainbow)



var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(arrayInstance) {
    if (arrayInstance.length >= 7)
        return true; // true is a boolean value. Do not return a string "true"
    else
        return false; // false is also a boolean value. Do not return a string "false"
}
console.log(hasEnoughPlayers(team));
