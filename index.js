var user = prompt("Username: ");
var tweet = prompt("What's on your mind? (max 280 characters)");
alert(user + " wrote: " + tweet.slice(0,280) + " (You typed " + tweet.length + " out of 280 characters)");