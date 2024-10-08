
function cifradoCesar(texto, desplazamiento) {//this function are similar to getelementbyid
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {//
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let code = texto.charCodeAt(i);
            if ((code >= 65) && (code <= 90))
                char = String.fromCharCode(((code - 65 + desplazamiento) % 26) + 65);
            else if ((code >= 97) && (code <= 122))
                char = String.fromCharCode(((code - 97 + desplazamiento) % 26) + 97);
        }
        resultado += char;
    }
    return resultado;
}

function encryptText() {
    var img = document.getElementById("pic");//we GET the element my_pictures by id 
    img.src = "img/Lovepik_com-380494303-cartoon-cyberpunk-game-movie-character-portrait-character-modeling-data-model-characters.png";//use this route for change the pic 
    let inputText = document.getElementById('inputText').value;
    let shift = 3; // Desplazamiento fijo de 3, puedes ajustarlo según sea necesario
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = cifradoCesar(inputText.toLowerCase().replace(/[áéíóú]/g, match => ({ 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' })[match]), shift);
}

function decryptText() {
    var img = document.getElementById("pic");
    img.src = "img/male.png";//return to defaul picture
    let inputText = document.getElementById('outputText').value;
    let shift = 3; // Desplazamiento fijo de 3, puedes ajustarlo según sea necesario
    document.getElementById('inputText').value;
    document.getElementById('outputText').value = cifradoCesar(inputText, -shift);
}

