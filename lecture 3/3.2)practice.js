//prompt the user to enter their full name.Generate a username for them based on the input.
//Start username with @,followed by their full name ending with the fullname length.
let fullName = prompt("Enter your full name:");
let userName = "@";
fullName = fullName.replace(" ", ""); // Remove any leading or trailing spaces
len = fullName.length;
fullName = userName.concat(fullName);
userName = fullName.concat(len);
console.log("Your username is: ", userName.toLowerCase());
