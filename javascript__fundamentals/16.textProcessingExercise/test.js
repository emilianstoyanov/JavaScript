function camelPad(str){ return str
    // Look for long acronyms and filter out the last letter
    .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2').replace(/([a-z\d])([A-Z])/g, '$1 $2').replace(/([a-zA-Z])(\d)/g, '$1 $2').replace(/^./, function(str){ return str.toUpperCase(); }).trim();

    // Look for lower-case letters followed by upper-case letters


    // Look for lower-case letters followed by numbers

    // Remove any white space left around the word


}




camelPad('EYDLessThan5Days')



// document.body.appendChild(document.createElement('br'));
// document.body.appendChild(document.createTextNode(camelPad("LOLAllDayFrom10To9")));
// document.body.appendChild(document.createElement('br'));
// document.body.appendChild(document.createTextNode(camelPad("ILikeToStayUpTil9O'clock")));
// document.body.appendChild(document.createElement('br'));
// document.body.appendChild(document.createTextNode(camelPad("WhatRYouDoing?")));
// document.body.appendChild(document.createElement('br'));
// document.body.appendChild(document.createTextNode(camelPad("ABC")));
// document.body.appendChild(document.createElement('br'));
// document.body.appendChild(document.createTextNode(camelPad("ABCDEF")));