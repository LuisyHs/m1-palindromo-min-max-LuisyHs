function isPalindrome(str){
    str = str.toUpperCase();
    let variavelControle = parseInt(str.length/2);
    let contador = 0;
    let contraPeso = 1;
    let verify = true;


    while(contador < (variavelControle)){
        if(str[contador]==" "){
            contador++;
            contraPeso--;
        }
        if(str[str.length-(contador+contraPeso)]==" "){
            contraPeso++;
        }

        if(str[contador]==str[str.length-(contador+contraPeso)]){
            verify=true;
        }else{
            verify=false;
        }
        contador++;
    }
    return verify;
}
let teste = [1,2];
console.log(teste.length)
function arrayMaxMin(arr){
    
}
