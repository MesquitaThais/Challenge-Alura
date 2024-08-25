//let decodificador__titulo = document.querySelector ('h1');
//decodificador__titulo.innerHTML = 'Desafie seus amigos: decifre mensagens secretas!';

//let paragrafo__decodificador = document.querySelector ('p');
//paragrafo__decodificador.innerHTML = 'Descubra um novo jeito de se comunicar! Transforme suas mensagens em códigos misteriosos e desafie seus amigos a decifrá-los';

function criptografarTexto() {
    console.log('O botão foi clicado!')
    // Obtém o texto digitado no input
    let inputText = document.getElementById('inputText').value;

    // Variável para armazenar o texto criptografado
    let encryptedText = '';

    // Itera sobre cada caractere no inputText
    for (let i = 0; i < inputText.length; i++) {
        let currentChar = inputText[i];

        // Verifica cada caractere e faz a substituição correspondente
        if (currentChar === 'e') {
            encryptedText += 'enter';
        } else if (currentChar === 'i') {
            encryptedText += 'imes';
        } else if (currentChar === 'a') {
            encryptedText += 'ai';
        } else if (currentChar === 'o') {
            encryptedText += 'ober';
        } else if (currentChar === 'u') {
            encryptedText += 'ufat';
        } else {
            // Se o caractere não precisar ser substituído, mantém o original
            encryptedText += currentChar;
        }
    }

    // Exibe o texto criptografado no console (ou na página)
    console.log('Texto criptografado:', encryptedText);

    // Exibe a mensagem criptografada na área de saída
    exibirMensagem(encryptedText);
}

// Função para exibir a mensagem na área de saída
function exibirMensagem(message) {
    document.getElementById('outputText').innerText = message;
}

// Exibe o texto criptografado em um alert
alert('Texto criptografado: ' + encryptedText);

function descriptografarTexto() {
    console.log('O botão foi clicado!')
    // Obtém o texto digitado no input
    let inputText = document.getElementById('inputText').value;

     // Substitui as palavras-código pelas letras originais
     let decryptedText = inputText
     .replace(/enter/g, 'e')
     .replace(/imes/g, 'i')
     .replace(/ai/g, 'a')
     .replace(/ober/g, 'o')
     .replace(/ufat/g, 'u');

 console.log('Texto descriptografado:', decryptedText);
 exibirMensagem(decryptedText);
}

// Função para exibir a mensagem na área de saída
function exibirMensagem(message) {
 document.getElementById('outputText').innerText = message;
}

// Exibe o texto criptografado em um alert
alert('Texto descriptografado: ' + decryptedText);

function copiarTexto() {
    // Get the text field
    var copyText = document.getElementById("outputText");

    console.log('Texto copiado:', copyText.innerText);
  
     
  
    navigator.clipboard.writeText(copyText.innerText);
  
    // Alert the copied text
    //alert("Copie o texto: " + copyText.value);
  }