

// module.exports = "Hello World";  //what exports does is it sends the data of this file to the const date we've declared and displayes it onto the console


module.exports.getDate = getDate;
// we're not adding () because if it add it here then it will be activating it here and we need the value somewhere else
// we want this to be determined by app.js 
// as we know that module is an javascript object what module.export does is it bounds the object to only single function 
// what if we have multiple function then in order to do that we can do  module.exports.getDate = getDate what this does is it bounds the .getDate to the function getDate

function getDate()
{
    var today = new Date();
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    
    var day = today.toLocaleDateString("en-US",options);
    return day;
}

// we created a seprate file so that we can remove all the clutter from the app.js file 
