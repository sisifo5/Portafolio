function verifyTrys() {//this function compares if the try are true and equal than secret number value

    var img = document.getElementById("pic");//we GET the element my_pictures by id 
    img.src = "img/Lovepik_com-380494303-cartoon-cyberpunk-game-movie-character-portrait-character-modeling-data-model-characters.png";//use this route for change the pic 
}


function again(){// return to default settings and delete our data
    var img = document.getElementById("pic");
    img.src = "img/male.png";//return to defaul picture

    //over wirte the values and restart the pseudo game
}