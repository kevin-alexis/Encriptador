/*Close advise*/ 
const closeAdvise = document.querySelector(".close-advise");
const overlay = document.querySelector(".overlay")

/*Close advise*/ 
closeAdvise.addEventListener("click", closeAd);

function closeAd(){
    overlay.classList.remove("active")
}


/*Encript*/

const textarea = document.getElementById("textarea");
const btnEncrypt = document.querySelector(".btn-encrypt");
const textContainer = document.querySelector(".TextOut-container");
let img = document.querySelector(".TextNotFound");
let newText = "";
let btnCopy;
let content;
let idTextResult = 0;

btnEncrypt.addEventListener("click", encrypt);

function encrypt() {
    let originalText = textarea.value;
    
    if(checkRequeriments(originalText) === true){   
        for(let i=0; i<originalText.length; i++){

            switch(originalText[i]){
                case "e":{
                    let e = originalText[i].replace("e", "enter")
                    newText += e;
                    break;
                }
                case "i":{
                    let e = originalText[i].replace("i", "imes")
                    newText += e;
                    break;
                }
                case "a":{
                    let e = originalText[i].replace("a", "ai")
                    newText += e;
                    break;
                }
                case "o":{
                    let e = originalText[i].replace("o", "ober")
                    newText += e;
                    break;
                }
                case "u":{
                    let e = originalText[i].replace("u", "ufat")
                    newText += e;
                    break;
                }
                case " ":{
                    let space = originalText[i].replace(" ", " ")
                    newText += space;
                    break;
                }
                default:{
                    let defaultValue = originalText[i];
                    newText += defaultValue;
                    break;
                }
            }
        }
        img.remove();
        textContainer.innerHTML=`
        <div class="TextOut">
            <p class="TextResult">${newText}</p>
            <div>
                <button class="copy">Copy</button>
                <button class="delete">Delete</button>
            </div>
        </div>
        `;
        btnCopy = document.querySelector(".copy");
        btnCopy.addEventListener("click", copyText);

        btnDelete = document.querySelector(".delete");
        btnDelete.addEventListener("click", deleteText);
    }

    newText = "";
}

function checkRequeriments(text) {
    let lowerText = text.toLowerCase();

    if(text!="" && text!=" " && text!= null && text!= undefined){
        if(hasSpecialChar(text)==false){
            if(text===lowerText){
                let str = removeAccents(text);
                if(text===str){
                    return true;
                }
                else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }    
    }else{
        return false;
    }
}

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

function hasSpecialChar(text) {
    const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return regex.test(text);
}

/*Desencript*/

const btnDecrypt = document.querySelector(".btn-decrypt");
btnDecrypt.addEventListener("click", decrypt);

function decrypt() {
    let originalText = textarea.value;
    
    if(checkRequeriments(originalText) === true){
        newText = originalText.replaceAll("enter", "e")
        newText = newText.replaceAll("imes", "i")
        newText = newText.replaceAll("ai", "a",)
        newText = newText.replaceAll("ober", "o")
        newText = newText.replaceAll("ufat", "u")
    
        img.remove();
        textContainer.innerHTML=`
        <div class="TextOut">
            <p class="TextResult">${newText}</p>
            <div>
                <button class="copy">Copy</button>
                <button class="delete">Delete</button>
            </p>
        </div>
        `;
        btnCopy = document.querySelector(".copy");
        btnCopy.addEventListener("click", copyText);

        btnDelete = document.querySelector(".delete");
        btnDelete.addEventListener("click", deleteText);
    }
    newText = "";
}
    
/*Copy text*/

function copyText() {
    const content = document.querySelector('.TextResult').textContent;
    const textarea = document.createElement('textarea');
    textarea.value = content;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}


/*Delete Message*/

function deleteText(){
    const element = document.querySelector('.TextOut')
    element.remove();

    textContainer.innerHTML = `
    <div class="TextNotFound active">
                <img src="./assets/logos/Muñeco.svg" alt="">
                <h2 class="TextResult">Ningún mensaje fue encontrado</h2>
                <p>Ingresa el texto que desees encriptar o desencriptar</p>
            </div>
    `;
}

