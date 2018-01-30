'use strict';
console.log("Hello!");


//document form submission
document.madlibs.onsubmit = processForm;

//document the clearing of the form
document.madlibs.onreset = clearForm;

var submission = document.getElementById("submission");
var myMsg = document.getElementById("myMsg");

function processForm() {
    console.log("Submitted!");

    var name = document.madlibs.name.value;
    var soft = document.madlibs.soft.value;
    var adjective = document.madlibs.adjective.value;
    var positive = document.madlibs.positive.value;

    myMsg.innerHTML = "Hi" + name + "You are as kind as a" + adjective + soft + "and just as" + positive + "too! You are awesome!"

    return false;
}
