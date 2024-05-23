/*Q 30
Hello Admin
Make an array of five or more user names,including the name "admin" imagine you are writting a code
that will print a greeting to each user after they log in to a website.Loop through the array
and print greeting to  each other*/
// if user is admin print a special greeting,such as hello Admin. ould you like to see status report
var userNames = ["Admin", "shabana", "Ayesha", "Muzammil"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",Thank you for login in again"));
    }
});
