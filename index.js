var yourName = prompt("What is your name?");
var message = prompt("Hey " + yourName + " tell me a little about yourself: ");
alert("You have written " + message.length + " characters, you have " + (140 - message.length) + " characters left.");