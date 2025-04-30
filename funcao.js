//Sintaxe da função
function nome(/*argumentos, parâmetros*/) {//são entradas de dados para a função utilizar
    //bloco de código/ lógica
}

//executar, chamando pelo nome e passa os parâmetros se houver, se não fica vazio '()'
nome()

//1- somar dois números
function somarDoisNumeros(n1, n2) {
    //let n1 = 50;
    //let n2 = 70;

    let resultado = n1 + n2;
    console.log(resultado) // 120

    //código é interrompido após o return, se houver algo abaixo, não será executado
    return resultado; 
}
//console.log(somarDoisNumeros())

//Os parâmetros/argumentos 
somarDoisNumeros(20, 50) //undefined, pois não tem parâmetros na função
somarDoisNumeros(100, 400) //500

