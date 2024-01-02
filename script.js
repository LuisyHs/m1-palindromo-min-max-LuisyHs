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


function arrayMaxMin(arr){
    let maiorValor = arr[0];
    let menorValor;
    let contador = 1;
    let resultado = [];

    if(arr[contador] > maiorValor){
        menorValor = maiorValor;
        maiorValor = arr[contador];
        contador++;
    }else{
        menorValor = arr[contador];
        contador++;
    }

    while(contador < arr.length){
        if (arr[contador] > maiorValor){
            maiorValor = arr[contador];
        }else if (arr[contador] < menorValor ){
            menorValor = arr[contador];
        }
        contador++;
    }

    resultado.unshift(maiorValor);
    resultado.unshift(menorValor);
    
    return resultado;
}
