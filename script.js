//Lists all of the links which can be generated

var links = ["sf.html","cn.html","aw.html"];

//The Random Page function

function randompage(){
    // gets a random number between 0 and the number of pages
    var randIdx = Math.random() * links.length;
    // round the number so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    //go to the randomly generated page
    window.location= links[randIdx];
};