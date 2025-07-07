alert// var user = prompt("Username: ");
// var tweet = prompt("What's on your mind? (max 280 characters)");
// alert(user + " wrote: " + tweet.slice(0,280) + " (You typed " + tweet.length + " out of 280 characters)");

// var name = prompt("What is your name?");
// var nameUpper = name.toUpperCase().slice(0,1);
// var nameLower = name.toLowerCase().slice(1,name.length);
// alert("Hello, " + nameUpper + nameLower);

// var dogAge = prompt("How old is your dog?");
// var humanAge = ((dogAge - 2) * 4) + 21;
// alert("Your dog is " + humanAge + " years old in human years");
window.alert("Let's see how much time you have until you are 90 years old.");
var age = window.prompt("What's your age?");
function lifeInWeeks(age) {   
  var daysLeft = (90 * 365) - (age * 365);
  var weeksLeft = (90 * 52) - (age * 52);
  var monthsLeft = (90 * 12) - (age * 12);
  
  window.alert("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");
}

lifeInWeeks(age);
